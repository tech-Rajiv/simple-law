'use client'
import Link from 'next/link'
import Image from 'next/image'

const FOOTER_LINKS = [
  {
    title: 'Explore',
    links: [
      { label: 'Home', href: '/' },
      { label: 'Assessments', href: '/assessment' },
      { label: 'Real-world Awareness', href: '/awareness' },
    ],
  },
  {
    title: 'Learning hubs',
    links: [
      { label: 'Emotional Intelligence', href: '/emotional-intelligence' },
      { label: 'Women', href: '/women' },
      { label: 'Complaint guide', href: '/complaint' },
    ],
  },
  {
    title: 'Support',
    links: [
      { label: 'WhatsApp support', href: 'https://wa.me/919998487424?text=Hi%20there%21' },
      { label: 'Complaint guide', href: '/complaint' },
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
              <div className="" aria-hidden="true">
                <Image
                  src="/home/brand/brand-logo.png"
                  alt="100xLife"
                  width={40}
                  height={40}
                  className="object-contain"
                />
              </div>
              <div>
                <div className="text-sm font-bold text-[color:var(--text-primary)]">100xLife</div>
                <div className="text-xs text-[color:var(--text-secondary)]">
                  Learn by quick self-checks
                </div>
              </div>
            </div>

            <p className="mt-4 text-sm leading-relaxed text-[color:var(--text-secondary)]">
              Short quizzes for emotional intelligence, awareness, and women-focused
              issues. Built for clarity and calm learning.
            </p>

            <div className="mt-5 flex flex-wrap gap-3">
              <Link href="/assessment" className="btn-primary">
                Take an assessment
              </Link>
              <Link href="/emotional-intelligence" className="btn-secondary">
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
          <div>© {new Date().getFullYear()} 100xLife. All rights reserved.</div>
          <div className="flex flex-wrap gap-x-4 gap-y-2">
            <a
              href="https://wa.me/919998487424?text=Hi%20there%21"
              target="_blank"
              rel="noreferrer"
              className="hover:text-[color:var(--color-primary)]"
            >
              WhatsApp support
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

