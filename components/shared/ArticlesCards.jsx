import React from 'react'
import SubHeading from './SubHeading'
import SingleArticalCard from './SingleArticalCard'

export default function ArticlesCards({ articles, title, description }) {
  return (
    <div className="mt-8">
      <SubHeading title={title} description={description} />
      <div className="grid grid-cols-1 gap-4">
        {articles.map((article, idx) => (
          <SingleArticalCard key={article?.href ?? article?.slug ?? article?.label ?? idx} article={article} />
        ))}
      </div>
    </div>
  )
}