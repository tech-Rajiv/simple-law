import { TESTS } from "@/app/utils/questions";

const ALLOWED = new Set(["safety", "emotion", "women", "awareness"]);

export function GET(req) {
  const url = new URL(req.url);
  const test = String(url.searchParams.get("test") || "");
  if (!ALLOWED.has(test)) {
    return Response.json(
      { error: "Invalid test. Use one of: safety, emotion, women, awareness." },
      { status: 400 },
    );
  }

  const questions = TESTS[test].map((q) => ({
    id: q.id,
    question: q.question,
    imageUrl: q.imageUrl,
    options: q.options,
  }));

  return Response.json({ test, questions });
}

