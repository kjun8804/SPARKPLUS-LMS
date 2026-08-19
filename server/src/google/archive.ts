import { GoogleAuth } from "google-auth-library";
import type { AppConfig } from "../config.js";
import type { DatabasePool } from "../database/pool.js";

type Table = { sheet: string; values: Array<Array<string | number | boolean | null>> };

function cell(value: unknown) {
  if (value === null || value === undefined) return "";
  if (value instanceof Date) return value.toISOString();
  if (typeof value === "object") return JSON.stringify(value);
  return String(value);
}

export async function buildArchiveTables(pool: DatabasePool): Promise<Table[]> {
  const [users, organizations, audits, completions] = await Promise.all([
    pool.query(`SELECT u.employee_number AS "employeeNumber", u.name, u.email,
      COALESCE(o.name, '') AS "organizationName", COALESCE(u.position, '') AS position,
      u.role, u.status, u.last_login_at AS "lastLoginAt", u.created_at AS "createdAt", u.updated_at AS "updatedAt"
      FROM users u LEFT JOIN organizations o ON o.id=u.organization_id WHERE u.status<>'DELETED' ORDER BY u.name`),
    pool.query(`WITH RECURSIVE tree AS (
      SELECT id,name,parent_id,depth,status,name::text AS full_path,created_at,updated_at FROM organizations WHERE parent_id IS NULL
      UNION ALL SELECT o.id,o.name,o.parent_id,o.depth,o.status,(tree.full_path || ' > ' || o.name),o.created_at,o.updated_at
      FROM organizations o JOIN tree ON o.parent_id=tree.id)
      SELECT name,full_path AS "fullPath",depth,status,created_at AS "createdAt",updated_at AS "updatedAt" FROM tree ORDER BY full_path`),
    pool.query(`SELECT a.action,a.target_type AS "targetType", COALESCE(u.email,'SYSTEM') AS actor,
      a.before_data AS "beforeData",a.after_data AS "afterData",a.created_at AS "createdAt"
      FROM audit_logs a LEFT JOIN users u ON u.id=a.actor_user_id ORDER BY a.created_at DESC LIMIT 2000`),
    pool.query(`SELECT u.employee_number AS "employeeNumber",u.name,c.title,e.required,e.completed_at AS "completedAt",e.progress,e.status,
      EXISTS(SELECT 1 FROM quiz_attempts qa WHERE qa.enrollment_id=e.id) AS "quizCompleted"
      FROM enrollments e JOIN users u ON u.id=e.user_id JOIN courses c ON c.id=e.course_id
      WHERE e.status='COMPLETED' ORDER BY e.completed_at DESC`),
  ]);
  return [
    { sheet: "사용자", values: [["사번","이름","이메일","조직","직책","권한","상태","최근 로그인","등록일","수정일"],
      ...users.rows.map((row) => [row.employeeNumber,row.name,row.email,row.organizationName,row.position,row.role,row.status,cell(row.lastLoginAt),cell(row.createdAt),cell(row.updatedAt)])] },
    { sheet: "조직", values: [["조직명","전체 경로","단계","상태","등록일","수정일"],
      ...organizations.rows.map((row) => [row.name,row.fullPath,row.depth,row.status,cell(row.createdAt),cell(row.updatedAt)])] },
    { sheet: "수료이력", values: [["사번","이름","과정명","배정 유형","수료일","진도율","퀴즈 완료","수료 상태"],
      ...completions.rows.map((row) => [row.employeeNumber,row.name,row.title,row.required?"필수":"선택",cell(row.completedAt),row.progress,row.quizCompleted?"완료":"해당 없음",row.status])] },
    { sheet: "변경이력", values: [["작업","대상","작업자","변경 전","변경 후","일시"],
      ...audits.rows.map((row) => [row.action,row.targetType,row.actor,cell(row.beforeData),cell(row.afterData),cell(row.createdAt)])] },
  ];
}

function parseCredentials(raw: string) {
  const credentials = JSON.parse(raw);
  if (!credentials.client_email || !credentials.private_key) throw new Error("GOOGLE_SERVICE_ACCOUNT_INVALID");
  return credentials;
}

function simpleCertificatePdf(lines: string[]) {
  const safe=lines.map((line)=>line.replace(/[^\x20-\x7E]/g,"?").replace(/[()\\]/g,(value)=>`\\${value}`));
  const text=safe.map((line,index)=>`BT /F1 ${index===0?22:12} Tf 72 ${720-index*42} Td (${line}) Tj ET`).join("\n");
  const objects=[`<< /Type /Catalog /Pages 2 0 R >>`,`<< /Type /Pages /Kids [3 0 R] /Count 1 >>`,`<< /Type /Page /Parent 2 0 R /MediaBox [0 0 595 842] /Resources << /Font << /F1 5 0 R >> >> /Contents 4 0 R >>`,`<< /Length ${text.length} >>\nstream\n${text}\nendstream`,`<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>`];
  let pdf="%PDF-1.4\n",offsets=[0];for(let i=0;i<objects.length;i++){offsets.push(pdf.length);pdf+=`${i+1} 0 obj\n${objects[i]}\nendobj\n`;}const xref=pdf.length;pdf+=`xref\n0 ${objects.length+1}\n0000000000 65535 f \n${offsets.slice(1).map((offset)=>String(offset).padStart(10,"0")+" 00000 n \n").join("")}trailer << /Size ${objects.length+1} /Root 1 0 R >>\nstartxref\n${xref}\n%%EOF`;return Buffer.from(pdf,"utf8");
}

