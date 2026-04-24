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
      'People will forget what you said, people will forget what you did, but people will never forget how you made them feel.',
    attribution: 'Maya Angelou',
    role: 'Poet and civil rights activist',
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
    slug: 'staying-calm-under-pressure',
    title: 'Staying calm under pressure',
    teaser:
      'Stay mentally clear and emotionally balanced when stress spikes — so you respond with control, not impulse.',
    imageSrc: '/topics/eq/calm.jpg',
    mostPeopleDo: {
      title: 'What most people do',
      paragraphs: [
        'When faced with pressure, most people react automatically instead of thinking clearly.',
      ],
      patterns: [
        'Impulsive reactions — saying things they regret in anger',
        'Overthinking — imagining worst-case scenarios',
        'Emotional flooding — letting stress or panic take over',
        'Avoidance — delaying decisions or escaping the situation',
        'Blaming others — shifting responsibility instead of handling it',
      ],
      examples: [
        'A small disagreement turns into a heated argument because neither person pauses.',
        'A mistake at work leads to panic instead of a solution-focused approach.',
      ],
      closing: 'In these moments, emotions overpower logic.',
    },
    carouselCount: 5,
    carouselImages: [
      { imageSrc: '/topics/eq/calm.jpg', alt: 'Staying calm under pressure' },
      { imageSrc: '/topics/eq/focus-meditation.jpg', alt: 'Focus and breathing' },
      { imageSrc: '/topics/eq/stress-man.jpg', alt: 'Stress and pressure' },
      { imageSrc: '/topics/eq/meditation.jpg', alt: 'Relaxation technique' },
      { imageSrc: '/topics/eq/moving-ahead.jpg', alt: 'Move forward with clarity' },
    ],
    points: [
      {
        title: 'Staying calm is control, not numbness',
        body: 'Calm under pressure does not mean you feel nothing — it means you do not let stress, fear, or anger hijack your next action.',
      },
      {
        title: 'Pause creates space for better decisions',
        body: 'Most damage happens in the first impulsive seconds. A short pause helps your thinking return so you can choose a response instead of reacting.',
      },
      {
        title: 'Train it in small moments',
        body: 'You build calmness daily: traffic, minor annoyances, small disagreements. Those reps prepare you for high-stakes situations.',
      },
    ],
    guide: {
      takeaways: [
        'Pressure is normal — your advantage is responding with clarity instead of reacting impulsively.',
        'Use a pause + slow breathing to reduce intensity before you speak or act.',
        'Focus on the next controllable step; stop trying to control everything at once.',
      ],
      teachStackTitle: 'Calm in real life (not theory)',
      teachStackIntro:
        'Short, practical explanations of what calm looks like, why people panic under pressure, and the habits you can practise to stay in control.',
      imageLessons: [
        {
          imageSrc: '/topics/eq/calm-sclupture.jpg',
          alt: 'Calm under pressure',
          teachesHeading: 'What calm under pressure really means',
          summary:
            'Calm is not the absence of emotion — it is emotional control: you feel the stress, but it does not control your behaviour.',
          paragraphs: [
            'When pressure rises, your body pushes you toward fast reactions. Calm people still feel adrenaline — they just give themselves a moment to think before acting.',
            'The goal is clarity: respond with purpose, not impulse.',
          ],
        },
        {
          imageSrc: '/topics/eq/focus-meditation.jpg',
          alt: 'Breathing and focus',
          teachesHeading: 'Breathing is a reset button',
          summary:
            'Slower breathing signals safety to your brain, reducing panic and helping you think clearly.',
          paragraphs: [
            'Try: inhale 4 seconds → hold 2 → exhale 6. Repeat 4–5 times.',
            'Do it before replying to a message, speaking in a tense moment, or making a decision under stress.',
          ],
        },
        {
          imageSrc: '/topics/eq/stress-man.jpg',
          alt: 'Stress response',
          teachesHeading: 'Shift from overwhelm to control',
          summary:
            'Pressure grows when you try to handle everything at once. Calm grows when you choose the next small step you can control.',
          paragraphs: [
            'Ask: “What can I do right now?” and “What’s the next small step?”',
            'This breaks the spiral and turns stress into action.',
          ],
        },
      ],
      stepRibbonTitle: 'How to stay calm (simple steps)',
      stepRibbonSteps: [
        {
          label: 'Pause before you react',
          detail: 'Give yourself 2–5 seconds. Your first reaction is usually emotional, not your best decision.',
        },
        {
          label: 'Control your breathing',
          detail: 'Inhale 4 → hold 2 → exhale 6. Repeat 4–5 times to reduce intensity and think clearly.',
        },
        {
          label: 'Name what you feel',
          detail: 'Say it internally: “I’m stressed because this is uncertain.” Naming creates clarity and control.',
        },
        {
          label: 'Focus on the next step',
          detail: 'Ask: “What can I control right now?” Choose one small action and respond with purpose.',
        },
      ],
      scenariosTitle: 'Real-life example',
      scenarios: [
        {
          situation: 'You receive harsh feedback from your manager.',
          approach:
            'Instead of getting defensive, pause, listen fully, then respond: “Got it — I understand the concern. I’ll improve this.” Reflect later on what’s valid.',
        },
        {
          situation: 'A small disagreement starts turning into an argument.',
          approach:
            'Pause, lower your voice, and ask one clarifying question. The goal is control, not winning the moment.',
        },
      ],
      dosDontsTitle: 'What to do — and what to avoid',
      dos: [
        'Pause before reacting — your first reaction is usually emotional, not rational.',
        'Use slow breathing to calm your body and clear your mind.',
        'Focus on what you can control right now: the next small step.',
        'Ask a logic check: “Is this as bad as it feels?”',
        'Practise calmness in small daily situations so it’s available in big moments.',
      ],
      donts: [
        'Do not react instantly when you feel anger, fear, or stress.',
        'Do not suppress emotions — notice them and guide them instead.',
        'Do not overthink worst-case scenarios; it increases anxiety without helping.',
        'Do not try to control everything; control your response.',
        'Do not take things personally immediately — confirm intent and context first.',
      ],
      imageDoDont: {
        title: 'Quick rules of thumb',
        intro:
          'Use this as a fast reminder when pressure hits: pause, breathe, name the emotion, and choose the next controllable step.',
        imageSrc: '/topics/eq/do-and-donts.jpg',
        imageAlt: 'Do and don’t checklist',
        imageCaption: null,
        doHeading: 'What to do',
        dontHeading: 'What not to do',
        dos: [
          'Pause before reacting.',
          'Slow your breathing.',
          'Name what you feel.',
          'Focus on the next small step.',
        ],
        donts: [
          'React instantly.',
          'Spiral into worst-case thinking.',
          'Try to control everything.',
          'Suppress emotions instead of guiding them.',
        ],
      },
      practiceTitle: 'Practise this for 7 days',
      practiceSteps: [
        'Day 1–2: Notice your stress signals (tight chest, rushed speech, irritation). Do not fix — just observe.',
        'Day 3–4: Use the 4–2–6 breathing technique once per day when you feel pressure.',
        'Day 5–7: Add the pause rule: wait 2–5 seconds before you reply in any tense moment.',
      ],
      glossaryTitle: 'Key terms',
      glossaryEntries: [
        { term: 'Pressure', definition: 'A situation that feels urgent, high-stakes, uncertain, or emotionally intense.' },
        { term: 'Impulsive reaction', definition: 'A fast emotional response that happens before clear thinking kicks in.' },
        { term: 'Emotional flooding', definition: 'When stress or panic overwhelms you and logic feels unavailable.' },
      ],
      faqTitle: 'Questions people often ask',
      faqItems: [
        {
          question: 'Does staying calm mean I should not feel emotions?',
          answer:
            'No. Calm means you feel emotions but you do not let them control your actions. You guide the emotion instead of suppressing it.',
        },
        {
          question: 'What is the fastest way to calm down in the moment?',
          answer:
            'Pause and slow your breathing. Even 4–5 rounds of inhale 4 → hold 2 → exhale 6 can reduce intensity quickly.',
        },
        {
          question: 'Why do I say the wrong thing when I’m under pressure?',
          answer:
            'Stress narrows attention and pushes your brain toward fast “survival” responses. A short pause and slower breathing gives your thinking time to come back online.',
        },
        {
          question: 'How do I stop overthinking worst-case scenarios?',
          answer:
            'Bring your mind back to what is real and controllable: “What is the next small step I can take right now?” Worst-case thinking feels productive, but usually adds anxiety without improving outcomes.',
        },
        {
          question: 'What if the situation is genuinely high-stakes?',
          answer:
            'Calm does not mean slow or passive. It means controlled. Reduce intensity first (pause + breath), then act clearly: one sentence, one decision, one next step.',
        },
        {
          question: 'Can I build this skill if I’m naturally emotional?',
          answer:
            'Yes. Emotional intensity is not the problem — impulsive reactions are. With practice (especially in small daily stress), you can feel strongly and still respond with control.',
        },
        {
          question: 'How long does it take to improve?',
          answer:
            'Many people notice small changes within 1–2 weeks if they practise one technique daily. Bigger change comes from repeating the same calm habits across real situations.',
        },
      ],
      furtherReadingBody:
        'If you want to go deeper, revisit this guide after a week of practice and note what changed in your reactions, tone, and decision-making.',
    },
  },
  {
    slug: 'understanding-your-own-mind',
    title: 'Understanding your own mind',
    teaser:
      'Become aware of how you think, feel, and react — and build the habit of observing patterns instead of running on autopilot.',
    imageSrc: '/topics/mind/mind.jpg',
    mostPeopleDo: {
      title: 'What most people do',
      paragraphs: [
        'Most people react without thinking, assume their thoughts are always correct, and repeat the same patterns without reflection.',
      ],
      patterns: [
        'React without thinking',
        'Assume their thoughts are always correct',
        'Let emotions decide actions',
        'Repeat the same mistakes without reflection',
        'Blame situations or others instead of understanding themselves',
      ],
      examples: [
        'Someone gets ignored in a conversation and instantly thinks “They don’t respect me,” leading to frustration—without considering other possibilities.',
      ],
      closing:
        'Self-awareness creates choice. Without it, your reactions feel automatic.',
    },
    carouselCount: 3,
    carouselImages: [
      { imageSrc: '/topics/mind/carousal/carousal-1.jpg', alt: 'Understanding your own mind' },
      { imageSrc: '/topics/mind/carousal/carousal-2.jpg', alt: 'Thoughts and reactions' },
      { imageSrc: '/topics/mind/carousal/carousal-3.jpg', alt: 'Patterns and triggers' },
    ],
    points: [
      {
        title: 'Autopilot is the default',
        body: 'Most people experience emotions and make decisions without questioning the patterns behind them. Awareness is what turns autopilot into choice.',
      },
      {
        title: 'Thoughts are not always facts',
        body: 'Your mind interprets situations. Learning to separate interpretation from reality reduces unnecessary stress and conflict.',
      },
      {
        title: 'Patterns repeat until you notice them',
        body: 'Reactions often become habits. When you spot the trigger → thought → emotion → action loop, you can change the response.',
      },
    ],
    guide: {
      practiceTitle: 'Practise this for 7 days',
      practiceSteps: [
        'Day 1–2: Observe your reactions. Notice when you feel triggered—anger, stress, irritation. Don’t change anything yet, just observe.',
        'Day 3–4: Identify patterns. Ask: “When do I react like this?” Look for repeated situations or people.',
        'Day 5–6: Pause and question. Before reacting, ask: “Why am I feeling this?” and “Is this reaction helping me?”',
      ],
      stepRibbonTitle: 'How to understand your own mind (simple steps)',
      stepRibbonSteps: [
        {
          label: 'Observe (don’t judge)',
          detail: 'Notice thoughts and emotions without labeling them as good or bad. Just collect data.',
        },
        {
          label: 'Identify triggers',
          detail: 'Spot situations, people, or topics that cause strong emotional reactions.',
        },
        {
          label: 'Separate thought from reality',
          detail: 'Ask: “Is this a fact… or my interpretation?”',
        },
        {
          label: 'Pause + reflect',
          detail: 'Before reacting, choose a response. At the end of the day, reflect on what triggered you and what you’ll do differently next time.',
        },
      ],
      teachStackTitle: 'Understand your mind (with examples)',
      teachStackIntro:
        'A few simple ideas that help you notice patterns, question assumptions, and respond with clarity instead of autopilot.',
      imageLessons: [
        {
          imageSrc: '/topics/mind/mindd.jpg',
          alt: 'Mind and awareness',
          teachesHeading: 'Start observing, not judging',
          summary:
            'Don’t label thoughts as good or bad. Notice them. Awareness creates space between a thought and a reaction.',
          paragraphs: [
            'Your mind produces thoughts constantly. If you treat every thought as truth, your emotions and actions get pulled around all day.',
            'Observation is the first skill: “I’m having the thought that…” instead of “This is reality.”',
          ],
        },
        {
          imageSrc: '/topics/mind/stress-mind.jpg',
          alt: 'Stress and triggers',
          teachesHeading: 'Identify triggers and repeating patterns',
          summary:
            'Strong reactions are often habits. When you notice what triggers you, you can change how you respond.',
          paragraphs: [
            'Ask: When do I get irritated, defensive, or anxious? Who is involved? What story does my mind tell?',
            'Patterns repeat until they are seen. Seeing the pattern is the start of control.',
          ],
        },
        {
          imageSrc: '/topics/mind/stress-mindd.jpg',
          alt: 'Thoughts vs reality',
          teachesHeading: 'Separate thought from reality',
          summary:
            'Thoughts are interpretations. Facts are what you can verify. Confusing the two creates unnecessary stress.',
          paragraphs: [
            'Example: “They’re ignoring me” is an interpretation. The fact is: “They haven’t replied yet.”',
            'When you return to facts, you stay calmer and make better decisions.',
          ],
        },
      ],
      imageDoDont: {
        title: 'Quick rules of thumb',
        intro:
          'Use these as quick reminders when your mind starts racing: observe, question, and choose your response.',
        imageSrc: '/topics/mind/mind.jpg',
        imageAlt: 'Mindfulness and self-awareness',
        imageCaption: null,
        doHeading: 'Do',
        dontHeading: "Don’t",
        dos: [
          'Observe your thoughts without immediately believing them',
          'Question strong emotional reactions',
          'Look for patterns in your behavior',
          'Take responsibility for your responses',
          'Stay curious about yourself',
        ],
        donts: [
          'Assume your first thought is always right',
          'Ignore your emotions completely',
          'Blame everything on others',
          'Overanalyze every small thought',
          'Expect instant change',
        ],
      },
      faqTitle: 'Questions people often ask',
      faqItems: [
        {
          question: 'Why do I overthink so much?',
          answer:
            'Because your mind tries to predict outcomes and avoid uncertainty. Awareness helps you spot the loop and return to what’s real and controllable.',
        },
        {
          question: 'Can I really control my thoughts?',
          answer:
            'You can’t stop thoughts from appearing, but you can control which ones you focus on and act on.',
        },
        {
          question: 'Why do I react the same way again and again?',
          answer:
            'Because your brain follows learned patterns. Without awareness, those patterns repeat automatically.',
        },
        {
          question: 'How long does it take to understand my mind?',
          answer:
            'It’s ongoing, but even a few days of conscious observation can create noticeable change.',
        },
        {
          question: 'What if I don’t like what I discover about myself?',
          answer:
            'That’s part of growth. Awareness isn’t about judgment—it’s about improvement and better choices.',
        },
      ],
    },
  },
  {
    slug: 'influence-and-communication-skills',
    title: 'Influence & communication skills',
    teaser:
      'Learn how to influence people through trust, clarity, and emotional awareness — without force or manipulation.',
    imageSrc: '/topics/eq/influence.jpg',
    mostPeopleDo: {
      title: 'What most people do',
      paragraphs: [
        'Many people try to “win” conversations instead of building agreement. This usually creates resistance, not influence.',
      ],
      patterns: [
        'Try to prove they are right instead of understanding others',
        'Interrupt or dominate conversations',
        'Use aggressive or defensive tone',
        'Ignore emotions and rely only on logic',
        'Try to “win” arguments instead of building agreement',
      ],
      examples: [
        'In a disagreement, someone keeps pushing their point louder, thinking it will convince the other person—but it usually creates resistance instead.',
      ],
      closing:
        'Influence works best when people feel understood first — and respected throughout.',
    },
    carouselCount: 3,
    carouselImages: [
      { imageSrc: '/topics/influence/carosal-1.jpg', alt: 'Influence and communication' },
      { imageSrc: '/topics/influence/carosal-2.jpg', alt: 'Listening and connection' },
      { imageSrc: '/topics/influence/carousal-3.jpg', alt: 'Building agreement' },
    ],
    points: [
      {
        title: 'Influence is emotional + practical',
        body: 'People are influenced by how you make them feel, how clearly you communicate, and how much they trust you — not logic alone.',
      },
      {
        title: 'Trust beats pressure',
        body: 'Forced persuasion can work short-term, but real influence builds through credibility, consistency, and respect.',
      },
      {
        title: 'Listening is a power skill',
        body: 'When someone feels understood, they become more open. Listening often influences more than talking.',
      },
    ],
    guide: {
      practiceTitle: 'Practise this for 7 days',
      practiceSteps: [
        'Day 1–2: Observe people’s reactions. Notice how people respond to different tones, words, and behaviors.',
        'Day 3–4: Focus on listening. Listen fully without interrupting or preparing your reply.',
        'Day 5–6: Mirror and connect. Match the other person’s tone slightly and use phrases like: “I understand your point…”',
      ],
      stepRibbonTitle: 'How to influence people (simple steps)',
      stepRibbonSteps: [
        {
          label: 'Understand first',
          detail: 'Ask questions and let the other person explain their perspective fully.',
        },
        {
          label: 'Acknowledge their view',
          detail: 'You don’t have to agree, but you should recognize it: “I see why you think that.”',
        },
        {
          label: 'Speak clearly and calmly',
          detail: 'Confidence without aggression builds trust and keeps people open.',
        },
        {
          label: 'Frame it smartly',
          detail: 'Replace “You’re wrong” with “Another way to look at this could be…”',
        },
      ],
      teachStackTitle: 'Influence that feels natural',
      teachStackIntro:
        'Simple ideas that help you connect with people, communicate clearly, and build agreement without pressure.',
      imageLessons: [
        {
          imageSrc: '/topics/influence/talking-with-people.jpg',
          alt: 'Talking with people',
          teachesHeading: 'Understand before you try to be understood',
          summary:
            'Influence starts with curiosity. When people feel heard, they become more open to your view.',
          paragraphs: [
            'Ask questions instead of pushing your point immediately.',
            'Repeat back what you heard in simple words so they feel understood.',
          ],
        },
        {
          imageSrc: '/topics/influence/speaking-public.jpg',
          alt: 'Speaking and clarity',
          teachesHeading: 'Clarity + calm builds credibility',
          summary:
            'People trust clear communication more than intense persuasion. Calm delivery makes your message feel safe.',
          paragraphs: [
            'Keep your language simple and direct.',
            'Say what you want, why it matters, and what the next step is — without over-explaining.',
          ],
        },
        {
          imageSrc: '/topics/influence/talking-with-women.jpg',
          alt: 'Respect and connection',
          teachesHeading: 'Connect emotionally (without faking it)',
          summary:
            'People respond when they feel respected. Emotional awareness makes influence feel natural, not forced.',
          paragraphs: [
            'Use acknowledgment: “That makes sense.” “I get why you feel that.”',
            'Look for common ground first, then share your view.',
          ],
        },
      ],
      imageDoDont: {
        title: 'Quick rules of thumb',
        intro:
          'Use these as quick reminders: listen deeply, speak clearly, and build agreement instead of trying to “win”.',
        imageSrc: '/topics/influence/speaking-public.jpg',
        imageAlt: 'Influence through communication',
        imageCaption: null,
        doHeading: 'What to do',
        dontHeading: 'What not to do',
        dos: [
          'Listen more than you speak',
          'Stay calm and composed',
          'Show genuine interest in others',
          'Use simple and clear language',
          'Focus on common ground',
        ],
        donts: [
          'Try to force agreement',
          'Interrupt or dismiss others',
          'Use aggressive tone or body language',
          'Over-explain or complicate your point',
          'Manipulate or fake emotions',
        ],
      },
      faqTitle: 'Questions people often ask',
      faqItems: [
        {
          question: 'Is influencing the same as manipulation?',
          answer:
            'No. Influence is transparent and respectful. Manipulation is hidden and self-serving.',
        },
        {
          question: 'Why do people not listen to me?',
          answer:
            'Often because they don’t feel understood first. Listening builds openness.',
        },
        {
          question: 'Can introverts influence people?',
          answer:
            'Yes. Influence is about clarity and understanding, not loudness.',
        },
        {
          question: 'What if someone is very stubborn?',
          answer:
            'Focus on understanding their perspective and finding small points of agreement.',
        },
        {
          question: 'How long does it take to become influential?',
          answer:
            'It builds over time through trust, consistency, and communication.',
        },
      ],
    },
  },
]

export function getEiTopic(slug) {
  return emotionalIntelligenceTopics.find((t) => t.slug === slug) ?? null
}

export function getAllEiSlugs() {
  return emotionalIntelligenceTopics.map((t) => t.slug)
}
