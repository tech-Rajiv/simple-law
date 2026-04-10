'use client'

import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useState } from 'react'

const NAV = [
    { href: '/', label: 'Home' },
    { href: '/assessment', label: 'All Assessments' },
    { href: '/emotional-intelligence', label: 'Emotional Intelligence' },
    { href: '/women', label: 'Women' },
    { href: '/safety', label: 'Safety' },
    { href: '/awareness', label: 'Real-world Awareness' },
    { href: '/complaint', label: 'Complaint guide' },
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
              

                                <div
                                    className=""
                                    aria-hidden="true"
                                >
                                    <Image src="/home/brand/brand-logo.png" alt="100xLife" width={40} height={40} className="object-contain" />
                                </div>
                                <Link
                                    href="/"
                                    className="text-base font-semibold tracking-tight text-[color:var(--text-primary)]"
                                >
                                    100xLife
                                </Link>
                            </div>
                            <div className="flex  lg:hidden items-center justify-end">
                        <a
                            href="https://wa.me/919998487424?text=Hi%20there%21"
                            target="_blank"
                            rel="noreferrer"
                            aria-label="WhatsApp support: +91 9998487424"
                            className="inline-flex items-center gap-2 rounded-lg border border-[color:var(--border-light)] bg-transparent px-3 py-2 text-sm font-medium text-[color:var(--text-primary)] hover:bg-[color:var(--hover-bg)]"
                        >
                            <Image src="/images/whatsapp.png" alt="WhatsApp" width={20} height={20} className="object-contain" />
                            <span className="whitespace-nowrap"> support</span>
                        </a>
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

                    <div className="flex hidden lg:flex items-center justify-end">
                        <a
                            href="https://wa.me/919998487424?text=Hi%20there%21"
                            target="_blank"
                            rel="noreferrer"
                            aria-label="WhatsApp support: +91 9998487424"
                            className="inline-flex items-center gap-2 rounded-lg border border-[color:var(--border-light)] bg-transparent px-3 py-2 text-sm font-medium text-[color:var(--text-primary)] hover:bg-[color:var(--hover-bg)]"
                        >
                            <Image src="/images/whatsapp.png" alt="WhatsApp" width={20} height={20} className="object-contain" />
                            <span className="whitespace-nowrap">WhatsApp support</span>
                        </a>
                    </div>


                  
                </div>
            </div>
        </header>
    )
}
