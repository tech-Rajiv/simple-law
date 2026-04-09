'use client'

import React, { useMemo, useState } from 'react'
import SubHeading from './SubHeading'

export default function FaqSections({ faqLists, title, description }) {
  const items = useMemo(() => (Array.isArray(faqLists) ? faqLists : []), [faqLists])
  const [openIndex, setOpenIndex] = useState(-1)

  return (
    <div className="mt-8">
      <SubHeading title={title} description={description} />

      <div className="overflow-hidden rounded-2xl border border-[color:var(--border-light)] bg-[color:var(--bg-card)]">
        {items.map((faq, idx) => {
          const isOpen = openIndex === idx
          return (
            <div
              key={faq?.question ?? idx}
              className={[
                'border-b border-[color:var(--border-light)] last:border-b-0',
                isOpen ? 'bg-[color:var(--bg-section)]' : 'bg-[color:var(--bg-card)]',
              ].join(' ')}
            >
              <button
                type="button"
                onClick={() => setOpenIndex((prev) => (prev === idx ? -1 : idx))}
                className="flex w-full items-center justify-between gap-4 px-4 py-4 text-left"
                aria-expanded={isOpen}
              >
                <span className="text-sm font-semibold text-[color:var(--text-primary)] sm:text-base">
                  {faq.question}
                </span>
                <span
                  className={[
                    'grid h-9 w-9 place-items-center rounded-full border border-[color:var(--border-light)]',
                    'bg-[color:var(--bg-card)] text-[color:var(--text-secondary)] transition-colors',
                    'group-hover:text-[color:var(--text-primary)]',
                  ].join(' ')}
                  aria-hidden="true"
                >
                  {isOpen ? '−' : '+'}
                </span>
              </button>

              {isOpen ? (
                <div className="px-4 pb-4 text-sm leading-relaxed text-[color:var(--text-secondary)]">
                  {faq.answer}
                </div>
              ) : null}
            </div>
          )
        })}
      </div>
    </div>
  )
}