import QuizLists from "@/components/QuizLists";
import HomeClarity from "@/components/home/HomeClarity";
import HomeFaq from "@/components/home/HomeFaq";
import HomeFinalCta from "@/components/home/HomeFinalCta";
import HomeFinalCtaV2 from "@/components/home/HomeFinalCtaV2";
import HomeHero from "@/components/home/HomeHero";
import HomeHowItWorks from "@/components/home/HomeHowItWorks";

export default function Home() {
  return (
    <div className="w-full py-10 space-y-12">
      <section className="w-full ">
        <HomeHero />
      </section>

      <main className="w-full max-w-7xl mx-auto space-y-12">
        <HomeHowItWorks />
        {/* <HomeTopicsV2 /> */}

        <HomeClarity />
        <HomeFaq />
        <HomeFinalCtaV2 />
        <HomeFinalCta />
     

        <section id="take-test" className="scroll-mt-24">
          <QuizLists />
        </section>
      </main>
    </div>
  );
}




