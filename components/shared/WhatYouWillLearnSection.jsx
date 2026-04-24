import Image from "next/image";
import checkIcon from "@/icons/check-box.png";

export default function WhatYouWillLearnSection({
  title = "What you will learn",
  subtitle,
  items = [],
}) {
  const list = Array.isArray(items) ? items : [];
  if (!list.length) return null;

  return (
    <section className="relative overflow-hidden rounded-2xl border border-[color:var(--border-light)] bg-[color:var(--bg-card)] p-6 shadow-[var(--shadow-soft)] md:p-8">
      <div
        className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-[color:var(--color-primary)]/[0.08] blur-3xl"
        aria-hidden="true"
      />
      <h2 className="text-xl font-semibold tracking-tight text-[color:var(--text-primary)] md:text-2xl">
        {title}
      </h2>
      {subtitle ? (
        <p className="mt-2 max-w-3xl text-sm leading-relaxed text-[color:var(--text-secondary)] md:text-base">
          {subtitle}
        </p>
      ) : null}

      <div className="mt-5 rounded-2xl border border-[color:var(--border-light)] bg-[color:var(--bg-page)] p-4 md:p-5">
        <ul className="space-y-3">
          {list.map((item) => (
            <li key={item} className="flex items-start gap-2.5">
              <span className="mt-0.5 shrink-0">
                <Image src={checkIcon} alt="" width={16} height={16} />
              </span>
              <span className="text-sm text-[color:var(--text-secondary)] md:text-base">
                {item}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

