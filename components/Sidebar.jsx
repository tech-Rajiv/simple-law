'use client'

import Link from 'next/link'

const items = [
    { href: '/', label: 'Home' },
    { href: '/issues', label: 'Issues' },
    { href: '#', label: 'demo head1' },
    { href: '#', label: 'demohead2' },
]

export default function Sidebar({ onNavigate, onClose }) {
    return (
        <div className="h-full rounded-r-2xl rounded-l-none border border-l-0 border-[color:var(--color-border)] bg-[color:var(--color-surface)] p-3 md:rounded-2xl md:border-l">
            <div className="flex items-center justify-between gap-2 px-2 py-2">
                <p className="text-sm font-semibold text-[color:var(--color-text)]">
                    Menu
                </p>
                <div className="flex items-center gap-2">
                    <span className="rounded-full bg-[color:var(--color-accent)]/15 px-2 py-0.5 text-xs font-medium text-[color:var(--color-accent)]">
                        SimpleLaw
                    </span>
                    {onClose ? (
                        <button
                            type="button"
                            onClick={onClose}
                            aria-label="Close sidebar"
                            className="inline-flex h-9 w-9 items-center justify-center rounded-xl border border-[color:var(--color-border)] bg-[color:var(--color-surface)] text-[color:var(--color-text)] hover:bg-[color:var(--color-background)] md:hidden"
                        >
                            <span className="text-lg leading-none">×</span>
                        </button>
                    ) : null}
                </div>
            </div>

            <nav className="mt-2 flex flex-col gap-1">
                {items.map((it) => (
                    <Link
                        key={it.label}
                        href={it.href}
                        onClick={onNavigate}
                        className="rounded-xl px-3 py-2 text-sm text-[color:var(--color-text)] hover:bg-[color:var(--color-background)]"
                    >
                        {it.label}
                    </Link>
                ))}
            </nav>
        </div>
    )
}

