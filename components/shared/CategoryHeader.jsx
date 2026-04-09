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

export default function CategoryHeader({ title, description = [], titleImage, ytVideoUrl }) {
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
    </section>
  )
}

