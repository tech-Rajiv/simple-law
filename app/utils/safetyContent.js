/**
 * Safety hub — reusable topic-guide layout. Add topics and images as you grow this section.
 */

export const safetyHubIntro = {
  title: 'Safety & awareness',
  paragraphs: [
    'Short guides for everyday safety: online habits, travel, home, and emergencies. Pick a topic to see steps and space for your own images.',
    'These pages are educational only. In an emergency, contact local emergency services first.',
  ],
}

export const safetyTopics = [
  {
    slug: 'digital-safety',
    title: 'Digital safety',
    teaser: 'Passwords, scams, and reducing what strangers can learn about you online.',
    imageSrc: null,
    carouselCount: 5,
    points: [
      {
        title: 'Slow down on links',
        body: 'If a message pressures you to log in or pay urgently, open the app or site directly instead of tapping the link.',
      },
      {
        title: 'Separate work and personal',
        body: 'Use different emails or accounts for banking vs social media where you can — it limits blast radius if one account is compromised.',
      },
    ],
  },
  {
    slug: 'travel-safety',
    title: 'Travel safety',
    teaser: 'Light habits for buses, cabs, and unfamiliar areas.',
    imageSrc: null,
    carouselCount: 4,
    points: [
      {
        title: 'Verify the ride',
        body: 'Match number plates and driver name before you get in. Share live location with someone you trust when travelling alone at night.',
      },
      {
        title: 'Keep essentials reachable',
        body: 'Phone, ID, and a small amount of cash in pockets you can access without opening your whole bag in public.',
      },
    ],
  },
]

export function getSafetyTopic(slug) {
  return safetyTopics.find((t) => t.slug === slug) ?? null
}

export function getAllSafetySlugs() {
  return safetyTopics.map((t) => t.slug)
}
