'use client'
import Image from 'next/image'
import FaqSections from '@/components/shared/FaqSections'

const FAQS = [
  {
    question: 'Is this an official legal service?',
    answer:
      'No. SimpleLaw is for learning and awareness. It helps you reflect on scenarios and basics — it is not legal advice.',
  },
  {
    question: 'Do I need an account?',
    answer: 'No. You can start a quiz instantly and see your score right away.',
  },
  {
    question: 'How long does a test take?',
    answer: 'Most topic tests are short — roughly 10 questions — so you can finish in a few minutes.',
  },
  {
    question: 'Can I retake quizzes?',
    answer: 'Yes. Retaking is a great way to learn and compare how you respond over time.',
  },
]

export default function HomeFaq() {
  return (
    <section id="faq" className="scroll-mt-24 rounded-3xl border border-[color:var(--border-light)] bg-[color:var(--bg-card)] p-6 shadow-[var(--shadow-soft)] md:p-10">
      <div className="grid grid-cols-1 gap-8 md:grid-cols-12 md:items-start">
        <div className="md:col-span-5">
          <div className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-[color:var(--border-light)] bg-[color:var(--bg-section)] shadow-[var(--shadow-soft)]">
            <Image
              src="/images/faqs.jpeg"
              alt="FAQ image"
              fill
              sizes="(min-width: 768px) 40vw, 100vw"
              className="object-cover"
            />
          </div>
        
        </div>

        <div className="md:col-span-7">
          <FaqSections
            title="FAQ"
            description="Quick answers to common questions."
            faqLists={FAQS}
          />
        </div>
      </div>
    </section>
  )
}

