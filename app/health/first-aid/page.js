import TopicTiles from "@/components/TopicTiles";

export const metadata = {
  title: "First aid",
};

export default function Page() {
  const tiles = [
    { slug: "cuts-scrapes", label: "Cuts & scrapes", bg: "bg-rose-100" },
    { slug: "burns", label: "Burns", bg: "bg-orange-100" },
    { slug: "sprains", label: "Sprains", bg: "bg-lime-100" },
    { slug: "emergency-call", label: "Emergency call", bg: "bg-indigo-100" },
  ];

  return (
    <div className="rounded-3xl bg-[color:var(--color-surface)] p-6 shadow-sm">
      <h1 className="text-2xl font-semibold text-[color:var(--color-text)]">
        First aid
      </h1>
      <p className="mt-2 text-sm text-[color:var(--color-muted)]">
        Choose a topic below.
      </p>
      <TopicTiles basePath="/health/first-aid" tiles={tiles} />
    </div>
  );
}

