import {
  LearningHubHero,
} from '@/components/topic-guide'
import TopicsCards from '@/components/shared/TopicsCards'
import YtVideocard from '@/components/shared/YtVideocard'
import FaqSections from '@/components/shared/FaqSections'
import WhatYouWillLearnSection from '@/components/shared/WhatYouWillLearnSection'
import {
  womenAssessmentCta,
  womenComplaintCta,
  womenHeroCtaHint,
  womenHeroCtaPanelBody,
  womenHeroEyebrow,
  womenHubSubtitle,
  womenTopics,
} from '@/app/utils/womenContent'
import Link from 'next/link'

export const metadata = {
  title: 'Women’s resources | SimpleLaw',
  description: 'Practical guides on safety, workplace wellbeing, and related topics.',
}

export default function WomenPage() {
  const topicsLists = womenTopics.map(({ slug, title, teaser, imageSrc }) => ({
    slug,
    label: title,
    description: teaser,
    imageSrc,
  }))

  const whatYouWillLearn = [
    'Simple steps to respond safely (in the moment)',
    '7‑day practice plan to build confidence and habits',
    'Do / Don’t rules to avoid common mistakes',
    'Examples + FAQs for real situations',
    'A clear path for evidence and reporting',
  ]

  const ytdetails = {
    title: 'Women’s safety & rights video',
    description:
      'A short video to build awareness and encourage action with clarity and confidence.',
    ytVideoUrl: 'https://youtu.be/Neho6BCJeoc?si=v4TBH6QcKNrCR33s',
  }

  const FAQHeading = {
    title: 'FAQ',
    description: 'Quick answers to common questions and where to go next.',
  }

  const FAQLists = [
    {
      question: 'What should I do first if I feel unsafe?',
      answer:
        'Prioritize safety: create space, move toward people/staff/exits, and contact a trusted person. You can document and report after you’re safe.',
    },
    {
      question: 'Do I need “proof” to ask for help?',
      answer:
        'No. If you feel unsafe, you deserve support. If it’s safe to do so, saving evidence can help reporting later — but safety comes first.',
    },
    {
      question: 'Where can I learn how to file a complaint?',
      answer:
        'Use our complaint guide — it walks you through what to collect, what to write, and where to report based on the situation.',
    },
    {
      question: 'What if I freeze and can’t react in the moment?',
      answer:
        'Freezing is a normal stress response. Start with movement: step away, move toward safety, and ask for help. You can act without speaking.',
    },
  ]

  return (
    <div className="space-y-8 pb-10 md:space-y-10">
      <LearningHubHero
        title="Women"
        eyebrow={womenHeroEyebrow}
        subtitle={womenHubSubtitle}
        ctaHref={womenAssessmentCta.href}
        ctaLabel={womenAssessmentCta.label}
        ctaPanelDescription={womenHeroCtaPanelBody}
        ctaHint={womenHeroCtaHint}
      />

      <div className="flex flex-wrap items-center gap-3">
        <Link
          href={womenComplaintCta.href}
          className="inline-flex items-center gap-2 rounded-xl border border-[color:var(--border-light)] bg-[color:var(--bg-card)] px-5 py-3 text-sm font-semibold text-[color:var(--text-primary)] shadow-[var(--shadow-soft)] transition-colors hover:border-[color:var(--color-primary)] hover:text-[color:var(--color-primary)]"
        >
          {womenComplaintCta.label} <span aria-hidden="true">→</span>
        </Link>
      </div>

      <WhatYouWillLearnSection
        title="What you will learn in every topic"
        subtitle="Serious topics, explained clearly — with practical steps and support-focused guidance."
        items={whatYouWillLearn}
      />

      <TopicsCards topics={topicsLists} basePath="/women" />

      <YtVideocard ytVideoUrl={ytdetails.ytVideoUrl} title={ytdetails.title} description={ytdetails.description} />

      <FaqSections faqLists={FAQLists} title={FAQHeading.title} description={FAQHeading.description} />
    </div>
  )
}
