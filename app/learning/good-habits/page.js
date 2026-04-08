import TopicTiles from "@/components/TopicTiles";

export const metadata = {
  title: "Good habits",
};

export default function Page() {
  const tiles = [
    { slug: "being-kind", label: "Being kind", bg: "bg-pink-100" },
    { slug: "clean-hands", label: "Clean hands", bg: "bg-cyan-100" },
    { slug: "screen-time", label: "Screen time", bg: "bg-amber-100" },
    { slug: "sleep-well", label: "Sleep well", bg: "bg-indigo-100" },
  ];

  return (
    <div className="rounded-3xl bg-[color:var(--color-surface)] p-6 shadow-sm">
      <h1 className="text-2xl font-semibold text-[color:var(--color-text)]">
        Good habits
      </h1>
      <p className="mt-2 text-sm text-[color:var(--color-muted)]">
        Choose a topic below.
      </p>
      <TopicTiles basePath="/learning/good-habits" tiles={tiles} />
    </div>
  );
}

