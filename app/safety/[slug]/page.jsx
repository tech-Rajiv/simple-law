import { notFound } from 'next/navigation'
import {
  TopicDetailPageHeader,
  TopicImageCarousel,
  TopicPointsSection,
} from '@/components/topic-guide'
import { getAllSafetySlugs, getSafetyTopic } from '@/app/utils/safetyContent'

export function generateStaticParams() {
  return getAllSafetySlugs().map((slug) => ({ slug }))
}

export async function generateMetadata({ params }) {
  const { slug } = await params
  const topic = getSafetyTopic(slug)
  if (!topic) return { title: 'Topic not found' }
  return {
    title: `${topic.title} | Safety`,
    description: topic.teaser,
  }
}

export default async function SafetyTopicPage({ params }) {
  const { slug } = await params
  const topic = getSafetyTopic(slug)
  if (!topic) notFound()

  const slides = Array.from({ length: topic.carouselCount }, () => ({ imageSrc: null }))

  return (
    <div className="space-y-10 pb-10">
      <TopicDetailPageHeader
        hubHref="/safety"
        backLabel="Safety & awareness"
        title={topic.title}
        description={topic.teaser}
      />
      <TopicImageCarousel slides={slides} heading="Illustrations" />
      <TopicPointsSection points={topic.points} heading="Key ideas" />
    </div>
  )
}
