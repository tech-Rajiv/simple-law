import { notFound } from "next/navigation";
import {
  TopicDetailPageHeader,
  TopicImageCarousel,
  TopicWhatMostPeopleDo,
  TopicStepRibbon,
  TopicTextLessonStack,
  TopicPracticePlan,
  TopicImageDoDontSplit,
  TopicScenarioCards,
  TopicSimpleFaq,
} from "@/components/topic-guide";
import { getAllAwarenessSlugs, getAwarenessTopic } from "@/app/utils/awarenessContent";
import { getAwarenessTopicGuide } from "@/app/utils/awarenessTopicGuide";

export function generateStaticParams() {
  return getAllAwarenessSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const topic = getAwarenessTopic(slug);
  if (!topic) return { title: "Topic not found" };
  return {
    title: `${topic.title} | Awareness`,
    description: topic.teaser,
  };
}

export default async function AwarenessTopicPage({ params }) {
  const { slug } = await params;
  const topic = getAwarenessTopic(slug);
  if (!topic) notFound();

  const guide = getAwarenessTopicGuide(topic);
  const slides =
    topic.carouselImages && Array.isArray(topic.carouselImages) && topic.carouselImages.length
      ? topic.carouselImages
      : Array.from({ length: topic.carouselCount }, () => ({ imageSrc: null }));

  return (
    <div className="space-y-8 pb-10 md:space-y-10">
      <TopicDetailPageHeader
        hubHref="/awareness"
        backLabel="Awareness"
        title={topic.title}
        description={topic.teaser}
      />

      <TopicImageCarousel slides={slides} heading="Visual overview" />

      {topic.mostPeopleDo ? (
        <TopicWhatMostPeopleDo
          title={topic.mostPeopleDo.title}
          paragraphs={topic.mostPeopleDo.paragraphs}
          patterns={topic.mostPeopleDo.patterns}
          examples={topic.mostPeopleDo.examples}
          closing={topic.mostPeopleDo.closing}
        />
      ) : null}

      <TopicStepRibbon title={guide.stepRibbonTitle} steps={guide.stepRibbonSteps} />

      <TopicTextLessonStack title={guide.teachStackTitle} intro={guide.teachStackIntro} lessons={guide.imageLessons} />

      <TopicPracticePlan title={guide.practiceTitle} steps={guide.practiceSteps} />

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

      <TopicScenarioCards title={guide.scenariosTitle} scenarios={guide.scenarios} />

      <TopicSimpleFaq title={guide.faqTitle} items={guide.faqItems} />
    </div>
  );
}
