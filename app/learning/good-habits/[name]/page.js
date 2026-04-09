import PageTabs from "@/components/PageTabs";

export default async function Page({ params }) {
  const { name } = await params;
  const title = decodeURIComponent(name || "").replaceAll("-", " ");

  return (
    <div className="rounded-xl border border-[color:var(--border-light)] bg-[color:var(--bg-card)] p-5 shadow-[var(--shadow-soft)]">
      <p className="text-sm font-medium text-[color:var(--text-secondary)]">
        Good habits
      </p>
      <h1 className="mt-1 text-2xl font-semibold text-[color:var(--text-primary)]">
        {title}
      </h1>
      <PageTabs />
    </div>
  );
}

