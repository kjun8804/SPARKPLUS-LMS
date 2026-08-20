import { z } from "zod";

export const generatedQuizSchema = z.object({
  question: z.string().trim().min(1),
  options: z.array(z.string().trim().min(1)).length(4),
  correctOption: z.number().int().min(0).max(3),
  explanation: z.string().trim().min(1),
  evidenceTimestamp: z.string().trim().min(1),
});

export type GeneratedQuiz = z.infer<typeof generatedQuizSchema>;

export function isPublicYouTubeUrl(value: string) {
  try {
    const url = new URL(value);
    const host = url.hostname.toLowerCase().replace(/^www\./, "");
    if (url.protocol !== "https:" || !["youtube.com", "youtu.be", "m.youtube.com"].includes(host)) return false;
    const videoId = host === "youtu.be" ? url.pathname.split("/").filter(Boolean)[0] : url.searchParams.get("v");
    return typeof videoId === "string" && /^[A-Za-z0-9_-]{11}$/.test(videoId);
  } catch {
    return false;
  }
}

export async function generateQuizFromYouTube(input: {
  apiKey: string;
  youtubeUrl: string;
  lessonTitle?: string;
  fetcher?: typeof fetch;
}): Promise<GeneratedQuiz> {
  const fetcher = input.fetcher ?? fetch;
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 55_000);
  try {
    const response = await fetcher("https://generativelanguage.googleapis.com/v1beta/interactions", {
      method: "POST",
      headers: { "Content-Type": "application/json", "x-goog-api-key": input.apiKey },
      signal: controller.signal,
      body: JSON.stringify({
        model: "gemini-3.6-flash",
        input: [
          {
            type: "text",
            text: `공개 YouTube 교육 영상을 분석해 한국어 객관식 퀴즈를 정확히 1개 만드세요.\n차시명: ${input.lessonTitle || "미지정"}\n영상에서 명확히 확인되는 핵심 내용만 묻고, 선택지는 정확히 4개로 작성하세요. 정답은 하나만 가능해야 합니다. explanation에는 정답인 이유를 간결하게 작성하고 evidenceTimestamp에는 근거가 나오는 대표 시각을 MM:SS 또는 HH:MM:SS로 작성하세요. 영상에 근거가 부족하면 추측하지 마세요.`,
          },
          { type: "video", uri: input.youtubeUrl },
        ],
        response_format: {
          type: "text",
          mime_type: "application/json",
          schema: {
            type: "object",
            properties: {
              question: { type: "string" },
              options: { type: "array", items: { type: "string" }, minItems: 4, maxItems: 4 },
              correctOption: { type: "integer", minimum: 0, maximum: 3 },
              explanation: { type: "string" },
              evidenceTimestamp: { type: "string" },
            },
            required: ["question", "options", "correctOption", "explanation", "evidenceTimestamp"],
          },
        },
      }),
    });
    const payload = await response.json().catch(() => null) as any;
    if (!response.ok) {
      const error = new Error(payload?.error?.message || `Gemini request failed (${response.status})`);
      (error as any).status = response.status;
      throw error;
    }
    const outputText = payload?.output_text ?? payload?.outputs?.at?.(-1)?.text ?? payload?.steps?.at?.(-1)?.content?.find?.((item: any) => item.type === "text")?.text;
    if (typeof outputText !== "string") throw new Error("Gemini response did not contain output_text");
    return generatedQuizSchema.parse(JSON.parse(outputText));
  } finally {
    clearTimeout(timeout);
  }
}
