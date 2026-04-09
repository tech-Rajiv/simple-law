import React from 'react'

export default function YtVideocard({ ytVideoUrl, title, description }) {
    const getYouTubeId = (url) => {
        const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
        const match = url?.match(regExp);
        return (match && match[2].length === 11) ? match[2] : null;
      };
    
      const videoId = getYouTubeId(ytVideoUrl);
    
      if (!videoId) return null;
  return (
    <div className="mt-8 overflow-hidden rounded-2xl border border-[color:var(--border-light)] bg-[color:var(--bg-card)] shadow-[var(--shadow-soft)] transition-shadow duration-200 hover:shadow-md">
    <div className="grid grid-cols-1 md:grid-cols-[1fr_420px]">
      
      {/* Left Side: Content */}
      <div className="flex flex-col justify-center p-6 sm:p-7 lg:p-8">
        <p className="text-xs font-semibold uppercase tracking-widest text-[color:var(--text-muted)]">
          Video
        </p>
        <h3 className="mt-2 text-xl font-bold tracking-tight text-[color:var(--text-primary)] sm:text-2xl">
          {title || 'Safety Video'}
        </h3>
        
        <p className="mt-3 max-w-prose text-sm leading-relaxed text-[color:var(--text-secondary)]">
          {description ||
            'Must watch these basic and important life lessons: fire exits, drills, stairs, and staying alert indoors.'}
        </p>

        <div className="mt-4 flex items-center gap-2">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[color:var(--color-primary)] opacity-60" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-[color:var(--color-primary)]" />
          </span>
          <span className="text-xs font-semibold uppercase tracking-widest text-[color:var(--color-primary)]">
            Watch now
          </span>
        </div>
      </div>

      {/* Right Side: Video Container */}
      <div className="relative w-full overflow-hidden border-t border-[color:var(--border-light)] md:border-l md:border-t-0">
        <div className="aspect-[16/8] w-full">
          <iframe
            className="h-full w-full border-none"
            src={`https://www.youtube-nocookie.com/embed/${videoId}`}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        </div>
      </div>

    </div>
  </div>
  )
}