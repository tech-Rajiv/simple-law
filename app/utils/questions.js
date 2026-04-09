export const allTestNumbers = [
  { title: "Safety Test", numberOfQuestions: 10, onlyWomen: false, slug: "safety" },
  { title: "Emotion Test", numberOfQuestions: 10, onlyWomen: false, slug: "emotion" },
  { title: "Women Issue Test", numberOfQuestions: 10, onlyWomen: true, slug: "women" },
  { title: "Awareness Test", numberOfQuestions: 10, onlyWomen: false, slug: "awareness" },
];

// Backwards/explicit name requested by you for `/api/all-tests`.
export const Alltests = allTestNumbers;

export const safetyTestQuestions = [
    {
      id: 1,
      question: "When crossing the road, what should you check first?",
      options: ["Left and right traffic", "Your phone", "Sky"],
      answer: "Left and right traffic",
      imageUrl: ""
    },
    {
      id: 2,
      question: "Is it safe to use a phone while crossing the road?",
      options: ["Yes", "No"],
      answer: "No",
      imageUrl: ""
    },
    {
      id: 3,
      question: "What should you wear while riding a bike?",
      options: ["Helmet", "Cap", "Nothing"],
      answer: "Helmet",
      imageUrl: ""
    },
    {
      id: 4,
      question: "What does a red traffic signal mean?",
      options: ["Stop", "Go", "Wait"],
      answer: "Stop",
      imageUrl: ""
    },
    {
      id: 5,
      question: "What should you do if there is a fire?",
      options: ["Raise alarm", "Ignore", "Hide"],
      answer: "Raise alarm",
      imageUrl: ""
    },
    {
      question: "Should you use water on electrical fire?",
      options: ["Yes", "No"],
      answer: "No",
      imageUrl: ""
    },
    {
      question: "Should you check expiry date before eating food?",
      options: ["Yes", "No"],
      answer: "Yes",
      imageUrl: ""
    },
    {
      question: "What should you do before eating food?",
      options: ["Wash hands", "Sleep", "Run"],
      answer: "Wash hands",
      imageUrl: ""
    },
    {
      question: "Is it safe to touch electric switches with wet hands?",
      options: ["Yes", "No"],
      answer: "No",
      imageUrl: ""
    },
    {
      question: "What should you do in an emergency?",
      options: ["Stay calm", "Panic", "Ignore"],
      answer: "Stay calm",
      imageUrl: ""
    }
];



export const awarenessTestQuestions = [
    {
      question: "When crossing the road, what should you observe?",
      options: ["Traffic signals", "Shops", "People talking"],
      answer: "Traffic signals",
      imageUrl: ""
    },
    {
      question: "Why is it important to be aware of surroundings?",
      options: ["To stay safe", "For fun", "No reason"],
      answer: "To stay safe",
      imageUrl: ""
    },
    {
      question: "What should you notice while walking on the road?",
      options: ["Vehicles", "Clouds", "Birds"],
      answer: "Vehicles",
      imageUrl: ""
    },
    {
      question: "Should you pay attention to warning signs?",
      options: ["Yes", "No"],
      answer: "Yes",
      imageUrl: ""
    },
    {
      question: "What should you do if you see something suspicious?",
      options: ["Report it", "Ignore", "Join"],
      answer: "Report it",
      imageUrl: ""
    },
    {
      question: "Being alert helps you to?",
      options: ["Avoid danger", "Sleep better", "Waste time"],
      answer: "Avoid danger",
      imageUrl: ""
    },
    {
      question: "What should you focus on while driving?",
      options: ["Road", "Phone", "Music only"],
      answer: "Road",
      imageUrl: ""
    },
    {
      question: "Should you wear headphones while crossing roads?",
      options: ["Yes", "No"],
      answer: "No",
      imageUrl: ""
    },
    {
      question: "What does awareness help with?",
      options: ["Better decisions", "Confusion", "Carelessness"],
      answer: "Better decisions",
      imageUrl: ""
    },
    {
      question: "Should you observe people’s behavior in public places?",
      options: ["Yes", "No"],
      answer: "Yes",
      imageUrl: ""
    }
];



