import TopicTiles from "@/components/TopicTiles";

export const metadata = {
  title: "Senior care",
};

export default function Page() {
  const tiles = [
    { slug: "daily-routine", label: "Daily routine" },
    { slug: "medication", label: "Medication" },
    { slug: "safe-home", label: "Safe home" },
    { slug: "gentle-exercise", label: "Gentle exercise" },
  ];

  return (
    <div className="rounded-xl border border-[color:var(--border-light)] bg-[color:var(--bg-card)] p-5 shadow-[var(--shadow-soft)]">
      <h1 className="text-2xl font-semibold text-[color:var(--text-primary)]">
        Senior care
      </h1>
      <p className="mt-4 text-sm leading-relaxed text-[color:var(--text-muted)]">
        Choose a topic below.
      </p>
      <TopicTiles basePath="/health/senior-care" tiles={tiles} />
    </div>
  );
}

