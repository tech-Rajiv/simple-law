import TopicImageTeachBlock from './TopicImageTeachBlock'

/**
 * Multiple image-and-lesson blocks with an optional section title.
 *
 * @param {Object} props
 * @param {string} [props.sectionTitle]
 * @param {string} [props.sectionIntro]
 * @param {{ imageSrc?: string | null, alt?: string, teachesHeading?: string, summary: string, paragraphs?: string[], figureNote?: string }[]} props.lessons
 */
export default function TopicImageTeachStack({ sectionTitle, sectionIntro, lessons = [] }) {
  if (!lessons.length) return null

  return (
    <section
      className="space-y-6"
      aria-labelledby={sectionTitle ? 'image-teach-stack-heading' : undefined}
    >
      {sectionTitle ? (
        <div>
          <h2
            id="image-teach-stack-heading"
            className="text-xl font-semibold tracking-tight text-[color:var(--text-primary)] md:text-2xl"
          >
            {sectionTitle}
          </h2>
          {sectionIntro ? (
            <p className="mt-2 max-w-3xl text-sm leading-relaxed text-[color:var(--text-secondary)] md:text-base">
              {sectionIntro}
            </p>
          ) : null}
        </div>
      ) : null}
      <div className="space-y-8 md:space-y-10">
        {lessons.map((lesson, i) => (
          <TopicImageTeachBlock
            key={i}
            imageSrc={lesson.imageSrc ?? null}
            alt={lesson.alt}
            teachesHeading={lesson.teachesHeading}
            summary={lesson.summary}
            paragraphs={lesson.paragraphs ?? []}
            figureNote={lesson.figureNote}
          />
        ))}
      </div>
    </section>
  )
}
