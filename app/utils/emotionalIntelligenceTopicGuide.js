/**
 * Default “full guide” sections for every EI topic detail page.
 * Override per topic by adding `guide: { ... }` on that topic in emotionalIntelligenceTopics (partial merge).
 */

function placeholderImageLessons(topicTitle) {
  return [
    {
      imageSrc: null,
      alt: '',
      teachesHeading: 'What does this image teach us?',
      summary: `Add a one-sentence takeaway for “${topicTitle}” that this image is meant to reinforce.`,
      paragraphs: [
        'Add 2–4 short sentences explaining what the learner should notice and how to use it in real life.',
        'Include context: when this matters, common misreadings, and what a constructive response looks like.',
      ],
      figureNote: 'Optional caption or source line for the image (add when you publish the visual).',
    },
    {
      imageSrc: null,
      alt: '',
      teachesHeading: 'What does this image teach us?',
      summary: `Second visual lesson for “${topicTitle}” — e.g. a before/after, sequence, or contrasting example.`,
      paragraphs: [
        'Describe what the learner should notice first, then what it implies for behaviour.',
        'If relevant, note how the cue changes across settings (school, work, friends, online).',
      ],
    },
    {
      imageSrc: null,
      alt: '',
      teachesHeading: 'What does this image teach us?',
      summary: `Third teaching image — useful for checklists, maps, or step-by-step stills.`,
      paragraphs: [
        'Use this section for deeper interpretation: why it happens, how stress changes it, and how to practise safely.',
      ],
    },
  ]
}

function buildBaseGuide(topicTitle) {
  const defaultDos = [
    'Prepare one simple sentence you can reuse in similar situations.',
    'Pay attention to tone and body language, not only words.',
    'Repair quickly if you slip — short, specific apologies rebuild trust.',
  ]
  const defaultDonts = [
    'Do not assume silence always means agreement.',
    'Avoid public call-outs when a private nudge would work.',
    'Do not skip rest and expect the same level of control every day.',
  ]

  return {
    takeaways: [
      `A clear definition of “${topicTitle}” in real life.`,
      'One concrete behaviour to try this week.',
      'One simple sign you are making progress (self-check or feedback).',
    ],
    teachStackTitle: 'Learn from the visuals',
    teachStackIntro: `Each block below reserves space for an image and explains what it teaches. Swap in photography, diagrams, or illustrations as you build out “${topicTitle}”.`,
    imageLessons: placeholderImageLessons(topicTitle),
    stepRibbonTitle: 'How to use this guide',
    stepRibbonSteps: [
      { label: 'Scan', detail: 'Skim takeaways and visuals to see the shape of the topic.' },
      { label: 'Study', detail: 'Read the explanations and vocabulary; note what applies to you.' },
      { label: 'Practise', detail: 'Use the checklist in a low-stakes conversation or situation.' },
      { label: 'Reflect', detail: 'Jot what worked; adjust one habit for next time.' },
    ],
    calloutTip: {
      variant: 'tip',
      title: 'Small reps beat perfect plans',
      body: `Pick one idea from “${topicTitle}” and repeat it in three short real-world tries before adding more.`,
    },
    calloutCaution: {
      variant: 'caution',
      title: 'Context matters',
      body: 'Body language and social norms vary by culture and setting. Interpret signals with humility and prioritise consent, safety, and policies in your environment.',
    },
    scenariosTitle: 'Put it into practice',
    scenarios: [
      {
        situation: `You are tired and worried you will come across cold during “${topicTitle}”.`,
        approach:
          'Name it briefly (“I’m low on energy today”) and keep one warm cue steady — voice pace, eye contact, or a short check-in question.',
      },
      {
        situation: 'Someone misreads your intent and responds sharply.',
        approach:
          'Pause, reflect what you heard (“Sounds like you mean…”), then ask one clarifying question before defending yourself.',
      },
    ],
    mistakesTitle: 'Common pitfalls',
    mistakes: [
      {
        title: 'Over-focusing on performance',
        body: `Trying to “perform” the skill can look stiff. Aim for clear and kind instead of perfect while you practise “${topicTitle}”.`,
      },
      {
        title: 'Ignoring your own stress signals',
        body: 'Skills slip when sleep, hunger, or overload is high. Reduce intensity first, then apply the technique.',
      },
    ],
    dosDontsTitle: 'Quick rules of thumb',
    dos: defaultDos,
    donts: defaultDonts,
    /** Visual + paired lists (reuse for women’s safety, harassment, etc.) */
    imageDoDont: {
      title: 'What to do — and what to avoid',
      intro: 'Use the image for a diagram, photo sequence, or labelled illustration that matches the “do” and “don’t” lists.',
      imageSrc: null,
      imageAlt: '',
      imageCaption: null,
      doHeading: 'What to do',
      dontHeading: 'What not to do',
      dos: defaultDos,
      donts: defaultDonts,
    },
    practiceTitle: 'Try this over the next week',
    practiceSteps: [
      'Day 1–2: Observe without changing behaviour — note one pattern.',
      'Day 3–4: Apply one technique from this topic once per day.',
      'Day 5–7: Ask for feedback from someone you trust or reflect in a short journal entry.',
    ],
    glossaryTitle: 'Key terms (editable)',
    glossaryEntries: [
      {
        term: 'Term 1',
        definition: `Add a simple definition tied to “${topicTitle}”.`,
      },
      {
        term: 'Term 2',
        definition: 'Add a second definition for any jargon you want to demystify.',
      },
      {
        term: 'Term 3 (optional)',
        definition: 'Add a third definition if needed (or remove this row).',
      },
    ],
    faqTitle: 'Questions people often ask',
    faqItems: [
      {
        question: 'How long until I see results?',
        answer: 'Many people notice small shifts in 1–2 weeks of deliberate practice. Consistency matters more than intensity.',
      },
      {
        question: 'What if I feel worse before I feel better?',
        answer:
          'Paying attention to habits can briefly increase self-criticism. Balance awareness with self-compassion, and seek support if mood or safety is affected.',
      },
    ],
    furtherReadingBody: 'Add links to books, articles, or resources you trust.',
  }
}

