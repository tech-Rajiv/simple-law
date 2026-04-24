import Image from 'next/image'

/**
 * Image + “what to do” / “what not to do” lists.
 * Desktop: row with justify-between — image on one side, two list columns spread apart (e.g. women’s safety, harassment, body language).
 *
 * @param {Object} props
 * @param {string} props.title
 * @param {string} [props.intro]
 * @param {string | null} [props.imageSrc]
 * @param {string} [props.imageAlt]
 * @param {string} [props.imageCaption]
 * @param {string} [props.doHeading]
 * @param {string} [props.dontHeading]
 * @param {string[]} props.dos
 * @param {string[]} props.donts
 */
export default function TopicImageDoDontSplit({
  title,
  intro,
  imageSrc = null,
  imageAlt = '',
  imageCaption,
  doHeading = 'What to do',
  dontHeading = 'What not to do',
  dos = [],
  donts = [],
}) {
  if (!title || (!dos.length && !donts.length)) return null

  return (
    <section
      className="rounded-2xl border border-[color:var(--border-light)] bg-[color:var(--bg-card)] p-6 shadow-[var(--shadow-soft)] md:p-8"
      aria-labelledby="topic-image-dodont-heading"
    >
      <h2
        id="topic-image-dodont-heading"
        className="text-xl font-semibold tracking-tight text-[color:var(--text-primary)] md:text-2xl"
      >
        {title}
      </h2>
      {intro ? (
        <p className="mt-3 max-w-3xl text-sm leading-relaxed text-[color:var(--text-secondary)] md:text-base">
          {intro}
        </p>
      ) : null}

      <div className="mt-8 flex flex-col gap-8 lg:flex-row lg:items-stretch lg:justify-between lg:gap-10">
        <div className="w-full shrink-0 lg:max-w-[min(100%,400px)]">
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl bg-[color:var(--hover-bg)]">
            {imageSrc ? (
              <Image
                src={imageSrc}
                alt={imageAlt || title}
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 400px"
              />
            ) : (
              <div
                className="flex h-full min-h-[200px] w-full flex-col items-center justify-center gap-2 px-4 text-center"
                aria-label="Image placeholder"
              >
                <span className="text-sm font-medium text-[color:var(--text-muted)]">Image</span>
                <span className="max-w-xs text-xs leading-relaxed text-[color:var(--text-muted)]">
                  Diagram, photo, or illustration for this topic (e.g. safe vs unsafe behaviour).
                </span>
              </div>
            )}
          </div>
          {imageCaption ? (
            <p className="mt-2 text-center text-xs text-[color:var(--text-muted)]">{imageCaption}</p>
          ) : null}
        </div>

        <div className="flex min-w-0 flex-1 flex-col gap-8 sm:flex-row sm:justify-between sm:gap-6 md:gap-10">
          <div className="min-w-0 flex-1 basis-0 rounded-xl border border-[color:var(--color-primary)]/20 bg-[color:var(--active-bg)]/40 p-5 md:p-6">
            <h3 className="text-sm font-semibold uppercase tracking-wide text-[color:var(--color-primary)]">
              {doHeading}
            </h3>
            <ul className="mt-4 list-inside list-disc space-y-2.5 text-sm leading-relaxed text-[color:var(--text-secondary)] marker:text-[color:var(--color-primary)] md:text-base">
              {dos.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="min-w-0 flex-1 basis-0 rounded-xl border border-[color:var(--error)]/25 bg-[color:var(--bg-page)] p-5 md:p-6">
            <h3 className="text-sm font-semibold uppercase tracking-wide text-[color:var(--error)]">
              {dontHeading}
            </h3>
            <ul className="mt-4 list-inside list-disc space-y-2.5 text-sm leading-relaxed text-[color:var(--text-secondary)] marker:text-[color:var(--error)] md:text-base">
              {donts.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
