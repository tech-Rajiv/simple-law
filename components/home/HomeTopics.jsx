'use client'
import Link from 'next/link'
import Image from 'next/image'

export default function HomeTopics() {
  return (
    <section id="topics" className="scroll-mt-24">
      <div className="flex items-end justify-between gap-6">
        <div>
          <h2 className="text-2xl font-bold text-[color:var(--text-primary)]">Topics you can explore</h2>
          <p className="mt-2 text-sm text-[color:var(--text-secondary)]">Start with the area that matters most to you today.</p>
        </div>
        <a href="#take-test" className="hidden sm:inline-flex btn-primary">
          Take a test
        </a>
      </div>

      <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2">
        <div className="group overflow-hidden rounded-2xl border border-[color:var(--border-light)] bg-[color:var(--bg-card)] shadow-[var(--shadow-soft)] transition-transform md:hover:-translate-y-0.5">
          <div className="relative aspect-[16/9] w-full bg-[color:var(--bg-section)]">
            <Image
              src="/home/safety.webp"
              alt="Safety"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
            />
          </div>
          <div className="p-5">
            <h3 className="text-base font-semibold text-[color:var(--text-primary)]">Safety</h3>
            <p className="mt-2 text-sm text-[color:var(--text-secondary)]">
              Basics you can apply immediately: boundaries, safe decisions, and common red flags.
            </p>
            <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a href="#take-test" className="btn-primary">
                Take test
              </a>
              <Link href="/safety" className="btn-secondary">
                Learn safety
              </Link>
            </div>
          </div>
        </div>

        <div className="group overflow-hidden rounded-2xl border border-[color:var(--border-light)] bg-[color:var(--bg-card)] shadow-[var(--shadow-soft)] transition-transform md:hover:-translate-y-0.5">
          <div className="relative aspect-[16/9] w-full bg-[color:var(--bg-section)]">
            <Image
              src="/home/emotional-quotient3.webp"
              alt="Emotional intelligence"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
            />
          </div>
          <div className="p-5">
            <h3 className="text-base font-semibold text-[color:var(--text-primary)]">Emotional intelligence</h3>
            <p className="mt-2 text-sm text-[color:var(--text-secondary)]">
              Understand emotions, improve communication, and build better self-control in tough moments.
            </p>
            <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a href="#take-test" className="btn-primary">
                Take test
              </a>
              <Link href="/learning" className="btn-secondary">
                Learn more
              </Link>
            </div>
          </div>
        </div>

        <div className="group overflow-hidden rounded-2xl border border-[color:var(--border-light)] bg-[color:var(--bg-card)] shadow-[var(--shadow-soft)] transition-transform md:hover:-translate-y-0.5">
          <div className="relative aspect-[16/9] w-full bg-[color:var(--bg-section)]">
            <Image
              src="/home/social-awareness.webp"
              alt="Social awareness"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
            />
          </div>
          <div className="p-5">
            <h3 className="text-base font-semibold text-[color:var(--text-primary)]">Social awareness</h3>
            <p className="mt-2 text-sm text-[color:var(--text-secondary)]">
              Read situations better, spot manipulation, and respond with more confidence.
            </p>
            <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a href="#take-test" className="btn-primary">
                Take test
              </a>
              <Link href="/learning" className="btn-secondary">
                Learn more
              </Link>
            </div>
          </div>
        </div>

        <div className="group overflow-hidden rounded-2xl border border-[color:var(--border-light)] bg-[color:var(--bg-card)] shadow-[var(--shadow-soft)] transition-transform md:hover:-translate-y-0.5">
          <div className="relative aspect-[16/9] w-full bg-[color:var(--bg-section)]">
            <Image
              src="/home/women-sad.webp"
              alt="Women-focused issues"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
            />
          </div>
          <div className="p-5">
            <h3 className="text-base font-semibold text-[color:var(--text-primary)]">Women-focused issues</h3>
            <p className="mt-2 text-sm text-[color:var(--text-secondary)]">
              Awareness and safety around situations women commonly face—quick, respectful, and practical.
            </p>
            <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:items-center">
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
    </section>
  )
}

