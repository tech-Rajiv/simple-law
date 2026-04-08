import Link from "next/link";

export default function TopicTiles({ basePath, tiles }) {
  return (
    <div className="mt-6">
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
        {tiles.map((t) => (
          <Link
            key={t.slug}
            href={`${basePath}/${t.slug}`}
            className="group rounded-2xl border border-[color:var(--color-border)] bg-[color:var(--color-surface)] p-3 shadow-sm hover:bg-[color:var(--color-background)]"
          >
            <div
              className={[
                "aspect-[4/3] w-full rounded-xl",
                "border border-[color:var(--color-border)]",
                t.bg,
              ].join(" ")}
              aria-hidden="true"
            />
            <p className="mt-2 text-sm font-semibold text-[color:var(--color-text)] group-hover:text-[color:var(--color-primary)]">
              {t.label}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}

