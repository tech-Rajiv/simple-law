import React from 'react'
import SingleTopicCard from './SingleTopicCard'
import SubHeading from './SubHeading'

export default function TopicsCards({ topics = [], basePath = '', title = '', description = '' }) {
  return (
    <div className="">
      {/* <SubHeading title={title} description={description} /> */}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {topics.map((topic, idx) => (
          <SingleTopicCard
            key={topic?.href ?? topic?.slug ?? topic?.label ?? idx}
            topic={topic}
            basePath={basePath}
          />
        ))}
      </div>
    </div>
  )
}   