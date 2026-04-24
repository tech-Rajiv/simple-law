"use client";

import { useEffect, useMemo, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import YtVideocard from "@/components/shared/YtVideocard";

function classNames(...xs) {
  return xs.filter(Boolean).join(" ");
}

function ScoreGauge({ score = 0, total = 0 }) {
  const safeTotal = Number(total) > 0 ? Number(total) : 0;
  const safeScore = Math.max(0, Math.min(Number(score) || 0, safeTotal || 0));
  const pct = safeTotal ? safeScore / safeTotal : 0;
  const percentLabel = safeTotal ? Math.round(pct * 100) : 0;

  const verdict = (() => {
    if (!safeTotal) return { label: "Completed", hint: "Nice work finishing the test." };
    if (pct >= 0.85) return { label: "Excellent", hint: "You’re strong on this topic. Try a harder test or explore guides for edge cases." };
    if (pct >= 0.65) return { label: "Good", hint: "Solid base. Review a couple of questions you missed and try again." };
    if (pct >= 0.4) return { label: "Getting there", hint: "You’ve started well. Skim the guides, then retake to lock it in." };
    return { label: "Keep going", hint: "Don’t worry — learn the basics in the guides and retake this test." };
  })();

  const [animatedPct, setAnimatedPct] = useState(0);
  const [displayScore, setDisplayScore] = useState(0);

  useEffect(() => {
    let raf = 0;
    const start = performance.now();
    const duration = 750;

    const fromPct = 0;
    const toPct = pct;
    const fromScore = 0;
    const toScore = safeScore;

    function easeOutCubic(t) {
      return 1 - Math.pow(1 - t, 3);
    }

    function tick(now) {
      const t = Math.min(1, (now - start) / duration);
      const e = easeOutCubic(t);
      setAnimatedPct(fromPct + (toPct - fromPct) * e);
      setDisplayScore(Math.round(fromScore + (toScore - fromScore) * e));
      if (t < 1) raf = requestAnimationFrame(tick);
    }

    setAnimatedPct(0);
    setDisplayScore(0);
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [pct, safeScore]);

  // Semicircle gauge: SVG arc from left->right
  const strokeWidth = 14;
  const r = 76;
  const cx = 100;
  const cy = 92;
  const arcPath = `M ${cx - r} ${cy} A ${r} ${r} 0 0 1 ${cx + r} ${cy}`;
  const arcLen = Math.PI * r;
  const dashOffset = arcLen * (1 - animatedPct);

  return (
    <div className="rounded-2xl bg-[color:var(--bg-card)] px-5 py-6 shadow-[var(--shadow-soft)]">
      <div className="flex flex-col items-center text-center gap-2">
        <div className="text-xs font-semibold uppercase tracking-widest text-[color:var(--text-muted)]">
          Your score
        </div>
        <div className="inline-flex items-center gap-2 rounded-full border border-[color:var(--border-light)] bg-[color:var(--bg-page)] px-3 py-1 text-xs font-semibold text-[color:var(--text-primary)]">
          <span className="text-[color:var(--color-primary)]">{verdict.label}</span>
          <span className="text-[color:var(--text-muted)]">•</span>
          <span className="text-[color:var(--text-secondary)]">{percentLabel}%</span>
        </div>
      </div>

      <div className="mt-4 flex items-center justify-center">
        <svg
          width="320"
          height="180"
          viewBox="0 0 200 120"
          role="img"
          aria-label={`Score ${safeScore} out of ${safeTotal}`}
          className="w-full max-w-[340px]"
        >
          <defs>
            <linearGradient id="scoreGradient" x1="0" y1="0" x2="200" y2="0">
              <stop offset="0%" stopColor="var(--color-secondary)" />
              <stop offset="55%" stopColor="var(--color-primary)" />
              <stop offset="100%" stopColor="var(--color-secondary)" />
            </linearGradient>
          </defs>

          <path
            d={arcPath}
            fill="none"
            stroke="color-mix(in srgb, var(--border-light) 70%, transparent)"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />
          <path
            d={arcPath}
            fill="none"
            stroke="url(#scoreGradient)"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeDasharray={arcLen}
            strokeDashoffset={dashOffset}
          />

          <text
            x="100"
            y="76"
            textAnchor="middle"
            className="fill-[color:var(--text-primary)]"
            style={{ fontSize: 34, fontWeight: 800 }}
          >
            {displayScore}
          </text>
          <text
            x="100"
            y="96"
            textAnchor="middle"
            className="fill-[color:var(--text-secondary)]"
            style={{ fontSize: 12, fontWeight: 600 }}
          >
            out of {safeTotal}
          </text>

          <text
            x={cx - r}
            y={cy + 20}
            textAnchor="start"
            className="fill-[color:var(--text-muted)]"
            style={{ fontSize: 11, fontWeight: 600 }}
          >
            0
          </text>
          <text
            x={cx + r}
            y={cy + 20}
            textAnchor="end"
            className="fill-[color:var(--text-muted)]"
            style={{ fontSize: 11, fontWeight: 600 }}
          >
            {safeTotal}
          </text>
        </svg>
      </div>

      <div className="mt-1 text-center text-sm text-[color:var(--text-secondary)]">
        {verdict.hint}
      </div>
      <div className="mt-2 text-center text-xs text-[color:var(--text-muted)]">
        Review answers below, then explore more to improve.
      </div>
    </div>
  );
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
  emotionalIntelligence: {
    href: "/emotional-intelligence",
    label: "Emotional Intelligence",
    imageSrc: "/category/learn-emotion.webp",
  },
  women: { href: "/women", label: "Women", imageSrc: "/category/learn-women.jpg" },
  awareness: {
    href: "/awareness",
    label: "Real-world Awareness",
    imageSrc: "/category/learn-awareness.webp",
  },
};

const SUBJECT_YT = {
  women: {
    title: "Women’s safety & rights video",
    description:
      "A short video to build awareness and encourage action with clarity and confidence.",
    ytVideoUrl: "https://youtu.be/Neho6BCJeoc?si=v4TBH6QcKNrCR33s",
  },
  awareness: {
    title: "Awareness video",
    description:
      "A quick video to help you understand awareness in real life and how to stay safer with simple habits.",
    ytVideoUrl: "https://www.youtube.com/watch?v=gAcpbxzAb9A",
  },
  emotionalIntelligence: {
    title: "Emotional Intelligence Video",
    description:
      "Watch this to quickly understand emotional intelligence and how to use it in real life.",
    ytVideoUrl: "https://youtu.be/D6_J7FfgWVc?si=5_NV6VzHJ9nruXmK",
  },
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
    const subjectTitle = testMeta?.subject?.title
      ? String(testMeta.subject.title).toLowerCase()
      : "";
    if (subjectTitle.includes("women")) return LEARN_MORE.women;
    if (subjectTitle.includes("awareness")) return LEARN_MORE.awareness;
    if (subjectTitle.includes("emotion"))
      return LEARN_MORE.emotionalIntelligence;
    return null;
  }, [testMeta]);

  const youtubeDetails = useMemo(() => {
    const subjectTitle = testMeta?.subject?.title
      ? String(testMeta.subject.title).toLowerCase()
      : "";
    if (subjectTitle.includes("women")) return SUBJECT_YT.women;
    if (subjectTitle.includes("awareness")) return SUBJECT_YT.awareness;
    if (subjectTitle.includes("emotion")) return SUBJECT_YT.emotionalIntelligence;
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
    if (result) {
      if (progressStorageKey) {
        try {
          sessionStorage.removeItem(progressStorageKey);
        } catch {
          // ignore
        }
      }
      router.replace("/assessment");
      return;
    }

    const ok = window.confirm(
      "Go back to assessments? Your current progress will be removed.",
    );
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
            <button
              type="button"
              onClick={onBack}
              className="btn-primary w-full sm:w-auto"
            >
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
                <ScoreGauge score={result.score} total={result.total} />

                {learnMore ? (
                  <div className="rounded-2xl bg-[color:var(--bg-card)] shadow-[var(--shadow-soft)] overflow-hidden">
                    <div className="grid grid-cols-1 md:grid-cols-2">
                      <div className="relative w-full overflow-hidden bg-[color:var(--bg-section)]">
                        <div className="aspect-video w-full">
                        <Image
                          src={learnMore.imageSrc}
                          alt={`Explore ${learnMore.label}`}
                          fill
                          sizes="(max-width: 768px) 100vw, 50vw"
                          className="object-cover"
                        />
                        </div>
                      </div>

                      <div className="flex flex-col justify-center border-t border-[color:var(--border-light)] p-6 md:border-l md:border-t-0 md:p-8">
                        <div>
                          <div className="text-sm font-semibold text-[color:var(--text-primary)]">
                            Explore more about {learnMore.label}
                          </div>
                          <div className="mt-1 text-sm leading-relaxed text-[color:var(--text-secondary)]">
                            Explore articles and tips to improve your understanding.
                          </div>
                        </div>

                        <div className="mt-2 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                          <div className="text-xs font-semibold uppercase tracking-[0.18em] text-[color:var(--text-muted)]">
                            Next step
                          </div>
                          <Link
                            href={learnMore.href}
                            replace
                            className="btn-primary inline-flex min-h-[52px] w-full items-center justify-center px-6 py-3 text-base font-semibold sm:w-auto"
                          >
                            Explore more →
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : null}

                {youtubeDetails ? (
                  <YtVideocard
                    ytVideoUrl={youtubeDetails.ytVideoUrl}
                    title={youtubeDetails.title}
                    description={youtubeDetails.description}
                  />
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
                  <div className="relative mx-auto aspect-[16/9] w-full overflow-hidden rounded-2xl bg-transparent">
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

