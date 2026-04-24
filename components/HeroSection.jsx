"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";

function HeroSection() {
  const carouselImages = useMemo(
    () => [
      "/home/carosal/carousal2.jpg",
      "/home/carosal/carousal1.jpg",
      "/home/carosal/carousal3.jpg",
      "/home/carosal/carousal4.jpg",
      "/home/carosal/carousal5.jpg",
    ],
    [],
  );
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    if (carouselImages.length <= 1) return;
    const id = window.setInterval(() => {
      setActiveSlide((s) => (s + 1) % carouselImages.length);
    }, 2000);
    return () => window.clearInterval(id);
  }, [carouselImages.length]);

  return (
    <section className="w-full">
      <div className="mx-auto w-full">
        <div className="relative overflow-hidden rounded-3xl border border-[color:var(--border-light)] bg-[color:var(--bg-card)]">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -top-24 -right-24 h-72 w-72 rounded-full bg-[color:var(--color-primary)]/10 blur-3xl"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-28 -left-24 h-72 w-72 rounded-full bg-[color:var(--color-primary)]/10 blur-3xl"
          />

          <div className="relative grid gap-10 px-6 py-12 md:px-10 md:py-14 lg:grid-cols-12 lg:items-center">
            <div className="order-2 lg:order-1 lg:col-span-7">
              <div className="flex flex-wrap items-center gap-3">
                <p className="text-xs font-semibold uppercase tracking-widest text-[color:var(--text-secondary)]">
                  100xLife
                </p>
                <span className="inline-flex items-center rounded-full border border-[color:var(--border-light)] bg-[color:var(--bg-page)] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-[color:var(--color-primary)]">
                  Learning and assessment platform
                </span>
              </div>
              <h1 className="mt-3 text-4xl font-semibold tracking-tight text-[color:var(--text-primary)] md:text-5xl">
                Build a wiser version of Yourself.
              </h1>

              <div className="mt-6 space-y-3 text-base leading-relaxed text-[color:var(--text-secondary)]">
                <p>
                  Knowledge is not just about information—it’s about making
                  better decisions in real life. Take the first step toward a
                  smarter, safer you.
                </p>
              </div>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                <Link
                  href="/assessment"
                  className="inline-flex w-full items-center justify-center rounded-xl bg-[color:var(--color-primary)] px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:opacity-95 sm:w-auto"
                >
                  Get Assessment Test
                </Link>
                <Link
                  href="#topics"
                  className="inline-flex w-full items-center justify-center rounded-xl border border-[color:var(--border-light)] bg-transparent px-5 py-3 text-sm font-semibold text-[color:var(--text-primary)] transition hover:bg-[color:var(--hover-bg)] sm:w-auto"
                >
                  Browse Topics
                </Link>
              </div>
            </div>

            <div className="order-1 lg:order-2 lg:col-span-5">
              <div className="relative h-[260px] w-full overflow-hidden rounded-2xl border border-[color:var(--border-light)] bg-white/50 sm:h-[320px] md:h-[400px] lg:h-[470px]">
                {carouselImages.map((src, idx) => (
                  <div
                    key={src}
                    className={[
                      "absolute inset-0 transition-opacity duration-700",
                      idx === activeSlide ? "opacity-100" : "opacity-0",
                    ].join(" ")}
                    aria-hidden={idx === activeSlide ? "false" : "true"}
                  >
                    <Image
                      src={src}
                      alt="Hero carousel"
                      fill
                      priority={idx === 0}
                      sizes="(min-width: 1024px) 40vw, 100vw"
                      className="object-cover"
                    />
                  </div>
                ))}

                <div className="absolute bottom-3 left-0 right-0 flex items-center justify-center gap-2">
                  {carouselImages.map((_, idx) => (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => setActiveSlide(idx)}
                      className={[
                        "h-2 w-2 rounded-full border border-white/70 transition",
                        idx === activeSlide
                          ? "bg-white"
                          : "bg-white/30 hover:bg-white/60",
                      ].join(" ")}
                      aria-label={`Go to slide ${idx + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
