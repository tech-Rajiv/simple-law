"use client";

import { useEffect, useMemo, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

function classNames(...xs) {
  return xs.filter(Boolean).join(" ");
}

// const DEFAULT_API_BASE = "https://admin.100xlife.online";
const DEFAULT_API_BASE = "http://localhost:3001";

function getApiBase() {
  const raw = process.env.NEXT_PUBLIC_API_BASE_URL;
  const base = (raw && String(raw).trim()) || DEFAULT_API_BASE;
  return base.replace(/\/+$/, "");
}

async function fetchJson(path, { method = "GET", body } = {}) {
  const base = getApiBase();
  const url = `${base}${path.startsWith("/") ? path : `/${path}`}`;

  const res = await fetch(url, {
    method,
    headers: body ? { "Content-Type": "application/json" } : undefined,
    body: body ? JSON.stringify(body) : undefined,
    credentials: "include",
  });

  if (!res.ok) {
    let msg = `Request failed (${res.status})`;
    try {
      const data = await res.json();
      msg = data?.error || data?.message || msg;
    } catch {
      // ignore
    }
    throw new Error(msg);
  }

  return res.json();
}

const LEARN_MORE = {
  safety: { href: "/safety", label: "Safety", imageSrc: "/category/learn-safety.webp" },
  emotion: { href: "/learning", label: "Emotion", imageSrc: "/category/learn-emotion.webp" },
  women: { href: "/safety", label: "Women safety", imageSrc: "/category/learn-women.jpg" },
  awareness: { href: "/learning", label: "Awareness", imageSrc: "/category/learn-awareness.webp" },
};

function normalizeQuestions(rawQuestions) {
  const qs = Array.isArray(rawQuestions) ? rawQuestions : [];
  const base = getApiBase();
  return qs.map((q, i) => {
    const qId = q?.id != null ? String(q.id) : String(i + 1);
    const rawOptions = Array.isArray(q?.options) ? q.options : [];
    const options = rawOptions.map((opt, oi) => {
      const id = opt?.id != null ? String(opt.id) : `${qId}:${oi + 1}`;
      const text = typeof opt === "string" ? opt : String(opt?.text || "");
      return { id, text };
    });

    const rawImage = q?.image != null ? String(q.image) : "";
    const imageUrl =
      rawImage && /^https?:\/\//i.test(rawImage)
        ? rawImage
        : rawImage
          ? `${base}${rawImage.startsWith("/") ? rawImage : `/${rawImage}`}`
          : "";

    return {
      id: qId,
      question: String(q?.questionText || q?.question || ""),
      options,
      imageUrl,
    };
  });
}

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
  const [testMeta, setTestMeta] = useState(null);

  const progressStorageKey = useMemo(() => {
    if (!slug) return null;
    return `simple:test-progress:${slug}`;
  }, [slug]);

  const testId = useMemo(() => {
    const n = Number(slug);
    return Number.isFinite(n) && n > 0 ? n : null;
  }, [slug]);

  const title = testMeta?.title || "Test";
  const learnMore = useMemo(() => {
    const subjectTitle = testMeta?.subject?.title ? String(testMeta.subject.title).toLowerCase() : "";
    if (subjectTitle.includes("safety")) return LEARN_MORE.safety;
    if (subjectTitle.includes("emotion")) return LEARN_MORE.emotion;
    if (subjectTitle.includes("women")) return LEARN_MORE.women;
    if (subjectTitle.includes("fitness")) return LEARN_MORE.awareness;
    if (subjectTitle.includes("social") || subjectTitle.includes("awareness")) return LEARN_MORE.awareness;
    return null;
  }, [testMeta]);

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
        setTestMeta(null);

        if (!testId) throw new Error("Test not found.");

        const testData = await fetchJson(`/api/tests/${encodeURIComponent(String(testId))}`);
        const test = testData?.test || null;
        if (!test) throw new Error("Test not found.");

        const rawQuestions = Array.isArray(test?.questions) ? test.questions : [];
        const qs = normalizeQuestions(rawQuestions);
        if (cancelled) return;

        setTestMeta({
          id: test?.id ?? testId,
          title: test?.title || "Test",
          subject: test?.subject || null,
        });
        setQuestions(qs);

        // Restore in-progress state (session only) after questions load.
        if (progressStorageKey) {
          try {
            const raw = sessionStorage.getItem(progressStorageKey);
            if (raw) {
              const parsed = JSON.parse(raw);
              const savedAnswers = parsed?.answersByQuestionId && typeof parsed.answersByQuestionId === "object"
                ? parsed.answersByQuestionId
                : {};
              const savedIdx = Number.isFinite(parsed?.currentIdx) ? parsed.currentIdx : 0;
              const savedQuestionIds = Array.isArray(parsed?.questionIds) ? parsed.questionIds.map(String) : null;
              const currentQuestionIds = qs.map((q) => String(q.id));

              const idsMatch =
                Array.isArray(savedQuestionIds) &&
                savedQuestionIds.length === currentQuestionIds.length &&
                savedQuestionIds.every((id, i) => id === currentQuestionIds[i]);

              if (idsMatch) {
                setAnswersByQuestionId(savedAnswers);
                setCurrentIdx(Math.max(0, Math.min(qs.length - 1, savedIdx)));
              } else {
                // Different question set; start fresh.
                setAnswersByQuestionId({});
                setCurrentIdx(0);
                sessionStorage.removeItem(progressStorageKey);
              }
            } else {
              setAnswersByQuestionId({});
              setCurrentIdx(0);
            }
          } catch {
            setAnswersByQuestionId({});
            setCurrentIdx(0);
            sessionStorage.removeItem(progressStorageKey);
          }
        } else {
          setAnswersByQuestionId({});
          setCurrentIdx(0);
        }
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
  }, [progressStorageKey, slug, testId]);

  // Persist progress so refresh doesn't restart the test.
  useEffect(() => {
    if (!progressStorageKey) return;
    if (loadingQuestions) return;
    if (!Array.isArray(questions) || questions.length === 0) return;
    if (result) {
      sessionStorage.removeItem(progressStorageKey);
      return;
    }
    try {
      const payload = {
        currentIdx,
        answersByQuestionId,
        questionIds: questions.map((q) => String(q.id)),
        savedAt: Date.now(),
      };
      sessionStorage.setItem(progressStorageKey, JSON.stringify(payload));
    } catch {
      // ignore storage errors (private mode/quota)
    }
  }, [answersByQuestionId, currentIdx, loadingQuestions, progressStorageKey, questions, result]);

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
      if (!testId) throw new Error("Test not found.");
      const payload = {
        testId,
        answers: questions.map((q) => {
          const selected = finalAnswersByQuestionId?.[q.id] ?? null;
          return {
            questionId: Number(q.id),
            selectedOptionId: selected == null ? null : Number(selected),
          };
        }),
      };

      const evalData = await fetchJson("/api/evaluate", { method: "POST", body: payload });
      const data = {
        score: Number(evalData?.correctAnswers || 0),
        total: Number(evalData?.totalQuestions || questions.length),
        results: Array.isArray(evalData?.results) ? evalData.results : [],
      };

      setResult(data);
      if (progressStorageKey) {
        try {
          sessionStorage.removeItem(progressStorageKey);
        } catch {
          // ignore
        }
      }
    } catch (e) {
      setError(e?.message || "Failed to submit");
    } finally {
      setSubmitting(false);
    }
  }

  function onBack() {
    const ok = window.confirm("Go back? Your changes/answers will not be saved.");
    if (!ok) return;
    if (progressStorageKey) {
      try {
        sessionStorage.removeItem(progressStorageKey);
      } catch {
        // ignore
      }
    }
    router.replace("/assessment");
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
                        <Link href={learnMore.href} replace className="btn-primary py-3">
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
                      q.options?.find((o) => String(o.id) === String(selectedOptionId))?.text ?? "Not answered";
                    const correctText =
                      q.options?.find((o) => String(o.id) === String(correctOptionId))?.text ?? "—";
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

