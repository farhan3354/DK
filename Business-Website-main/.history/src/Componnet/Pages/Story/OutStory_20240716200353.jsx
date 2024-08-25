import React from 'react'
import { Link } from 'react-router-dom'
const OutStory = () => {
  return (
    <div className='bg-gradient-to-b from-yellow-100 via-white to-yellow-100 p-4 md:p-12'>
      <div className="text-center mb-12 flex flex-col items-center">
        <h1 className="text-5xl font-bold text-yellow-500 m-5">Our Story</h1>
        <p className="mt-4 text-base">
          DK Group is a renowned financial institution committed to excellence,<br />
          providing comprehensive services globally with a focus on transparency and<br />
          community-driven initiatives.
        </p>
      </div>
     
      <div className="flex justify-center  items-center">
        <h1 className='font-bold text-2xl mr-20 m-8 ml-7'>What drives Dk Group?</h1>
        <p className='m-5'>
          DK Group is driven by a commitment to excellence, transparency, and<br/> community empowerment, ensuring sustainable growth and positive<br/> impact globally.</p>
      </div>

     
        <div className='bg-yellow-500 border rounded-xl shadow-2xl mx-auto pl-8'>
        <h1 className='font-semibold text-2xl m-3'>Open source</h1>
        <p>Open source
        DK Group operates as an open-source platform, fostering <br/>collaboration and innovation within its community-focused initiatives.</p>

        </div>
      

    </div>
  )
}

export default OutStory