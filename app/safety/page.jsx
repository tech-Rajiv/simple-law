import {
  TopicCategoryCardNav,
  TopicHubIntro,
} from '@/components/topic-guide'
import { safetyHubIntro, safetyTopics } from '@/app/utils/safetyContent'

export const metadata = {
  title: 'Safety & awareness | SimpleLaw',
  description: 'Digital safety, travel habits, and more — short guides with room for your visuals.',
}

export default function SafetyPage() {
  const navItems = safetyTopics.map(({ slug, title, teaser, imageSrc }) => ({
    slug,
    title,
    teaser,
    imageSrc,
  }))

  return (
    <div className="space-y-10 pb-10">
      <TopicHubIntro title={safetyHubIntro.title} paragraphs={safetyHubIntro.paragraphs} />
      <TopicCategoryCardNav basePath="/safety" items={navItems} sectionHeading="Safety topics" />
    </div>
  )
}
