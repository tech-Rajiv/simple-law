'use client'

import { useCallback, useEffect, useState } from 'react'
import Header from './Header'
import Sidebar from './Sidebar'

export default function AppShell({ children }) {
    const [sidebarOpen, setSidebarOpen] = useState(false)

    const openSidebar = useCallback(() => setSidebarOpen(true), [])
    const closeSidebar = useCallback(() => setSidebarOpen(false), [])
    const toggleSidebar = useCallback(
        () => setSidebarOpen((v) => !v),
        []
    )

    useEffect(() => {
        function onKeyDown(e) {
            if (e.key === 'Escape') closeSidebar()
        }
        window.addEventListener('keydown', onKeyDown)
        return () => window.removeEventListener('keydown', onKeyDown)
    }, [closeSidebar])

    return (
        <div className="flex min-h-full flex-1 flex-col">
            <Header
                sidebarOpen={sidebarOpen}
                onToggleSidebar={toggleSidebar}
                onOpenSidebar={openSidebar}
                onCloseSidebar={closeSidebar}
            />

            {/* Drawer overlay (mobile only) */}
            <div
                className={[
                    'fixed inset-0 z-40 bg-black/30 transition-opacity md:hidden',
                    sidebarOpen ? 'opacity-100' : 'pointer-events-none opacity-0',
                ].join(' ')}
                onClick={closeSidebar}
                aria-hidden="true"
            />

            {/* Desktop sidebar edge toggle (below header) */}
            <button
                type="button"
                onClick={toggleSidebar}
                aria-expanded={sidebarOpen}
                aria-label="Toggle sidebar"
                className={[
                    'fixed z-30 hidden rounded-r-xl border border-[color:var(--color-border)] bg-[color:var(--color-surface)] px-2 py-3 text-sm font-semibold text-[color:var(--color-text)] shadow-sm hover:bg-[color:var(--color-background)] md:block',
                    'top-20',
                    'transition-[left] duration-200 ease-out',
                    sidebarOpen ? 'left-72' : 'left-0',
                ].join(' ')}
            >
                {sidebarOpen ? '<' : '>'}
            </button>

            {/* Desktop layout: sidebar on left edge, content shrinks */}
            <div className="hidden w-full flex-1 md:flex">
                <aside
                    className={[
                        'shrink-0 overflow-hidden border-r border-[color:var(--color-border)] bg-[color:var(--color-surface)]',
                        'transition-[width] duration-200 ease-out',
                        sidebarOpen ? 'w-72' : 'w-0',
                    ].join(' ')}
                    aria-hidden={!sidebarOpen}
                >
                    <div className="h-[calc(100vh-4rem)] ">
                        <Sidebar
                            onNavigate={closeSidebar}
                        />
                    </div>
                </aside>

                <main className="min-w-0 flex-1">
                    <div className="mx-auto w-full max-w-6xl px-6 py-4">
                        {children}
                    </div>
                </main>
            </div>

            {/* Mobile layout: drawer overlays content */}
            <div className="mx-auto flex w-full max-w-6xl flex-1 px-6 py-4 md:hidden">
                <main className="min-w-0 flex-1">{children}</main>
            </div>

            <aside
                className={[
                    'fixed left-0 top-0 z-50 h-dvh w-[18rem] max-w-[80vw] md:hidden',
                    'transition-transform duration-200 ease-out',
                    sidebarOpen ? 'translate-x-0' : '-translate-x-full',
                ].join(' ')}
            >
                <div className="h-full p-0">
                    <Sidebar onNavigate={closeSidebar} onClose={closeSidebar} />
                </div>
            </aside>
        </div>
    )
}

