import React from 'react'
import SubHeading from '../shared/SubHeading'
import Image from 'next/image'
import Link from 'next/link'

export default function FeaturedSection() {
  return (
    <section id="featured" className="scroll-mt-24">
        <div className="grid bg-white p-6 rounded-3xl border border-[color:var(--border-light)] grid-cols-1 gap-8 md:grid-cols-12 md:items-center">
        <div className="md:col-span-7">
          <h2 className="text-2xl font-bold text-[color:var(--text-primary)]">know how to file a complaint</h2>
          <p className="mt-3 text-sm leading-relaxed text-[color:var(--text-secondary)]">
          Learn exactly how to take action in real-life situations.
          Whether it’s cyber fraud, online scams, harassment, or safety issues, we guide you step by step on how to file a complaint the right way.
          </p>
          <p className="mt-3 text-sm leading-relaxed text-[color:var(--text-secondary)]">
          No confusion. No guesswork. Just clear, practical guidance when you need it most.
          </p>
          <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
            <div className="rounded-2xl border border-[color:var(--border-light)] bg-[color:var(--bg-hover)] hover:bg-[color:var(--bg-section)] p-4">
              <div className="text-sm font-semibold text-[color:var(--text-primary)]">Step-by-step guidance</div>
              <div className="mt-1 text-xs text-[color:var(--text-secondary)]">Understand the exact process to report different types of issues..</div>
            </div>
            <div className="rounded-2xl border border-[color:var(--border-light)] bg-[color:var(--bg-hover)] hover:bg-[color:var(--bg-section)]] p-4">
              <div className="text-sm font-semibold text-[color:var(--text-primary)]">Real scenarios covered</div>
              <div className="mt-1 text-xs text-[color:var(--text-secondary)]">Cyber fraud, online scams, harassment, and more.</div>
            </div>
            <div className="rounded-2xl border border-[color:var(--border-light)] bg-[color:var(--bg-hover)] hover:bg-[color:var(--bg-section)] p-4">
              <div className="text-sm font-semibold text-[color:var(--text-primary)]">Clear and simple instructions</div>
              <div className="mt-1 text-xs text-[color:var(--text-secondary)]">No legal jargon—just easy-to-follow steps.</div>
            </div>
            <div className="rounded-2xl border border-[color:var(--border-light)] bg-[color:var(--bg-hover)] hover:bg-[color:var(--bg-section)] p-4">
              <div className="text-sm font-semibold text-[color:var(--text-primary)]">Know where to report</div>
              <div className="mt-1 text-xs text-[color:var(--text-secondary)]">Get information about the right platforms and authorities.</div>
            </div>
          </div>
          <div className="mt-7">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <Link href="/complaint" className="btn-primary">
                Complaint guide
              </Link>
            </div>
          </div>
        </div>

        <div className="md:col-span-5">
          <div className="relative aspect-[4/3] overflow-hidden ">
            <Image
              src="/complaint/complaint-image1.jpg"
              alt="Complaint image 1"
              fill
              sizes="(max-width: 768px) 100vw, 40vw"
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  )
}