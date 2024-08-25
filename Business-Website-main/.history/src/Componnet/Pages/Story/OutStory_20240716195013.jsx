import React from 'react'
import { Link } from 'react-router-dom'
const OutStory = () => {
  return (
    <div className='flex flex-col items-center bg-gradient-to-b from-yellow-100 via-white to-yellow-100 p-4 md:p-12'>
      <div className="text-center mb-12 flex flex-col items-center">
        <h1 className="text-5xl font-bold text-yellow-500 m-5">Our Story</h1>
        <p className="mt-4 text-base">
        DK Group is a renowned financial institution committed to excellence,<br/>
        providing comprehensive services globally with a focus on transparency and<br/>
        community-driven initiatives.
        </p>
      </div>
      <div className="flex justify-between">
  <p className="inline">{`What drives Dk Group? DK Group is driven by a commitment to excellence, transparency, and community empowerment, ensuring sustainable growth and positive impact globally.`}</p>
</div>

      </div>
  )
}

export default OutStory