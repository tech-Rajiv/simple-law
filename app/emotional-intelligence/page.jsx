import {
  LearningHubHero,
  LearningContentSections,
  TopicHubIntro,
  TopicPullQuoteCard,
} from "@/components/topic-guide";
import TopicsCards from "@/components/shared/TopicsCards";
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
  const intro = {
    title: "Emotional Intelligence (EQ)",
    paragraphs: [
      "Emotional Intelligence (EQ) is the ability to understand, manage, and use your emotions in a way that helps you navigate life more effectively. It’s not about suppressing feelings or always staying calm—it’s about being aware of what you feel, why you feel it, and how your emotions influence your decisions, behavior, and relationships.",
      "In everyday life, we react far more emotionally than we realize. A small comment can ruin your mood. A stressful situation can lead to poor decisions. A misunderstanding can damage relationships. Emotional intelligence helps you pause, understand what’s happening internally, and respond instead of reacting impulsively.",
      "Awareness is the foundation of emotional intelligence. When you become aware of your thoughts, emotional triggers, and patterns, you start gaining control over your life. Instead of being driven by emotions, you begin to guide them. This leads to better decisions, healthier relationships, and a more stable mindset.",
      "In today’s fast-moving and highly connected world, emotional intelligence is not optional—it’s essential. Whether it’s dealing with stress, understanding people, avoiding manipulation, or improving communication, EQ plays a major role in personal growth and real-world success.",
      "Developing emotional intelligence doesn’t require special talent. It’s a skill that can be built with practice—by observing yourself, reflecting on situations, and learning how emotions work both in you and in others.",
    ],
  };

  const whatYouGetSections = [
    {
      title: "What you’ll get inside each topic",
      paragraphs: [
        "A simple, practical breakdown — so you understand what’s happening in real life (not just theory).",
        "A clear step-by-step formula you can follow in the moment, plus a 7‑day practice plan to build the habit.",
        "Quick rules of thumb (Do / Don’t) and common mistakes — so you can avoid the usual traps and improve faster.",
        "FAQs and real examples — so you know what to do when the situation feels confusing.",
      ],
    },
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

      <TopicHubIntro title={intro.title} paragraphs={intro.paragraphs} />

      <TopicsCards topics={topicsLists} basePath="/emotional-intelligence" />

      <LearningContentSections sections={whatYouGetSections} />

      <div className="space-y-8 md:space-y-10">
        <TopicPullQuoteCard
          quote={emotionalIntelligenceModernLayouts.quote.quote}
          attribution={emotionalIntelligenceModernLayouts.quote.attribution}
          role={emotionalIntelligenceModernLayouts.quote.role}
        />
      </div>
    </div>
  );
}
