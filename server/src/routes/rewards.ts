import { Router } from "express";
import { z } from "zod";
import { requireRole, requireUser } from "../auth/middleware.js";
import type { DatabasePool } from "../database/pool.js";

export type RewardActivity = "LESSON_COMPLETE" | "COURSE_COMPLETE" | "QUIZ_COMPLETE" | "SURVEY_SUBMIT";

export async function awardReward(pool: DatabasePool, input: {
  userId: string; enrollmentId?: string | null; activityType: RewardActivity; sourceKey: string; description: string;
}) {
  const awarded = await pool.query(`INSERT INTO reward_transactions(user_id,enrollment_id,activity_type,source_key,points,description)
    SELECT $1,$2,$3,$4,points,$5 FROM reward_rules WHERE activity_type=$3 AND enabled=true
    ON CONFLICT(source_key) DO NOTHING RETURNING id,points`,
  [input.userId,input.enrollmentId || null,input.activityType,input.sourceKey,input.description]);
  if (awarded.rowCount) await evaluateBadges(pool,input.userId);
  return awarded.rows[0] || null;
}

async function evaluateBadges(pool: DatabasePool, userId: string) {
  await pool.query(`WITH metrics AS (
      SELECT COALESCE(SUM(points),0)::int AS points_total,
        COUNT(*) FILTER(WHERE activity_type='COURSE_COMPLETE')::int AS course_complete,
        COUNT(*) FILTER(WHERE activity_type='QUIZ_COMPLETE')::int AS quiz_complete,
        COUNT(*) FILTER(WHERE activity_type='LESSON_COMPLETE')::int AS lesson_complete,
        COUNT(*) FILTER(WHERE activity_type='SURVEY_SUBMIT')::int AS survey_submit
      FROM reward_transactions WHERE user_id=$1
    ), eligible AS (
      SELECT br.id FROM badge_rules br CROSS JOIN metrics m WHERE br.enabled=true AND
      CASE br.metric WHEN 'POINTS_TOTAL' THEN m.points_total WHEN 'COURSE_COMPLETE' THEN m.course_complete
        WHEN 'QUIZ_COMPLETE' THEN m.quiz_complete WHEN 'LESSON_COMPLETE' THEN m.lesson_complete
        WHEN 'SURVEY_SUBMIT' THEN m.survey_submit ELSE 0 END >= br.threshold
    ) INSERT INTO user_badges(user_id,badge_rule_id) SELECT $1,id FROM eligible ON CONFLICT DO NOTHING`,[userId]);
}

const dateRange = z.object({
  start: z.iso.date().optional(), end: z.iso.date().optional(), month: z.string().regex(/^\d{4}-\d{2}$/).optional(),
});

function bounds(query: unknown) {
  const parsed=dateRange.safeParse(query); if(!parsed.success)return null;
  if(parsed.data.month){const start=`${parsed.data.month}-01`;return{start,end:`${parsed.data.month}-01`,month:true};}
  return {start:parsed.data.start || "1970-01-01",end:parsed.data.end || "2999-12-31",month:false};
}

const rankingSql = `WITH totals AS (
  SELECT rt.user_id,COALESCE(SUM(rt.points),0)::int points,
    COUNT(*) FILTER(WHERE rt.activity_type='COURSE_COMPLETE')::int courses
  FROM reward_transactions rt
  WHERE rt.created_at >= $1::date AND rt.created_at < CASE WHEN $3::boolean THEN $2::date+interval '1 month' ELSE $2::date+interval '1 day' END
  GROUP BY rt.user_id
), badge_totals AS (SELECT user_id,COUNT(*)::int badges FROM user_badges GROUP BY user_id)
  SELECT u.id,u.name,COALESCE(o.name,'소속 미지정') dept,t.points,t.courses,COALESCE(bt.badges,0)::int badges,
  RANK() OVER(ORDER BY t.points DESC,u.name)::int rank
  FROM totals t JOIN users u ON u.id=t.user_id LEFT JOIN organizations o ON o.id=u.organization_id LEFT JOIN badge_totals bt ON bt.user_id=u.id
  WHERE u.status='ACTIVE' ORDER BY rank,u.name`;

export function createRewardsRouter(pool: DatabasePool) {
  const router=Router(); router.use(requireUser(pool));
  router.get("/me",async(req,res,next)=>{try{
    const range=bounds(req.query);if(!range)return res.status(400).json({data:null,error:{code:"VALIDATION_ERROR"}});
    const [ranking,transactions,rules,badges,total]=await Promise.all([
      pool.query(rankingSql,[range.start,range.end,range.month]),
      pool.query(`SELECT rt.id,rt.activity_type AS "activityType",rr.label,rt.points,rt.description,rt.created_at AS "createdAt" FROM reward_transactions rt JOIN reward_rules rr ON rr.activity_type=rt.activity_type WHERE rt.user_id=$1 ORDER BY rt.created_at DESC LIMIT 50`,[req.currentUser!.id]),
      pool.query(`SELECT activity_type AS "activityType",label,points FROM reward_rules WHERE enabled=true ORDER BY points`),
      pool.query(`SELECT br.id,br.code,br.name,br.description,br.metric,br.threshold,br.badge_type AS "type",br.tone,ub.awarded_at AS "awardedAt" FROM badge_rules br LEFT JOIN user_badges ub ON ub.badge_rule_id=br.id AND ub.user_id=$1 WHERE br.enabled=true ORDER BY br.created_at`,[req.currentUser!.id]),
      pool.query(`SELECT COALESCE(SUM(points),0)::int points FROM reward_transactions WHERE user_id=$1`,[req.currentUser!.id]),
    ]);
    const me=ranking.rows.find((item)=>item.id===req.currentUser!.id)||{id:req.currentUser!.id,name:req.currentUser!.name,dept:"소속 미지정",points:0,courses:0,badges:0,rank:null};
    res.json({data:{ranking:ranking.rows,me,totalPoints:total.rows[0].points,transactions:transactions.rows,rules:rules.rows,badges:badges.rows},error:null});
  }catch(error){next(error);}});
  return router;
}

