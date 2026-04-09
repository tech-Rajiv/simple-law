import TopicTiles from "@/components/TopicTiles";

export const metadata = {
  title: "First aid",
};

export default function Page() {
  const tiles = [
    { slug: "cuts-scrapes", label: "Cuts & scrapes" },
    { slug: "burns", label: "Burns" },
    { slug: "sprains", label: "Sprains" },
    { slug: "emergency-call", label: "Emergency call" },
  ];

  return (
    <div className="rounded-xl border border-[color:var(--border-light)] bg-[color:var(--bg-card)] p-5 shadow-[var(--shadow-soft)]">
      <h1 className="text-2xl font-semibold text-[color:var(--text-primary)]">
        First aid
      </h1>
      <p className="mt-4 text-sm leading-relaxed text-[color:var(--text-muted)]">
        Choose a topic below.
      </p>
      <TopicTiles basePath="/health/first-aid" tiles={tiles} />
    </div>
  );
}

