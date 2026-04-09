import TopicTiles from "@/components/TopicTiles";

export const metadata = {
  title: "Building safety",
};

export default function Page() {
  const tiles = [
    { slug: "fire-exits", label: "Fire exits" },
    { slug: "earthquake-drill", label: "Earthquake drill" },
    { slug: "safe-stairs", label: "Safe stairs" },
    { slug: "first-alert", label: "First alert" },
  ];

  return (
    <div className="rounded-xl border border-[color:var(--border-light)] bg-[color:var(--bg-card)] p-5 shadow-[var(--shadow-soft)]">
      <h1 className="text-2xl font-semibold text-[color:var(--text-primary)]">
        Building safety
      </h1>
      <p className="mt-4 text-sm leading-relaxed text-[color:var(--text-muted)]">
        Choose a topic below.
      </p>
      <TopicTiles basePath="/safety/building-safety" tiles={tiles} />
    </div>
  );
}

