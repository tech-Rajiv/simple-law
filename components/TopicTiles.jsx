import Link from "next/link";

export default function TopicTiles({ basePath, tiles }) {
  return (
    <div className="mt-8">
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
        {tiles.map((t) => (
          <Link
            key={t.slug}
            href={`${basePath}/${t.slug}`}
            className="group rounded-xl border border-[color:var(--border-light)] bg-[color:var(--bg-card)] p-4 shadow-[var(--shadow-soft)] transition-colors hover:bg-[color:var(--hover-bg)]"
          >
            <div
              className={[
                "aspect-[4/3] w-full rounded-lg",
                "border border-[color:var(--border-light)]",
                "bg-[color:var(--hover-bg)]",
                t.thumbClass ?? "",
              ].join(" ")}
              aria-hidden="true"
            />
            <p className="mt-3 text-sm font-semibold text-[color:var(--text-primary)] group-hover:text-[color:var(--color-primary)]">
              {t.label}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}
