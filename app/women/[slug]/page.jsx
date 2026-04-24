import { notFound } from 'next/navigation'
import Link from 'next/link'
import {
  TopicDetailPageHeader,
  TopicImageCarousel,
  TopicWhatMostPeopleDo,
  TopicStepRibbon,
  TopicTextLessonStack,
  TopicPracticePlan,
  TopicImageDoDontSplit,
  TopicScenarioCards,
  TopicSimpleFaq,
} from '@/components/topic-guide'
import { getAllWomenSlugs, getWomenTopic } from '@/app/utils/womenContent'
import { getWomenTopicGuide } from '@/app/utils/womenTopicGuide'

export function generateStaticParams() {
  return getAllWomenSlugs().map((slug) => ({ slug }))
}

export async function generateMetadata({ params }) {
  const { slug } = await params
  const topic = getWomenTopic(slug)
  if (!topic) return { title: 'Topic not found' }
  return {
    title: `${topic.title} | Women’s resources`,
    description: topic.teaser,
  }
}

export default async function WomenTopicPage({ params }) {
  const { slug } = await params
  const topic = getWomenTopic(slug)
  if (!topic) notFound()

  const guide = getWomenTopicGuide(topic)
  const slides =
    topic.carouselImages && Array.isArray(topic.carouselImages) && topic.carouselImages.length
      ? topic.carouselImages
      : Array.from({ length: topic.carouselCount }, () => ({ imageSrc: null }))

  return (
    <div className="space-y-10 pb-10">
      <TopicDetailPageHeader
        hubHref="/women"
        backLabel="Women’s resources"
        title={topic.title}
        description={topic.teaser}
      />

      <TopicImageCarousel slides={slides} heading="Visual overview" />

      {topic.mostPeopleDo ? (
        <TopicWhatMostPeopleDo
          title={topic.mostPeopleDo.title}
          paragraphs={topic.mostPeopleDo.paragraphs}
          patterns={topic.mostPeopleDo.patterns}
          examples={topic.mostPeopleDo.examples}
          closing={topic.mostPeopleDo.closing}
        />
      ) : null}

      <TopicStepRibbon title={guide.stepRibbonTitle} steps={guide.stepRibbonSteps} />

      <TopicTextLessonStack title={guide.teachStackTitle} intro={guide.teachStackIntro} lessons={guide.imageLessons} />

      <TopicPracticePlan title={guide.practiceTitle} steps={guide.practiceSteps} />

      {guide.complaintGuide ? (
        <section className="rounded-2xl border border-[color:var(--border-light)] bg-[color:var(--bg-card)] p-6 shadow-[var(--shadow-soft)] md:p-8">
          <h2 className="text-xl font-semibold tracking-tight text-[color:var(--text-primary)] md:text-2xl">
            {guide.complaintGuide.title}
          </h2>
          <p className="mt-2 max-w-3xl text-sm leading-relaxed text-[color:var(--text-secondary)] md:text-base">
            {guide.complaintGuide.body}
          </p>
          <div className="mt-5">
            <Link
              href={guide.complaintGuide.href}
              className="inline-flex items-center gap-2 rounded-xl border border-[color:var(--border-light)] bg-[color:var(--bg-card)] px-5 py-3 text-sm font-semibold text-[color:var(--text-primary)] shadow-[var(--shadow-soft)] transition-colors hover:border-[color:var(--color-primary)] hover:text-[color:var(--color-primary)]"
            >
              {guide.complaintGuide.label} <span aria-hidden="true">→</span>
            </Link>
          </div>
        </section>
      ) : null}

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

      <TopicSimpleFaq title={guide.faqTitle} items={guide.faqItems} />
    </div>
  )
}