/**
 * Shallow merge: topic.guide keys override base guide arrays/objects when provided.
 * @param {{ title: string, guide?: Record<string, unknown> }} topic
 */
export function getEiTopicGuide(topic) {
  const base = buildBaseGuide(topic.title)
  const g = topic.guide || {}

  return {
    takeaways: g.takeaways ?? base.takeaways,
    teachStackTitle: g.teachStackTitle ?? base.teachStackTitle,
    teachStackIntro: g.teachStackIntro ?? base.teachStackIntro,
    imageLessons: g.imageLessons ?? base.imageLessons,
    stepRibbonTitle: g.stepRibbonTitle ?? base.stepRibbonTitle,
    stepRibbonSteps: g.stepRibbonSteps ?? base.stepRibbonSteps,
    calloutTip: g.calloutTip ?? base.calloutTip,
    calloutCaution: g.calloutCaution ?? base.calloutCaution,
    scenariosTitle: g.scenariosTitle ?? base.scenariosTitle,
    scenarios: g.scenarios ?? base.scenarios,
    mistakesTitle: g.mistakesTitle ?? base.mistakesTitle,
    mistakes: g.mistakes ?? base.mistakes,
    dosDontsTitle: g.dosDontsTitle ?? base.dosDontsTitle,
    dos: g.dos ?? base.dos,
    donts: g.donts ?? base.donts,
    imageDoDont: 'imageDoDont' in g ? g.imageDoDont : base.imageDoDont,
    practiceTitle: g.practiceTitle ?? base.practiceTitle,
    practiceSteps: g.practiceSteps ?? base.practiceSteps,
    glossaryTitle: g.glossaryTitle ?? base.glossaryTitle,
    glossaryEntries: g.glossaryEntries ?? base.glossaryEntries,
    faqTitle: g.faqTitle ?? base.faqTitle,
    faqItems: g.faqItems ?? base.faqItems,
    furtherReadingBody: g.furtherReadingBody ?? base.furtherReadingBody,
  }
}
