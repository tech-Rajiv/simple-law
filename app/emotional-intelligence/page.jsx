import {
  LearningContentSections,
  LearningHubHero,
  LearningPillarGrid,
  TopicBentoHighlightGrid,
  TopicCategoryCardNav,
  TopicConceptChipCloud,
  TopicGradientBand,
  TopicHubIntro,
  TopicPullQuoteCard,
  TopicSplitProBanner,
  TopicVerticalTimelineModern,
} from '@/components/topic-guide'
import {
  emotionalIntelligenceAssessmentCta,
  emotionalIntelligenceHeroCtaHint,
  emotionalIntelligenceHeroCtaPanelBody,
  emotionalIntelligenceHeroEyebrow,
  emotionalIntelligenceHeroSubtitle,
  emotionalIntelligenceHubSections,
  emotionalIntelligenceIntro,
  emotionalIntelligenceModernLayouts,
  emotionalIntelligencePillars,
  emotionalIntelligenceTopics,
} from '@/app/utils/emotionalIntelligenceContent'

export const metadata = {
  title: 'Emotional intelligence | SimpleLaw',
  description:
    'Learn emotional intelligence with clear guides: self-awareness, communication, stress, first impressions, and more. Take an assessment to see where to focus next.',
}

export default function EmotionalIntelligencePage() {
  const navItems = emotionalIntelligenceTopics.map(({ slug, title, teaser, imageSrc }) => ({
    slug,
    title,
    teaser,
    imageSrc,
  }))

  return (
    <div className="space-y-8 pb-10 md:space-y-10">
      <LearningHubHero
        title="Emotional Intelligence"
        eyebrow={emotionalIntelligenceHeroEyebrow}
        subtitle={emotionalIntelligenceHeroSubtitle}
        ctaHref={emotionalIntelligenceAssessmentCta.href}
        ctaLabel={emotionalIntelligenceAssessmentCta.label}
        ctaPanelDescription={emotionalIntelligenceHeroCtaPanelBody}
        ctaHint={emotionalIntelligenceHeroCtaHint}
      />

      <TopicHubIntro title={emotionalIntelligenceIntro.title} paragraphs={emotionalIntelligenceIntro.paragraphs} />

      <LearningPillarGrid title={emotionalIntelligencePillars.title} items={emotionalIntelligencePillars.items} />

      <LearningContentSections sections={emotionalIntelligenceHubSections} />

      <div className="space-y-8 md:space-y-10">
        <TopicGradientBand
          eyebrow={emotionalIntelligenceModernLayouts.gradientBand.eyebrow}
          title={emotionalIntelligenceModernLayouts.gradientBand.title}
          body={emotionalIntelligenceModernLayouts.gradientBand.body}
        />
        <TopicBentoHighlightGrid
          title={emotionalIntelligenceModernLayouts.bento.title}
          items={emotionalIntelligenceModernLayouts.bento.items}
        />
        <TopicPullQuoteCard
          quote={emotionalIntelligenceModernLayouts.quote.quote}
          attribution={emotionalIntelligenceModernLayouts.quote.attribution}
          role={emotionalIntelligenceModernLayouts.quote.role}
        />
        <TopicConceptChipCloud
          title={emotionalIntelligenceModernLayouts.chips.title}
          tags={emotionalIntelligenceModernLayouts.chips.tags}
        />
        <TopicSplitProBanner
          title={emotionalIntelligenceModernLayouts.splitBanner.title}
          body={emotionalIntelligenceModernLayouts.splitBanner.body}
          asideTitle={emotionalIntelligenceModernLayouts.splitBanner.asideTitle}
          asideBody={emotionalIntelligenceModernLayouts.splitBanner.asideBody}
        />
        <TopicVerticalTimelineModern
          title={emotionalIntelligenceModernLayouts.timeline.title}
          steps={emotionalIntelligenceModernLayouts.timeline.steps}
        />
      </div>

      <TopicCategoryCardNav basePath="/emotional-intelligence" items={navItems} />
    </div>
  )
}
