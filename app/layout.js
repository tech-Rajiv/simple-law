import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "SimpleLaw",
  description: "SimpleLaw",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <header className="border-b border-[color:var(--color-border)] bg-[color:var(--color-surface)]">
          <div className="mx-auto w-full max-w-6xl px-6 py-3">
            <div className="flex flex-col gap-3 md:flex-row md:items-center md:gap-4">
              <div className="flex flex-col gap-3 md:flex-row md:flex-1 md:items-center md:gap-4">
                <div className="flex items-center gap-2">
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

                <nav className="flex items-center gap-6 text-sm md:flex-1 md:justify-center">
                  <Link
                    href="#"
                    className="text-[color:var(--color-muted)] hover:text-[color:var(--color-primary)]"
                  >
                    demo head1
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
                <select
                  id="language"
                  defaultValue="en"
                  className="h-10 rounded-xl border border-[color:var(--color-border)] bg-[color:var(--color-surface)] px-3 text-sm text-[color:var(--color-text)] outline-none focus:border-[color:var(--color-primary)]"
                >
                  <option value="en">English</option>
                  <option value="hi">Hindi</option>
                </select>
              </div>
            </div>
          </div>
        </header>

        <main className="flex flex-1 flex-col">{children}</main>
      </body>
    </html>
  );
}
