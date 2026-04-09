'use client'
import Image from 'next/image'

const STATS = [
  { k: 'Fast', v: '5–8 min', d: 'Typical quiz time' },
  { k: 'Focused', v: '~10', d: 'Questions per test' },
  { k: 'Simple', v: 'Instant', d: 'Score after submit' },
]

export default function HomeSocialProofV2() {
  return (
    <section className="rounded-3xl border border-[color:var(--border-light)] bg-[color:var(--bg-card)] shadow-[var(--shadow-soft)] overflow-hidden">
      <div className="grid grid-cols-1 gap-8 p-6 md:grid-cols-12 md:items-center md:p-10">
        <div className="md:col-span-6">
          <h2 className="text-2xl font-bold text-[color:var(--text-primary)]">Designed to feel calm and clear</h2>
          <p className="mt-3 text-sm leading-relaxed text-[color:var(--text-secondary)]">
            SimpleLaw is built around small wins: answer a few questions, learn one idea, and repeat.
          </p>

          <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-3">
            {STATS.map((s) => (
              <div key={s.k} className="rounded-2xl border border-[color:var(--border-light)] bg-[color:var(--bg-section)] p-4">
                <div className="text-xs font-semibold text-[color:var(--text-secondary)]">{s.k}</div>
                <div className="mt-1 text-lg font-semibold text-[color:var(--text-primary)]">{s.v}</div>
                <div className="mt-1 text-[11px] text-[color:var(--text-secondary)]">{s.d}</div>
              </div>
            ))}
          </div>

          <div className="mt-7 rounded-3xl border border-[color:var(--border-light)] bg-white p-5 shadow-[var(--shadow-soft)]">
            <div className="text-xs font-semibold text-[color:var(--color-primary)]">What learners say</div>
            <p className="mt-2 text-sm leading-relaxed text-[color:var(--text-secondary)]">
              “The questions feel real. It helped me pause and think before reacting.”
            </p>
            <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a href="#take-test" className="btn-primary">
                Take a test
              </a>
              <a href="#topics" className="btn-secondary">
                Explore topics
              </a>
            </div>
          </div>
        </div>

        <div className="md:col-span-6">
          <div className="grid grid-cols-12 gap-4">
            <div className="relative col-span-7 aspect-[4/5] overflow-hidden rounded-3xl border border-[color:var(--border-light)] bg-[color:var(--bg-section)] shadow-[var(--shadow-soft)]">
              <Image
                src="/home/women-stressed.jpg"
                alt="Support and learning"
                fill
                sizes="(max-width: 768px) 100vw, 40vw"
                className="object-cover"
              />
            </div>
            <div className="relative col-span-5 aspect-[4/5] overflow-hidden rounded-3xl border border-[color:var(--border-light)] bg-[color:var(--bg-section)] shadow-[var(--shadow-soft)]">
              <Image
                src="/home/awareness.png"
                alt="Awareness"
                fill
                sizes="(max-width: 768px) 100vw, 30vw"
                className="object-cover"
              />
            </div>
            <div className="relative col-span-12 aspect-[16/7] overflow-hidden rounded-3xl border border-[color:var(--border-light)] bg-[color:var(--bg-section)] shadow-[var(--shadow-soft)]">
              <Image
                src="/home/emotional-quotient2.png"
                alt="Emotional intelligence"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

