import { TESTS } from "@/app/utils/questions";

export async function POST(req) {
  const body = await req.json().catch(() => null);
  const answers = Array.isArray(body?.answers) ? body.answers : [];

  const keyByQuestionId = new Map(TESTS.awareness.map((q) => [q.id, q.correctOptionId]));

  let correct = 0;
  const results = answers.map((a) => {
    const questionId = String(a?.questionId ?? "");
    const selectedOptionId = a?.optionId != null ? String(a.optionId) : null;
    const correctOptionId = keyByQuestionId.get(questionId) ?? null;
    const isCorrect = Boolean(correctOptionId && selectedOptionId === correctOptionId);
    if (isCorrect) correct += 1;
    return { questionId, selectedOptionId, correctOptionId, isCorrect };
  });

  return Response.json({
    test: "awareness",
    score: correct,
    total: keyByQuestionId.size,
    results,
  });
}

