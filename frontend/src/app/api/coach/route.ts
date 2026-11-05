import { NextResponse } from "next/server";
import { COACH_CHEERS } from "@/lib/data";

export const maxDuration = 15;

interface Body {
  idea?: string;
  question?: string;
  answer?: string;
  next?: string | null;
}

const SYSTEM = `너는 청소년 아이디어 기획 코치 "teensparkai"야.
- 학생의 답변을 평가하거나 정답을 알려주지 말고, 답변에서 좋은 점 하나를 구체적으로 짚어 격려해.
- 친근한 반말로 1~2문장, 80자 이내로만 답해.
- 다음 질문은 앱이 따로 보여주니 질문을 새로 만들지 마.`;

function fallback() {
  return COACH_CHEERS[Math.floor(Math.random() * COACH_CHEERS.length)];
}

export async function POST(req: Request) {
  let body: Body;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ reply: fallback(), source: "fallback" });
  }

  const answer = (body.answer ?? "").slice(0, 1000);
  const key = process.env.ANTHROPIC_API_KEY;
  if (!key || !answer) return NextResponse.json({ reply: fallback(), source: "fallback" });

  try {
    const res = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        "x-api-key": key,
        "anthropic-version": "2023-06-01",
      },
      body: JSON.stringify({
        model: process.env.ANTHROPIC_MODEL || "claude-haiku-5-5",
        max_tokens: 200,
        system: SYSTEM,
        messages: [
          {
            role: "user",
            content: `아이디어: ${(body.idea ?? "").slice(0, 200)}\n질문: ${(body.question ?? "").slice(0, 200)}\n학생의 답변: ${answer}`,
          },
        ],
      }),
      signal: AbortSignal.timeout(12000),
    });
    if (!res.ok) throw new Error(`anthropic ${res.status}`);
    const data = (await res.json()) as { content?: { type: string; text?: string }[] };
    const reply = data.content?.find((c) => c.type === "text")?.text?.trim();
    return NextResponse.json({ reply: reply || fallback(), source: reply ? "ai" : "fallback" });
  } catch (e) {
    console.error("[coach]", e);
    return NextResponse.json({ reply: fallback(), source: "fallback" });
  }
}
