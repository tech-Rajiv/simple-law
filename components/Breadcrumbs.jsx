'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useMemo } from 'react'

function toLabel(segment) {
    if (!segment) return ''
    const fixed = segment === 'saftey' ? 'safety' : segment
    return fixed.replaceAll('-', ' ')
}

const HIDDEN_SEGMENTS = new Set(['fun'])

export default function Breadcrumbs() {
    const pathname = usePathname() || '/'

    const crumbs = useMemo(() => {
        const parts = pathname.split('?')[0].split('#')[0].split('/').filter(Boolean)
        const items = [{ href: '/', label: 'Home' }]

        let acc = ''
        for (const p of parts) {
            acc += '/' + p
            if (!HIDDEN_SEGMENTS.has(p)) {
                items.push({ href: acc, label: toLabel(p) })
            }
        }
        return items
    }, [pathname])

    if (crumbs.length <= 1) return null

    return (
        <nav aria-label="Breadcrumb" className="mb-6 text-sm">
            <ol className="flex flex-wrap items-center gap-x-2 gap-y-1 text-[color:var(--text-muted)] [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
                {crumbs.map((c, idx) => {
                    const isLast = idx === crumbs.length - 1
                    return (
                        <li key={c.href} className="flex items-center gap-2">
                            {idx > 0 ? (
                                <span aria-hidden="true" className="text-[color:var(--text-muted)]">
                                    /
                                </span>
                            ) : null}

                            {isLast ? (
                                <span className="max-w-[min(100%,18rem)] truncate font-medium capitalize text-[color:var(--text-primary)] sm:max-w-none">
                                    {c.label}
                                </span>
                            ) : (
                                <Link
                                    href={c.href}
                                    className="capitalize text-[color:var(--text-secondary)] underline-offset-4 hover:text-[color:var(--color-primary)] hover:underline"
                                >
                                    {c.label}
                                </Link>
                            )}
                        </li>
                    )
                })}
            </ol>
        </nav>
    )
}
