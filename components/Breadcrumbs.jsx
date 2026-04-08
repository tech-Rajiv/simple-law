'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useMemo } from 'react'

function toLabel(segment) {
    if (!segment) return ''
    const fixed = segment === 'saftey' ? 'safety' : segment
    return fixed.replaceAll('-', ' ')
}

const SIDEBAR_GROUP_SEGMENTS = new Set(['saftey', 'health', 'learning', 'fun'])

export default function Breadcrumbs() {
    const pathname = usePathname() || '/'

    const crumbs = useMemo(() => {
        const parts = pathname.split('?')[0].split('#')[0].split('/').filter(Boolean)
        const items = [{ href: '/', label: 'Home' }]

        let acc = ''
        for (const p of parts) {
            acc += '/' + p
            // Hide sidebar "group" segments (they don't have pages yet)
            if (!SIDEBAR_GROUP_SEGMENTS.has(p)) {
                items.push({ href: acc, label: toLabel(p) })
            }
        }
        return items
    }, [pathname])

    if (crumbs.length <= 1) return null

    return (
        <nav aria-label="Breadcrumb" className="text-sm">
            <div className="mx-auto w-full max-w-6xl px-6 py-3">
                <ol className="flex items-center gap-2 overflow-x-auto whitespace-nowrap text-[color:var(--color-muted)] [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
                    {crumbs.map((c, idx) => {
                        const isLast = idx === crumbs.length - 1
                        return (
                            <li key={c.href} className="flex items-center gap-2">
                                {idx > 0 ? (
                                    <span aria-hidden="true" className="opacity-60">
                                        ›
                                    </span>
                                ) : null}

                                {isLast ? (
                                    <span className="max-w-[55vw] truncate font-medium capitalize text-[color:var(--color-text)] md:max-w-none">
                                        {c.label}
                                    </span>
                                ) : (
                                    <Link
                                        href={c.href}
                                        className="capitalize hover:text-[color:var(--color-primary)]"
                                    >
                                        {c.label}
                                    </Link>
                                )}
                            </li>
                        )
                    })}
                </ol>
            </div>
        </nav>
    )
}

