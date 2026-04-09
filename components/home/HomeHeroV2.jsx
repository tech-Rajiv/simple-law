'use client'
import Link from 'next/link'
import Image from 'next/image'

export default function HomeHeroV2() {
  return (
    <section className="relative overflow-hidden rounded-3xl border border-[color:var(--border-light)] bg-[color:var(--bg-card)] shadow-[var(--shadow-soft)]">
      <div className="grid grid-cols-1 md:grid-cols-12">
        <div className="relative md:col-span-6">
          <div className="relative aspect-[16/12] w-full md:aspect-[16/14]">
            <Image
              src="/home/social-awareness.webp"
              alt="Learn social awareness"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
              priority
            />
            <div
              className="absolute inset-0"
              style={{
                background:
                  'linear-gradient(90deg, rgba(0,0,0,0.28) 0%, rgba(0,0,0,0.08) 60%, rgba(0,0,0,0.0) 100%)',
              }}
              aria-hidden="true"
            />
          </div>

          <div className="absolute left-5 top-5 rounded-2xl border border-white/30 bg-white/85 px-4 py-3 shadow-[var(--shadow-soft)] backdrop-blur">
            <div className="text-xs font-semibold text-[color:var(--color-primary)]">SimpleLaw</div>
            <div className="mt-0.5 text-[11px] text-[color:var(--text-secondary)]">Quick self-check quizzes</div>
          </div>

          <div className="absolute bottom-5 left-5 right-5 grid grid-cols-3 gap-3">
            <div className="rounded-2xl border border-white/30 bg-white/90 p-3 shadow-[var(--shadow-soft)] backdrop-blur">
              <div className="text-xs font-semibold text-[color:var(--text-primary)]">Safety</div>
              <div className="mt-1 text-[11px] text-[color:var(--text-secondary)]">Rules + boundaries</div>
            </div>
            <div className="rounded-2xl border border-white/30 bg-white/90 p-3 shadow-[var(--shadow-soft)] backdrop-blur">
              <div className="text-xs font-semibold text-[color:var(--text-primary)]">EQ</div>
              <div className="mt-1 text-[11px] text-[color:var(--text-secondary)]">Self-control</div>
            </div>
            <div className="rounded-2xl border border-white/30 bg-white/90 p-3 shadow-[var(--shadow-soft)] backdrop-blur">
              <div className="text-xs font-semibold text-[color:var(--text-primary)]">Awareness</div>
              <div className="mt-1 text-[11px] text-[color:var(--text-secondary)]">Social signals</div>
            </div>
          </div>
        </div>

        <div className="p-6 md:col-span-6 md:p-10">
          <div className="inline-flex items-center gap-2 rounded-full border border-[color:var(--border-light)] bg-[color:var(--bg-section)] px-3 py-1 text-xs font-semibold text-[color:var(--text-secondary)]">
            Built for quick learning
          </div>
          <h1 className="mt-4 text-4xl font-bold tracking-tight text-[color:var(--text-primary)] md:text-5xl">
            Learn what matters. <span className="text-[color:var(--color-primary)]">Fast.</span>
          </h1>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-[color:var(--text-secondary)]">
            Topic-based quizzes designed around real situations—so you can recognize patterns and make safer choices.
          </p>

          <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a href="#take-test" className="btn-primary">
              Take a test
            </a>
            <Link href="/learning" className="btn-secondary">
              Learn (articles & topics)
            </Link>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
            <div className="rounded-2xl border border-[color:var(--border-light)] bg-[color:var(--bg-section)] p-4">
              <div className="text-sm font-semibold text-[color:var(--text-primary)]">No sign-up</div>
              <div className="mt-1 text-xs text-[color:var(--text-secondary)]">Start instantly and get a score.</div>
            </div>
            <div className="rounded-2xl border border-[color:var(--border-light)] bg-[color:var(--bg-section)] p-4">
              <div className="text-sm font-semibold text-[color:var(--text-primary)]">Bite-sized</div>
              <div className="mt-1 text-xs text-[color:var(--text-secondary)]">Short quizzes that are easy to finish.</div>
            </div>
          </div>

          <div className="mt-8 grid grid-cols-2 gap-3">
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-[color:var(--border-light)] bg-[color:var(--bg-section)] shadow-[var(--shadow-soft)]">
              <Image
                src="/home/emotional-quotient1.jpeg"
                alt="Emotional quotient"
                fill
                sizes="(max-width: 768px) 50vw, 25vw"
                className="object-cover"
              />
            </div>
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-[color:var(--border-light)] bg-[color:var(--bg-section)] shadow-[var(--shadow-soft)]">
              <Image
                src="/home/safety.webp"
                alt="Safety learning"
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

