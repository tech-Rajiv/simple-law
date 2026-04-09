'use client'
import React, { useEffect, useMemo, useState } from 'react'
import { useRouter } from "next/navigation";
import Image from "next/image";
import SubHeading from './shared/SubHeading';

function classNames(...xs) {
  return xs.filter(Boolean).join(" ");
}

const TEST_IMAGES = {
  safety: "/category/learn-safety.webp",
  emotion: "/category/learn-emotion.webp",
  women: "/category/learn-women.jpg",
  awareness: "/category/learn-awareness.webp",
};

export default function QuizLists() {   
    const router = useRouter();
    const [tests, setTests] = useState([]);
    const [loadingTests, setLoadingTests] = useState(true);
    const [activeTab, setActiveTab] = useState("all"); // all | women
  
    const [error, setError] = useState(null);
    const [confirmTest, setConfirmTest] = useState(null); // { slug, title } | null
  
    useEffect(() => {
      let cancelled = false;
      async function load() {
        try {
          setLoadingTests(true);
          const res = await fetch("/api/all-tests", { cache: "no-store" });
          if (!res.ok) throw new Error(`Failed to load tests (${res.status})`);
          const data = await res.json();
          if (!cancelled) setTests(Array.isArray(data?.tests) ? data.tests : []);
        } catch (e) {
          if (!cancelled) setError(e?.message || "Failed to load tests");
        } finally {
          if (!cancelled) setLoadingTests(false);
        }
      }
      load();
      return () => {
        cancelled = true;
      };
    }, []);
  
    const filteredTests = useMemo(() => {
      if (activeTab === "women") return tests.filter((t) => Boolean(t?.onlyWomen));
      return tests;
    }, [activeTab, tests]);

    function openConfirm(t) {
      setConfirmTest({ slug: t.slug, title: t.title, onlyWomen: Boolean(t?.onlyWomen) });
    }

    function closeConfirm() {
      setConfirmTest(null);
    }

    function startConfirmedTest() {
      if (!confirmTest?.slug) return;
      const next = confirmTest.slug;
      closeConfirm();
      router.push(`/test/${next}`);
    }
  
    return (
      <section className="space-y-6">
        <header>
          <SubHeading
            title="Take a test"
            description="Choose a test, answer the questions, and submit to see your score."
            right={
              <div className="flex items-center gap-2 rounded-xl border border-[color:var(--border-light)] bg-[color:var(--bg-card)] p-1 shadow-[var(--shadow-soft)]">
                <button
                  type="button"
                  onClick={() => setActiveTab("all")}
                  className={classNames(
                    "rounded-lg px-3 py-2 text-sm font-medium transition-colors",
                    activeTab === "all"
                      ? "bg-[color:var(--active-bg)] text-[color:var(--text-primary)]"
                      : "text-[color:var(--text-secondary)] hover:bg-[color:var(--bg-hover)]",
                  )}
                >
                  All
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab("women")}
                  className={classNames(
                    "rounded-lg px-3 py-2 text-sm font-medium transition-colors",
                    activeTab === "women"
                      ? "bg-[color:var(--active-bg)] text-[color:var(--text-primary)]"
                      : "text-[color:var(--text-secondary)] hover:bg-[color:var(--bg-hover)]",
                  )}
                >
                  Women only
                </button>
              </div>
            }
          />
        </header>
  
        {error ? (
          <div className="rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-800">
            {error}
          </div>
        ) : null}
  
        <div className="">
          {loadingTests ? (
            <div className="text-sm text-[color:var(--text-secondary)]">Loading tests…</div>
          ) : (
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
              {filteredTests.map((t) => (
                <button
                  key={t.slug}
                  type="button"
                  onClick={() => openConfirm(t)}
                  className={classNames(
                    "text-left overflow-hidden rounded-2xl border border-[color:var(--border-light)] bg-[color:var(--bg-card)] shadow-[var(--shadow-soft)]",
                    "transition-colors hover:border-[color:var(--color-primary)] focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[color:var(--color-primary)]",
                  )}
                >
                  <div className="relative aspect-[16/9] w-full overflow-hidden bg-[color:var(--bg-section)]">
                    {TEST_IMAGES[t.slug] ? (
                      <Image
                        src={TEST_IMAGES[t.slug]}
                        alt={t.title}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                         className="object-cover transition-transform duration-300 hover:scale-[1.03]"
                        priority={t.slug === "safety"}
                      />
                    ) : (
                      <div
                        className="absolute inset-0 border-b border-[color:var(--border-light)]"
                        aria-hidden="true"
                      />
                    )}
                  </div>

                  <div className="p-4">
                    <div className="flex items-start justify-between gap-3">
                      <div className="min-w-0">
                        <div className="flex items-center gap-2">
                          <h3 className="truncate text-base font-semibold text-[color:var(--text-primary)]">
                            {t.title}
                          </h3>
                          {t.onlyWomen ? (
                            <span className="shrink-0 inline-flex items-center rounded-full border border-[color:var(--border-light)] bg-[color:var(--active-bg)] px-2 py-0.5 text-[11px] font-semibold text-[color:var(--text-primary)]">
                              Women
                            </span>
                          ) : null}
                        </div>
                        <p className="mt-1 text-sm leading-relaxed text-[color:var(--text-secondary)]">
                          {t.numberOfQuestions} questions
                        </p>
                      </div>
                      <span className="shrink-0 text-xs rounded-full border border-[color:var(--border-light)] bg-[color:var(--bg-card)] px-2 py-1 text-[color:var(--text-secondary)]">
                        {t.slug}
                      </span>
                    </div>

                    <div className="mt-4">
                      <span className="inline-flex items-center gap-2 rounded-lg border border-[color:var(--border-light)] bg-[color:var(--bg-card)] px-3 py-2 text-sm font-medium text-[color:var(--text-primary)] transition-colors hover:border-[color:var(--color-primary)] hover:text-[color:var(--color-primary)]">
                        Take test <span aria-hidden="true">→</span>
                      </span>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          )}
        </div>

        {confirmTest ? (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            role="dialog"
            aria-modal="true"
            aria-label="Confirm start test"
          >
            <button
              type="button"
              className="absolute inset-0 bg-black/30"
              onClick={closeConfirm}
              aria-label="Close"
            />
            <div className="relative w-full max-w-md md:max-w-2xl rounded-2xl border border-[color:var(--border-light)] bg-[color:var(--bg-card)] p-5 shadow-[var(--shadow-soft)]">
              <div className="text-base font-semibold text-[color:var(--text-primary)]">
                Start “{confirmTest.title}”?
              </div>
              <div className="mt-2 text-sm text-[color:var(--text-secondary)]">
                You’ll answer a short set of questions and get your score at the end.
              </div>
              <div className="mt-5 flex flex-col-reverse gap-2 sm:flex-row sm:justify-end">
                <button
                  type="button"
                  onClick={closeConfirm}
                  className="inline-flex items-center justify-center rounded-lg border border-[color:var(--border-light)] bg-[color:var(--bg-card)] px-4 py-2 text-sm font-semibold text-[color:var(--text-primary)] hover:bg-[color:var(--bg-hover)] focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[color:var(--color-primary)]"
                >
                  Cancel
                </button>
                <button
                  type="button"
                  onClick={startConfirmedTest}
                  className="btn-primary px-4 py-2"
                >
                  Start test
                </button>
              </div>
            </div>
          </div>
        ) : null}
      </section>
    );
  }