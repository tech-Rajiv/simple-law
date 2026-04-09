import Image from 'next/image'
import React from 'react'

function getEmergencyIconSrc(item) {
  const label = String(item?.label ?? '').toLowerCase()
  if (item?.iconSrc) return item.iconSrc

  if (label.includes('fire')) return '/emergy-contact/fire-truck.png'
  if (label.includes('police')) return '/emergy-contact/police-car.png'
  if (label.includes('ambulance') || label.includes('medical')) return '/emergy-contact/ambulance.png'

  return null
}

function getYouTubeVideoId(url) {
  if (!url) return null
  try {
    const u = new URL(url)
    if (u.hostname === 'youtu.be') {
      const id = u.pathname.replace('/', '').trim()
      return id || null
    }
    if (u.hostname.includes('youtube.com')) {
      const v = u.searchParams.get('v')
      if (v) return v
      const pathParts = u.pathname.split('/').filter(Boolean)
      const embedIndex = pathParts.indexOf('embed')
      if (embedIndex >= 0 && pathParts[embedIndex + 1]) return pathParts[embedIndex + 1]
    }
  } catch {
    // ignore invalid URL
  }
  return null
}

export default function CategoryHeader({ title, description = [], emergencyNumbers = [], titleImage, ytVideoUrl }) {
  const paragraphs = Array.isArray(description) ? description : [description].filter(Boolean)
  const ytId = getYouTubeVideoId(ytVideoUrl)

  return (
    <section className="mb-6">
      <div className="title flex gap-2">

        {
          titleImage ? (
            <Image src={titleImage} alt={title} width={35} height={35} />
          ) : null
        }
        <h1 className="text-3xl font-bold tracking-tight text-[color:var(--text-primary)] sm:text-4xl">
          {title}
        </h1>
      </div>



      {paragraphs.length ? (
        <div className="mt-4 space-y-3 text-sm leading-relaxed text-[color:var(--text-secondary)]">
          {paragraphs.map((p, idx) => (
            <p key={idx}>{p}</p>
          ))}
        </div>
      ) : null}

      {emergencyNumbers?.length ? (
        <div className="mt-6 rounded-xl ">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <p className="text-sm font-semibold text-[color:var(--text-primary)]">
              Emergency numbers
            </p>
            <p className="text-xs text-[color:var(--text-muted)]">
              Use local emergency services if these differ.
            </p>
          </div>

          <div className="mt-3 grid grid-cols-1 gap-3 sm:grid-cols-3">
            {emergencyNumbers.map((item, idx) => (
              <div
                key={`${item?.label ?? 'number'}-${item?.number ?? idx}`}
                className={[
                  'rounded-lg border border-[color:var(--border-light)] bg-[color:var(--bg-card)] p-3 shadow-[var(--shadow-soft)]',
                  'transition-colors hover:bg-[color:var(--hover-bg)]',
                  'focus-within:outline focus-within:outline-2 focus-within:outline-offset-2 focus-within:outline-[color:var(--color-primary)]',
                ].join(' ')}
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="flex min-w-0 items-start gap-3">
                    {getEmergencyIconSrc(item) ? (
                      <div className="shrink-0 rounded-lg border border-[color:var(--border-light)] bg-[color:var(--bg-section)] p-2">
                        <Image
                          src={getEmergencyIconSrc(item)}
                          alt=""
                          width={36}
                          height={36}
                          className="h-9 w-9"
                        />
                      </div>
                    ) : null}
                    <div className="min-w-0">
                      <p className="text-xs font-semibold uppercase tracking-wide text-[color:var(--text-muted)]">
                        {item.label}
                      </p>
                      <a
                        href={
                          item?.number
                            ? `tel:${String(item.number).replace(/\s+/g, '')}`
                            : undefined
                        }
                        className="mt-1 inline-block text-lg font-semibold text-[color:var(--text-primary)] underline-offset-4 hover:text-[color:var(--color-primary)] hover:underline focus-visible:outline-none"
                      >
                        {item.number}
                      </a>
                    </div>
                  </div>
                  <span className="shrink-0 rounded-full border border-[color:var(--border-light)] bg-[color:var(--bg-section)] px-2 py-1 text-xs font-medium text-[color:var(--text-secondary)]">
                    Call
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : null}
    </section>
  )
}

