/**
 * Women hub — same shape as emotionalIntelligenceTopics for shared topic-guide components.
 * Expand topics and copy as needed.
 */

export const womenHubIntro = {
  title: 'Women’s resources',
  paragraphs: [
    'This section brings together practical guidance you can reuse across safety, rights, and wellbeing topics. Each card opens a short guide with visuals you can add later.',
    'Content here is for general awareness — verify details with trusted professionals and official channels when it affects your safety or legal situation.',
  ],
}

export const womenTopics = [
  {
    slug: 'safety-basics',
    title: 'Safety basics',
    teaser: 'Situational awareness, trusted contacts, and simple habits that reduce risk.',
    imageSrc: null,
    carouselCount: 4,
    points: [
      {
        title: 'Share your plan',
        body: 'Tell someone you trust where you are going and when you expect to return. A quick message can be enough.',
      },
      {
        title: 'Trust your instincts',
        body: 'If a place or interaction feels wrong, you are allowed to leave, say no, or ask for help without owing an explanation.',
      },
    ],
  },
  {
    slug: 'workplace-wellbeing',
    title: 'Workplace wellbeing',
    teaser: 'Boundaries, documentation, and support when pressure or conflict shows up at work.',
    imageSrc: null,
    carouselCount: 3,
    points: [
      {
        title: 'Keep a factual log',
        body: 'Note dates, witnesses, and what was said or done. Factual records help if you escalate formally later.',
      },
      {
        title: 'Know your channels',
        body: 'HR, internal committees, and external helplines each play a different role — use the one that matches your situation.',
      },
    ],
  },
]

export function getWomenTopic(slug) {
  return womenTopics.find((t) => t.slug === slug) ?? null
}

export function getAllWomenSlugs() {
  return womenTopics.map((t) => t.slug)
}
