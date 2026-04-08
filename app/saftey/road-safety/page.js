import TopicTiles from "@/components/TopicTiles";

export const metadata = {
  title: "Road safety",
};

export default function Page() {
  const tiles = [
    { slug: "safe-crossing", label: "Safe crossing", bg: "bg-blue-100" },
    { slug: "helmet-rules", label: "Helmet rules", bg: "bg-orange-100" },
    { slug: "night-visibility", label: "Night visibility", bg: "bg-green-100" },
    { slug: "school-bus", label: "School bus", bg: "bg-pink-100" },
  ];

  return (
    <div className="rounded-3xl bg-[color:var(--color-surface)] p-6 shadow-sm">
      <h1 className="text-2xl font-semibold text-[color:var(--color-text)]">
        Road safety
      </h1>
      <p className="mt-2 text-sm text-[color:var(--color-muted)]">
        Choose a topic below.
      </p>
      <TopicTiles basePath="/saftey/road-safety" tiles={tiles} />
    </div>
  );
}

