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
      summary: `[Placeholder] In one sentence: the key lesson this picture is meant to reinforce for “${topicTitle}”. Replace with your real takeaway when you add the image.`,
      paragraphs: [
        `[Placeholder] Expand here with 2–4 sentences. Example uses: labelled hand gestures for communication, posture diagrams for confidence, or (in safety content) simple visuals that show appropriate vs inappropriate touch — always paired with age-appropriate language and local safeguarding guidance.`,
        `[Placeholder] Add context: when this cue matters, common misreadings, and what a constructive response looks like in real life.`,
      ],
      figureNote: 'Optional caption or source line for the image (add when you publish the visual).',
    },
    {
      imageSrc: null,
      alt: '',
      teachesHeading: 'What does this image teach us?',
      summary: `[Placeholder] Second visual lesson for “${topicTitle}” — e.g. a before/after, a sequence, or a contrasting example.`,
      paragraphs: [
        `[Placeholder] Describe what the learner should notice first, then what it implies for behaviour or boundaries.`,
        `[Placeholder] You can link this block to culture-specific norms or workplace vs social settings if relevant.`,
      ],
    },
    {
      imageSrc: null,
      alt: '',
      teachesHeading: 'What does this image teach us?',
      summary: `[Placeholder] Third teaching image — useful for checklists, maps of “zones”, or step-by-step stills.`,
      paragraphs: [
        `[Placeholder] Use this section for deeper interpretation: why the signal appears, how stress or power dynamics change it, and how to practise safely.`,
      ],
    },
  ]
}

function buildBaseGuide(topicTitle) {
  const sampleDos = [
    `[Sample] Prepare one opening line you can reuse in similar situations.`,
    `[Sample] Watch for mismatch between your words and tone.`,
    `[Sample] Repair quickly if you slip — short apologies rebuild trust.`,
  ]
  const sampleDonts = [
    `[Sample] Do not assume silence always means agreement.`,
    `[Sample] Avoid public call-outs when a private nudge would work.`,
    `[Sample] Do not skip rest and expect the same level of control every day.`,
  ]

  return {
    takeaways: [
      `[Sample] You can replace these bullets with outcomes specific to “${topicTitle}”.`,
      `[Sample] One concrete behaviour to try this week.`,
      `[Sample] One sign you are making progress (self-report or feedback).`,
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
      body: `[Sample] Pick one idea from “${topicTitle}” and repeat it in three short real-world tries before adding more. Replace this copy with your preferred coaching line.`,
    },
    calloutCaution: {
      variant: 'caution',
      title: 'Context matters',
      body: `[Sample] Body language and social norms vary by culture and setting. Encourage readers to interpret signals with humility — and to prioritise consent, safety, and workplace policies. Replace with your disclaimer if needed.`,
    },
    scenariosTitle: 'Put it into practice',
    scenarios: [
      {
        situation: `[Sample] You are tired and worried you will come across cold during “${topicTitle}”.`,
        approach: `[Sample] Name it briefly (“I’m a bit low on energy today”) and keep one warm cue steady — voice pace or eye contact. Replace with a scenario from your audience’s world.`,
      },
      {
        situation: `[Sample] Someone misreads your intent and responds sharply.`,
        approach: `[Sample] Pause, reflect their words, and ask one clarifying question before defending yourself. Replace with your script.`,
      },
    ],
    mistakesTitle: 'Common pitfalls',
    mistakes: [
      {
        title: `[Sample] Over-focusing on performance`,
        body: `[Sample] Trying to “perform” confidence can look stiff. Aim for clear and kind instead of perfect. Replace with a pitfall specific to ${topicTitle}.`,
      },
      {
        title: `[Sample] Ignoring your own stress signals`,
        body: `[Sample] Skills slip when sleep or hunger are low. Replace with your note on regulation.`,
      },
    ],
    dosDontsTitle: 'Quick rules of thumb',
    dos: sampleDos,
    donts: sampleDonts,
    /** Visual + paired lists (reuse for women’s safety, harassment, etc.) */
    imageDoDont: {
      title: 'What to do — and what to avoid',
      intro: `[Placeholder] Use the image for a diagram, photo sequence, or labelled illustration. On topics like harassment or boundaries, replace this copy with age-appropriate, locally accurate safeguarding language.`,
      imageSrc: null,
      imageAlt: '',
      imageCaption: null,
      doHeading: 'What to do',
      dontHeading: 'What not to do',
      dos: sampleDos,
      donts: sampleDonts,
    },
    practiceTitle: 'Try this over the next week',
    practiceSteps: [
      `[Sample] Day 1–2: Observe without changing behaviour — note one pattern.`,
      `[Sample] Day 3–4: Apply one technique from this topic once per day.`,
      `[Sample] Day 5–7: Ask for feedback from someone you trust or reflect in a short journal entry.`,
    ],
    glossaryTitle: 'Key terms (editable)',
    glossaryEntries: [
      {
        term: `[Sample] Term one`,
        definition: `[Sample] Definition placeholder — tie to “${topicTitle}” in your final copy.`,
      },
      {
        term: `[Sample] Term two`,
        definition: `[Sample] Another definition slot for jargon you want to demystify.`,
      },
      {
        term: `[Sample] Term three`,
        definition: `[Sample] Optional third entry; add or remove rows in the topic guide merge.`,
      },
    ],
    faqTitle: 'Questions people often ask',
    faqItems: [
      {
        question: `[Sample] How long until I see results?`,
        answer: `[Sample] Many people notice small shifts in one to two weeks of deliberate practice. Replace with evidence-based guidance if you cite research.`,
      },
      {
        question: `[Sample] What if I feel worse before I feel better?`,
        answer: `[Sample] Paying attention to habits can temporarily increase self-criticism. Balance awareness with self-compassion and professional support if mood or safety are affected.`,
      },
    ],
    furtherReadingBody: `[Placeholder] Add links to books, articles, helplines, or institutional resources you trust. This block is intentionally dashed so it is obvious it is unfinished.`,
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
