import Link from "next/link";
import Image from "next/image";
import React from "react";

function joinHref(basePath, hrefOrSlug) {
  const base = String(basePath ?? "").trim();
  const raw = String(hrefOrSlug ?? "").trim();
  if (!raw) return base || "/";
  if (raw.startsWith("/")) return raw;
  if (!base) return raw.startsWith("/") ? raw : `/${raw}`;
  const b = base.endsWith("/") ? base.slice(0, -1) : base;
  const r = raw.startsWith("/") ? raw.slice(1) : raw;
  return `${b}/${r}`;
}

export default function SingleTopicCard({ topic, basePath = "" }) {
  const href = topic?.href
    ? joinHref("", topic.href)
    : joinHref(basePath, topic?.slug);
  return (
    <Link
      href={href}
      className="group overflow-hidden rounded-2xl border border-[color:var(--border-light)] bg-[color:var(--bg-card)] shadow-[var(--shadow-soft)] transition-[border-color,box-shadow] hover:border-[color:var(--color-primary)] hover:shadow-[0_0_0_3px_rgba(0,0,0,0.04)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--color-primary)] focus-visible:ring-offset-2 focus-visible:ring-offset-[color:var(--bg-page)]"
    >
      <div className="relative aspect-[16/11] w-full overflow-hidden bg-[color:var(--bg-section)]">
        {topic?.imageSrc ? (
          <Image
            src={topic.imageSrc}
            alt={topic?.label ?? ""}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
            priority={Boolean(topic?.imagePriority)}
          />
        ) : (
          <div
            className="absolute inset-0 border-b border-[color:var(--border-light)]"
            aria-hidden="true"
          />
        )}
      </div>

      <div className="p-6">
        <div className="flex items-start justify-between gap-3">
          <div className="min-w-0">
            <h3 className="truncate text-base font-semibold text-[color:var(--text-primary)] ">
              {topic?.label}
            </h3>
            {topic?.description ? (
              <p className="mt-1 line-clamp-2 text-sm leading-relaxed text-[color:var(--text-secondary)]">
                {topic.description}
              </p>
            ) : null}
          </div>
        </div>

        <div className="mt-6">
          <span className="inline-flex items-center gap-2 rounded-lg border border-[color:var(--border-light)] bg-[color:var(--bg-card)] px-3 py-2 text-sm font-medium text-[color:var(--text-primary)] transition-colors hover:border-[color:var(--color-primary)] hover:text-[color:var(--color-primary)]">
            Read more <span aria-hidden="true">→</span>
          </span>
        </div>
      </div>
    </Link>
  );
}