export const emotionTestQuestions = [
    {
      question: "Is following rules your responsibility?",
      options: ["Yes", "No"],
      answer: "Yes",
      imageUrl: ""
    },
    {
      question: "What should you do if you see someone in danger?",
      options: ["Help or inform", "Ignore", "Laugh"],
      answer: "Help or inform",
      imageUrl: ""
    },
    {
      question: "Should you throw garbage on roads?",
      options: ["Yes", "No"],
      answer: "No",
      imageUrl: ""
    },
    {
      question: "Being responsible means?",
      options: ["Doing the right thing", "Ignoring rules", "Blaming others"],
      answer: "Doing the right thing",
      imageUrl: ""
    },
    {
      question: "Should you follow traffic rules?",
      options: ["Yes", "No"],
      answer: "Yes",
      imageUrl: ""
    },
    {
      question: "What should you do with public property?",
      options: ["Protect it", "Damage it", "Ignore"],
      answer: "Protect it",
      imageUrl: ""
    },
    {
      question: "Should you complete your duties on time?",
      options: ["Yes", "No"],
      answer: "Yes",
      imageUrl: ""
    },
    {
      question: "Is helping others a responsibility?",
      options: ["Yes", "No"],
      answer: "Yes",
      imageUrl: ""
    },
    {
      question: "Should you admit your mistakes?",
      options: ["Yes", "No"],
      answer: "Yes",
      imageUrl: ""
    },
    {
      question: "What should you do if you break something?",
      options: ["Inform and fix", "Hide it", "Blame others"],
      answer: "Inform and fix",
      imageUrl: ""
    }
];



export const womenIssueTestQuestions = [
    {
      question: "What should you do if someone touches you inappropriately in public?",
      options: ["Move away and raise your voice", "Ignore it", "Stay silent"],
      answer: "Move away and raise your voice",
      imageUrl: ""
    },
    {
      question: "If you feel unsafe while walking alone, what should you do?",
      options: ["Call someone you trust", "Ignore the feeling", "Walk slower"],
      answer: "Call someone you trust",
      imageUrl: ""
    },
    {
      question: "Should you share your live location with a trusted person when traveling alone?",
      options: ["Yes", "No"],
      answer: "Yes",
      imageUrl: ""
    },
    {
      question: "What should you do if someone is following you?",
      options: ["Go to a crowded place", "Go to a dark area", "Ignore"],
      answer: "Go to a crowded place",
      imageUrl: ""
    },
    {
      question: "Is it safe to accept rides from strangers?",
      options: ["Yes", "No"],
      answer: "No",
      imageUrl: ""
    },
    {
      question: "What should you do in case of harassment?",
      options: ["Report it", "Stay silent", "Blame yourself"],
      answer: "Report it",
      imageUrl: ""
    },
    {
      question: "Should you keep emergency numbers saved on your phone?",
      options: ["Yes", "No"],
      answer: "Yes",
      imageUrl: ""
    },
    {
      question: "What is the best reaction if someone tries to grab you?",
      options: ["Shout loudly and resist", "Stay quiet", "Do nothing"],
      answer: "Shout loudly and resist",
      imageUrl: ""
    },
    {
      question: "Should you trust your instincts if something feels wrong?",
      options: ["Yes", "No"],
      answer: "Yes",
      imageUrl: ""
    },
    {
      question: "What should you do if you feel uncomfortable in a situation?",
      options: ["Leave immediately", "Stay to be polite", "Ignore"],
      answer: "Leave immediately",
      imageUrl: ""
    }
];

function slugifyOption(text) {
  return String(text)
    .trim()
    .toLowerCase()
    .replace(/['’]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

function normalizeQuestions(testSlug, questions) {
  return questions.map((q, idx) => {
    const questionId = q.id != null ? String(q.id) : `${testSlug}-${idx + 1}`;
    const options = (q.options || []).map((optText, optIdx) => {
      const optionId = `${questionId}::${slugifyOption(optText) || `opt-${optIdx + 1}`}`;
      return { id: optionId, text: optText };
    });

    const correctOption = options.find((o) => o.text === q.answer);
    const correctOptionId = correctOption?.id ?? null;

    return {
      id: questionId,
      question: q.question,
      imageUrl: q.imageUrl || "",
      options,
      // Keep original answer text for readability; APIs should use `correctOptionId`.
      answer: q.answer,
      correctOptionId,
    };
  });
}

export const TESTS = {
  safety: normalizeQuestions("safety", safetyTestQuestions),
  awareness: normalizeQuestions("awareness", awarenessTestQuestions),
  emotion: normalizeQuestions("emotion", emotionTestQuestions),
  women: normalizeQuestions("women", womenIssueTestQuestions),
};