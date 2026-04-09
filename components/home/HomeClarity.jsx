'use client'
import Link from 'next/link'
import Image from 'next/image'

export default function HomeClarity() {
  return (
    <section className="rounded-3xl border border-[color:var(--border-light)] bg-[color:var(--bg-card)] p-6 shadow-[var(--shadow-soft)] md:p-10">
      <div className="grid grid-cols-1 gap-8 md:grid-cols-12 md:items-center">
        <div className="md:col-span-7">
          <h2 className="text-2xl font-bold text-[color:var(--text-primary)]">Built for clarity, not confusion</h2>
          <p className="mt-3 text-sm leading-relaxed text-[color:var(--text-secondary)]">
            This is meant to be simple and approachable: short quizzes, clear language, and no distractions. Use it as a
            starting point to learn concepts and reflect on everyday situations.
          </p>
          <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
            <div className="rounded-2xl border border-[color:var(--border-light)] bg-[color:var(--bg-section)] p-4">
              <div className="text-sm font-semibold text-[color:var(--text-primary)]">Short + focused</div>
              <div className="mt-1 text-xs text-[color:var(--text-secondary)]">No long lessons — just key ideas.</div>
            </div>
            <div className="rounded-2xl border border-[color:var(--border-light)] bg-[color:var(--bg-section)] p-4">
              <div className="text-sm font-semibold text-[color:var(--text-primary)]">Practical examples</div>
              <div className="mt-1 text-xs text-[color:var(--text-secondary)]">Designed around real scenarios.</div>
            </div>
            <div className="rounded-2xl border border-[color:var(--border-light)] bg-[color:var(--bg-section)] p-4">
              <div className="text-sm font-semibold text-[color:var(--text-primary)]">Instant results</div>
              <div className="mt-1 text-xs text-[color:var(--text-secondary)]">Get feedback right after you finish.</div>
            </div>
            <div className="rounded-2xl border border-[color:var(--border-light)] bg-[color:var(--bg-section)] p-4">
              <div className="text-sm font-semibold text-[color:var(--text-primary)]">Works on mobile</div>
              <div className="mt-1 text-xs text-[color:var(--text-secondary)]">Tap-friendly and readable.</div>
            </div>
          </div>
          <div className="mt-7">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <a href="#take-test" className="btn-primary">
                Take a test
              </a>
              <Link href="/learning" className="btn-secondary">
                Learn more
              </Link>
            </div>
          </div>
        </div>

        <div className="md:col-span-5">
          <div className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-[color:var(--border-light)] bg-[color:var(--bg-section)] shadow-[var(--shadow-soft)]">
            <Image
              src="/home/women-stressed.jpg"
              alt="Learning and support"
              fill
              sizes="(max-width: 768px) 100vw, 40vw"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

