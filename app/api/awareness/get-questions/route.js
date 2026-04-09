import { TESTS } from "@/app/utils/questions";

export function GET() {
  const questions = TESTS.awareness.map((q) => ({
    id: q.id,
    question: q.question,
    imageUrl: q.imageUrl,
    options: q.options,
  }));

  return Response.json({ test: "awareness", questions });
}

