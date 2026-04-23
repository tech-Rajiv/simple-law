"use client";

import React, { useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

function classNames(...xs) {
  return xs.filter(Boolean).join(" ");
}

const CATEGORY_IMAGES = {
  safety: "/category/learn-safety.webp",
  emotion: "/category/learn-emotion.webp",
  women: "/category/learn-women.jpg",
  social: "/category/learn-awareness.webp",
  fitness: "/category/learn-awareness.webp",
  awareness: "/category/learn-awareness.webp",
};

function titleFromKey(key) {
  return String(key)
    .split("-")
    .filter(Boolean)
    .map((w) => w.slice(0, 1).toUpperCase() + w.slice(1))
    .join(" ");
}

export default function AssessmentCategoryLists({
  allAssesmentsData,
  subjectsWithTests,
}) {
  const router = useRouter();
  const [confirmTest, setConfirmTest] = useState(null);

  const categories = useMemo(() => {
    const rows = Array.isArray(subjectsWithTests) ? subjectsWithTests : [];
    return rows.map((row) => {
      const subject = row?.subject || {};
      const subjectId =
        subject?.id != null
          ? String(subject.id)
          : String(subject?.title || "subject");
      const title = subject?.title
        ? String(subject.title)
        : titleFromKey(subjectId);
      const tests = Array.isArray(row?.tests) ? row.tests : [];
      return {
        categoryKey: subjectId,
        title,
        subject,
        tests,
      };
    });
  }, [subjectsWithTests]);

  function openConfirm(testSlug, title) {
    setConfirmTest({ slug: testSlug, title });
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
    <section className="space-y-12 md:space-y-14">
      {categories.map((cat) => {
        const count = cat.tests.length;

        return (
          <div
            key={cat.categoryKey}
            className="rounded-3xl border border-[color:var(--border-light)] bg-[color:var(--bg-card)] p-5 shadow-[var(--shadow-soft)] sm:p-7 md:p-8"
          >
            <div className="flex flex-col gap-4 border-b border-[color:var(--border-light)] pb-6 sm:flex-row sm:items-end sm:justify-between sm:gap-6">
              <div className="min-w-0">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[color:var(--text-muted)]">
                  Category
                </p>
                <div className="mt-2 flex flex-wrap items-center gap-3">
                  <h2 className="text-2xl font-bold tracking-tight text-[color:var(--text-primary)] sm:text-3xl">
                    {cat.title}
                  </h2>
                  <span className="inline-flex shrink-0 items-center rounded-full bg-[color:var(--color-primary)]/10 px-3 py-1 text-xs font-semibold text-[color:var(--color-primary)]">
                    {count} {count === 1 ? "test" : "tests"}
                  </span>
                </div>
                <p className="mt-2 max-w-2xl text-sm leading-relaxed text-[color:var(--text-secondary)] sm:text-base">
                  Choose a test to begin. You can leave and return later by
                  bookmarking the page if your browser allows.
                </p>
              </div>
            </div>

            <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3">
              {count === 0 ? (
                <div className="flex h-full flex-col overflow-hidden rounded-2xl border border-[color:var(--border-light)] bg-[color:var(--bg-card)] shadow-[var(--shadow-soft)]">
                  <div className="relative aspect-[16/10] w-full overflow-hidden bg-gradient-to-br from-[color:var(--hover-bg)] to-[color:var(--bg-section)]">
                    <div
                      className="absolute inset-0 flex items-center justify-center bg-[color:var(--bg-section)]"
                      aria-hidden="true"
                    >
                      <span className="text-sm text-[color:var(--text-muted)]">
                        No tests yet
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-1 flex-col p-5">
                    <h3 className="text-lg font-semibold leading-snug text-[color:var(--text-primary)] sm:text-xl">
                      Coming soon
                    </h3>
                    <p className="mt-2 flex-1 text-sm text-[color:var(--text-secondary)]">
                      This category doesn’t have any tests yet.
                    </p>
                    <div className="mt-5 flex items-center justify-between gap-3 border-t border-[color:var(--border-light)] pt-4">
                      <span className="text-xs font-medium text-[color:var(--text-muted)]">
                        {cat.title}
                      </span>
                      <span className="text-sm font-semibold text-[color:var(--text-muted)]">
                        —
                      </span>
                    </div>
                  </div>
                </div>
              ) : (
                cat.tests.map((t) => {
                  const testSlug =
                    t?.id != null ? String(t.id) : String(t?.title || "test");
                  const imageSrc =
                    t?.thumbnail ||
                    cat?.subject?.thumbnail ||
                    CATEGORY_IMAGES[t?.category] ||
                    CATEGORY_IMAGES[cat.categoryKey] ||
                    null;
                  const n = Number(
                    t?.numberOfQuestions || t?.questionCount || 0,
                  );

                  return (
                    <button
                      key={testSlug}
                      type="button"
                      onClick={() => openConfirm(testSlug, t?.title || "Test")}
                      className={classNames(
                        "group text-left",
                        "flex h-full flex-col overflow-hidden rounded-2xl border border-[color:var(--border-light)] bg-[color:var(--bg-card)] shadow-[var(--shadow-soft)]",
                        "transition-all duration-300 hover:-translate-y-1 hover:border-[color:var(--color-primary)]/35 hover:shadow-[0_16px_40px_-12px_rgba(97,45,83,0.2)]",
                        "focus:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--color-primary)] focus-visible:ring-offset-2",
                      )}
                    >
                      <div className="relative aspect-[16/10] w-full overflow-hidden bg-gradient-to-br from-[color:var(--hover-bg)] to-[color:var(--bg-section)]">
                        {imageSrc ? (
                          <>
                            <Image
                              src={imageSrc}
                              alt={
                                t?.title
                                  ? `${t.title} preview`
                                  : `${cat.title} test`
                              }
                              fill
                              sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 33vw"
                              className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.04]"
                              priority={cat.categoryKey === "safety"}
                            />
                            <div
                              className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent"
                              aria-hidden="true"
                            />
                          </>
                        ) : (
                          <div
                            className="absolute inset-0 flex items-center justify-center bg-[color:var(--bg-section)]"
                            aria-hidden="true"
                          >
                            <span className="text-sm text-[color:var(--text-muted)]">
                              Image
                            </span>
                          </div>
                        )}
                        <div className="absolute bottom-0 left-0 right-0 p-4">
                          <div className="flex flex-wrap items-center gap-2">
                            {n > 0 ? (
                              <span className="inline-flex rounded-full bg-white/95 px-2.5 py-1 text-xs font-semibold text-[color:var(--text-primary)] shadow-sm backdrop-blur-sm">
                                {n} questions
                              </span>
                            ) : null}
                            {t?.onlyWomen ? (
                              <span className="inline-flex rounded-full bg-[color:var(--active-bg)] px-2.5 py-1 text-xs font-semibold text-[color:var(--color-primary)] ring-1 ring-[color:var(--color-primary)]/20">
                                Women
                              </span>
                            ) : null}
                          </div>
                        </div>
                      </div>

                      <div className="flex flex-1 flex-col p-5">
                        <h3 className="text-lg font-semibold leading-snug text-[color:var(--text-primary)] group-hover:text-[color:var(--color-primary)] sm:text-xl">
                          {t?.title || "Test"}
                        </h3>
                        {t?.description ? (
                          <p className="mt-2 line-clamp-2 flex-1 text-sm leading-relaxed text-[color:var(--text-secondary)]">
                            {t.description}
                          </p>
                        ) : n > 0 ? (
                          <p className="mt-2 flex-1 text-sm text-[color:var(--text-secondary)]">
                            Short multiple-choice check — results at the end.
                          </p>
                        ) : (
                          <p className="mt-2 flex-1 text-sm text-[color:var(--text-secondary)]">
                            Knowledge check
                          </p>
                        )}

                        <div className="mt-5 flex items-center justify-between gap-3 border-t border-[color:var(--border-light)] pt-4">
                          <span className="text-xs font-medium text-[color:var(--text-muted)]">
                            {cat.title}
                          </span>
                          <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-[color:var(--color-primary)] transition-transform duration-200 group-hover:translate-x-0.5">
                            Start
                            <span aria-hidden="true">→</span>
                          </span>
                        </div>
                      </div>
                    </button>
                  );
                })
              )}
            </div>
          </div>
        );
      })}

      {confirmTest ? (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
          role="dialog"
          aria-modal="true"
          aria-labelledby="assessment-confirm-title"
        >
          <button
            type="button"
            className="absolute inset-0 bg-[color:var(--text-primary)]/40 backdrop-blur-sm transition-opacity"
            onClick={closeConfirm}
            aria-label="Close dialog"
          />
          <div className="relative w-full max-w-md overflow-hidden rounded-3xl border border-[color:var(--border-light)] bg-[color:var(--bg-card)] shadow-[0_24px_60px_-12px_rgba(0,0,0,0.25)]">
            <div className="h-1.5 bg-gradient-to-r from-[color:var(--color-primary)] via-[#7a3d66] to-[color:var(--color-secondary)]" />
            <div className="p-6 sm:p-8">
              <h2
                id="assessment-confirm-title"
                className="text-xl font-bold tracking-tight text-[color:var(--text-primary)] sm:text-2xl"
              >
                Start this test?
              </h2>
              <p className="mt-2 text-base font-medium text-[color:var(--text-primary)]">
                “{confirmTest.title}”
              </p>
              <p className="mt-4 text-sm leading-relaxed text-[color:var(--text-secondary)]">
                You’ll move through a short set of questions. Your score appears
                when you finish — take your time on each one.
              </p>
              <div className="mt-8 flex flex-col-reverse gap-3 sm:flex-row sm:justify-end">
                <button
                  type="button"
                  onClick={closeConfirm}
                  className="inline-flex min-h-[48px] items-center justify-center rounded-xl border border-[color:var(--border-light)] bg-[color:var(--bg-card)] px-5 py-3 text-sm font-semibold text-[color:var(--text-primary)] transition-colors hover:bg-[color:var(--hover-bg)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--color-primary)] focus-visible:ring-offset-2"
                >
                  Not now
                </button>
                <button
                  type="button"
                  onClick={startConfirmedTest}
                  className="btn-primary inline-flex min-h-[48px] items-center justify-center rounded-xl px-6 py-3 text-base font-semibold shadow-md transition-[transform,box-shadow] hover:shadow-lg active:scale-[0.99]"
                >
                  Start test
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </section>
  );
}
