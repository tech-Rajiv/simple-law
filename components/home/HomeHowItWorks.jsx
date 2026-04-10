'use client'

import SubHeading from "../shared/SubHeading"

export default function HomeHowItWorks() {
  return (
    <section id="how-it-works" className="scroll-mt-12">
      <div className="flex items-end justify-between gap-6">
       <SubHeading title="How it works" description="Understand, test, and improve yourself in just a few steps." />
       
      </div>

      <div className=" grid grid-cols-1 gap-4 md:grid-cols-2">
        <div className="rounded-2xl border border-[color:var(--border-light)] bg-[color:var(--bg-card)] p-5 shadow-[var(--shadow-soft)]">
          <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-[color:var(--bg-section)] text-[color:var(--color-primary)] font-bold">
            1
          </div>
          <h3 className="mt-4 text-base font-semibold text-[color:var(--text-primary)]">Learn</h3>
          <p className="mt-2 text-sm leading-relaxed text-[color:var(--text-secondary)]">
          Explore topics like emotional intelligence, safety, fitness, and real-world awareness.
          Get practical knowledge that actually helps in daily life.
          </p>
        </div>

        <div className="rounded-2xl border border-[color:var(--border-light)] bg-[color:var(--bg-card)] p-5 shadow-[var(--shadow-soft)]">
          <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-[color:var(--bg-section)] text-[color:var(--color-primary)] font-bold">
            2
          </div>
          <h3 className="mt-4 text-base font-semibold text-[color:var(--text-primary)]">Take a test</h3>
          <p className="mt-2 text-sm leading-relaxed text-[color:var(--text-secondary)]">
          Assess your understanding through simple, topic-based questions.
          Find out how well you truly know the subject.
          </p>
        </div>

        <div className="rounded-2xl border border-[color:var(--border-light)] bg-[color:var(--bg-card)] p-5 shadow-[var(--shadow-soft)]">
          <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-[color:var(--bg-section)] text-[color:var(--color-primary)] font-bold">
            3
          </div>
          <h3 className="mt-4 text-base font-semibold text-[color:var(--text-primary)]">Get your score</h3>
          <p className="mt-2 text-sm leading-relaxed text-[color:var(--text-secondary)]">
          See your performance instantly with clear insights.
          Understand your strengths and where you need improvement.
          </p>
        </div>
        <div className="rounded-2xl border border-[color:var(--border-light)] bg-[color:var(--bg-card)] p-5 shadow-[var(--shadow-soft)]">
          <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-[color:var(--bg-section)] text-[color:var(--color-primary)] font-bold">
            4
          </div>
          <h3 className="mt-4 text-base font-semibold text-[color:var(--text-primary)]">Improve</h3>
          <p className="mt-2 text-sm leading-relaxed text-[color:var(--text-secondary)]">
          Go back, learn more, and retake tests to grow continuously.
          Track your progress over time.
          </p>
        </div>
      </div>
    </section>
  )
}

