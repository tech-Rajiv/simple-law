'use client';

import React, { useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import SubHeading from "@/components/shared/SubHeading";

function classNames(...xs) {
  return xs.filter(Boolean).join(" ");
}

const CATEGORY_TITLES = {
  safety: "Safety Test ",
  "emotion-quotient": "Emotion Quotient Test",
  "women-issue": "Women Issue Test",
  "social-awareness": "Social Awareness Test",
  "fitness-health": "Fitness & Health Test",
};

const CATEGORY_IMAGES = {
  safety: "/category/learn-safety.webp",
  emotion: "/category/learn-emotion.webp",
  women: "/category/learn-women.jpg",
  social: "/category/learn-awareness.webp",
  fitness: "/category/learn-awareness.webp",
  awareness: "/category/learn-awareness.webp",
};

function titleFromKey(key) {
  if (CATEGORY_TITLES[key]) return CATEGORY_TITLES[key];
  return String(key)
    .split("-")
    .filter(Boolean)
    .map((w) => w.slice(0, 1).toUpperCase() + w.slice(1))
    .join(" ");
}

function makeTestSlug(categoryKey, test) {
  const idPart = test?.id != null ? String(test.id) : String(test?.title || "test");
  return `${categoryKey}-${idPart}`;
}

export default function AssessmentCategoryLists({ allAssesmentsData }) {
  const router = useRouter();
  const [confirmTest, setConfirmTest] = useState(null); // { slug, title } | null

  const categories = useMemo(() => {
    const obj = allAssesmentsData && typeof allAssesmentsData === "object" ? allAssesmentsData : {};
    return Object.entries(obj).map(([categoryKey, tests]) => ({
      categoryKey,
      title: titleFromKey(categoryKey),
      tests: Array.isArray(tests) ? tests : [],
    }));
  }, [allAssesmentsData]);

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
    <section className="space-y-10">
      {categories.map((cat) => (
        <div key={cat.categoryKey} className="space-y-4">
          <SubHeading title={cat.title} description={`Choose a ${cat.title} test to begin.`} />

          <div className="grid grid-cols-1 gap-4 lg:grid-cols-4">
            {cat.tests.map((t) => {
              const testSlug = makeTestSlug(cat.categoryKey, t);
              const imageSrc = CATEGORY_IMAGES[t?.category] || CATEGORY_IMAGES[cat.categoryKey] || null;

              return (
                <button
                  key={testSlug}
                  type="button"
                  onClick={() => openConfirm(testSlug, t?.title || "Test")}
                  className={classNames(
                    "text-left overflow-hidden rounded-2xl border border-[color:var(--border-light)] bg-[color:var(--bg-card)] shadow-[var(--shadow-soft)]",
                    "transition-colors hover:border-[color:var(--color-primary)] focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[color:var(--color-primary)]",
                  )}
                >
                  <div className="relative aspect-[16/9] w-full overflow-hidden bg-[color:var(--bg-section)]">
                    {imageSrc ? (
                      <Image
                        src={imageSrc}
                        alt={t?.title || cat.title}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        className="object-cover transition-transform duration-300 hover:scale-[1.03]"
                        priority={cat.categoryKey === "safety"}
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
                            {t?.title || "Test"}
                          </h3>
                          {t?.onlyWomen ? (
                            <span className="shrink-0 inline-flex items-center rounded-full border border-[color:var(--border-light)] bg-[color:var(--active-bg)] px-2 py-0.5 text-[11px] font-semibold text-[color:var(--text-primary)]">
                              Women
                            </span>
                          ) : null}
                        </div>
                        {t?.description ? (
                          <p className="mt-1 line-clamp-2 text-sm leading-relaxed text-[color:var(--text-secondary)]">
                            {t.description}
                          </p>
                        ) : (
                          <p className="mt-1 text-sm leading-relaxed text-[color:var(--text-secondary)]">
                            {Number(t?.numberOfQuestions || 0)} questions
                          </p>
                        )}
                      </div>
                      <span className="shrink-0 text-xs rounded-full border border-[color:var(--border-light)] bg-[color:var(--bg-card)] px-2 py-1 text-[color:var(--text-secondary)]">
                        {cat.title}
                      </span>
                    </div>

                    <div className="mt-4">
                      <span className="inline-flex items-center gap-2 rounded-lg border border-[color:var(--border-light)] bg-[color:var(--bg-card)] px-3 py-2 text-sm font-medium text-[color:var(--text-primary)] transition-colors hover:border-[color:var(--color-primary)] hover:text-[color:var(--color-primary)]">
                        Take test <span aria-hidden="true">→</span>
                      </span>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      ))}

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
              <button type="button" onClick={startConfirmedTest} className="btn-primary px-4 py-2">
                Start test
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </section>
  );
}

