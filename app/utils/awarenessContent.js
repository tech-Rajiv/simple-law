/**
 * Awareness hub + topic pages.
 * Slugs are used in URLs — change with redirects in mind.
 */

/**
 * @typedef {{
 *  slug: string,
 *  title: string,
 *  teaser: string,
 *  imageSrc: string | null,
 *  carouselCount: number,
 *  carouselImages?: { imageSrc: string, alt?: string }[],
 *  mostPeopleDo?: { title?: string, paragraphs?: string[], patterns?: string[], examples?: string[], closing?: string },
 *  guide?: Record<string, any>,
 * }} AwarenessTopic
 */

export const awarenessHubSubtitle =
  "Learn how to stay calm, notice risks early, and make better decisions in real life — with simple steps, practice plans, and clear do/don’ts."

export const awarenessHeroEyebrow = "Learning hub"

export const awarenessAssessmentCta = {
  href: "/assessment",
  label: "Go to assessments",
}

export const awarenessHeroCtaHint =
  "Opens your assessments — browse everything in one place."

export const awarenessHeroCtaPanelBody =
  "Check what you know today and see what to practise next."

/** @type {AwarenessTopic[]} */
export const awarenessTopics = [
  {
    slug: "situational-awareness",
    title: "Situational awareness",
    teaser:
      "Stay calm under pressure, read what’s happening around you, and choose the next safe step instead of panicking.",
    imageSrc: "/awareness-all/situational-awareness/situationl-awareness.jpg",
    carouselCount: 4,
    carouselImages: [
      {
        imageSrc: "/awareness-all/situational-awareness/situational-carosal-1.jpg",
        alt: "Situational awareness",
      },
      {
        imageSrc: "/awareness-all/situational-awareness/people-crowd-awareness.jpg",
        alt: "Crowd awareness",
      },
      {
        imageSrc: "/awareness-all/situational-awareness/situational-handshake.jpg",
        alt: "Reading situations",
      },
      {
        imageSrc: "/awareness-all/situational-awareness/speaking-public.jpg",
        alt: "Confidence and calm",
      },
    ],
    mostPeopleDo: {
      title: "What most people do",
      paragraphs: [
        "When something feels uncertain, many people either panic or freeze. In both cases, they stop observing clearly — and that’s when small problems become bigger.",
      ],
      patterns: [
        "Panic and rush decisions",
        "Freeze and hope it goes away",
        "Get distracted by phone / noise and miss warning signs",
        "Follow the crowd without thinking",
        "Escalate conflicts with tone instead of calming the situation",
      ],
      examples: [
        "In a crowded place, someone bumps you and you react angrily — instead of stepping back, checking space, and deciding calmly.",
        "You sense something is off but ignore it because you don’t want to “overthink,” then you end up in a risky spot.",
      ],
      closing:
        "Situational awareness is not fear — it’s calm attention. You can be relaxed and still alert.",
    },
    guide: {
      stepRibbonTitle: "Simple steps (stay calm + decide well)",
      stepRibbonSteps: [
        {
          label: "Pause",
          detail:
            "Stop for 2–3 seconds. A pause breaks panic and gives your brain time to think.",
        },
        {
          label: "Observe",
          detail:
            "Scan: people, exits, movement, and mood. Notice what changed (noise, crowd, tone, distance).",
        },
        {
          label: "Predict",
          detail:
            "Ask: “What’s likely to happen next if I stay here?” Look for the safest path, not the perfect one.",
        },
        {
          label: "Choose",
          detail:
            "Pick the next small step you control: move, wait, ask for help, or leave. Then act calmly.",
        },
      ],
      practiceTitle: "Practise this for 7 days",
      practiceSteps: [
        "Day 1–2: Notice your environment. Every time you enter a place, quickly spot exits and safe areas.",
        "Day 3–4: Practice calm scanning. In public spaces, observe crowd flow and keep a safe distance without looking nervous.",
        "Day 5–7: Use the pause rule. In any tense moment, pause 2–3 seconds, lower your voice, and choose the next step.",
      ],
      teachStackTitle: "How situational awareness works (real examples)",
      teachStackIntro:
        "Short explanations that train your attention — so you stay calm and make better choices in real situations.",
      imageLessons: [
        {
          imageSrc: "/awareness-all/situational-awareness/awaree.jpg",
          alt: "Awareness and attention",
          teachesHeading: "Calm attention beats panic",
          summary:
            "You don’t need to be afraid — you need to be aware. Calm attention helps you see options.",
          paragraphs: [
            "Panic narrows your thinking. A short pause reopens your ability to choose.",
            "Awareness is a skill: you can train it daily in low-stakes situations.",
          ],
        },
        {
          imageSrc: "/awareness-all/situational-awareness/people-crowd-awareness.jpg",
          alt: "Crowd safety",
          teachesHeading: "Read the crowd, not just one person",
          summary:
            "Crowds have patterns: flow, pressure points, and exits. Seeing the pattern keeps you safe.",
          paragraphs: [
            "Stay near edges in very crowded areas when possible. Avoid getting stuck in the middle with no exit.",
            "Watch for sudden changes: pushing, fast movement, or rising noise — those are early signals.",
          ],
        },
        {
          imageSrc: "/awareness-all/situational-awareness/situational-handshake.jpg",
          alt: "Social situation",
          teachesHeading: "Notice tone + distance",
          summary:
            "Most danger shows up as a shift: tone becomes sharp, distance closes, or a group forms.",
          paragraphs: [
            "If someone steps too close or the tone changes, create space calmly (one step back, change angle).",
            "You can de-escalate by lowering your voice and speaking slower.",
          ],
        },
      ],
      imageDoDont: {
        title: "Quick rules of thumb",
        intro:
          "Use these as a quick reminder when things feel uncertain: pause, scan, and choose the next safe step.",
        imageSrc: "/awareness-all/situational-awareness/situational-handshake.jpg",
        imageAlt: "Situational awareness",
        imageCaption: null,
        doHeading: "What to do",
        dontHeading: "What not to do",
        dos: [
          "Pause before reacting",
          "Keep your head up and scan exits",
          "Create space if tone/distance feels wrong",
          "Trust your instincts and move early",
          "Ask for help quickly when needed",
        ],
        donts: [
          "Panic and run without looking",
          "Freeze and hope it fixes itself",
          "Ignore warning signs to look “cool”",
          "Get lost in your phone in risky areas",
          "Escalate arguments with anger or shouting",
        ],
      },
      scenariosTitle: "Real-life examples",
      scenarios: [
        {
          situation: "You feel uncomfortable in a crowded area.",
          approach:
            "Pause, scan exits, move toward an edge or a safer zone, and keep your phone away so you can observe clearly.",
        },
        {
          situation: "A small conflict starts escalating.",
          approach:
            "Lower your voice, step back to create space, and choose one calm sentence. If it continues, leave early.",
        },
      ],
      faqTitle: "Questions people often ask",
      faqItems: [
        {
          question: "Is situational awareness the same as anxiety?",
          answer:
            "No. Anxiety is fear-focused. Situational awareness is calm observation — noticing what’s real and choosing the next safe step.",
        },
        {
          question: "What’s the fastest way to regain control in a tense moment?",
          answer:
            "Pause for 2–3 seconds, slow your breathing, and scan for exits/space. Then choose one small action you control.",
        },
        {
          question: "How do I improve without overthinking everything?",
          answer:
            "Practice in small moments: entering a shop, riding a bus, walking in a crowd. Awareness becomes automatic with repetition.",
        },
      ],
    },
  },
  {
    slug: "safety-and-awareness",
    title: "Safety & awareness",
    teaser:
      "Build everyday safety habits: signs, privacy online, fire safety, and medical basics — so you prevent problems before they happen.",
    imageSrc: "/awareness-all/saftey-awareness/saftey-situations.jpg",
    carouselCount: 3,
    carouselImages: [
      {
        imageSrc: "/awareness-all/saftey-awareness/saftey-carousal-1.jpg",
        alt: "Safety first",
      },
      {
        imageSrc: "/awareness-all/saftey-awareness/priavcy-saftey.jpg",
        alt: "Privacy safety online",
      },
      {
        imageSrc: "/awareness-all/saftey-awareness/safety-medical.jpg",
        alt: "Medical safety basics",
      },
    ],
    mostPeopleDo: {
      title: "What most people do",
      paragraphs: [
        "Many people treat safety as something to think about only after an accident. But safety works best when it’s a daily habit.",
      ],
      patterns: [
        "Ignore signs and rules because “nothing happened last time”",
        "Share personal info online without thinking",
        "Delay fixing small hazards (wires, slippery floors, blocked exits)",
        "Panic during emergencies instead of following simple steps",
        "Assume someone else will handle it",
      ],
      examples: [
        "A fire alarm sounds and people use the lift instead of stairs.",
        "Someone posts their location publicly and attracts unwanted attention.",
      ],
      closing:
        "Safety becomes easy when your habits are ready before the emergency starts.",
    },
    guide: {
      stepRibbonTitle: "Simple steps (everyday safety)",
      stepRibbonSteps: [
        {
          label: "Notice",
          detail:
            "Look for signs, exits, hazards, and unsafe shortcuts (wet floors, blocked stairs, exposed wires).",
        },
        {
          label: "Reduce risk",
          detail:
            "Fix what you can now (move away, report it, use safer routes, set privacy settings).",
        },
        {
          label: "Prepare",
          detail:
            "Know emergency numbers, exits, and basic responses (fire, injury, online privacy).",
        },
        {
          label: "Act calmly",
          detail:
            "In emergencies: slow down, follow the steps, and help others only if it’s safe.",
        },
      ],
      practiceTitle: "Practise this for 7 days",
      practiceSteps: [
        "Day 1–2: Learn signs and exits. In any building, locate stairs, exits, and fire equipment.",
        "Day 3–4: Privacy check. Review your phone/social media privacy, turn off public location sharing, and set strong passwords.",
        "Day 5–7: Fire + medical basics. Learn extinguisher basics, first-aid essentials, and what to do in a minor injury.",
      ],
      teachStackTitle: "Safety topics you’ll use for life",
      teachStackIntro:
        "Clear safety habits for everyday life — at home, outside, and online.",
      imageLessons: [
        {
          imageSrc: "/awareness-all/saftey-awareness/saftey-situations.jpg",
          alt: "Everyday safety situations",
          teachesHeading: "Everyday safety: notice hazards early",
          summary:
            "Safety starts before the emergency. Spot small hazards early and remove risk before it becomes a problem.",
          paragraphs: [
            "Look for blocked exits, slippery floors, loose wires, and unsafe shortcuts — and fix or report them quickly.",
            "Small daily habits prevent most accidents and reduce panic when something goes wrong.",
          ],
        },
        {
          imageSrc: "/awareness-all/saftey-awareness/priavcy-saftey.jpg",
          alt: "Privacy safety",
          teachesHeading: "Privacy safety: protect your information",
          summary:
            "Online safety is real-world safety. Protect your personal data like your home address.",
          paragraphs: [
            "Avoid posting location in real time. Keep accounts private when possible.",
            "Use strong passwords and enable 2-factor authentication.",
          ],
        },
        {
          imageSrc: "/awareness-all/saftey-awareness/safety-medical.jpg",
          alt: "Medical safety",
          teachesHeading: "Medical basics: small steps matter",
          summary:
            "Knowing simple first-aid basics reduces panic and prevents bigger harm.",
          paragraphs: [
            "For minor injuries: clean, cover, and get help if symptoms worsen.",
            "Keep emergency numbers saved and share them with family members.",
          ],
        },
      ],
      imageDoDont: {
        title: "Quick rules of thumb",
        intro:
          "Use these daily habits to prevent emergencies — and stay calm if one happens.",
        imageSrc: "/awareness-all/saftey-awareness/saftey-carousal-1.jpg",
        imageAlt: "Safety awareness",
        imageCaption: null,
        doHeading: "What to do",
        dontHeading: "What not to do",
        dos: [
          "Read signs and follow basic rules",
          "Keep exits and stairways clear",
          "Keep personal info private online",
          "Know emergency numbers and routes",
          "Stay calm and act step-by-step",
        ],
        donts: [
          "Ignore hazards because you’re in a hurry",
          "Use lifts during fire alarms",
          "Share location publicly in real time",
          "Assume someone else will help first",
          "Panic and make fast unsafe choices",
        ],
      },
      scenariosTitle: "Real-life examples",
      scenarios: [
        {
          situation: "You notice a slippery floor or a blocked exit.",
          approach:
            "Avoid the area, warn others, and report it. Small hazards are how big accidents start.",
        },
        {
          situation: "A fire alarm starts and people hesitate.",
          approach:
            "Move to stairs, follow exit signs, and keep moving calmly. Don’t wait to ‘see if it’s real’.",
        },
      ],
      faqTitle: "Questions people often ask",
      faqItems: [
        {
          question: "What are the most important safety rules?",
          answer:
            "Know exits, follow signs, keep your phone charged, protect your privacy, and avoid risky shortcuts. Consistent small habits prevent most problems.",
        },
        {
          question: "How do I stay safe online?",
          answer:
            "Use strong passwords, enable 2FA, avoid public location sharing, and keep personal details private (address, school/work schedule, ID info).",
        },
        {
          question: "What should I do first in an emergency?",
          answer:
            "Stay calm, move to safety, and call for help. Your first goal is to reduce danger — then help others if it’s safe.",
        },
      ],
    },
  },
]

export function getAwarenessTopic(slug) {
  return awarenessTopics.find((t) => t.slug === slug) ?? null
}

export function getAllAwarenessSlugs() {
  return awarenessTopics.map((t) => t.slug)
}

