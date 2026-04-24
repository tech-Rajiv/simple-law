import { notFound } from "next/navigation";
import {
  TopicDetailPageHeader,
  TopicImageCarousel,
  TopicImageDoDontSplit,
  TopicTextLessonStack,
  TopicWhatMostPeopleDo,
  TopicPracticePlan,
  TopicScenarioCards,
  TopicSimpleFaq,
  TopicStepRibbon,
} from "@/components/topic-guide";
import {
  getAllEiSlugs,
  getEiTopic,
} from "@/app/utils/emotionalIntelligenceContent";
import { getEiTopicGuide } from "@/app/utils/emotionalIntelligenceTopicGuide";

export function generateStaticParams() {
  return getAllEiSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const topic = getEiTopic(slug);
  if (!topic) return { title: "Topic not found" };
  return {
    title: `${topic.title} | Emotional intelligence`,
    description: topic.teaser,
  };
}

export default async function EmotionalIntelligenceTopicPage({ params }) {
  const { slug } = await params;
  const topic = getEiTopic(slug);
  if (!topic) notFound();

  const guide = getEiTopicGuide(topic);
  const slides =
    topic.carouselImages &&
    Array.isArray(topic.carouselImages) &&
    topic.carouselImages.length
      ? topic.carouselImages
      : Array.from({ length: topic.carouselCount }, () => ({ imageSrc: null }));

  return (
    <div className="space-y-8 pb-10 md:space-y-10">
      <TopicDetailPageHeader
        hubHref="/emotional-intelligence"
        backLabel="Emotional intelligence"
        title={topic.title}
        description={topic.teaser}
      />

      <TopicImageCarousel slides={slides} heading="Visual overview" />

      <TopicPracticePlan
        title={guide.practiceTitle}
        steps={guide.practiceSteps}
      />
      {topic.mostPeopleDo ? (
        <TopicWhatMostPeopleDo
          title={topic.mostPeopleDo.title}
          paragraphs={topic.mostPeopleDo.paragraphs}
          patterns={topic.mostPeopleDo.patterns}
          examples={topic.mostPeopleDo.examples}
          closing={topic.mostPeopleDo.closing}
        />
      ) : null}

      {/* <TopicPracticePlan
        title={guide.practiceTitle}
        steps={guide.practiceSteps}
      /> */}

      <TopicTextLessonStack
        title={guide.teachStackTitle}
        intro={guide.teachStackIntro}
        lessons={guide.imageLessons}
      />

      <TopicStepRibbon
        title={guide.stepRibbonTitle}
        steps={guide.stepRibbonSteps}
      />

      {guide.imageDoDont ? (
        <TopicImageDoDontSplit
          title={guide.imageDoDont.title}
          intro={guide.imageDoDont.intro}
          imageSrc={guide.imageDoDont.imageSrc}
          imageAlt={guide.imageDoDont.imageAlt}
          imageCaption={guide.imageDoDont.imageCaption}
          doHeading={guide.imageDoDont.doHeading}
          dontHeading={guide.imageDoDont.dontHeading}
          dos={guide.imageDoDont.dos}
          donts={guide.imageDoDont.donts}
        />
      ) : null}

      <TopicScenarioCards
        title={guide.scenariosTitle}
        scenarios={guide.scenarios}
      />

      <TopicSimpleFaq title={guide.faqTitle} items={guide.faqItems} />
    </div>
  );
}
