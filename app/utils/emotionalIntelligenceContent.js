/**
 * Emotional intelligence hub + topic pages.
 * Edit copy here; slugs are used in URLs — change slug only with redirects in mind.
 */

/** Shown under the main hero heading */
export const emotionalIntelligenceHeroSubtitle =
  'Build skills you can practise every day: self-awareness, empathy, communication, and calm under pressure — with clear guides and a path to check what you know.'

/** CTA in hero — links to site assessments */
export const emotionalIntelligenceAssessmentCta = {
  href: '/assessment',
  label: 'Take an emotional intelligence test',
}

export const emotionalIntelligenceHeroEyebrow = 'Learning hub'

export const emotionalIntelligenceHeroCtaHint =
  'Opens your assessments — pick emotional intelligence or browse everything in one place.'

export const emotionalIntelligenceHeroCtaPanelBody =
  'See where you are strong today and what to practise next — alongside your other assessments.'

export const emotionalIntelligenceIntro = {
  title: 'What is emotional intelligence?',
  paragraphs: [
    'Emotional intelligence (EI) is the ability to notice, understand, and manage your own emotions — and to read and respond to other people’s feelings with care. It helps you stay steady under pressure, communicate clearly, and build trust.',
    'Unlike IQ, EI can be practised: small habits like pausing before you reply, naming what you feel, and listening without interrupting add up. Strong EI supports better decisions at work, at school, and in close relationships.',
    'The topics below break EI into practical skills: how people behave, how to speak in public or in groups, first impressions, staying calm when stakes are high, handling stress, and more. Pick a topic to go deeper.',
  ],
}

/** Four pillars — rendered by LearningPillarGrid on the hub only */
export const emotionalIntelligencePillars = {
  title: 'The four pillars you will strengthen here',
  items: [
    {
      title: 'Self-awareness',
      description:
        'Notice your moods, habits, and triggers early — before they steer conversations or decisions.',
    },
    {
      title: 'Self-regulation',
      description:
        'Slow down sharp reactions, recover from stress, and choose responses that match your values.',
    },
    {
      title: 'Social awareness',
      description:
        'Read context and other people’s cues with curiosity instead of jumping to conclusions.',
    },
    {
      title: 'Relationship skills',
      description:
        'Communicate clearly, repair misunderstandings, and collaborate without burning trust.',
    },
  ],
}

/** Extra static sections for the hub — rendered by LearningContentSections */
export const emotionalIntelligenceHubSections = [
  {
    title: 'Why emotional intelligence matters',
    paragraphs: [
      'Most setbacks in work and relationships are not caused by a lack of technical skill — they come from unclear communication, unmanaged stress, or reactions that escalate tension. Emotional intelligence helps you stay steady when conversations get hard and when deadlines pile up.',
      'Organisations increasingly value people who can listen well, give useful feedback, and work across differences. On a personal level, stronger EI is linked to better wellbeing: you waste less energy on regret, rumination, or unnecessary conflict.',
      'The good news is that EI is not fixed. Research and coaching practice both show that small, repeated habits — reflection, breathing space before you reply, naming emotions accurately — compound into lasting change.',
    ],
  },
  {
    title: 'Who this hub is for',
    paragraphs: [
      'Students and early-career professionals who want to show up with confidence in interviews, group work, and first jobs.',
      'Team members and leaders who run meetings, give updates, or support others through change.',
      'Anyone who feels “too reactive” in arguments or anxious before presentations and wants practical tools, not jargon.',
      'You do not need a psychology background. Each topic uses plain language, concrete steps, and space for you to add your own examples as you learn.',
    ],
  },
  {
    title: 'How to use this learning hub',
    paragraphs: [
      'Start with one topic that matches a real situation you face this week — for example stress before exams, speaking in a community meeting, or making a stronger first impression.',
      'Read the short guide, try one behaviour change at a time, and note what improves (tone of a conversation, your sleep, or how quickly you bounce back after a tough day).',
      'When you are ready, use the emotional intelligence test on our assessments page to see where you are strong and where to focus next. Retake it later to track progress — improvement in EI is often gradual but measurable in how you feel day to day.',
      'Bookmark topics you want to revisit. We designed the layout to read well on phones so you can review a section on the go.',
    ],
  },
  {
    title: 'Evidence-informed, not a substitute for care',
    paragraphs: [
      'The material here draws on widely taught models of emotional and social competence and on communication skills used in education and workplace training. It is for learning and self-development.',
      'This site does not provide therapy or medical advice. If you are in distress, struggling with mood in a way that affects daily life, or unsafe, please reach out to a qualified professional or local crisis services — your safety and health come first.',
    ],
  },
]

