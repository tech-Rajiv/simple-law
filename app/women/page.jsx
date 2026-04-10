import {
  TopicCategoryCardNav,
  TopicHubIntro,
} from '@/components/topic-guide'
import { womenHubIntro, womenTopics } from '@/app/utils/womenContent'

export const metadata = {
  title: 'Women’s resources | SimpleLaw',
  description: 'Practical guides on safety, workplace wellbeing, and related topics.',
}

export default function WomenPage() {
  const navItems = womenTopics.map(({ slug, title, teaser, imageSrc }) => ({
    slug,
    title,
    teaser,
    imageSrc,
  }))

  return (
    <div className="space-y-10 pb-10">
      <TopicHubIntro title={womenHubIntro.title} paragraphs={womenHubIntro.paragraphs} />
      <TopicCategoryCardNav basePath="/women" items={navItems} sectionHeading="Topics" />
    </div>
  )
}
