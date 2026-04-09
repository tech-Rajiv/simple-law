'use client'
import Link from 'next/link'
import Image from 'next/image'

export default function HomeFinalCta() {
  return (
    <section className="relative overflow-hidden rounded-3xl border border-[color:var(--border-light)] bg-[color:var(--bg-section)] shadow-[var(--shadow-soft)]">
      <div className="grid grid-cols-1 gap-8 p-6 md:grid-cols-12 md:items-center md:p-10">
        <div className="md:col-span-7">
          <div className="inline-flex items-center gap-2 rounded-full border border-[color:var(--border-light)] bg-white/70 px-3 py-1 text-xs font-semibold text-[color:var(--text-secondary)] backdrop-blur">
            Ready when you are
          </div>
          <h2 className="mt-4 text-2xl font-bold text-[color:var(--text-primary)] md:text-3xl">
            Take a quick quiz and see where you stand.
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-[color:var(--text-secondary)]">
            Choose a topic, answer a few questions, and get an instant score. It’s the easiest way to start improving
            awareness today.
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
        </div>

        <div className="md:col-span-5">
          <div className="relative aspect-[16/12] overflow-hidden rounded-3xl border border-[color:var(--border-light)] bg-white shadow-[var(--shadow-soft)]">
            <Image
              src="/home/emotional-quotient1.jpeg"
              alt="Learning emotional intelligence"
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

