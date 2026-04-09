'use client'
import Link from 'next/link'
import Image from 'next/image'

const TOPICS = [
  {
    key: 'safety',
    title: 'Safety',
    desc: 'Rules, boundaries, and safer decisions in daily life.',
    img: '/home/safety-rules.webp',
  },
  {
    key: 'eq',
    title: 'Emotional intelligence',
    desc: 'Understand emotions and respond with more control.',
    img: '/home/emotional-quotient3.webp',
  },
  {
    key: 'awareness',
    title: 'Social awareness',
    desc: 'Spot patterns, signals, and manipulation early.',
    img: '/home/social-awareness.webp',
  },
  {
    key: 'women',
    title: 'Women-focused issues',
    desc: 'Practical awareness for situations women commonly face.',
    img: '/home/women-raising-voice.jpg',
  },
]

export default function HomeTopicsV2() {
  return (
    <section id="topics" className="scroll-mt-24">
    

      <div className="mt-6 grid grid-cols-1 gap-4 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <div className="group relative overflow-hidden rounded-3xl border border-[color:var(--border-light)] bg-[color:var(--bg-card)] shadow-[var(--shadow-soft)]">
            <div className="relative aspect-[16/9] w-full">
              <Image
                src="/home/women-sad.webp"
                alt="Awareness and support"
                fill
                sizes="(max-width: 1024px) 100vw, 60vw"
                className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
              />
              <div
                className="absolute inset-0"
                style={{
                  background:
                    'linear-gradient(180deg, rgba(0,0,0,0.05) 0%, rgba(0,0,0,0.38) 100%)',
                }}
                aria-hidden="true"
              />
            </div>
            <div className="absolute left-5 top-5 rounded-2xl border border-white/25 bg-white/90 px-4 py-3 shadow-[var(--shadow-soft)] backdrop-blur">
              <div className="text-xs font-semibold text-[color:var(--text-primary)]">Start anywhere</div>
              <div className="mt-1 text-[11px] text-[color:var(--text-secondary)]">Short quizzes. Instant score.</div>
            </div>
            <div className="p-6">
              <div className="flex flex-wrap items-center gap-2">
                <span className="rounded-full border border-[color:var(--border-light)] bg-[color:var(--active-bg)] px-3 py-1 text-xs font-semibold text-[color:var(--text-primary)]">
                  Practical
                </span>
                <span className="rounded-full border border-[color:var(--border-light)] bg-[color:var(--bg-section)] px-3 py-1 text-xs font-semibold text-[color:var(--text-primary)]">
                  Private
                </span>
                <span className="rounded-full border border-[color:var(--border-light)] bg-[color:var(--bg-section)] px-3 py-1 text-xs font-semibold text-[color:var(--text-primary)]">
                  Mobile-friendly
                </span>
              </div>
              <h3 className="mt-4 text-lg font-semibold text-[color:var(--text-primary)]">Pick a topic. Take a quick test.</h3>
              <p className="mt-2 text-sm leading-relaxed text-[color:var(--text-secondary)]">
                You’ll see where you stand and what to improve, without reading long pages.
              </p>
            <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a href="#take-test" className="btn-primary">
                Take test
              </a>
              <Link href="/learning" className="btn-secondary">
                Learn more
              </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:col-span-5 lg:grid-cols-1">
          {TOPICS.map((t) => (
            <div
              key={t.key}
              className="group flex overflow-hidden rounded-3xl border border-[color:var(--border-light)] bg-[color:var(--bg-card)] shadow-[var(--shadow-soft)]"
            >
              <div className="relative w-32 shrink-0">
                <div className="relative h-full min-h-[112px] w-full">
                  <Image
                    src={t.img}
                    alt={t.title}
                    fill
                    sizes="(max-width: 768px) 30vw, 20vw"
                    className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                  />
                </div>
              </div>
              <div className="flex min-w-0 flex-1 flex-col justify-center gap-2 p-4">
                <div className="text-sm font-semibold text-[color:var(--text-primary)]">{t.title}</div>
                <div className="mt-1 text-xs leading-relaxed text-[color:var(--text-secondary)]">{t.desc}</div>
                <div className="mt-2 flex flex-wrap gap-2">
                  <a href="#take-test" className="btn-primary">
                    Take test
                  </a>
                  <Link href={t.key === 'safety' ? '/safety' : '/learning'} className="btn-secondary">
                    Learn
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