const rulePatch=z.object({points:z.number().int().min(0).max(100000),enabled:z.boolean()});
const badgeInput=z.object({name:z.string().trim().min(1).max(100),description:z.string().trim().max(500).default(""),metric:z.enum(["POINTS_TOTAL","COURSE_COMPLETE","QUIZ_COMPLETE","LESSON_COMPLETE","SURVEY_SUBMIT"]),threshold:z.number().int().min(1),type:z.enum(["성취형","랭킹형"]).default("성취형"),tone:z.string().trim().max(20).default("blue"),enabled:z.boolean().default(true)});

export function createAdminRewardsRouter(pool: DatabasePool) {
  const router=Router();router.use(requireUser(pool),requireRole("ADMIN"));
  router.get("/",async(req,res,next)=>{try{
    const range=bounds(req.query);if(!range)return res.status(400).json({data:null,error:{code:"VALIDATION_ERROR"}});
    const [ranking,rules,badges,recent]=await Promise.all([
      pool.query(rankingSql,[range.start,range.end,range.month]),
      pool.query(`SELECT activity_type AS "activityType",label,points,enabled FROM reward_rules ORDER BY points`),
      pool.query(`SELECT br.id,br.code,br.name,br.description,br.metric,br.threshold,br.badge_type AS "type",br.tone,br.enabled,COUNT(ub.id)::int people FROM badge_rules br LEFT JOIN user_badges ub ON ub.badge_rule_id=br.id GROUP BY br.id ORDER BY br.created_at`),
      pool.query(`SELECT rt.id,u.name,rr.label,rt.description,rt.points,rt.created_at AS "createdAt" FROM reward_transactions rt JOIN users u ON u.id=rt.user_id JOIN reward_rules rr ON rr.activity_type=rt.activity_type ORDER BY rt.created_at DESC LIMIT 30`),
    ]);
    res.json({data:{ranking:ranking.rows,rules:rules.rows,badges:badges.rows,recent:recent.rows},error:null});
  }catch(error){next(error);}});
  router.patch("/rules/:activityType",async(req,res,next)=>{const parsed=rulePatch.safeParse(req.body);if(!parsed.success)return res.status(400).json({data:null,error:{code:"VALIDATION_ERROR"}});try{const result=await pool.query(`UPDATE reward_rules SET points=$2,enabled=$3,updated_at=now() WHERE activity_type=$1 RETURNING activity_type AS "activityType",label,points,enabled`,[req.params.activityType,parsed.data.points,parsed.data.enabled]);if(!result.rowCount)return res.status(404).json({data:null,error:{code:"RULE_NOT_FOUND"}});res.json({data:result.rows[0],error:null});}catch(error){next(error);}});
  router.post("/badges",async(req,res,next)=>{const parsed=badgeInput.safeParse(req.body);if(!parsed.success)return res.status(400).json({data:null,error:{code:"VALIDATION_ERROR"}});try{const value=parsed.data;const code=`CUSTOM_${Date.now()}`;const result=await pool.query(`INSERT INTO badge_rules(code,name,description,metric,threshold,badge_type,tone,enabled) VALUES($1,$2,$3,$4,$5,$6,$7,$8) RETURNING id,code,name,description,metric,threshold,badge_type AS "type",tone,enabled`,[code,value.name,value.description,value.metric,value.threshold,value.type,value.tone,value.enabled]);res.status(201).json({data:{...result.rows[0],people:0},error:null});}catch(error){next(error);}});
  router.patch("/badges/:id",async(req,res,next)=>{const parsed=badgeInput.safeParse(req.body);if(!parsed.success)return res.status(400).json({data:null,error:{code:"VALIDATION_ERROR"}});try{const value=parsed.data;const result=await pool.query(`UPDATE badge_rules SET name=$2,description=$3,metric=$4,threshold=$5,badge_type=$6,tone=$7,enabled=$8,updated_at=now() WHERE id=$1 RETURNING id,code,name,description,metric,threshold,badge_type AS "type",tone,enabled`,[req.params.id,value.name,value.description,value.metric,value.threshold,value.type,value.tone,value.enabled]);if(!result.rowCount)return res.status(404).json({data:null,error:{code:"BADGE_NOT_FOUND"}});res.json({data:result.rows[0],error:null});}catch(error){next(error);}});
  return router;
}
