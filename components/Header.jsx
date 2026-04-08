/* eslint-disable jsx-a11y/label-has-associated-control */
'use client'

import Link from 'next/link'
import React, { useState } from 'react'
export default function Header({ sidebarOpen, onToggleSidebar }) {
    const [language, setLanguage] = useState('en')
    return (

        <header className="border-b border-[color:var(--color-border)] bg-[color:var(--color-surface)]">
            <div className="mx-auto w-full  px-3 py-3">
                <div className="flex flex-col gap-3 md:flex-row md:items-center md:gap-4">
                    <div className="flex flex-col gap-3 md:flex-row md:flex-1 md:items-center md:gap-4">
                        <div className="flex items-center justify-between gap-2 md:justify-start">
                            <div className="flex items-center gap-2">
                                {/* Sidebar toggle (mobile only) */}
                                <button
                                    type="button"
                                    onClick={onToggleSidebar}
                                    aria-expanded={sidebarOpen}
                                    aria-label="Toggle sidebar"
                                    className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-[color:var(--color-border)] bg-[color:var(--color-surface)] text-[color:var(--color-text)] hover:bg-[color:var(--color-background)] md:hidden"
                                >
                                    <span className="text-lg leading-none">
                                        {sidebarOpen ? '×' : '≡'}
                                    </span>
                                </button>

                                <div
                                    className="h-5 w-5 rounded bg-[color:var(--color-secondary)]"
                                    aria-hidden="true"
                                />
                                <Link
                                    href="/"
                                    className="text-sm font-semibold tracking-tight text-[color:var(--color-text)]"
                                >
                                    SimpleLaw
                                </Link>
                            </div>
                        </div>

                        <nav className="flex items-center gap-6 overflow-x-auto whitespace-nowrap text-sm [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden md:flex-1 md:justify-center md:overflow-visible md:whitespace-normal">
                            <Link
                                href="#"
                                className="text-[color:var(--color-muted)] hover:text-[color:var(--color-primary)]"
                            >
                                demohead1
                            </Link>
                            <Link
                                href="#"
                                className="text-[color:var(--color-muted)] hover:text-[color:var(--color-primary)]"
                            >
                                demohead2
                            </Link>
                            <Link
                                href="#"
                                className="text-[color:var(--color-muted)] hover:text-[color:var(--color-primary)]"
                            >
                                demohead1
                            </Link>
                            <Link
                                href="#"
                                className="text-[color:var(--color-muted)] hover:text-[color:var(--color-primary)]"
                            >
                                demohead2
                            </Link>
                            <Link
                                href="#"
                                className="text-[color:var(--color-muted)] hover:text-[color:var(--color-primary)]"
                            >
                                demohead1
                            </Link>
                            <Link
                                href="#"
                                className="text-[color:var(--color-muted)] hover:text-[color:var(--color-primary)]"
                            >
                                demohead2
                            </Link>
                        </nav>
                    </div>

                    <div className="flex items-center gap-3 md:justify-end">
                        <label className="sr-only" htmlFor="site-search">
                            Search
                        </label>
                        <input
                            id="site-search"
                            placeholder="Search…"
                            className="h-10 w-full min-w-0 rounded-xl border border-[color:var(--color-border)] bg-[color:var(--color-surface)] px-3 text-sm text-[color:var(--color-text)] outline-none placeholder:text-[color:var(--color-muted)] focus:border-[color:var(--color-primary)] md:w-56"
                        />

                        <label className="sr-only" htmlFor="language">
                            Language
                        </label>
                        <div
                            className="flex h-10 items-center rounded-xl border border-[color:var(--color-border)] bg-[color:var(--color-surface)] p-1"
                            role="group"
                            aria-label="Language"
                        >
                            <button
                                type="button"
                                onClick={() => setLanguage('en')}
                                aria-pressed={language === 'en'}
                                className={[
                                    'h-8 rounded-lg px-3 text-sm font-medium transition-colors',
                                    language === 'en'
                                        ? 'bg-[color:var(--color-primary)] text-white'
                                        : 'text-[color:var(--color-text)] hover:bg-[color:var(--color-background)]',
                                ].join(' ')}
                            >
                                English
                            </button>
                            <button
                                type="button"
                                onClick={() => setLanguage('hi')}
                                aria-pressed={language === 'hi'}
                                className={[
                                    'h-8 rounded-lg px-3 text-sm font-medium transition-colors',
                                    language === 'hi'
                                        ? 'bg-[color:var(--color-primary)] text-white'
                                        : 'text-[color:var(--color-text)] hover:bg-[color:var(--color-background)]',
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