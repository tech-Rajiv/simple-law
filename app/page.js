import HeroSection from "@/components/HeroSection";
import QuizLists from "@/components/QuizLists";
import ExploreTopics from "@/components/home/ExploreTopics";
import FeaturedSection from "@/components/home/FeaturedSection";
import HomeClarity from "@/components/home/HomeClarity";
import HomeFaq from "@/components/home/HomeFaq";
import HomeFinalCta from "@/components/home/HomeFinalCta";
import HomeFinalCtaV2 from "@/components/home/HomeFinalCtaV2";
import HomeHero from "@/components/home/HomeHero";
import HomeHowItWorks from "@/components/home/HomeHowItWorks";

export default function Home() {
  return (
    <div className="w-full py-10 space-y-20">
      <HeroSection />

      
      <HomeHowItWorks />
      <ExploreTopics />
      <FeaturedSection />
      {/* <HomeClarity /> */}
    </div>
  );
}




