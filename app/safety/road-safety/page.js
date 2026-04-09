import TopicTiles from "@/components/TopicTiles";

export const metadata = {
  title: "Road safety",
};

export default function Page() {
  const tiles = [
    { slug: "safe-crossing", label: "Safe crossing" },
    { slug: "helmet-rules", label: "Helmet rules" },
    { slug: "night-visibility", label: "Night visibility" },
    { slug: "school-bus", label: "School bus" },
  ];

  return (
    <div className="rounded-xl border border-[color:var(--border-light)] bg-[color:var(--bg-card)] p-5 shadow-[var(--shadow-soft)]">
      <h1 className="text-2xl font-semibold text-[color:var(--text-primary)]">
        Road safety
      </h1>
      <p className="mt-4 text-sm leading-relaxed text-[color:var(--text-muted)]">
        Choose a topic below.
      </p>
      <TopicTiles basePath="/safety/road-safety" tiles={tiles} />
    </div>
  );
}

