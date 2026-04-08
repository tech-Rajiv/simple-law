export default async function Page({ params }) {
  const { name } = await params;
  const title = decodeURIComponent(name || "").replaceAll("-", " ");

  return (
    <div className="rounded-3xl bg-[color:var(--color-surface)] p-6 shadow-sm">
      <p className="text-sm font-medium text-[color:var(--color-secondary)]">
        Building safety
      </p>
      <h1 className="mt-2 text-2xl font-semibold text-[color:var(--color-text)]">
        {title}
      </h1>
    </div>
  );
}

