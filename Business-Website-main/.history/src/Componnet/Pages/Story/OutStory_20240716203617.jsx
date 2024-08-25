import React from 'react'
import { Link } from 'react-router-dom'
import { FaCode, FaGlobe, FaEye, FaUsers } from 'react-icons/fa';
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
        <h1 className='font-bold text-2xl mr-24 m-8 '>What drives Dk Group?</h1>
        <p className='m-5'>
          DK Group is driven by a commitment to excellence, transparency, and<br /> community empowerment, ensuring sustainable growth and positive<br /> impact globally.</p>
      </div>

      <div className='flex flex-wrap space-x-7 items-center justify-center m-10'>
        <div className='bg-yellow-500 border rounded-2xl shadow-2xl pl-12 p-4'>
          <h1 className='font-bold text-2xl m-3'>
            <FaCode className="inline mr-2" /> Open source
          </h1>
          <p className='pl-6'>
            Open source
            DK Group operates as an open-source <br />
            platform, fostering collaboration and innovation with<br />
            its community-focused initiatives.
          </p>
        </div>

        <div className='bg-yellow-500 border rounded-2xl shadow-full pl-12 p-4'>
          <h1 className='font-bold text-2xl m-3'>
            <FaGlobe className="inline mr-2" /> Worldwide
          </h1>
          <p className='pl-6'>
            Open source
            DK Group operates as an open-source <br />
            platform, fostering collaboration and innovation with<br />
            its community-focused initiatives.
          </p>
        </div>

        <div className='bg-yellow-500 border rounded-2xl shadow-full pl-12 p-4 m-6 mx-0'>
          <h1 className='font-bold text-2xl m-3'>
            <FaEye className="inline mr-2" /> Transparent
          </h1>
          <p className='pl-6'>
            Open source
            DK Group operates as an open-source <br />
            platform, fostering collaboration and innovation with<br />
            its community-focused initiatives.
          </p>
        </div>

        <div className='bg-yellow-500 border rounded-2xl shadow-full pl-12 p-4'>
          <h1 className='font-bold text-2xl m-3'>
            <FaUsers className="inline mr-2" /> Community Driven
          </h1>
          <p className='pl-6'>
            Open source
            DK Group operates as an open-source <br />
            platform, fostering collaboration and innovation with<br />
            its community-focused initiatives.
          </p>
        </div>
      </div>


      <div>
        <div>
          <h1 className='font-bold text-2xl m-3'>Our missions</h1>
          <p>____________________________________________________________________</p>
          <p className='font-medium'>At DK Group, our mission is to empower individuals by strategically multiplying their investments across diverse projects and various digital assets. We believe in the transformative power of strategic investments, aiming not only to generate wealth but to do so with integrity, security, and purpose. Our commitment extends beyond profits; we are dedicated to creating opportunities for our clients and communities alike.

            Through our innovative approach, we strive to provide monthly returns on investments, ensuring a steady income stream for our clients. Our focus on diversity, both in projects and digital assets, allows us to mitigate risks and maximize returns. With a dedication to excellence and a vision for social impact, we invite you to join us in rewriting the story of success through responsible investing.</p>
        </div>
      </div>
    </div>
  )
}

export default OutStory