export async function uploadCertificate(config:AppConfig, details:{certificateNumber:string;name:string;email:string;title:string;issuedAt:string}) {
  if(!config.GOOGLE_SERVICE_ACCOUNT_JSON||!config.GOOGLE_DRIVE_ROOT_FOLDER_ID)return null;
  const auth=new GoogleAuth({credentials:parseCredentials(config.GOOGLE_SERVICE_ACCOUNT_JSON),scopes:["https://www.googleapis.com/auth/drive"]});const client=await auth.getClient();
  const folderQuery=encodeURIComponent(`'${config.GOOGLE_DRIVE_ROOT_FOLDER_ID}' in parents and name='3. 수료증' and mimeType='application/vnd.google-apps.folder' and trashed=false`);
  const found=await client.request<any>({url:`https://www.googleapis.com/drive/v3/files?q=${folderQuery}&fields=files(id)&supportsAllDrives=true&includeItemsFromAllDrives=true`});let folderId=found.data.files?.[0]?.id;
  if(!folderId){const created=await client.request<any>({method:"POST",url:"https://www.googleapis.com/drive/v3/files?supportsAllDrives=true",data:{name:"3. 수료증",mimeType:"application/vnd.google-apps.folder",parents:[config.GOOGLE_DRIVE_ROOT_FOLDER_ID]}});folderId=created.data.id;}
  const pdf=simpleCertificatePdf(["SPARKPLUS LMS CERTIFICATE",`Certificate: ${details.certificateNumber}`,`Learner: ${details.name} <${details.email}>`,`Course: ${details.title}`,`Issued: ${details.issuedAt}`]);const boundary=`sparkplus_${Date.now()}`;
  const metadata=JSON.stringify({name:`${details.certificateNumber}.pdf`,mimeType:"application/pdf",parents:[folderId]});const body=Buffer.from(`--${boundary}\r\nContent-Type: application/json; charset=UTF-8\r\n\r\n${metadata}\r\n--${boundary}\r\nContent-Type: application/pdf\r\nContent-Transfer-Encoding: base64\r\n\r\n${pdf.toString("base64")}\r\n--${boundary}--`);
  const uploaded=await client.request<any>({method:"POST",url:"https://www.googleapis.com/upload/drive/v3/files?uploadType=multipart&supportsAllDrives=true&fields=id",headers:{"Content-Type":`multipart/related; boundary=${boundary}`},data:body});return uploaded.data.id as string;
}

export async function syncGoogleArchive(config: AppConfig, pool: DatabasePool) {
  if (!config.GOOGLE_SERVICE_ACCOUNT_JSON || !config.GOOGLE_SHEET_ID || !config.GOOGLE_DRIVE_ROOT_FOLDER_ID) {
    throw new Error("GOOGLE_ARCHIVE_NOT_CONFIGURED");
  }
  const auth = new GoogleAuth({ credentials: parseCredentials(config.GOOGLE_SERVICE_ACCOUNT_JSON), scopes: [
    "https://www.googleapis.com/auth/spreadsheets", "https://www.googleapis.com/auth/drive",
  ] });
  const client = await auth.getClient();
  const spreadsheetId = config.GOOGLE_SHEET_ID;
  const metadata = await client.request<any>({ url: `https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}?fields=sheets.properties.title` });
  const existing = new Set((metadata.data.sheets || []).map((sheet: any) => sheet.properties.title));
  const required = ["사용자","조직","수료이력","변경이력","동기화기록"];
  const missing = required.filter((name) => !existing.has(name));
  if (missing.length) await client.request({ method: "POST", url: `https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}:batchUpdate`,
    data: { requests: missing.map((title) => ({ addSheet: { properties: { title } } })) } });
  const tables = await buildArchiveTables(pool);
  const syncedAt = new Date().toISOString();
  const usersTable = tables.find((table) => table.sheet === "사용자")!;
  const organizationsTable = tables.find((table) => table.sheet === "조직")!;
  const changesTable = tables.find((table) => table.sheet === "변경이력")!;
  for (const table of tables) {
    const range = encodeURIComponent(`'${table.sheet}'!A:Z`);
    await client.request({ method: "POST", url: `https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}/values/${range}:clear` });
    const start = encodeURIComponent(`'${table.sheet}'!A1`);
    await client.request({ method: "PUT", url: `https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}/values/${start}?valueInputOption=RAW`, data: { values: table.values } });
  }
  const syncHeader = encodeURIComponent(`'동기화기록'!A1:E1`);
  await client.request({ method: "PUT", url: `https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}/values/${syncHeader}?valueInputOption=RAW`,
    data: { values: [["동기화 일시","상태","사용자 수","조직 수","변경이력 수"]] } });
  const syncRange = encodeURIComponent(`'동기화기록'!A:E`);
  await client.request({ method: "POST", url: `https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}/values/${syncRange}:append?valueInputOption=RAW&insertDataOption=INSERT_ROWS`,
    data: { values: [[syncedAt,"SUCCESS",Math.max(0,usersTable.values.length-1),Math.max(0,organizationsTable.values.length-1),Math.max(0,changesTable.values.length-1)]] } });
  const drive = await client.request<any>({ url: `https://www.googleapis.com/drive/v3/files/${encodeURIComponent(config.GOOGLE_DRIVE_ROOT_FOLDER_ID)}?fields=id,name,mimeType&supportsAllDrives=true` });
  return { syncedAt, spreadsheetId, driveFolder: drive.data, counts: {
    users: Math.max(0,usersTable.values.length-1), organizations: Math.max(0,organizationsTable.values.length-1), changes: Math.max(0,changesTable.values.length-1),
  } };
}
