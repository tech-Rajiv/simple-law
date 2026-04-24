"use client";

import { useEffect, useMemo, useState } from "react";
import TopicsCards from "@/components/shared/TopicsCards";
import SubHeading from "@/components/shared/SubHeading";

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

export default function AssessmentPageClient() {
  const [subjects, setSubjects] = useState([]);
  const [testsBySubjectId, setTestsBySubjectId] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let cancelled = false;

    async function load() {
      try {
        setLoading(true);
        setError(null);

        const subjectsData = await fetchJson("/api/subjects");
        const loadedSubjects = Array.isArray(subjectsData?.subjects)
          ? subjectsData.subjects
          : [];

        const testsPairs = await Promise.all(
          loadedSubjects.map(async (s) => {
            const sid = s?.id;
            if (sid == null) return [null, []];
            const testsData = await fetchJson(
              `/api/tests?subjectId=${encodeURIComponent(String(sid))}`,
            );
            const tests = Array.isArray(testsData?.tests)
              ? testsData.tests
              : [];
            return [String(sid), tests];
          }),
        );

        if (cancelled) return;

        const map = {};
        for (const [sid, tests] of testsPairs) {
          if (!sid) continue;
          map[sid] = tests;
        }

        setSubjects(loadedSubjects);
        setTestsBySubjectId(map);
      } catch (e) {
        if (!cancelled) setError(e?.message || "Failed to load assessments");
      } finally {
        if (!cancelled) setLoading(false);
      }
    }

    load();
    return () => {
      cancelled = true;
    };
  }, []);

  const categories = useMemo(() => {
    const subs = Array.isArray(subjects) ? subjects : [];
    return subs.map((s) => ({
      subject: s,
      tests: testsBySubjectId?.[String(s?.id)] || [],
    }));
  }, [subjects, testsBySubjectId]);

  const categoryCount = useMemo(() => {
    return categories.filter(
      (c) => Array.isArray(c.tests) && c.tests.length > 0,
    ).length;
  }, [categories]);

  const testCount = useMemo(() => {
    return categories.reduce(
      (n, c) => n + (Array.isArray(c.tests) ? c.tests.length : 0),
      0,
    );
  }, [categories]);

  const testTopics = useMemo(() => {
    const rows = Array.isArray(categories) ? categories : [];
    const topics = [];

    for (const row of rows) {
      const subjectTitle =
        row?.subject?.title != null ? String(row.subject.title) : "";
      const tests = Array.isArray(row?.tests) ? row.tests : [];

      for (const t of tests) {
        const testSlug =
          t?.id != null ? String(t.id) : String(t?.title || "test");
        const label = t?.title ? String(t.title) : "Test";
        const description = t?.description
          ? String(t.description)
          : subjectTitle
            ? `Category: ${subjectTitle}`
            : "Take a short multiple-choice check — results at the end.";
        const imageSrc =
          t?.thumbnail || row?.subject?.thumbnail || row?.subject?.image || null;

        topics.push({
          href: `/test/${testSlug}`,
          label,
          description,
          imageSrc,
        });
      }
    }

    return topics;
  }, [categories]);

  const testTopicsBySubject = useMemo(() => {
    const normalize = (s) => String(s ?? "").trim().toLowerCase();
    const groups = {
      women: { title: "Women", description: "", topics: [] },
      awareness: { title: "Real-world Awareness", description: "", topics: [] },
      emotionalIntelligence: {
        title: "Emotional Intelligence",
        description: "",
        topics: [],
      },
    };

    const rows = Array.isArray(categories) ? categories : [];

    for (const row of rows) {
      const titleRaw =
        row?.subject?.title != null ? String(row.subject.title) : "";
      const title = normalize(titleRaw);

      let key = null;
      if (title.includes("women")) key = "women";
      else if (title.includes("awareness")) key = "awareness";
      else if (title.includes("emotional")) key = "emotionalIntelligence";
      else if (normalize(row?.subject?.slug).includes("women")) key = "women";
      else if (normalize(row?.subject?.slug).includes("awareness"))
        key = "awareness";
      else if (normalize(row?.subject?.slug).includes("emotional"))
        key = "emotionalIntelligence";

      if (!key) continue;

      if (!groups[key].description && row?.subject?.description) {
        groups[key].description = String(row.subject.description);
      }

      const tests = Array.isArray(row?.tests) ? row.tests : [];
      for (const t of tests) {
        const testSlug =
          t?.id != null ? String(t.id) : String(t?.title || "test");
        const label = t?.title ? String(t.title) : "Test";
        const description = t?.description
          ? String(t.description)
          : titleRaw
            ? `Category: ${titleRaw}`
            : "Take a short multiple-choice check — results at the end.";
        const imageSrc =
          t?.thumbnail || row?.subject?.thumbnail || row?.subject?.image || null;

        groups[key].topics.push({
          href: `/test/${testSlug}`,
          label,
          description,
          imageSrc,
        });
      }
    }

    return groups;
  }, [categories]);

  return (
    <div className="w-full pb-12 pt-2 md:pt-4">
      <header className="relative mb-10 overflow-hidden rounded-3xl border border-[color:var(--border-light)] bg-[color:var(--bg-card)] shadow-[0_8px_30px_rgba(0,0,0,0.06)] md:mb-12">
        <div
          className="pointer-events-none absolute -right-16 top-0 h-48 w-48 rounded-full bg-[color:var(--color-primary)]/[0.08] blur-3xl"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute -bottom-20 left-10 h-40 w-40 rounded-full bg-[color:var(--color-secondary)]/25 blur-3xl"
          aria-hidden="true"
        />
        <div className="relative px-6 py-10 sm:px-8 sm:py-12 md:px-10 md:py-14">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[color:var(--color-primary)]">
            Knowledge checks
          </p>
          <h1 className="mt-3 text-[clamp(1.75rem,4vw,2.75rem)] font-bold leading-tight tracking-tight text-[color:var(--text-primary)]">
            Assessments
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-[color:var(--text-secondary)] sm:text-lg">
            Pick a topic below, answer the questions at your pace, and get your
            score when you finish. Each test is short — use them to see what you
            already know and what to study next.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <span className="inline-flex items-center rounded-full border border-[color:var(--border-light)] bg-[color:var(--bg-page)] px-4 py-2 text-sm font-medium text-[color:var(--text-primary)]">
              <span className="font-semibold text-[color:var(--color-primary)]">
                {testCount}
              </span>
              <span className="ml-1.5 text-[color:var(--text-secondary)]">
                tests
              </span>
            </span>
            <span className="inline-flex items-center rounded-full border border-[color:var(--border-light)] bg-[color:var(--bg-page)] px-4 py-2 text-sm font-medium text-[color:var(--text-primary)]">
              <span className="font-semibold text-[color:var(--color-primary)]">
                {categoryCount}
              </span>
              <span className="ml-1.5 text-[color:var(--text-secondary)]">
                categories
              </span>
            </span>
          </div>
        </div>
      </header>

      {error ? (
        <div className="mb-6 rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-800">
          {error}
        </div>
      ) : null}

      {loading ? (
        <div className="mt-2 text-center text-sm text-[color:var(--text-secondary)]">
          Loading assessments…
        </div>
      ) : categories.length === 0 ? (
        <div className="mt-2 text-center text-sm text-[color:var(--text-secondary)]">
          No assessments found.
        </div>
      ) : (
        <div className="space-y-10 md:space-y-12">
          {testTopicsBySubject.women.topics.length > 0 ? (
            <section className="space-y-4">
              <SubHeading
                eyebrow="Subject"
                title={testTopicsBySubject.women.title}
                description={testTopicsBySubject.women.description}
              />
              <TopicsCards
                topics={testTopicsBySubject.women.topics}
                basePath=""
              />
            </section>
          ) : null}

          {testTopicsBySubject.awareness.topics.length > 0 ? (
            <section className="space-y-4">
              <SubHeading
                eyebrow="Subject"
                title={testTopicsBySubject.awareness.title}
                description={testTopicsBySubject.awareness.description}
              />
              <TopicsCards
                topics={testTopicsBySubject.awareness.topics}
                basePath=""
              />
            </section>
          ) : null}

          {testTopicsBySubject.emotionalIntelligence.topics.length > 0 ? (
            <section className="space-y-4">
              <SubHeading
                eyebrow="Subject"
                title={testTopicsBySubject.emotionalIntelligence.title}
                description={testTopicsBySubject.emotionalIntelligence.description}
              />
              <TopicsCards
                topics={testTopicsBySubject.emotionalIntelligence.topics}
                basePath=""
              />
            </section>
          ) : null}
        </div>
      )}
    </div>
  );
}
