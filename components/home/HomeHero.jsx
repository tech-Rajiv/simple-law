'use client'
import Link from 'next/link'
import Image from 'next/image'

export default function HomeHero() {
  return (
    <section className="relative overflow-hidden rounded-3xl border border-[color:var(--border-light)] bg-[color:var(--bg-section)] shadow-[var(--shadow-soft)]">
      <div
        className="pointer-events-none absolute -top-24 -right-24 h-72 w-72 rounded-full opacity-40 blur-3xl"
        style={{ background: 'radial-gradient(circle, var(--color-secondary), transparent 60%)' }}
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -bottom-28 -left-28 h-80 w-80 rounded-full opacity-35 blur-3xl"
        style={{ background: 'radial-gradient(circle, var(--active-bg), transparent 55%)' }}
        aria-hidden="true"
      />

      <div className="grid grid-cols-1 items-center gap-10 p-6 md:grid-cols-12 md:p-12">
        <div className="md:col-span-6">
          <div className="inline-flex items-center gap-2 rounded-full border border-[color:var(--border-light)] bg-white/70 px-3 py-1 text-xs font-semibold text-[color:var(--text-secondary)] backdrop-blur">
            <span className="h-2 w-2 rounded-full bg-[color:var(--color-primary)]" aria-hidden="true" />
            SimpleLaw • Learn by quick self-checks
          </div>

          <h1 className="mt-4 text-4xl font-bold tracking-tight text-[color:var(--text-primary)] md:text-5xl">
            Real-life basics, explained simply.
          </h1>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-[color:var(--text-secondary)]">
            Build awareness and confidence with short quizzes on safety, emotional intelligence, social awareness, and
            women-focused issues. No sign-up — just learn, test, and improve.
          </p>

          <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a href="#take-test" className="btn-primary">
              Take a test
            </a>
            <Link href="/learning" className="btn-secondary">
              Learn (articles & topics)
            </Link>
          </div>

          <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
            <div className="rounded-2xl border border-[color:var(--border-light)] bg-white/70 p-3 backdrop-blur">
              <div className="text-lg font-semibold text-[color:var(--text-primary)]">4</div>
              <div className="text-xs text-[color:var(--text-secondary)]">Topic areas</div>
            </div>
            <div className="rounded-2xl border border-[color:var(--border-light)] bg-white/70 p-3 backdrop-blur">
              <div className="text-lg font-semibold text-[color:var(--text-primary)]">~10</div>
              <div className="text-xs text-[color:var(--text-secondary)]">Questions each</div>
            </div>
            <div className="rounded-2xl border border-[color:var(--border-light)] bg-white/70 p-3 backdrop-blur">
              <div className="text-lg font-semibold text-[color:var(--text-primary)]">Instant</div>
              <div className="text-xs text-[color:var(--text-secondary)]">Score + feedback</div>
            </div>
            <div className="rounded-2xl border border-[color:var(--border-light)] bg-white/70 p-3 backdrop-blur">
              <div className="text-lg font-semibold text-[color:var(--text-primary)]">Private</div>
              <div className="text-xs text-[color:var(--text-secondary)]">No account needed</div>
            </div>
          </div>
        </div>

        <div className="md:col-span-6">
          <div className="relative overflow-hidden rounded-3xl border border-[color:var(--border-light)] bg-white shadow-[var(--shadow-soft)]">
            <div className="relative aspect-[16/11] w-full">
              <Image
                src="/home/safety-rules.webp"
                alt="Learning safety rules"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
                priority
              />
              <div
                className="absolute inset-0"
                style={{
                  background: 'linear-gradient(180deg, rgba(0,0,0,0.0) 30%, rgba(0,0,0,0.22) 100%)',
                }}
                aria-hidden="true"
              />
            </div>

            <div className="absolute left-4 top-4 hidden w-[52%] rounded-2xl border border-[color:var(--border-light)] bg-white/85 p-3 shadow-[var(--shadow-soft)] backdrop-blur md:block">
              <div className="text-xs font-semibold text-[color:var(--text-primary)]">Get better, one quiz at a time</div>
              <div className="mt-1 text-[11px] leading-relaxed text-[color:var(--text-secondary)]">
                Each quiz focuses on practical scenarios—so you can spot signals early and respond with more clarity.
              </div>
            </div>

            <div className="absolute bottom-4 left-4 right-4 grid grid-cols-3 gap-3">
              <div className="rounded-2xl border border-[color:var(--border-light)] bg-white/85 p-3 shadow-[var(--shadow-soft)] backdrop-blur">
                <div className="text-xs font-semibold text-[color:var(--text-primary)]">Safety</div>
                <div className="mt-1 text-[11px] text-[color:var(--text-secondary)]">Boundaries + rules</div>
              </div>
              <div className="rounded-2xl border border-[color:var(--border-light)] bg-white/85 p-3 shadow-[var(--shadow-soft)] backdrop-blur">
                <div className="text-xs font-semibold text-[color:var(--text-primary)]">EQ</div>
                <div className="mt-1 text-[11px] text-[color:var(--text-secondary)]">Self-regulation</div>
              </div>
              <div className="rounded-2xl border border-[color:var(--border-light)] bg-white/85 p-3 shadow-[var(--shadow-soft)] backdrop-blur">
                <div className="text-xs font-semibold text-[color:var(--text-primary)]">Awareness</div>
                <div className="mt-1 text-[11px] text-[color:var(--text-secondary)]">Social signals</div>
              </div>
            </div>
          </div>

          <div className="mt-4 grid grid-cols-2 gap-3">
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-[color:var(--border-light)] bg-white shadow-[var(--shadow-soft)]">
              <Image
                src="/home/emotional-quotient2.png"
                alt="Emotional quotient"
                fill
                sizes="(max-width: 768px) 50vw, 25vw"
                className="object-cover"
              />
            </div>
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-[color:var(--border-light)] bg-white shadow-[var(--shadow-soft)]">
              <Image
                src="/home/awareness.png"
                alt="Awareness"
                fill
                sizes="(max-width: 768px) 50vw, 25vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

