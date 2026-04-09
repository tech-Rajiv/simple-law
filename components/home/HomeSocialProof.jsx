'use client'
import Link from 'next/link'
import Image from 'next/image'

const QUOTES = [
  {
    title: 'More aware',
    quote: 'I started noticing patterns I used to ignore — and that helped me respond calmly.',
  },
  {
    title: 'Clear + fast',
    quote: 'Short quizzes make it easy to learn without feeling overwhelmed.',
  },
  {
    title: 'Practical',
    quote: 'It feels grounded in real-life situations — that’s what I needed.',
  },
]

export default function HomeSocialProof() {
  return (
    <section className="rounded-3xl border border-[color:var(--border-light)] bg-[color:var(--bg-section)] shadow-[var(--shadow-soft)] overflow-hidden">
      <div className="grid grid-cols-1 gap-8 p-6 md:grid-cols-12 md:items-center md:p-10">
        <div className="md:col-span-5">
          <h2 className="text-2xl font-bold text-[color:var(--text-primary)]">Small learning, big confidence</h2>
          <p className="mt-3 text-sm leading-relaxed text-[color:var(--text-secondary)]">
            A calm, simple space to practice understanding situations — and build better instincts over time.
          </p>

          <div className="mt-6 flex flex-col gap-3">
            <div className="rounded-2xl border border-[color:var(--border-light)] bg-white/80 p-4 backdrop-blur">
              <div className="text-sm font-semibold text-[color:var(--text-primary)]">Private by default</div>
              <div className="mt-1 text-xs text-[color:var(--text-secondary)]">No account needed. Start instantly.</div>
            </div>
            <div className="rounded-2xl border border-[color:var(--border-light)] bg-white/80 p-4 backdrop-blur">
              <div className="text-sm font-semibold text-[color:var(--text-primary)]">Designed for real life</div>
              <div className="mt-1 text-xs text-[color:var(--text-secondary)]">Short scenarios you can recognize.</div>
            </div>
          </div>

          <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a href="#take-test" className="btn-primary">
              Take a test
            </a>
            <Link href="/learning" className="btn-secondary">
              Learn more
            </Link>
          </div>
        </div>

        <div className="md:col-span-7">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div className="relative overflow-hidden rounded-3xl border border-[color:var(--border-light)] bg-white shadow-[var(--shadow-soft)] md:row-span-2">
              <div className="relative aspect-[4/3] w-full">
                <Image
                  src="/home/women-raising-voice.jpg"
                  alt="Confidence and voice"
                  fill
                  sizes="(max-width: 768px) 100vw, 40vw"
                  className="object-cover"
                />
              </div>
              <div className="p-5">
                <div className="text-sm font-semibold text-[color:var(--text-primary)]">Practice spotting signals</div>
                <div className="mt-2 text-xs leading-relaxed text-[color:var(--text-secondary)]">
                  Build awareness through repeated, bite-sized checks. The goal is progress — not perfection.
                </div>
                <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:items-center">
                  <a href="#take-test" className="btn-primary">
                    Take a test
                  </a>
                  <Link href="/safety" className="btn-secondary">
                    Learn safety
                  </Link>
                </div>
              </div>
            </div>

            {QUOTES.map((q) => (
              <div
                key={q.title}
                className="rounded-3xl border border-[color:var(--border-light)] bg-white/80 p-5 shadow-[var(--shadow-soft)] backdrop-blur"
              >
                <div className="text-xs font-semibold text-[color:var(--color-primary)]">{q.title}</div>
                <p className="mt-2 text-sm leading-relaxed text-[color:var(--text-secondary)]">“{q.quote}”</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

