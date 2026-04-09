'use client'

export default function HomeHowItWorks() {
  return (
    <section id="how-it-works" className="scroll-mt-24">
      <div className="flex items-end justify-between gap-6">
        <div>
          <h2 className="text-2xl font-bold text-[color:var(--text-primary)]">How it works</h2>
          <p className="mt-2 text-sm text-[color:var(--text-secondary)]">Quick quizzes, simple scoring, and clear takeaways.</p>
        </div>
        <a href="#take-test" className="hidden sm:inline-flex btn-secondary">
          Start now
        </a>
      </div>

      <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-3">
        <div className="rounded-2xl border border-[color:var(--border-light)] bg-[color:var(--bg-card)] p-5 shadow-[var(--shadow-soft)]">
          <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-[color:var(--active-bg)] text-[color:var(--color-primary)] font-bold">
            1
          </div>
          <h3 className="mt-4 text-base font-semibold text-[color:var(--text-primary)]">Pick a topic</h3>
          <p className="mt-2 text-sm leading-relaxed text-[color:var(--text-secondary)]">
            Choose what you want to improve right now—safety, EQ, awareness, or women-focused issues.
          </p>
        </div>

        <div className="rounded-2xl border border-[color:var(--border-light)] bg-[color:var(--bg-card)] p-5 shadow-[var(--shadow-soft)]">
          <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-[color:var(--active-bg)] text-[color:var(--color-primary)] font-bold">
            2
          </div>
          <h3 className="mt-4 text-base font-semibold text-[color:var(--text-primary)]">Answer scenarios</h3>
          <p className="mt-2 text-sm leading-relaxed text-[color:var(--text-secondary)]">
            Learn through practical questions you can relate to—built to be fast, not overwhelming.
          </p>
        </div>

        <div className="rounded-2xl border border-[color:var(--border-light)] bg-[color:var(--bg-card)] p-5 shadow-[var(--shadow-soft)]">
          <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-[color:var(--active-bg)] text-[color:var(--color-primary)] font-bold">
            3
          </div>
          <h3 className="mt-4 text-base font-semibold text-[color:var(--text-primary)]">Get your score</h3>
          <p className="mt-2 text-sm leading-relaxed text-[color:var(--text-secondary)]">
            Submit and see your score instantly. Come back later and retake to track progress.
          </p>
        </div>
      </div>
    </section>
  )
}

