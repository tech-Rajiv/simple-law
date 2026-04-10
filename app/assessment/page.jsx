import QuizLists from '@/components/QuizLists'
import React from 'react'

function page() {
  return (
    <div className="w-full py-10 space-y-12">
           <section >
           <QuizLists />
           </section>
    </div>
  )
}

export default page