/**
 * Optional “modern layout” showcase copy for the EI hub — same components are reusable on any route.
 */
export const emotionalIntelligenceModernLayouts = {
  gradientBand: {
    eyebrow: 'Focus',
    title: 'Emotional skills compound the way physical training does',
    body: 'Short reps beat rare marathons: one honest check-in per day, one calmer reply, one moment of real listening. This hub is built so you can stack those reps without drowning in theory.',
  },
  bento: {
    title: 'At a glance',
    items: [
      { value: '4', label: 'Pillars', hint: 'Awareness, regulation, social awareness, relationships.' },
      { value: '7+', label: 'Topic guides', hint: 'Deep pages you can extend with your own media.' },
      { value: '1', label: 'Assessment entry point', hint: 'Start or revisit on the assessments page.' },
      {
        value: '∞',
        label: 'Practice cycles',
        hint: 'Reflect → try → note what changed → adjust.',
        span: 'wide',
      },
    ],
  },
  quote: {
    quote:
      'The goal is not to be unflappable — it is to recover faster, apologise cleanly, and choose the next sentence on purpose instead of autopilot.',
    attribution: 'How we frame this hub',
    role: 'Editorial note — replace with a real citation if you quote someone.',
  },
  chips: {
    title: 'Ideas you will see throughout the guides',
    tags: [
      'Self-awareness',
      'Regulation',
      'Empathy',
      'Boundaries',
      'Repair',
      'Stress cues',
      'Public speaking',
      'First impressions',
    ],
  },
  splitBanner: {
    title: 'Built for phones first',
    body: 'Guides use clear sections, scroll-friendly cards, and room for images you add later — whether you are on a commute or at a desk.',
    asideTitle: 'Try this workflow',
    asideBody: 'Pick one topic → read for ten minutes → try one behaviour in a low-stakes chat → jot one line about what you noticed.',
  },
  timeline: {
    title: 'A simple learning loop',
    steps: [
      {
        title: 'Notice',
        body: 'Name what you feel and what the situation is asking of you — without judging yourself yet.',
      },
      {
        title: 'Choose',
        body: 'Pick one small response that matches your values (tone, timing, or a clarifying question).',
      },
      {
        title: 'Review',
        body: 'Afterward, ask what worked and what you would tweak. That feedback is your personal data.',
      },
    ],
  },
}

/**
 * @typedef {{ slug: string, title: string, teaser: string, imageSrc: string | null, carouselCount: number, points: { title: string, body: string }[], guide?: Record<string, unknown> }} EiTopic
 */

