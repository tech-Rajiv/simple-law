/**
 * Render lesson blocks as clean text with a small image gallery (1–2 images)
 * pulled from the first lessons that include an image.
 *
 * @param {Object} props
 * @param {string} [props.title]
 * @param {string} [props.intro]
 * @param {{ imageSrc?: string | null, alt?: string, teachesHeading?: string, summary?: string, paragraphs?: string[] }[]} props.lessons
 */
export default function TopicTextLessonStack({ title, intro, lessons = [] }) {
  const items = Array.isArray(lessons) ? lessons : [];
  if (!items.length) return null;

  const gallery = items.filter((l) => l?.imageSrc).slice(0, 2);

  return (
    <section
      className="space-y-6"
      aria-labelledby={title ? "topic-text-lessons-heading" : undefined}
    >
      {/* {title ? (
        <header>
          <h2
            id="topic-text-lessons-heading"
            className="text-xl font-semibold tracking-tight text-[color:var(--text-primary)] md:text-2xl"
          >
            {title}
          </h2>
          {intro ? (
            <p className="mt-2 max-w-3xl text-sm leading-relaxed text-[color:var(--text-secondary)] md:text-base">
              {intro}
            </p>
          ) : null}
        </header>
      ) : null} */}

      <div className="overflow-hidden rounded-2xl border border-[color:var(--border-light)] bg-[color:var(--bg-card)] shadow-[var(--shadow-soft)]">
        {gallery.length ? (
          <div className="grid gap-px bg-[color:var(--border-light)] sm:grid-cols-2">
            {gallery.map((img, i) => (
              <div key={i} className="bg-[color:var(--hover-bg)]">
                <div className="relative aspect-[4/3] w-full">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={img.imageSrc}
                    alt={img.alt || img.teachesHeading || ""}
                    className="h-full w-full object-cover object-center"
                    loading="lazy"
                  />
                </div>
              </div>
            ))}
          </div>
        ) : null}

        <div className="space-y-8 p-6 md:p-8">
          {items.map((lesson, i) => (
            <article
              key={i}
              className="border-t border-[color:var(--border-light)] pt-8 first:border-t-0 first:pt-0"
            >
              {lesson?.teachesHeading ? (
                <h3 className="text-lg font-semibold text-[color:var(--text-primary)] md:text-xl">
                  {lesson.teachesHeading}
                </h3>
              ) : null}
              {lesson?.summary ? (
                <p className="mt-3 text-sm font-medium leading-relaxed text-[color:var(--text-primary)] md:text-base">
                  {lesson.summary}
                </p>
              ) : null}
              {Array.isArray(lesson?.paragraphs) && lesson.paragraphs.length ? (
                <div className="mt-4 space-y-3">
                  {lesson.paragraphs.map((p, j) => (
                    <p
                      key={j}
                      className="text-sm leading-relaxed text-[color:var(--text-secondary)] md:text-base"
                    >
                      {p}
                    </p>
                  ))}
                </div>
              ) : null}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
