import HeroSection from "@/components/HeroSection";
import ExploreTopics from "@/components/home/ExploreTopics";
import FeaturedSection from "@/components/home/FeaturedSection";
import HomeHowItWorks from "@/components/home/HomeHowItWorks";
import { TopicGradientBand } from "@/components/topic-guide";

export default function Home() {
  return (
    <div className="w-full py-10 space-y-20">
      <HeroSection />
      <HomeHowItWorks />
      <ExploreTopics />
      <TopicGradientBand
          eyebrow={"Emotional Intelligence"}
          title={"Emotional Intelligence"}
          body={"Emotional Intelligence"}
        />
      <FeaturedSection />
    </div>
  );
}




