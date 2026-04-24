import Image from "next/image";
import { LearningHubHero, TopicPullQuoteCard } from "@/components/topic-guide";
import TopicsCards from "@/components/shared/TopicsCards";
import YtVideocard from "@/components/shared/YtVideocard";
import FaqSections from "@/components/shared/FaqSections";
import checkIcon from "@/icons/check.png";
import {
  emotionalIntelligenceAssessmentCta,
  emotionalIntelligenceHeroCtaHint,
  emotionalIntelligenceHeroCtaPanelBody,
  emotionalIntelligenceHeroEyebrow,
  emotionalIntelligenceHeroSubtitle,
  emotionalIntelligenceModernLayouts,
} from "@/app/utils/emotionalIntelligenceContent";

export const metadata = {
  title: "Emotional intelligence | SimpleLaw",
  description:
    "Learn emotional intelligence with clear guides: self-awareness, communication, stress, first impressions, and more. Take an assessment to see where to focus next.",
};

export default function EmotionalIntelligencePage() {
  const whatYouWillLearn = [
    "Simple steps formula (easy to follow in real situations)",
    "7‑day practice plan to build the habit",
    "Quick rules of thumb (Do / Don’t) to avoid mistakes",
    "Real examples + FAQs for confusing situations",
    "Visual carousel + short explanations to make it stick",
  ];

  const topicsLists = [
    {
      slug: "staying-calm-under-pressure",
      label: "Staying Calm Under Pressure",
      description:
        "Learn how to control your emotions in stressful situations instead of reacting impulsively.",
      imageSrc: "/topics/eq/calm.jpg",
    },
    {
      slug: "understanding-your-own-mind",
      label: "Understanding Your Own Mind",
      description:
        "Identify your emotional triggers, thought patterns, and hidden habits that shape your behavior.",
      imageSrc: "/topics/mind/mind.jpg",
    },
    {
      label: "Influence & Communication Skills",
      description:
        "Learn how to express yourself effectively and positively influence others without force.",
      slug: "influence-and-communication-skills",
      imageSrc: "/topics/eq/influence.jpg",
    },
  ];

  const ytdetails = {
    title: "Emotional Intelligence Video",
    description:
      "Watch this to quickly understand emotional intelligence and how to use it in real life.",
    ytVideoUrl: "https://youtu.be/D6_J7FfgWVc?si=5_NV6VzHJ9nruXmK",
  };

  const FAQHeading = {
    title: "FAQ",
    description:
      "Quick answers to common questions about emotional intelligence and how to practise it.",
  };

  const FAQLists = [
    {
      question: "What is emotional intelligence (EQ) in simple words?",
      answer:
        "It’s the skill of noticing what you feel, understanding why, and choosing how you respond—so emotions help you instead of controlling you.",
    },
    {
      question: "Is EQ more important than IQ?",
      answer:
        "They’re different. IQ helps with learning and problem-solving. EQ helps you handle pressure, communicate well, and build trust—often the difference in real-life success.",
    },
    {
      question: "How can I improve EQ quickly?",
      answer:
        "Start small: pause before reacting, name what you feel, and practise one habit for 7 days. Consistency matters more than intensity.",
    },
    {
      question: "Why do I overreact even when I know better?",
      answer:
        "Because stress can hijack your thinking. When emotions rise, your brain defaults to fast habits. The pause + breathing steps help you regain control.",
    },
    {
      question: "Which topic should I start with?",
      answer:
        "Pick the one that matches your real life right now: calm under pressure, understanding your mind, or influence & communication. You’ll learn faster when you apply it immediately.",
    },
  ];

  return (
    <div className="space-y-8 pb-10 md:space-y-10">
      <LearningHubHero
        title="Emotional Intelligence"
        eyebrow={emotionalIntelligenceHeroEyebrow}
        subtitle={emotionalIntelligenceHeroSubtitle}
        ctaHref={emotionalIntelligenceAssessmentCta.href}
        ctaLabel={emotionalIntelligenceAssessmentCta.label}
        ctaPanelDescription={emotionalIntelligenceHeroCtaPanelBody}
        ctaHint={emotionalIntelligenceHeroCtaHint}
      />
      <section className="relative overflow-hidden rounded-2xl border border-[color:var(--border-light)] bg-[color:var(--bg-card)] p-6 shadow-[var(--shadow-soft)] md:p-8">
        <div
          className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-[color:var(--color-primary)]/[0.08] blur-3xl"
          aria-hidden="true"
        />
        <h2 className="text-xl font-semibold tracking-tight text-[color:var(--text-primary)] md:text-2xl">
          What you will learn in every topic
        </h2>
        <p className="mt-2 max-w-3xl text-sm leading-relaxed text-[color:var(--text-secondary)] md:text-base">
          Practical tools you can use immediately — built to help you act with
          clarity in real situations.
        </p>

        <div className="mt-5 rounded-2xl border border-[color:var(--border-light)] bg-[color:var(--bg-page)] p-4 md:p-5">
          <ul className="grid gap-3 sm:grid-cols-2">
            {whatYouWillLearn.map((item) => (
              <li key={item} className="flex items-start gap-2.5">
                <span className="mt-0.5 shrink-0">
                  <Image src={checkIcon} alt="" width={16} height={16} />
                </span>
                <span className="text-sm text-[color:var(--text-secondary)] md:text-base">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <TopicsCards topics={topicsLists} basePath="/emotional-intelligence" />

      <section className="rounded-2xl border border-[color:var(--border-light)] bg-[color:var(--bg-card)] p-6 text-center shadow-[var(--shadow-soft)] md:p-8">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[color:var(--color-primary)]">
          Coming soon
        </p>
        <h2 className="mt-3 text-xl font-semibold tracking-tight text-[color:var(--text-primary)] md:text-2xl">
          Many more topics are on the way
        </h2>
        <p className="mx-auto mt-2 max-w-2xl text-sm leading-relaxed text-[color:var(--text-secondary)] md:text-base">
          We’re building more guides with the same simple steps, practice plans,
          and real-life examples.
        </p>
      </section>

      <YtVideocard
        ytVideoUrl={ytdetails.ytVideoUrl}
        title={ytdetails.title}
        description={ytdetails.description}
      />

      <div className="space-y-8 md:space-y-10">
        <TopicPullQuoteCard
          quote={emotionalIntelligenceModernLayouts.quote.quote}
          attribution={emotionalIntelligenceModernLayouts.quote.attribution}
          role={emotionalIntelligenceModernLayouts.quote.role}
        />
      </div>

      <FaqSections
        faqLists={FAQLists}
        title={FAQHeading.title}
        description={FAQHeading.description}
      />
    </div>
  );
}
