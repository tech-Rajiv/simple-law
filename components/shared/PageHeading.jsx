import React from 'react'

function PageHeading({ title, description }) {
  return (
    <div>
           <h2 className="text-2xl text-center font-bold">{title}</h2>
           <p className="text-center text-gray-500 mt-2">{description}</p>
    </div>
  )
}

export default PageHeading