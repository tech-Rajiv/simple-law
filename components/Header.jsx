'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useState } from 'react'

const NAV = [

    { href: '/safety', label: 'Safety' },
    { href: '/health', label: 'Health' },
    { href: '/learning', label: 'Learning' },
]

function navLinkClass(pathname, href) {
    const active =
        href === '/'
            ? pathname === '/'
            : pathname === href || pathname.startsWith(href + '/')
    return [
        'whitespace-nowrap border-b-2 pb-2.5 text-sm font-medium transition-colors',
        active
            ? 'border-[color:var(--color-primary)] text-[color:var(--color-primary)]'
            : 'border-transparent text-[color:var(--text-secondary)] hover:text-[color:var(--text-primary)]',
    ].join(' ')
}

export default function Header({ sidebarOpen, onToggleSidebar }) {
    const pathname = usePathname() || '/'
    const [language, setLanguage] = useState('en')

    return (
        <header className="border-b border-[color:var(--border-light)] bg-[color:var(--bg-card)]">
            <div className="mx-auto w-full max-w-[1800px] px-5 py-4 md:px-6">
                <div className="flex flex-col gap-5 md:flex-row md:items-center md:gap-6">
                    <div className="flex flex-col gap-5 md:flex-row md:flex-1 md:items-center md:gap-8">
                        <div className="flex items-center justify-between gap-3 md:justify-start">
                            <div className="flex items-center gap-3">
                                {/* <button
                                    type="button"
                                    onClick={onToggleSidebar}
                                    aria-expanded={sidebarOpen}
                                    aria-label="Toggle sidebar"
                                    className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-[color:var(--border-light)] bg-transparent text-[color:var(--text-primary)] hover:bg-[color:var(--hover-bg)] md:hidden"
                                >
                                    <span className="text-lg leading-none">
                                        {sidebarOpen ? '×' : '≡'}
                                    </span>
                                </button> */}

                                <div
                                    className="h-5 w-5 shrink-0 rounded-sm border-2 border-[color:var(--color-primary)] bg-transparent"
                                    aria-hidden="true"
                                />
                                <Link
                                    href="/"
                                    className="text-base font-semibold tracking-tight text-[color:var(--text-primary)]"
                                >
                                    SimpleLaw
                                </Link>
                            </div>
                        </div>

                        <nav
                            aria-label="Main"
                            className="flex items-center gap-8 overflow-x-auto pb-px [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden md:flex-1 md:justify-center"
                        >
                            {NAV.map(({ href, label }) => (
                                <Link
                                    key={href}
                                    href={href}
                                    className={navLinkClass(pathname, href)}
                                >
                                    {label}
                                </Link>
                            ))}
                        </nav>
                    </div>

                    <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-end md:gap-5">
                        <label className="sr-only" htmlFor="site-search">
                            Search
                        </label>
                        <input
                            id="site-search"
                            placeholder="Search…"
                            className="h-10 w-full min-w-0 rounded-lg border border-[color:var(--border-light)] bg-[color:var(--bg-card)] px-4 py-2 text-sm text-[color:var(--text-primary)] outline-none placeholder:text-[color:var(--text-muted)] focus:border-[color:var(--border-active)] md:w-56"
                        />

                        <label className="sr-only" htmlFor="language-en">
                            Language
                        </label>
                        <div
                            className="flex h-10 shrink-0 items-stretch gap-6 border-b border-[color:var(--border-light)]"
                            role="group"
                            aria-label="Language"
                        >
                            <button
                                id="language-en"
                                type="button"
                                onClick={() => setLanguage('en')}
                                aria-pressed={language === 'en'}
                                className={[
                                    '-mb-px border-b-2 pb-2 text-sm font-medium transition-colors',
                                    language === 'en'
                                        ? 'border-[color:var(--color-primary)] text-[color:var(--color-primary)]'
                                        : 'border-transparent text-[color:var(--text-secondary)] hover:text-[color:var(--text-primary)]',
                                ].join(' ')}
                            >
                                English
                            </button>
                            <button
                                type="button"
                                onClick={() => setLanguage('hi')}
                                aria-pressed={language === 'hi'}
                                className={[
                                    '-mb-px border-b-2 pb-2 text-sm font-medium transition-colors',
                                    language === 'hi'
                                        ? 'border-[color:var(--color-primary)] text-[color:var(--color-primary)]'
                                        : 'border-transparent text-[color:var(--text-secondary)] hover:text-[color:var(--text-primary)]',
                                ].join(' ')}
                            >
                                Hindi
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}
