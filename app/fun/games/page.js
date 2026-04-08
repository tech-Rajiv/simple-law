import TopicTiles from "@/components/TopicTiles";

export const metadata = {
  title: "Games",
};

export default function Page() {
  const tiles = [
    { slug: "memory-match", label: "Memory match", bg: "bg-sky-100" },
    { slug: "safety-quiz", label: "Safety quiz", bg: "bg-lime-100" },
    { slug: "find-the-sign", label: "Find the sign", bg: "bg-amber-100" },
    { slug: "word-puzzle", label: "Word puzzle", bg: "bg-rose-100" },
  ];

  return (
    <div className="rounded-3xl bg-[color:var(--color-surface)] p-6 shadow-sm">
      <h1 className="text-2xl font-semibold text-[color:var(--color-text)]">
        Games
      </h1>
      <p className="mt-2 text-sm text-[color:var(--color-muted)]">
        Choose a topic below.
      </p>
      <TopicTiles basePath="/fun/games" tiles={tiles} />
    </div>
  );
}

