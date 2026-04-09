"use client";

import { useEffect, useMemo, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

function classNames(...xs) {
  return xs.filter(Boolean).join(" ");
}

const TITLES = {
  safety: "Safety Test",
  emotion: "Emotion Test",
  women: "Women Issue Test",
  awareness: "Awareness Test",
};

const LEARN_MORE = {
  safety: { href: "/safety", label: "Safety", imageSrc: "/category/learn-safety.webp" },
  emotion: { href: "/learning", label: "Emotion", imageSrc: "/category/learn-emotion.webp" },
  women: { href: "/safety", label: "Women safety", imageSrc: "/category/learn-women.jpg" },
  awareness: { href: "/learning", label: "Awareness", imageSrc: "/category/learn-awareness.webp" },
};

export default function TestRunnerPage() {
  const params = useParams();
  const slug = String(params?.slug || "");
  const router = useRouter();

  const [questions, setQuestions] = useState([]);
  const [loadingQuestions, setLoadingQuestions] = useState(true);
  const [currentIdx, setCurrentIdx] = useState(0);
  const [answersByQuestionId, setAnswersByQuestionId] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);

  const title = TITLES[slug] || "Test";
  const learnMore = LEARN_MORE[slug] || null;

  const resultByQuestionId = useMemo(() => {
    if (!result?.results || !Array.isArray(result.results)) return new Map();
    return new Map(result.results.map((r) => [String(r.questionId), r]));
  }, [result]);

  useEffect(() => {
    let cancelled = false;
    async function load() {
      try {
        setLoadingQuestions(true);
        setError(null);
        setResult(null);
        setCurrentIdx(0);
        setAnswersByQuestionId({});

        const res = await fetch(`/api/${slug}/get-questions`, { cache: "no-store" });
        if (!res.ok) throw new Error(`Failed to load questions (${res.status})`);
        const data = await res.json();
        const qs = Array.isArray(data?.questions) ? data.questions : [];
        if (!cancelled) setQuestions(qs);
      } catch (e) {
        if (!cancelled) setError(e?.message || "Failed to load questions");
      } finally {
        if (!cancelled) setLoadingQuestions(false);
      }
    }
    load();
    return () => {
      cancelled = true;
    };
  }, [slug]);

  const currentQuestion = questions[currentIdx] || null;
  const totalQuestions = questions.length;
  const answeredCount = useMemo(() => {
    const ids = questions.map((q) => q.id);
    let count = 0;
    for (const id of ids) if (answersByQuestionId[id]) count += 1;
    return count;
  }, [answersByQuestionId, questions]);

  function chooseOption(questionId, optionId) {
    setAnswersByQuestionId((prev) => ({ ...prev, [questionId]: optionId }));
  }

  async function submitAnswers(finalAnswersByQuestionId) {
    if (!slug) return;
    if (submitting) return;
    if (result) return;
    setError(null);
    setSubmitting(true);
    try {
      const answers = questions.map((q) => ({
        questionId: q.id,
        optionId: finalAnswersByQuestionId?.[q.id] || null,
      }));
      const res = await fetch(`/api/${slug}/verify-answers`, {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ answers }),
      });
      if (!res.ok) throw new Error(`Verify failed (${res.status})`);
      const data = await res.json();
      setResult(data);
    } catch (e) {
      setError(e?.message || "Failed to submit");
    } finally {
      setSubmitting(false);
    }
  }

  function onBack() {
    const ok = window.confirm("Go back? Your changes/answers will not be saved.");
    if (!ok) return;
    router.push("/");
  }

  function onSelect(optionId) {
    if (!currentQuestion) return;
    if (result) return;

    const questionId = currentQuestion.id;
    const nextAnswers = { ...answersByQuestionId, [questionId]: optionId };
    setAnswersByQuestionId(nextAnswers);

    const isLast = currentIdx >= totalQuestions - 1;
    if (isLast) {
      submitAnswers(nextAnswers);
      return;
    }

    // Advance immediately after selecting an option.
    setCurrentIdx((i) => Math.min(totalQuestions - 1, i + 1));
  }

  return (
    <main className="w-full min-h-dvh">
      <div className="w-full px-4 py-5 min-h-dvh flex flex-col">
        <div className="w-full">
          <div className="relative mx-auto w-full max-w-7xl">
            <button type="button" onClick={onBack} className="btn-primary w-full sm:w-auto">
              ← Back
            </button>
            <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
              <div className="text-sm font-semibold text-[color:var(--text-primary)]">{title}</div>
            </div>

          </div>
        </div>

        <div className="mx-auto mt-6 w-full max-w-7xl flex-1 flex flex-col">
          {error ? (
            <div className="rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-800">
              {error}
            </div>
          ) : null}

          {loadingQuestions ? (
            <div className="mt-6 text-center text-sm text-[color:var(--text-secondary)]">
              Loading questions…
            </div>
          ) : totalQuestions === 0 ? (
            <div className="mt-6 text-center text-sm text-[color:var(--text-secondary)]">
              No questions found.
            </div>
          ) : result ? (
            <div className="w-full flex-1 flex flex-col items-center justify-center">
              <div className="w-full max-w-4xl space-y-6">
                <div className="rounded-2xl bg-[color:var(--bg-card)] px-5 py-5 shadow-[var(--shadow-soft)] text-center">
                  <div className="text-xs font-semibold uppercase tracking-widest text-[color:var(--text-muted)]">
                    Your score
                  </div>
                  <div className="mt-2 flex items-end justify-center gap-2">
                    <div className="text-4xl font-bold leading-none text-[color:var(--text-primary)]">
                      {result.score}
                    </div>
                    <div className="pb-1 text-sm font-semibold text-[color:var(--text-muted)]">
                      / {result.total}
                    </div>
                  </div>
                  <div className="mt-4 h-2 w-full overflow-hidden rounded-full bg-[color:var(--bg-section)]">
                    <div
                      className="h-full rounded-full bg-[color:var(--color-primary)]"
                      style={{
                        width: `${result.total ? Math.round((result.score / result.total) * 100) : 0}%`,
                      }}
                      aria-hidden="true"
                    />
                  </div>
                  <div className="mt-3 text-sm text-[color:var(--text-secondary)]">
                    Review your answers below.
                  </div>
                </div>

                {learnMore ? (
                  <div className="rounded-2xl bg-[color:var(--bg-card)] shadow-[var(--shadow-soft)] overflow-hidden">
                    <div className="">
                      <div className="relative h-52 sm:h-64 md:h-auto md:min-h-[300px] ">
                        <Image
                          src={learnMore.imageSrc}
                          alt={`Learn more about ${learnMore.label}`}
                          fill
                          sizes="(max-width: 768px) 100vw, 320px"
                          className="object-contain"
                        />
                      </div>
                      <div className="p-4 flex flex-col justify-center gap-3">
                        <div>
                          <div className="text-sm font-semibold text-[color:var(--text-primary)]">
                            Learn more about {learnMore.label}
                          </div>
                          <div className="mt-1 text-sm text-[color:var(--text-secondary)]">
                            Explore articles and tips to improve your understanding.
                          </div>
                        </div>
                        <Link href={learnMore.href} className="btn-primary py-3">
                          Learn about {learnMore.label} →
                        </Link>
                      </div>
                    </div>
                  </div>
                ) : null}

                <div className="space-y-3">
                  {questions.map((q, idx) => {
                    const r = resultByQuestionId.get(String(q.id));
                    const selectedOptionId = r?.selectedOptionId ?? answersByQuestionId[q.id] ?? null;
                    const correctOptionId = r?.correctOptionId ?? null;
                    const selectedText =
                      q.options?.find((o) => o.id === selectedOptionId)?.text ?? "Not answered";
                    const correctText =
                      q.options?.find((o) => o.id === correctOptionId)?.text ?? "—";
                    const isCorrect = r?.isCorrect ?? false;

                    return (
                      <div
                        key={q.id}
                        className={classNames(
                          "rounded-2xl bg-[color:var(--bg-card)] px-4 py-4 shadow-[var(--shadow-soft)]",
                          isCorrect ? "ring-1 ring-emerald-200" : "ring-1 ring-rose-200",
                        )}
                      >
                        <div className="flex items-start justify-between gap-3">
                          <div className="min-w-0">
                            <div className="text-xs font-semibold uppercase tracking-widest text-[color:var(--text-muted)]">
                              Question {idx + 1}
                            </div>
                            <div className="mt-1 text-sm font-semibold text-[color:var(--text-primary)]">
                              {q.question}
                            </div>
                          </div>
                          <span
                            className={classNames(
                              "shrink-0 rounded-full px-2 py-1 text-xs font-semibold",
                              isCorrect
                                ? "bg-emerald-50 text-emerald-700"
                                : "bg-rose-50 text-rose-700",
                            )}
                          >
                            {isCorrect ? "Correct" : "Wrong"}
                          </span>
                        </div>

                        <div className="mt-3 grid gap-2 sm:grid-cols-2">
                          <div className="rounded-xl bg-[color:var(--bg-section)] px-3 py-2">
                            <div className="text-[11px] font-semibold uppercase tracking-widest text-[color:var(--text-muted)]">
                              Your answer
                            </div>
                            <div className="mt-1 text-sm text-[color:var(--text-primary)]">
                              {selectedText}
                            </div>
                          </div>
                          <div className="rounded-xl bg-[color:var(--bg-section)] px-3 py-2">
                            <div className="text-[11px] font-semibold uppercase tracking-widest text-[color:var(--text-muted)]">
                              Correct answer
                            </div>
                            <div className="mt-1 text-sm text-[color:var(--text-primary)]">
                              {correctText}
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          ) : currentQuestion ? (
            <div className="flex-1 flex flex-col items-center justify-center text-center">
              <div className="text-xs font-semibold uppercase tracking-widest text-[color:var(--text-muted)]">
                Question {currentIdx + 1}
              </div>

              <div className="mt-2 max-w-3xl text-xl font-semibold text-[color:var(--text-primary)]">
                {currentQuestion.question}
              </div>

              <div className="mt-5 w-full max-w-3xl">
                <div className="h-2 w-full overflow-hidden rounded-full bg-[color:var(--bg-section)]">
                  <div
                    className="h-full rounded-full bg-[color:var(--color-primary)] transition-[width] duration-200 ease-out"
                    style={{
                      width: `${totalQuestions ? Math.round((answeredCount / totalQuestions) * 100) : 0}%`,
                    }}
                    aria-hidden="true"
                  />
                </div>
              </div>

              {currentQuestion.imageUrl ? (
                <div className="mt-5 w-full max-w-3xl">
                  <div className="relative mx-auto aspect-[16/9] w-full overflow-hidden rounded-2xl bg-[color:var(--bg-section)]">
                    <Image
                      src={currentQuestion.imageUrl}
                      alt={currentQuestion.question}
                      fill
                      sizes="(max-width: 1024px) 100vw, 768px"
                      className="object-contain"
                      priority
                    />
                  </div>
                </div>
              ) : null}

              <div className="mt-6 flex w-full max-w-3xl flex-wrap items-center justify-center gap-3">
                {currentQuestion.options.map((opt) => {
                  const selected = answersByQuestionId[currentQuestion.id] === opt.id;
                  return (
                    <button
                      key={opt.id}
                      type="button"
                      onClick={() => onSelect(opt.id)}
                      disabled={submitting}
                      className={classNames(
                        "inline-flex w-fit min-w-[14rem] max-w-full rounded-xl border px-6 py-3 text-left text-sm font-medium transition-colors",
                        "border-[color:var(--border-light)] bg-[color:var(--bg-card)] text-[color:var(--text-primary)]",
                        selected
                          ? "border-[color:var(--color-primary)] bg-[color:var(--active-bg)]"
                          : "hover:border-[color:var(--color-primary)] hover:bg-[color:var(--bg-section)]",
                        "focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[color:var(--color-primary)]",
                      )}
                    >
                      {opt.text}
                    </button>
                  );
                })}
              </div>

              {submitting ? (
                <div className="mt-4 text-xs text-[color:var(--text-muted)]">Submitting…</div>
              ) : null}
            </div>
          ) : null}
        </div>
      </div>
    </main>
  );
}

