import TopicTiles from "@/components/TopicTiles";

export const metadata = {
  title: "Stories",
};

export default function Page() {
  const tiles = [
    { slug: "honesty-story", label: "Honesty story", bg: "bg-purple-100" },
    { slug: "bravery-story", label: "Bravery story", bg: "bg-orange-100" },
    { slug: "friendship-story", label: "Friendship story", bg: "bg-emerald-100" },
    { slug: "kindness-story", label: "Kindness story", bg: "bg-pink-100" },
  ];

  return (
    <div className="rounded-3xl bg-[color:var(--color-surface)] p-6 shadow-sm">
      <h1 className="text-2xl font-semibold text-[color:var(--color-text)]">
        Stories
      </h1>
      <p className="mt-2 text-sm text-[color:var(--color-muted)]">
        Choose a topic below.
      </p>
      <TopicTiles basePath="/fun/stories" tiles={tiles} />
    </div>
  );
}

