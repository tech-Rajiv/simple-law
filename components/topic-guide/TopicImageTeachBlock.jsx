import Image from 'next/image'

/**
 * Visual + teaching copy: for body language, safety education, psychology cues, etc.
 * Use imageSrc: null to reserve space until you add an asset.
 *
 * @param {Object} props
 * @param {string | null} [props.imageSrc]
 * @param {string} [props.alt]
 * @param {string} [props.teachesHeading] - default "What does this image teach us?"
 * @param {string} props.summary - Short answer in plain language (under the heading)
 * @param {string[]} props.paragraphs - Deeper explanation
 * @param {string} [props.figureNote] - Optional small caption under the image
 */
export default function TopicImageTeachBlock({
  imageSrc = null,
  alt = '',
  teachesHeading = 'What does this image teach us?',
  summary,
  paragraphs = [],
  figureNote,
}) {
  return (
    <article className="overflow-hidden rounded-2xl border border-[color:var(--border-light)] bg-[color:var(--bg-card)] shadow-[var(--shadow-soft)] md:grid md:grid-cols-5">
      <div className="relative aspect-[16/10] w-full bg-[color:var(--hover-bg)] md:col-span-2 md:aspect-auto md:min-h-[320px] md:h-full">
        {imageSrc ? (
          <Image
            src={imageSrc}
            alt={alt || teachesHeading}
            fill
            className="object-contain object-center p-4 md:p-6"
            sizes="(max-width: 768px) 100vw, 420px"
          />
        ) : (
          <div
            className="flex h-full min-h-[200px] w-full flex-col items-center justify-center gap-2 px-6 text-center md:min-h-[320px]"
            aria-label="Image placeholder"
          >
            <span className="text-sm font-medium text-[color:var(--text-muted)]">Image area</span>
            <span className="max-w-md text-xs leading-relaxed text-[color:var(--text-muted)]">
              Add a photo or illustration here (e.g. gesture diagram, infographic).
            </span>
          </div>
        )}
      </div>

      <div className="md:col-span-3">
        {figureNote ? (
          <p className="border-b border-[color:var(--border-light)] bg-[color:var(--bg-page)] px-4 py-2 text-center text-xs text-[color:var(--text-muted)] md:text-left">
            {figureNote}
          </p>
        ) : null}
        <div className="space-y-4 p-6 md:p-8">
          <h3 className="text-lg font-semibold text-[color:var(--text-primary)] md:text-xl">{teachesHeading}</h3>
          {summary ? (
            <p className="text-sm font-medium leading-relaxed text-[color:var(--text-primary)] md:text-base">{summary}</p>
          ) : null}
          {paragraphs.length ? (
            <div className="space-y-3">
              {paragraphs.map((p, i) => (
                <p key={i} className="text-sm leading-relaxed text-[color:var(--text-secondary)] md:text-base">
                  {p}
                </p>
              ))}
            </div>
          ) : null}
        </div>
      </div>
    </article>
  )
}
