import TopicTiles from "@/components/TopicTiles";

export const metadata = {
  title: "Basic laws",
};

export default function Page() {
  const tiles = [
    { slug: "right-wrong", label: "Right & wrong", bg: "bg-emerald-100" },
    { slug: "fairness", label: "Fairness", bg: "bg-yellow-100" },
    { slug: "rules-school", label: "Rules at school", bg: "bg-sky-100" },
    { slug: "community-help", label: "Community help", bg: "bg-rose-100" },
  ];

  return (
    <div className="rounded-3xl bg-[color:var(--color-surface)] p-6 shadow-sm">
      <h1 className="text-2xl font-semibold text-[color:var(--color-text)]">
        Basic laws
      </h1>
      <p className="mt-2 text-sm text-[color:var(--color-muted)]">
        Choose a topic below.
      </p>
      <TopicTiles basePath="/learning/basic-laws" tiles={tiles} />
    </div>
  );
}

