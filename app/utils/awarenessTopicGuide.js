/**
 * Builds a complete guide object for awareness topics.
 * Topics can override by providing `guide: { ... }` (shallow merge).
 */

function buildBaseGuide(topicTitle) {
  return {
    stepRibbonTitle: 'Simple steps',
    stepRibbonSteps: [
      { label: 'Pause', detail: 'Slow down for 2–3 seconds and regain control.' },
      { label: 'Observe', detail: 'Scan people, exits, and what changed.' },
      { label: 'Choose', detail: 'Pick the next safe step you control.' },
      { label: 'Act', detail: 'Move calmly and follow through.' },
    ],
    practiceTitle: 'Practise this for 7 days',
    practiceSteps: [
      'Day 1–2: Notice risks early and label them calmly.',
      'Day 3–4: Practise one small safety habit daily.',
      'Day 5–7: Use the pause rule in any tense moment.',
    ],
    teachStackTitle: `Understand “${topicTitle}”`,
    teachStackIntro: 'Short explanations you can apply immediately.',
    imageLessons: [],
    scenariosTitle: 'Real-life examples',
    scenarios: [],
    imageDoDont: null,
    faqTitle: 'Questions people often ask',
    faqItems: [],
  }
}

export function getAwarenessTopicGuide(topic) {
  const base = buildBaseGuide(topic.title)
  const g = topic.guide || {}
  return {
    stepRibbonTitle: g.stepRibbonTitle ?? base.stepRibbonTitle,
    stepRibbonSteps: g.stepRibbonSteps ?? base.stepRibbonSteps,
    practiceTitle: g.practiceTitle ?? base.practiceTitle,
    practiceSteps: g.practiceSteps ?? base.practiceSteps,
    teachStackTitle: g.teachStackTitle ?? base.teachStackTitle,
    teachStackIntro: g.teachStackIntro ?? base.teachStackIntro,
    imageLessons: g.imageLessons ?? base.imageLessons,
    scenariosTitle: g.scenariosTitle ?? base.scenariosTitle,
    scenarios: g.scenarios ?? base.scenarios,
    imageDoDont: 'imageDoDont' in g ? g.imageDoDont : base.imageDoDont,
    faqTitle: g.faqTitle ?? base.faqTitle,
    faqItems: g.faqItems ?? base.faqItems,
  }
}

