/**
 * Builds a complete guide object for women topics.
 * Topics can override by providing `guide: { ... }` (shallow merge).
 */

function buildBaseGuide(topicTitle) {
  return {
    stepRibbonTitle: 'Simple steps',
    stepRibbonSteps: [
      { label: 'Pause', detail: 'Take a breath and slow the moment down.' },
      { label: 'Protect', detail: 'Create space, get to safety, and involve trusted people.' },
      { label: 'Document', detail: 'Write down what happened (facts, time, place, witnesses, screenshots).' },
      { label: 'Report', detail: 'Use the safest channel available (trusted contacts, HR, helplines, authorities).' },
    ],
    practiceTitle: 'Practise this for 7 days',
    practiceSteps: [
      'Day 1–2: Identify your safety supports (trusted contacts, emergency numbers, safe routes).',
      'Day 3–4: Practice boundary phrases and calm exit moves in low-stakes situations.',
      'Day 5–7: Review your privacy and documentation habits (screenshots, notes, backups).',
    ],
    teachStackTitle: `Understand “${topicTitle}”`,
    teachStackIntro: 'Clear guidance you can apply immediately.',
    imageLessons: [],
    scenariosTitle: 'Real-life examples',
    scenarios: [],
    imageDoDont: null,
    faqTitle: 'Questions people often ask',
    faqItems: [],
  }
}

export function getWomenTopicGuide(topic) {
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
    complaintGuide: g.complaintGuide ?? null,
    faqTitle: g.faqTitle ?? base.faqTitle,
    faqItems: g.faqItems ?? base.faqItems,
  }
}

