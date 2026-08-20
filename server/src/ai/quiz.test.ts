import { describe, expect, it, vi } from "vitest";
import { generateQuizFromYouTube, isPublicYouTubeUrl } from "./quiz.js";

describe("YouTube AI quiz", () => {
  it("accepts only HTTPS YouTube URLs", () => {
    expect(isPublicYouTubeUrl("https://www.youtube.com/watch?v=abc")).toBe(true);
    expect(isPublicYouTubeUrl("https://youtu.be/abc")).toBe(true);
    expect(isPublicYouTubeUrl("https://example.com/watch?v=abc")).toBe(false);
    expect(isPublicYouTubeUrl("not-a-url")).toBe(false);
  });

  it("parses one four-option structured quiz", async () => {
    const quiz = { question:"핵심 개념은?", options:["A","B","C","D"], correctOption:1, explanation:"B가 정답입니다.", evidenceTimestamp:"01:20" };
    const fetcher = vi.fn().mockResolvedValue(new Response(JSON.stringify({ output_text:JSON.stringify(quiz) }), { status:200, headers:{"Content-Type":"application/json"} }));
    await expect(generateQuizFromYouTube({ apiKey:"test-key", youtubeUrl:"https://youtu.be/abc", fetcher })).resolves.toEqual(quiz);
  });

  it("rejects malformed model output", async () => {
    const fetcher = vi.fn().mockResolvedValue(new Response(JSON.stringify({ output_text:JSON.stringify({ question:"문제", options:["A","B"], correctOption:0, explanation:"설명", evidenceTimestamp:"00:10" }) }), { status:200, headers:{"Content-Type":"application/json"} }));
    await expect(generateQuizFromYouTube({ apiKey:"test-key", youtubeUrl:"https://youtu.be/abc", fetcher })).rejects.toThrow();
  });
});
