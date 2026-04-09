import Link from "next/link";

export const metadata = {
  title: "Not Found",
};

export default function NotFound() {
  return (
    <div className="mx-auto w-full max-w-2xl rounded-xl border border-[color:var(--border-light)] bg-[color:var(--bg-card)] p-6 shadow-[var(--shadow-soft)]">
      <p className="text-sm font-medium text-[color:var(--text-muted)]">
        404
      </p>
      <h1 className="mt-2 text-2xl font-semibold text-[color:var(--text-primary)]">
        Page not found
      </h1>
      <p className="mt-2 text-sm leading-6 text-[color:var(--text-muted)]">
        The page you’re looking for doesn’t exist (or was moved).
      </p>

      <div className="mt-6 flex items-center gap-3">
        <Link href="/" className="btn-primary">
          Go home
        </Link>
        <Link
          href="/issues"
          className="rounded-lg border border-[color:var(--border-light)] bg-transparent px-4 py-2 text-sm font-medium text-[color:var(--text-primary)] hover:bg-[color:var(--hover-bg)]"
        >
          Open Issues
        </Link>
      </div>
    </div>
  );
}

