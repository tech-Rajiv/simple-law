import TopicTiles from "@/components/TopicTiles";

export const metadata = {
  title: "Senior care",
};

export default function Page() {
  const tiles = [
    { slug: "daily-routine", label: "Daily routine", bg: "bg-sky-100" },
    { slug: "medication", label: "Medication", bg: "bg-violet-100" },
    { slug: "safe-home", label: "Safe home", bg: "bg-emerald-100" },
    { slug: "gentle-exercise", label: "Gentle exercise", bg: "bg-amber-100" },
  ];

  return (
    <div className="rounded-3xl bg-[color:var(--color-surface)] p-6 shadow-sm">
      <h1 className="text-2xl font-semibold text-[color:var(--color-text)]">
        Senior care
      </h1>
      <p className="mt-2 text-sm text-[color:var(--color-muted)]">
        Choose a topic below.
      </p>
      <TopicTiles basePath="/health/senior-care" tiles={tiles} />
    </div>
  );
}

