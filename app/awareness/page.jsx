import React from "react";
import { LearningHubHero } from "@/components/topic-guide";
import YtVideocard from "@/components/shared/YtVideocard";
import TopicsCards from "@/components/shared/TopicsCards";
import FaqSections from "@/components/shared/FaqSections";
import WhatYouWillLearnSection from "@/components/shared/WhatYouWillLearnSection";
import {
  awarenessAssessmentCta,
  awarenessHeroCtaHint,
  awarenessHeroCtaPanelBody,
  awarenessHeroEyebrow,
  awarenessHubSubtitle,
} from "@/app/utils/awarenessContent";

export default function page() {
  const whatYouWillLearn = [
    "A simple steps formula for tense moments",
    "A 7‑day practice plan to build awareness daily",
    "Quick rules of thumb (Do / Don’t) for common situations",
    "Real-life examples + FAQs (so you know what to do next)",
    "Visual carousel to learn faster and remember better",
  ];

  const topicsLists = [
    {
      slug: "situational-awareness",
      label: "Situational awareness",
      description:
        "Stay calm under pressure and choose the next safe step instead of panicking.",
      imageSrc: "/awareness-all/situational-awareness/situationl-awareness.jpg",
    },
    {
      slug: "safety-and-awareness",
      label: "Safety & awareness",
      description:
        "Everyday safety habits: signs, privacy online, fire safety, and medical basics.",
      imageSrc: "/awareness-all/saftey-awareness/saftey-situations.jpg",
    },
  ];

  const ytdetails = {
    title: "Awareness video",
    description:
      "A quick video to help you understand awareness in real life and how to stay safer with simple habits.",
    ytVideoUrl: "https://www.youtube.com/watch?v=gAcpbxzAb9A",
  };

  const FAQLists = [
    {
      question: "What does “real-world awareness” mean?",
      answer:
        "It means noticing risks early, understanding what’s happening around you, and making safer decisions in daily life—at home, on the road, in buildings, and in emergencies.",
    },
    {
      question: "What are the most important safety habits to start with?",
      answer:
        "Start with simple habits: follow road rules, use helmets/seatbelts, learn emergency exits, keep emergency numbers saved, and avoid unsafe shortcuts (like running across roads or using lifts during fire alarms).",
    },
    {
      question: "How can I stay safe in public places?",
      answer:
        "Stay alert, avoid isolated areas when possible, keep your phone charged, tell someone where you’re going, and trust your instincts—if something feels wrong, step away and find help.",
    },
    {
      question: "What should I do in a fire or building emergency?",
      answer:
        "Stay calm, use stairs (not lifts), follow exit signs, help others if it’s safe, and move to the assembly point. If there’s smoke, stay low and cover your nose and mouth with a cloth.",
    },
    {
      question: "How do I teach kids basic safety without scaring them?",
      answer:
        "Use simple rules, short examples, and practice drills (like crossing roads and finding exits). Focus on confidence: “If you feel unsafe, find a trusted adult and ask for help.”",
    },
  ];

  const FAQHeading = {
    title: "FAQ",
    description:
      "Quick answers to common questions about awareness and everyday safety.",
  };

  return (
    <div className="space-y-8 pb-10 md:space-y-10">
      <LearningHubHero
        title="Awareness"
        eyebrow={awarenessHeroEyebrow}
        subtitle={awarenessHubSubtitle}
        ctaHref={awarenessAssessmentCta.href}
        ctaLabel={awarenessAssessmentCta.label}
        ctaPanelDescription={awarenessHeroCtaPanelBody}
        ctaHint={awarenessHeroCtaHint}
        dense
      />

      <WhatYouWillLearnSection
        title="What you will learn in every topic"
        subtitle="Practical habits to help you stay calmer, safer, and more aware in real life."
        items={whatYouWillLearn}
      />

      <TopicsCards topics={topicsLists} basePath="/awareness" />

      <section className="rounded-2xl border border-[color:var(--border-light)] bg-[color:var(--bg-card)] p-6 text-center shadow-[var(--shadow-soft)] md:p-8">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[color:var(--color-primary)]">
          Coming soon
        </p>
        <h2 className="mt-3 text-xl font-semibold tracking-tight text-[color:var(--text-primary)] md:text-2xl">
          More awareness topics are on the way
        </h2>
        <p className="mx-auto mt-2 max-w-2xl text-sm leading-relaxed text-[color:var(--text-secondary)] md:text-base">
          We’re adding more guides with the same step-by-step formulas, practice
          plans, and real-life examples.
        </p>
      </section>

      <YtVideocard
        ytVideoUrl={ytdetails.ytVideoUrl}
        title={ytdetails.title}
        description={ytdetails.description}
      />

      <FaqSections
        faqLists={FAQLists}
        title={FAQHeading.title}
        description={FAQHeading.description}
      />
    </div>
  );
}
