'use client'
import Link from 'next/link'
import Image from 'next/image'

export default function HomeFinalCtaV2() {
  return (
    <section className="rounded-3xl border border-[color:var(--border-light)] bg-[color:var(--bg-card)] shadow-[var(--shadow-soft)] overflow-hidden">
      <div className="grid grid-cols-1 md:grid-cols-12">
        <div className="p-6 md:col-span-7 md:p-10">
          <div className="inline-flex items-center gap-2 rounded-full border border-[color:var(--border-light)] bg-[color:var(--bg-section)] px-3 py-1 text-xs font-semibold text-[color:var(--text-secondary)]">
            Final step
          </div>
          <h2 className="mt-4 text-2xl font-bold text-[color:var(--text-primary)] md:text-3xl">
            Start with one quiz today.
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-[color:var(--text-secondary)]">
            Pick a topic you care about, answer a few questions, and get a score instantly. You can retake anytime.
          </p>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a href="#take-test" className="btn-primary">
              Take a test
            </a>
            <a href="#how-it-works" className="btn-secondary">
              How it works
            </a>
            <Link href="/learning" className="btn-secondary">
              Learn more
            </Link>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
            <div className="rounded-2xl border border-[color:var(--border-light)] bg-[color:var(--bg-section)] p-4">
              <div className="text-sm font-semibold text-[color:var(--text-primary)]">Fast feedback</div>
              <div className="mt-1 text-xs text-[color:var(--text-secondary)]">See your score right away.</div>
            </div>
            <div className="rounded-2xl border border-[color:var(--border-light)] bg-[color:var(--bg-section)] p-4">
              <div className="text-sm font-semibold text-[color:var(--text-primary)]">Repeatable</div>
              <div className="mt-1 text-xs text-[color:var(--text-secondary)]">Retake to build confidence.</div>
            </div>
          </div>
        </div>

        <div className="relative md:col-span-5">
          <div className="relative aspect-[16/11] w-full md:aspect-[4/5]">
            <Image
              src="/home/women-raising-voice.jpg"
              alt="Confidence"
              fill
              sizes="(max-width: 768px) 100vw, 40vw"
              className="object-cover"
            />
          </div>
          <div
            className="absolute inset-0"
            style={{
              background:
                'linear-gradient(90deg, rgba(255,255,255,0.85) 0%, rgba(255,255,255,0.0) 55%)',
            }}
            aria-hidden="true"
          />
        </div>
      </div>
    </section>
  )
}

