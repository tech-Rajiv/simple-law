import { notFound } from 'next/navigation'
import {
  TopicDetailPageHeader,
  TopicImageCarousel,
  TopicPointsSection,
} from '@/components/topic-guide'
import { getAllWomenSlugs, getWomenTopic } from '@/app/utils/womenContent'

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

  const slides = Array.from({ length: topic.carouselCount }, () => ({ imageSrc: null }))

  return (
    <div className="space-y-10 pb-10">
      <TopicDetailPageHeader
        hubHref="/women"
        backLabel="Women’s resources"
        title={topic.title}
        description={topic.teaser}
      />
      <TopicImageCarousel slides={slides} heading="Illustrations" />
      <TopicPointsSection points={topic.points} heading="Key ideas" />
    </div>
  )
}
