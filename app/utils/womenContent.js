/**
 * Women hub — same shape as emotionalIntelligenceTopics for shared topic-guide components.
 * Expand topics and copy as needed.
 */

export const womenHubSubtitle =
  "Know your rights, protect your safety, and take action with clarity — using simple steps, do/don’ts, and practical guides."

export const womenHeroEyebrow = 'Learning hub'

export const womenAssessmentCta = {
  href: '/assessment',
  label: 'Go to assessments',
}

export const womenHeroCtaHint =
  'Opens your assessments — browse everything in one place.'

export const womenHeroCtaPanelBody =
  'Check what you know today and see what to practise next.'

export const womenComplaintCta = {
  href: '/complaint',
  label: 'Complaint guide',
}

export const womenTopics = [
  {
    slug: 'harassment',
    title: 'Harassment',
    teaser:
      'Bad touch, public transport, crowds, workplace harassment — what to do in the moment and how to report safely.',
    imageSrc: '/women/harassment/harassment_04.jpg',
    carouselCount: 2,
    carouselImages: [
      { imageSrc: '/women/harassment/carousal/harassment.jpg', alt: 'Harassment awareness' },
      { imageSrc: '/women/harassment/carousal/women-harassment.png', alt: 'Public safety' },
    ],
    mostPeopleDo: {
      title: 'What most people do',
      paragraphs: [
        'Harassment often triggers shock. Many people freeze, try to ignore it, or blame themselves — which makes the situation feel even more powerless.',
      ],
      patterns: [
        'Freeze and stay silent',
        'Try to “be polite” to avoid escalation',
        'Doubt themselves (“Maybe I’m overreacting”)',
        'Avoid reporting because it feels complicated',
        'Delete evidence because they just want to forget',
      ],
      examples: [
        'On a crowded bus, someone touches you inappropriately. You freeze and move away silently, but they follow because there’s no clear boundary.',
        'At work, repeated comments make you uncomfortable, but you stay quiet to avoid “drama”.',
      ],
      closing:
        'A clear boundary + quick action is safer than waiting for it to stop on its own.',
    },
    guide: {
      stepRibbonTitle: 'Simple steps (in the moment)',
      stepRibbonSteps: [
        { label: 'Create space', detail: 'Move away, change position, or step toward safer people/areas.' },
        { label: 'Use one clear sentence', detail: 'Say: “Stop.” “Don’t touch me.” “Move back.” Loud and direct.' },
        { label: 'Get support fast', detail: 'Call a trusted person, alert staff, or move near authority/security.' },
        { label: 'Document + report', detail: 'Write facts, save screenshots, note time/place, and use a safe channel.' },
      ],
      practiceTitle: 'Practise this for 7 days',
      practiceSteps: [
        'Day 1–2: Save emergency numbers + choose 2 trusted contacts you can call quickly.',
        'Day 3–4: Practise boundary phrases out loud (“Stop.” “Don’t touch me.” “Back off.”).',
        'Day 5–7: Plan safer routes and options (near exits, well-lit areas, transport choices).',
      ],
      teachStackTitle: 'What harassment can look like',
      teachStackIntro:
        'Harassment isn’t only physical. It can be touching, staring, comments, threats, or workplace pressure. Knowing the patterns helps you respond faster.',
      imageLessons: [
        {
          imageSrc: '/women/harassment/harassment_04.jpg',
          alt: 'Harassment and bad touch',
          teachesHeading: 'Bad touch and unwanted contact',
          summary:
            'If it’s unwanted, it’s not “small”. You are allowed to create distance and say stop immediately.',
          paragraphs: [
            'Shock is normal. A simple move + one clear sentence often stops repeat behavior.',
            'Prioritize safety: move toward people, staff, cameras, or exits.',
          ],
        },
        {
          imageSrc: '/women/deep-fake/verbal-abuse.png',
          alt: 'Verbal harassment',
          teachesHeading: 'Verbal harassment and pressure',
          summary:
            'Comments, threats, and repeated “jokes” are harassment when they target you and don’t stop.',
          paragraphs: [
            'You don’t need to argue. A boundary + leaving is often safest.',
            'If it’s workplace-related, document dates and exact words, then use the right channel.',
          ],
        },
      ],
      imageDoDont: {
        title: 'Quick rules of thumb',
        intro:
          'Use these as a reminder: your safety first, clear boundaries, and evidence matters.',
        imageSrc: '/women/harassment/harassment.png',
        imageAlt: 'Harassment safety rules',
        imageCaption: null,
        doHeading: 'What to do',
        dontHeading: 'What not to do',
        dos: [
          'Move toward safety (people, staff, exits)',
          'Use one clear sentence: “Stop.”',
          'Call or alert someone quickly',
          'Document facts and keep evidence',
          'Report through a safe channel',
        ],
        donts: [
          'Stay silent if the person keeps escalating',
          'Blame yourself for someone else’s behavior',
          'Argue for a long time in unsafe places',
          'Delete messages/photos that are evidence',
          'Wait until it becomes “serious enough”',
        ],
      },
      scenariosTitle: 'Real-life examples',
      scenarios: [
        {
          situation: 'Crowd harassment in public transport.',
          approach:
            'Move near the driver/guard, turn toward a safer group, say “Stop” loudly, and get off at a safer stop if needed.',
        },
        {
          situation: 'Office harassment (comments, pressure, repeated messages).',
          approach:
            'Document dates/messages, tell a trusted colleague, and use formal channels. If unsafe, prioritize leaving and support.',
        },
      ],
      faqTitle: 'Questions people often ask',
      faqItems: [
        {
          question: 'What if I freeze and can’t speak?',
          answer:
            'Freezing is a normal stress response. Start with movement: step away, go to staff/people, call someone. You can act without words.',
        },
        {
          question: 'Should I report immediately?',
          answer:
            'If it’s safe, yes. If it’s not safe, leave first. Your safety comes before reporting.',
        },
        {
          question: 'What evidence should I keep?',
          answer:
            'Screenshots/messages, dates, time, location, witness names, and any photos of injuries or damage (if safe to take).',
        },
      ],
    },
  },
  {
    slug: 'domestic-violence',
    title: 'Domestic violence',
    teaser:
      'Recognize patterns, protect yourself safely, plan exits, and get support — without blame or shame.',
    imageSrc: '/women/domestic-violence/carousal/domestic-vio.png',
    carouselCount: 2,
    carouselImages: [
      { imageSrc: '/women/domestic-violence/carousal/domestic-violence.png', alt: 'Domestic violence awareness' },
      { imageSrc: '/women/domestic-violence/carousal/domestic-vio.png', alt: 'Support and safety planning' },
    ],
    mostPeopleDo: {
      title: 'What most people do',
      paragraphs: [
        'Many people minimize abuse, hope it will change, or stay silent due to fear, finances, children, or social pressure.',
      ],
      patterns: [
        'Apologize and take blame to “keep peace”',
        'Hide injuries or incidents',
        'Tell themselves it’s a one-time event',
        'Avoid seeking help because they fear escalation',
        'Lose support by isolating over time',
      ],
      examples: [
        'After an incident, the person promises to change and is kind for a while, but the cycle repeats.',
      ],
      closing:
        'Abuse often follows cycles. Planning quietly and getting support increases safety.',
    },
    guide: {
      stepRibbonTitle: 'Simple steps (safety-first)',
      stepRibbonSteps: [
        { label: 'Name it', detail: 'Abuse is not your fault. Recognize patterns: control, threats, isolation, harm.' },
        { label: 'Reduce risk', detail: 'Choose safer times/places, avoid escalating arguments, plan exits quietly.' },
        { label: 'Build support', detail: 'Tell one trusted person. Save helpline numbers. Keep documents safe.' },
        { label: 'Get help', detail: 'Use the safest channel available — and prioritize leaving safely over “winning”.' },
      ],
      practiceTitle: 'Practise this for 7 days',
      practiceSteps: [
        'Day 1–2: Save emergency contacts and a safe person’s number under a neutral name.',
        'Day 3–4: Prepare essentials quietly (ID, money, keys, medicines) and keep them accessible.',
        'Day 5–7: Create a safe plan: where to go, who to call, and what to do if things escalate.',
      ],
      teachStackTitle: 'Understanding domestic violence',
      teachStackIntro:
        'Domestic violence can be physical, emotional, financial, or controlling. Safety planning is about reducing risk.',
      imageLessons: [
        {
          imageSrc: '/women/domestic-violence/carousal/domestic-vio.png',
          alt: 'Domestic violence support',
          teachesHeading: 'Control is a red flag',
          summary:
            'Abuse often includes control: limiting movement, money, friends, phone, or decisions — not just physical harm.',
          paragraphs: [
            'Control can look like checking your phone, monitoring your location, restricting money, stopping you from meeting friends, or deciding what you wear and where you go.',
            'Emotional abuse counts: humiliation, insults, threats, constant blaming, or making you feel “crazy” for normal reactions.',
            'Unequal household load can be a control tactic too: forcing you to do exhausting work, refusing help, and then punishing you when you can’t keep up.',
            'If you feel unsafe, your feelings matter. You don’t need “proof” to seek support. Quiet planning and trusted support can reduce danger during exits.',
          ],
        },
        {
          imageSrc: '/women/deep-fake/verbal-abuse.png',
          alt: 'Verbal and emotional abuse',
          teachesHeading: 'Abusive words and patterns are harm',
          summary:
            'Repeated insults, threats, and intimidation can be as damaging as physical violence — and often escalate over time.',
          paragraphs: [
            'Examples include: calling you names, mocking you in front of others, threatening self-harm to control you, destroying belongings, or using children/family to pressure you.',
            'A safe plan is practical: identify safer rooms/exits, keep essentials accessible, and choose support people you can contact quickly.',
          ],
        },
      ],
      imageDoDont: {
        title: 'Quick rules of thumb',
        intro:
          'Safety first: plan quietly, keep support close, and prioritize leaving risky moments.',
        imageSrc: '/women/domestic-violence/carousal/domestic-vio.png',
        imageAlt: 'Domestic violence safety',
        imageCaption: null,
        doHeading: 'What to do',
        dontHeading: 'What not to do',
        dos: [
          'Tell one trusted person',
          'Keep important documents accessible',
          'Plan exits and safe places quietly',
          'Save evidence safely (if it doesn’t increase risk)',
          'Use professional support and helplines',
        ],
        donts: [
          'Confront during unsafe moments',
          'Announce plans if it increases danger',
          'Isolate yourself completely',
          'Assume it will change without action',
          'Stay in immediate danger to “prove a point”',
        ],
      },
      scenariosTitle: 'Real-life examples',
      scenarios: [
        {
          situation: 'Arguments escalate at home.',
          approach:
            'Move toward safer rooms/exits, avoid spaces with weapons, and call a trusted person. Leave if possible.',
        },
        {
          situation: 'You want to report but fear backlash.',
          approach:
            'Use the complaint guide and trusted support. If risk is high, prioritize safe exit planning first.',
        },
      ],
      complaintGuide: {
        title: 'Need help filing a complaint?',
        body: 'Use our complaint guide for step-by-step help: what to save, what to write, and where to report safely.',
        href: '/complaint',
        label: 'Open complaint guide',
      },
      faqTitle: 'Questions people often ask',
      faqItems: [
        {
          question: 'What if I depend on them financially?',
          answer:
            'Financial dependence is common. Start with support: trusted people, local services, and a quiet plan for essentials and safety.',
        },
        {
          question: 'Is emotional abuse “real” abuse?',
          answer:
            'Yes. Threats, control, humiliation, and isolation can be harmful and often escalate. You deserve support.',
        },
      ],
    },
  },
  {
    slug: 'deepfake-and-blackmail',
    title: 'Deepfake & blackmail',
    teaser:
      'What to do if someone threatens you with deepfakes, leaks, or blackmail — step-by-step, with do/don’ts and evidence tips.',
    imageSrc: '/women/deep-fake/carousal/blackmail.png',
    carouselCount: 2,
    carouselImages: [
      { imageSrc: '/women/deep-fake/carousal/deep-fake.png', alt: 'Deepfake awareness' },
      { imageSrc: '/women/deep-fake/carousal/blackmail.png', alt: 'Blackmail threat' },
    ],
    mostPeopleDo: {
      title: 'What most people do',
      paragraphs: [
        'Blackmail works by panic. Many people respond quickly, pay money, or delete evidence — which gives the blackmailer more control.',
      ],
      patterns: [
        'Reply immediately in fear',
        'Pay or negotiate',
        'Delete chats/photos (losing evidence)',
        'Keep it secret and isolate',
        'Miss reporting windows because they hope it disappears',
      ],
      examples: [
        'Someone threatens to share edited images unless you send money. You pay once, then they demand more.',
      ],
      closing:
        'Your safest move is calm evidence + reporting — not negotiation.',
    },
    guide: {
      stepRibbonTitle: 'Simple steps (deepfake / blackmail)',
      stepRibbonSteps: [
        { label: 'Don’t panic', detail: 'Pause. You are not alone. Blackmailers rely on rushing you.' },
        { label: 'Save evidence', detail: 'Screenshot everything: usernames, numbers, messages, links, payment requests.' },
        { label: 'Block + secure', detail: 'Block/report accounts, change passwords, enable 2FA, and review privacy settings.' },
        { label: 'Report safely', detail: 'Use the complaint guide. Involve trusted support and official channels.' },
      ],
      practiceTitle: 'Practise this for 7 days',
      practiceSteps: [
        'Day 1–2: Secure accounts (strong passwords + 2FA) and review social privacy.',
        'Day 3–4: Clean exposure: remove public phone/address details and restrict who can message you.',
        'Day 5–7: Learn the reporting path: save evidence → block → report → support.',
      ],
      teachStackTitle: 'What to do when threatened',
      teachStackIntro:
        'Deepfakes and blackmail are meant to scare you. Your power is calm documentation and the right reporting path.',
      imageLessons: [
        {
          imageSrc: '/women/harassment/carousal/deep-fake.png',
          alt: 'Blackmail threat',
          teachesHeading: 'Do not negotiate',
          summary:
            'Paying or bargaining often increases demands. Save evidence and report instead.',
          paragraphs: [
            'Blackmailers may bluff. Even if content exists, reporting and support is the safest path.',
            'Involve a trusted person early so you’re not alone in the decision.',
          ],
        },
        {
          imageSrc: '/women/deep-fake/carousal/blackmail.png',
          alt: 'Do and don’t',
          teachesHeading: 'Evidence is your protection',
          summary:
            'Screenshots, links, usernames, and timestamps help platforms and authorities act.',
          paragraphs: [
            'Save everything before blocking. If they delete messages later, you still have proof.',
            'Secure your accounts immediately (passwords + 2FA) to stop account takeovers.',
          ],
        },
      ],
      imageDoDont: {
        title: 'Quick rules of thumb',
        intro:
          'Calm steps beat panic: save evidence, secure accounts, block, and report.',
        imageSrc: '/women/deep-fake/carousal/deep-fake.png',
        imageAlt: 'Deepfake do and dont',
        imageCaption: null,
        doHeading: 'What to do',
        dontHeading: 'What not to do',
        dos: [
          'Screenshot everything',
          'Tell a trusted person',
          'Block and report accounts',
          'Change passwords + enable 2FA',
          'Use the complaint guide to report',
        ],
        donts: [
          'Pay money or negotiate',
          'Send more photos or information',
          'Delete evidence before saving',
          'Stay silent and isolate',
          'Click unknown links they send',
        ],
      },
      scenariosTitle: 'Real-life examples',
      scenarios: [
        {
          situation: 'Someone threatens to publish a deepfake.',
          approach:
            'Save evidence, block/report the account, secure your accounts, and use the complaint guide to file a report.',
        },
      ],
      faqTitle: 'Questions people often ask',
      faqItems: [
        {
          question: 'What if they already posted something?',
          answer:
            'Save the link/screenshots, report on the platform, and use official reporting channels. Don’t negotiate — focus on takedown + evidence.',
        },
        {
          question: 'Should I pay to make it stop?',
          answer:
            'Usually no. Payment often increases demands. Evidence + reporting is safer.',
        },
      ],
    },
  },
]

export function getWomenTopic(slug) {
  return womenTopics.find((t) => t.slug === slug) ?? null
}

export function getAllWomenSlugs() {
  return womenTopics.map((t) => t.slug)
}
