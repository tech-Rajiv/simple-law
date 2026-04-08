import Link from "next/link";

export const metadata = {
  title: "Not Found",
};

export default function NotFound() {
  return (
    <div className="mx-auto w-full max-w-2xl rounded-3xl bg-[color:var(--color-surface)] p-8 shadow-sm">
      <p className="text-sm font-medium text-[color:var(--color-secondary)]">
        404
      </p>
      <h1 className="mt-2 text-2xl font-semibold text-[color:var(--color-text)]">
        Page not found
      </h1>
      <p className="mt-2 text-sm leading-6 text-[color:var(--color-muted)]">
        The page you’re looking for doesn’t exist (or was moved).
      </p>

      <div className="mt-6 flex items-center gap-3">
        <Link
          href="/"
          className="rounded-xl bg-[color:var(--color-primary)] px-4 py-2 text-sm font-medium text-white"
        >
          Go home
        </Link>
        <Link
          href="/issues"
          className="rounded-xl border border-[color:var(--color-border)] bg-[color:var(--color-surface)] px-4 py-2 text-sm font-medium text-[color:var(--color-text)] hover:bg-[color:var(--color-background)]"
        >
          Open Issues
        </Link>
      </div>
    </div>
  );
}

