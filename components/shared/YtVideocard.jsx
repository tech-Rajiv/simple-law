import React from "react";

export default function YtVideocard({ ytVideoUrl, title, description }) {
  const getYouTubeId = (url) => {
    const regExp =
      /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url?.match(regExp);
    return match && match[2].length === 11 ? match[2] : null;
  };

  const videoId = getYouTubeId(ytVideoUrl);

  if (!videoId) return null;
  return (
    <section className="overflow-hidden rounded-2xl border border-[color:var(--border-light)] bg-[color:var(--bg-card)] shadow-[var(--shadow-soft)]">
      <div className="grid grid-cols-1 gap-0 md:grid-cols-2">
        <div className="relative w-full overflow-hidden bg-[color:var(--hover-bg)]">
          <div className="aspect-video w-full">
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

        <div className="flex flex-col justify-center border-t border-[color:var(--border-light)] p-6 md:border-l md:border-t-0 md:p-8">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[color:var(--color-primary)]">
            Video
          </p>
          <h3 className="mt-3 text-xl font-semibold tracking-tight text-[color:var(--text-primary)] md:text-2xl">
            {title || "Featured video"}
          </h3>
          <p className="mt-3 text-sm leading-relaxed text-[color:var(--text-secondary)] md:text-base">
            {description || ""}
          </p>
          <div className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-[color:var(--color-primary)]">
            Watch now <span aria-hidden="true">→</span>
          </div>
        </div>
      </div>
    </section>
  );
}
