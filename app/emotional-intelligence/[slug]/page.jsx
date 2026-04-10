import { notFound } from 'next/navigation'
import {
  TopicDetailPageHeader,
  TopicDosDonts,
  TopicFurtherReading,
  TopicGuideCallout,
  TopicGlossaryList,
  TopicImageCarousel,
  TopicImageDoDontSplit,
  TopicImageTeachStack,
  TopicKeyTakeaways,
  TopicMistakesList,
  TopicPointsSection,
  TopicPracticeChecklist,
  TopicScenarioCards,
  TopicSimpleFaq,
  TopicStepRibbon,
} from '@/components/topic-guide'
import {
  getAllEiSlugs,
  getEiTopic,
} from '@/app/utils/emotionalIntelligenceContent'
import { getEiTopicGuide } from '@/app/utils/emotionalIntelligenceTopicGuide'

export function generateStaticParams() {
  return getAllEiSlugs().map((slug) => ({ slug }))
}

export async function generateMetadata({ params }) {
  const { slug } = await params
  const topic = getEiTopic(slug)
  if (!topic) return { title: 'Topic not found' }
  return {
    title: `${topic.title} | Emotional intelligence`,
    description: topic.teaser,
  }
}

export default async function EmotionalIntelligenceTopicPage({ params }) {
  const { slug } = await params
  const topic = getEiTopic(slug)
  if (!topic) notFound()

  const guide = getEiTopicGuide(topic)
  const slides = Array.from({ length: topic.carouselCount }, () => ({ imageSrc: null }))

  return (
    <div className="space-y-8 pb-10 md:space-y-10">
      <TopicDetailPageHeader
        hubHref="/emotional-intelligence"
        backLabel="Emotional intelligence"
        title={topic.title}
        description={topic.teaser}
      />

      <TopicKeyTakeaways title="At a glance" items={guide.takeaways} />

      <TopicStepRibbon title={guide.stepRibbonTitle} steps={guide.stepRibbonSteps} />

      <TopicImageCarousel slides={slides} heading="Visual overview" />

      <TopicImageTeachStack
        sectionTitle={guide.teachStackTitle}
        sectionIntro={guide.teachStackIntro}
        lessons={guide.imageLessons}
      />

      <TopicGuideCallout
        variant={guide.calloutTip.variant}
        title={guide.calloutTip.title}
        body={guide.calloutTip.body}
      />

      <TopicPointsSection points={topic.points} heading="Core ideas in depth" />

      {guide.imageDoDont ? (
        <TopicImageDoDontSplit
          title={guide.imageDoDont.title}
          intro={guide.imageDoDont.intro}
          imageSrc={guide.imageDoDont.imageSrc}
          imageAlt={guide.imageDoDont.imageAlt}
          imageCaption={guide.imageDoDont.imageCaption}
          doHeading={guide.imageDoDont.doHeading}
          dontHeading={guide.imageDoDont.dontHeading}
          dos={guide.imageDoDont.dos}
          donts={guide.imageDoDont.donts}
        />
      ) : null}

      <TopicScenarioCards title={guide.scenariosTitle} scenarios={guide.scenarios} />

      <TopicDosDonts title={guide.dosDontsTitle} dos={guide.dos} donts={guide.donts} />

      <TopicMistakesList title={guide.mistakesTitle} mistakes={guide.mistakes} />

      <TopicPracticeChecklist title={guide.practiceTitle} steps={guide.practiceSteps} />

      <TopicGlossaryList title={guide.glossaryTitle} entries={guide.glossaryEntries} />

      <TopicSimpleFaq title={guide.faqTitle} items={guide.faqItems} />

      <TopicGuideCallout
        variant={guide.calloutCaution.variant}
        title={guide.calloutCaution.title}
        body={guide.calloutCaution.body}
      />

      <TopicFurtherReading body={guide.furtherReadingBody} />
    </div>
  )
}
