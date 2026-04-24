import HeroSection from "@/components/HeroSection";
import ExploreTopics from "@/components/home/ExploreTopics";
import FeaturedSection from "@/components/home/FeaturedSection";
import HomeHowItWorks from "@/components/home/HomeHowItWorks";
import FaqSections from "@/components/shared/FaqSections";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const FAQHeading = {
    title: "FAQ",
    description:
      "Quick answers about how assessments and learning guides work on 100xLife.",
  };

  const FAQLists = [
    {
      question: "What are these assessments?",
      answer:
        "They’re short multiple-choice tests to quickly check your understanding. You’ll get a score at the end and can review answers to learn faster.",
    },
    {
      question: "Do I need to sign in?",
      answer:
        "No. You can take tests right away. Your in-progress test is saved only for this session on your device.",
    },
    {
      question: "How should I use the results?",
      answer:
        "Start by reviewing the questions you missed, then tap “Explore more” to open the related learning hub (Women, Awareness, or Emotional Intelligence). Retake the test after reading the guide.",
    },
    {
      question: "How long does a test take?",
      answer:
        "Most tests are designed to be quick — usually a few minutes — so you can learn in small focused sessions.",
    },
    {
      question: "Which topic should I start with?",
      answer:
        "If you’re unsure, begin with Awareness for everyday safety habits, Women for situation-based guidance, or Emotional Intelligence for calm thinking and communication under pressure.",
    },
  ];

  return (
    <div className="w-full py-10 space-y-20">
      <HeroSection />
      <HomeHowItWorks />
      <ExploreTopics />
      <section
        className={[
          "relative overflow-hidden rounded-3xl px-6 py-10 text-white shadow-[0_20px_50px_-20px_rgba(97,45,83,0.45)] md:px-10 md:py-12",
          "bg-gradient-to-br from-[color:var(--color-primary)] via-[#7a3d66] to-[#9b5a7a]",
        ].join(" ")}
        aria-labelledby="home-assessment-title"
      >
        <div
          className={[
            "pointer-events-none absolute inset-y-0 -right-6 hidden w-[460px] md:block",
            "opacity-[0.24]",
            "[mask-image:radial-gradient(ellipse_at_right,black_0%,transparent_70%)]",
            "[-webkit-mask-image:radial-gradient(ellipse_at_right,black_0%,transparent_70%)]",
          ].join(" ")}
          aria-hidden="true"
        >
          <Image
            src="/topics/mind/mindd.jpg"
            alt=""
            fill
            sizes="460px"
            className="object-cover object-right"
            priority={false}
          />
        </div>
        <div
          className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-white/10 blur-3xl"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute -bottom-24 left-1/4 h-56 w-56 rounded-full bg-[color:var(--color-secondary)]/25 blur-3xl"
          aria-hidden="true"
        />

        <div className="relative flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/80">
              Quick self-check
            </p>
            <h2
              id="home-assessment-title"
              className="mt-2 text-2xl font-bold leading-tight tracking-tight md:text-3xl"
            >
              Assess your knowledge in minutes
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-white/90 md:text-base md:leading-relaxed">
              Take short assessments to see what you already know — and what to
              learn next. Get your score instantly and explore guides based on
              your results.
            </p>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Link
                href="/assessment"
                className="inline-flex min-h-[52px] items-center justify-center rounded-xl bg-white px-6 py-3 text-base font-semibold text-[color:var(--color-primary)] shadow-[0_14px_30px_-18px_rgba(0,0,0,0.45)] transition-colors hover:bg-white/95"
              >
                Take a test →
              </Link>
              <Link
                href="/emotional-intelligence"
                className="inline-flex min-h-[52px] items-center justify-center rounded-xl border border-white/25 bg-white/10 px-6 py-3 text-base font-semibold text-white backdrop-blur-sm transition-colors hover:bg-white/15"
              >
                Explore topics
              </Link>
            </div>
          </div>
        </div>
      </section>
      <FeaturedSection />
      <FaqSections
        faqLists={FAQLists}
        title={FAQHeading.title}
        description={FAQHeading.description}
      />
    </div>
  );
}




