import TopicTiles from "@/components/TopicTiles";

export const metadata = {
  title: "Basic laws",
};

export default function Page() {
  const tiles = [
    { slug: "right-wrong", label: "Right & wrong" },
    { slug: "fairness", label: "Fairness" },
    { slug: "rules-school", label: "Rules at school" },
    { slug: "community-help", label: "Community help" },
  ];

  return (
    <div className="rounded-xl border border-[color:var(--border-light)] bg-[color:var(--bg-card)] p-5 shadow-[var(--shadow-soft)]">
      <h1 className="text-2xl font-semibold text-[color:var(--text-primary)]">
        Basic laws
      </h1>
      <p className="mt-4 text-sm leading-relaxed text-[color:var(--text-muted)]">
        Choose a topic below.
      </p>
      <TopicTiles basePath="/learning/basic-laws" tiles={tiles} />
    </div>
  );
}

