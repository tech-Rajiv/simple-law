'use client'
import Link from 'next/link'
import Image from 'next/image'

const FOOTER_LINKS = [
  {
    title: 'Product',
    links: [
      { label: 'Take a test', href: '/#take-test' },
      { label: 'Topics', href: '/#topics' },
      { label: 'How it works', href: '/#how-it-works' },
    ],
  },
  {
    title: 'Explore',
    links: [
      { label: 'Safety', href: '/safety' },
      { label: 'Health', href: '/health' },
      { label: 'Learning', href: '/learning' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { label: 'FAQ', href: '/#faq' },
      { label: 'All tests', href: '/#take-test' },
      { label: 'Home', href: '/' },
    ],
  },
]

export default function Footer() {
  return (
    <footer className="mt-auto border-t border-[color:var(--border-light)] bg-[color:var(--bg-card)]">
      <div className="mx-auto w-full max-w-[1500px] px-5 py-10 md:px-6">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-12 md:items-start">
          <div className="md:col-span-4">
            <div className="flex items-center gap-3">
              <div className="relative h-10 w-10 overflow-hidden rounded-xl border border-[color:var(--border-light)] bg-[color:var(--bg-section)] shadow-[var(--shadow-soft)]">
                <Image
                  src="/home/awareness.png"
                  alt="SimpleLaw"
                  fill
                  sizes="40px"
                  className="object-cover"
                />
              </div>
              <div>
                <div className="text-sm font-bold text-[color:var(--text-primary)]">SimpleLaw</div>
                <div className="text-xs text-[color:var(--text-secondary)]">Learn by quick self-checks</div>
              </div>
            </div>

            <p className="mt-4 text-sm leading-relaxed text-[color:var(--text-secondary)]">
              Short quizzes for safety, emotional intelligence, awareness, and women-focused issues.
              Built for clarity and calm learning.
            </p>

            <div className="mt-5 flex flex-wrap gap-3">
              <Link href="/#take-test" className="btn-primary">
                Take a test
              </Link>
              <Link href="/#topics" className="btn-secondary">
                Explore topics
              </Link>
            </div>
          </div>

          <div className="md:col-span-8">
            <div className="grid grid-cols-2 gap-6 sm:grid-cols-3">
              {FOOTER_LINKS.map((col) => (
                <div key={col.title}>
                  <div className="text-sm font-semibold text-[color:var(--text-primary)]">{col.title}</div>
                  <ul className="mt-3 space-y-2">
                    {col.links.map((l) => (
                      <li key={l.href}>
                        <Link
                          href={l.href}
                          className="text-sm text-[color:var(--text-secondary)] hover:text-[color:var(--color-primary)]"
                        >
                          {l.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-2 border-t border-[color:var(--border-light)] pt-6 text-xs text-[color:var(--text-secondary)] sm:flex-row sm:items-center sm:justify-between">
          <div>© {new Date().getFullYear()} SimpleLaw. All rights reserved.</div>
          <div className="flex flex-wrap gap-x-4 gap-y-2">
            <Link href="/" className="hover:text-[color:var(--color-primary)]">
              Privacy
            </Link>
            <Link href="/" className="hover:text-[color:var(--color-primary)]">
              Terms
            </Link>
            <Link href="/" className="hover:text-[color:var(--color-primary)]">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