/** @type {EiTopic[]} */
export const emotionalIntelligenceTopics = [
  {
    slug: 'human-behavior',
    title: 'Human behavior',
    teaser: 'Patterns, cues, and why people act the way they do in everyday situations.',
    imageSrc: null,
    carouselCount: 5,
    points: [
      {
        title: 'Observation beats assumption',
        body: 'Notice body language, tone, and context before interpreting intent. Most misunderstandings start from a single guess that was never checked.',
      },
      {
        title: 'Behavior has functions',
        body: 'People often repeat behaviors that once helped them feel safe or in control. That does not excuse harm — it helps you respond without taking everything personally.',
      },
      {
        title: 'Small experiments',
        body: 'Try one change at a time: clearer boundaries, calmer tone, or asking one honest question. Watch what shifts and adjust.',
      },
    ],
  },
  {
    slug: 'communicate-in-public-and-groups',
    title: 'Communicate in public & in groups',
    teaser: 'Speak so others can follow you in meetings, classrooms, and community settings.',
    imageSrc: null,
    carouselCount: 6,
    points: [
      {
        title: 'One main idea per block',
        body: 'Group your message into a few chunks. Pause between them so listeners can absorb and nod (or ask).',
      },
      {
        title: 'Anchor with structure',
        body: 'Open with what you want from the group, then give two or three supporting reasons, then restate the ask or decision needed.',
      },
      {
        title: 'Invite participation',
        body: 'Name silence as okay, ask a specific question to the room, and summarise what you heard so people feel included.',
      },
    ],
  },
  {
    slug: 'first-impression',
    title: 'How to make a first impression',
    teaser: 'Warmth, clarity, and consistency in the first minutes of meeting someone.',
    imageSrc: null,
    carouselCount: 4,
    points: [
      {
        title: 'Lead with presence',
        body: 'Eye contact, a steady greeting, and remembering their name signal respect before you say anything clever.',
      },
      {
        title: 'Match energy thoughtfully',
        body: 'You do not need to be loud — align roughly with the setting (formal vs casual) so you feel approachable, not performative.',
      },
      {
        title: 'Follow through visibly',
        body: 'A short thank-you message or doing what you said you would do cements the impression more than any opening joke.',
      },
    ],
  },
  {
    slug: 'calm-in-intense-situations',
    title: 'Stay calm in intense situations',
    teaser: 'Reduce nerves and sharp reactions when pressure, conflict, or scrutiny spikes.',
    imageSrc: null,
    carouselCount: 5,
    points: [
      {
        title: 'Buy two seconds',
        body: 'A slow exhale, a sip of water, or repeating the question aloud gives your prefrontal cortex time to come back online.',
      },
      {
        title: 'Name it to tame it',
        body: 'Silently label the feeling: “This is adrenaline.” Naming reduces the story spiral and keeps you task-focused.',
      },
      {
        title: 'Shrink the stakes',
        body: 'Ask: what is the smallest next step? Break the moment into one sentence, one action, one breath — not the whole outcome.',
      },
    ],
  },
  {
    slug: 'how-to-handle-stress',
    title: 'How to handle stress',
    teaser: 'Recover faster, protect sleep, and set boundaries when demands pile up.',
    imageSrc: null,
    carouselCount: 6,
    points: [
      {
        title: 'Separate alarm from action',
        body: 'Stress often mixes real tasks with vague worry. Write both lists; only the first list gets your calendar today.',
      },
      {
        title: 'Body budget basics',
        body: 'Regular meals, movement, and sleep are not “soft” skills — they are the floor that keeps emotional regulation possible.',
      },
      {
        title: 'Recovery blocks',
        body: 'Schedule short non-negotiable breaks the way you schedule meetings. Recovery is part of performance, not a reward after collapse.',
      },
    ],
  },
  {
    slug: 'active-listening',
    title: 'Active listening',
    teaser: 'Hear what people mean, not only the words they say.',
    imageSrc: null,
    carouselCount: 4,
    points: [
      {
        title: 'Listen to understand',
        body: 'Pause your rebuttal until they finish. Reflect back: “Sounds like you’re saying…” and check if you got it right.',
      },
      {
        title: 'Questions before solutions',
        body: 'Ask one clarifying question before offering advice. Often people need to feel heard before they can use your idea.',
      },
      {
        title: 'Nonverbal alignment',
        body: 'Face them, put devices away, and nod minimally. Your body shows whether you are collecting their story or waiting to talk.',
      },
    ],
  },
  {
    slug: 'self-awareness-and-triggers',
    title: 'Self-awareness & triggers',
    teaser: 'Know your patterns so you can choose responses instead of reacting on autopilot.',
    imageSrc: null,
    carouselCount: 5,
    points: [
      {
        title: 'Trigger map',
        body: 'Note situations that spike anger, shame, or anxiety. Patterns reveal needs (rest, fairness, clarity) underneath the reaction.',
      },
      {
        title: 'Values as compass',
        body: 'When torn, ask which option fits who you want to be for the next hour — not perfect, just intentional.',
      },
      {
        title: 'Repair when you slip',
        body: 'A short, specific apology without excuses rebuilds trust faster than pretending the sharp moment did not happen.',
      },
    ],
  },
]

export function getEiTopic(slug) {
  return emotionalIntelligenceTopics.find((t) => t.slug === slug) ?? null
}

export function getAllEiSlugs() {
  return emotionalIntelligenceTopics.map((t) => t.slug)
}
