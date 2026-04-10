import React from 'react'
import Image from 'next/image'
import SubHeading from '../shared/SubHeading'
import checkIcon from '../../icons/check.png'

export default function ExploreTopics() {
    const topics = [
        {
            title: 'Emotional intelligence',
            description: 'Emotional intelligence is the ability to understand and manage your own emotions and the emotions of others.',
            image: '/category/emotional-intelligence.jpg',
            whatYouWillLearn: [
                'Human behavior',
                'Social interaction',
               "Emotional control",

            ],
            url: '/emotion-quotient',
        },
        {
            title: 'Women',
            description: 'Women-focused issues are the issues that are specific to women. They are the issues that are specific to women.',
            image: '/category/women-image1.jpg',
            whatYouWillLearn: [
                'Safety',
                'Legal rights',
               "Real-life scenarios",
            ],
            url: '/women',
        },
        {
            title: 'Real-world Awareness',
            description: 'Awareness is the ability to understand and manage your own emotions and the emotions of others.',
            image: '/home/carosal/carousal2.jpg',
            whatYouWillLearn: [
                'Self Awareness',
                'Social Awareness',
               "Corporate Awareness",
            ],
            url: '/awareness',
        },
    ]
  return (
    <section id="topics" className="mx-auto w-full ">
      <div className=" flex items-end justify-between gap-4">
        <SubHeading title="Explore Topics" description="Explore topics that matter to you" />
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {topics.map((topic) => (
          <article
            key={topic.title}
            className="group overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
          >
            <div className="relative aspect-[13/10] w-full overflow-hidden bg-gray-100">
              <Image
                src={topic.image}
                alt={topic.title}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover transition duration-300 group-hover:scale-[1.02]"
                priority={topic.title === 'Emotional intelligence'}
              />
            </div>

            <div className="p-5">
              <h3 className="text-lg font-semibold text-gray-900">
              {topic.title}
              </h3>
              <p className="mt-2 line-clamp-3 text-sm text-gray-600">
                {topic.description}
              </p>

              <div className="mt-4 rounded-xl bg-gray-50 p-4">
                <p className="text-xs font-semibold uppercase tracking-wide text-gray-700">
                  What you will learn
                </p>
                <ul className="mt-3 space-y-2">
                  {topic.whatYouWillLearn.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="mt-0.5 shrink-0">
                        <Image
                          src={checkIcon}
                          alt=""
                          width={16}
                          height={16}
                        />
                      </span>
                      <span className="text-sm text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}