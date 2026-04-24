import React from "react";
import CategoryHeader from "@/components/shared/CategoryHeader";
import YtVideocard from "@/components/shared/YtVideocard";
import TopicsCards from "@/components/shared/TopicsCards";
import ArticlesCards from "@/components/shared/ArticlesCards";
import FaqSections from "@/components/shared/FaqSections";

export default function page() {
  const categoryData = {
    title: "Real-world Awareness",
    titleImage: "/category-title-images/safety-title.png",
    description: [
      "In our daily lives, safety can take many forms such as road safety, personal safety, building safety, and emergency preparedness. Simple actions like wearing a helmet, using pedestrian crossings, keeping emergency numbers handy, or avoiding risky situations can make a big difference. When people understand and practice safety, it creates a secure environment for everyone around them.",
      "Safety is especially important for children, senior citizens, and individuals who may need extra care and awareness. By learning basic safety habits and staying informed, we can reduce risks and respond better during emergencies. A safe community starts with each individual taking small but responsible steps every day.",
    ],
  };

  const ytdetails = {
    title: "Safety Video",
    description:
      "Must watch these basic and import life lessons, Fire exits, drills, stairs, and staying alert indoors.",
    ytVideoUrl: "https://www.youtube.com/watch?v=Rt1h0jcXgGA",
  };

  const topicHeading = {
    title: "Topics",
    description:
      "Here are some topics that are very important for your safety. Please read the topics and learn the important things.",
  };

  const topicsLists = [
    {
      href: "/safety/road-safety",
      label: "Road safety",
      description: "Crossing rules, helmets, visibility, and bus safety.",
      imageSrc: "/topics/road-safety.png",
    },
    {
      href: "/safety/building-safety",
      label: "Building safety",
      description: "Fire exits, drills, stairs, and staying alert indoors.",
      imageSrc: "/topics/fire-safety.jpg",
    },
  ];

  const articlesHeading = {
    title: "Articles",
    description:
      "Here are some articles that are very important for your safety. Please read the articles and learn the important things.",
  };

  const articlesLists = [
    {
      href: "https://weeklysafety.com/blog/construction-safety-week",
      label: "Construction safety week",
      description:
        "Construction safety week is a very important safety measure for crane operators. It is a safety measure that is used to protect the crane operator from the crane lift zone.",
      imageSrc: "/articles/construction-safety-article.png",
    },
  ];

  const FAQLists = [
    {
      question: "What is safety?",
      answer:
        "Safety is a very important safety measure for crane operators. It is a safety measure that is used to protect the crane operator from the crane lift zone.",
    },
    {
      question: "What is safety?",
      answer:
        "Safety is a very important safety measure for crane operators. It is a safety measure that is used to protect the crane operator from the crane lift zone.",
    },
    {
      question: "What is safety?",
      answer:
        "Safety is a very important safety measure for crane operators. It is a safety measure that is used to protect the crane operator from the crane lift zone.",
    },
    {
      question: "What is safety?",
      answer:
        "Safety is a very important safety measure for crane operators. It is a safety measure that is used to protect the crane operator from the crane lift zone.",
    },
  ];

  const FAQHeading = {
    title: "FAQ",
    description:
      "Here are some frequently asked questions about safety. Please read the frequently asked questions and learn the important things.",
  };

  return (
    <div className="flex flex-col gap-5 mt-10 md:mt-16">
      <CategoryHeader
        title={categoryData.title}
        titleImage={categoryData.titleImage}
        description={categoryData.description}
      />
      <TopicsCards
        topics={topicsLists}
        basePath="/awareness"
        title={topicHeading.title}
        description={topicHeading.description}
      />
      <YtVideocard
        ytVideoUrl={ytdetails.ytVideoUrl}
        title={ytdetails.title}
        description={ytdetails.description}
      />

      <ArticlesCards
        articles={articlesLists}
        title={articlesHeading.title}
        description={articlesHeading.description}
      />
      <FaqSections
        faqLists={FAQLists}
        title={FAQHeading.title}
        description={FAQHeading.description}
      />
    </div>
  );
}
