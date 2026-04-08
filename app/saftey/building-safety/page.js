import TopicTiles from "@/components/TopicTiles";

export const metadata = {
  title: "Building safety",
};

export default function Page() {
  const tiles = [
    { slug: "fire-exits", label: "Fire exits", bg: "bg-red-100" },
    { slug: "earthquake-drill", label: "Earthquake drill", bg: "bg-amber-100" },
    { slug: "safe-stairs", label: "Safe stairs", bg: "bg-emerald-100" },
    { slug: "first-alert", label: "First alert", bg: "bg-sky-100" },
  ];

  return (
    <div className="rounded-3xl bg-[color:var(--color-surface)] p-6 shadow-sm">
      <h1 className="text-2xl font-semibold text-[color:var(--color-text)]">
        Building safety
      </h1>
      <p className="mt-2 text-sm text-[color:var(--color-muted)]">
        Choose a topic below.
      </p>
      <TopicTiles basePath="/saftey/building-safety" tiles={tiles} />
    </div>
  );
}

