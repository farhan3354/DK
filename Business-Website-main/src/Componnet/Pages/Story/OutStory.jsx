import React from 'react'
import { NavLink } from 'react-router-dom'
import { FaHome, FaProjectDiagram, FaTasks, FaEnvelope } from 'react-icons/fa';
import Copy from './Copy';
import Investor from './Investor';
import Vedio from '../../LandingPages/Vedio';

const OutStory = () => {
  return (
    <div className='p-4 bg-white md:p-12'>
      <div className="flex flex-col items-center mb-12 text-center ">
        <h1 className="m-5 text-5xl font-bold text-yellow-500">Our Story</h1>
        <p className="mt-4 text-base">
          DK Group is a renowned financial institution committed to excellence,<br />
          providing comprehensive services globally with a focus on transparency and<br />
          community-driven initiatives.
        </p>
      </div>

      <div className="px-4 sm:px-6 lg:px-8 ">
  <h1 className="text-xl font-bold text-center sm:text-2xl lg:text-3xl lg:ml-60 sm:my-8 sm:text-left sm:ml-52">
    What drives DK Group?
  </h1>
  <p className="mx-2 text-center sm:text-lg lg:text-xl sm:mx-4 lg:mx-8">
    DK Group is driven by a commitment to excellence, transparency, and community empowerment,<br />
    ensuring sustainable growth and positive impact globally.
  </p>
</div>

{/* section */} 
{/* <div className="flex flex-wrap mt-10">
      <div className="relative w-full h-auto p-1 md:p-2 md:w-6/12">
        <NavLink to="/projects">
          <div className="flex flex-col mx-auto overflow-hidden bg-white border-2 border-black rounded-lg shadow-lg md:flex-row">
            <img
              className="block h-64 md:absolute md:left-96 md:-top-6 w-60 md:h-80 md:w-72"
              src={img}
              alt="Card"
            />
            <div className="flex flex-col w-full pt-10 pb-10 pl-4 md:w-1/2 md:pt-20 md:pb-20 md:pl-10">
              <div className="mb-4 text-xl font-bold md:text-3xl">Projects</div>
              <p className="text-sm md:text-base">
                At DK Group, our mission is to empower individuals by strategically multiplying their investments across diverse projects and various digital assets.
              </p>
              <div className="mt-6 md:mt-10">
                <button className="px-6 py-2 font-bold text-white bg-yellow-500 rounded md:px-10 md:py-2 hover:bg-yellow-700">
                  Button
                </button>
              </div>
            </div>
          </div>
        </NavLink>
      </div>

      <div className="relative w-full h-auto p-1 md:p-2 md:w-6/12">
        <NavLink to="/">
          <div className="flex flex-col mx-auto overflow-hidden bg-white border-2 border-black rounded-lg shadow-lg md:flex-row">
            <img
              className="block h-64 md:absolute md:left-96 md:-top-6 w-60 md:h-80 md:w-80"
              src={img}
              alt="Card"
            />
            <div className="flex flex-col w-full pt-10 pb-10 pl-4 md:w-1/2 md:pt-20 md:pb-20 md:pl-10">
              <div className="mb-4 text-xl font-bold md:text-3xl">Home</div>
              <p className="text-sm md:text-base">
                At DK Group, our mission is to empower individuals by strategically multiplying their investments across diverse projects and various digital assets.
              </p>
              <div className="mt-6 md:mt-10">
                <button className="px-6 py-2 font-bold text-white bg-yellow-500 rounded md:px-10 md:py-2 hover:bg-yellow-700">
                  Button
                </button>
              </div>
            </div>
          </div>
        </NavLink>
      </div>

      <div className="relative w-full h-auto p-1 md:p-2 md:w-6/12">
        <NavLink to="/projects">
          <div className="flex flex-col mx-auto overflow-hidden bg-white border-2 border-black rounded-lg shadow-lg md:flex-row">
            <img
              className="block h-64 md:absolute md:left-96 md:top-10 w-60 md:h-80 md:w-72"
              src={img}
              alt="Card"
            />
            <div className="flex flex-col w-full pt-10 pb-10 pl-4 md:w-1/2 md:pt-20 md:pb-20 md:pl-10">
              <div className="mb-4 text-xl font-bold md:text-3xl">Plans</div>
              <p className="text-sm md:text-base">
                At DK Group, our mission is to empower individuals by strategically multiplying their investments across diverse projects and various digital assets.
              </p>
              <div className="mt-6 md:mt-10">
                <button className="px-6 py-2 font-bold text-white bg-yellow-500 rounded md:px-10 md:py-2 hover:bg-yellow-700">
                  Button
                </button>
              </div>
            </div>
          </div>
        </NavLink>
      </div>

      <div className="relative w-full h-auto p-1 md:p-2 md:w-6/12">
        <NavLink to="/contact">
          <div className="flex flex-col mx-auto overflow-hidden bg-white border-2 border-black rounded-lg shadow-lg md:flex-row">
            <img
              className="block h-64 md:absolute md:left-96 md:top-10 w-60 md:h-80 md:w-80"
              src={img}
              alt="Card"
            />
            <div className="flex flex-col w-full pt-10 pb-10 pl-4 md:w-1/2 md:pt-20 md:pb-20 md:pl-10">
              <div className="mb-4 text-xl font-bold md:text-3xl">ContactUs</div>
              <p className="text-sm md:text-base">
                At DK Group, our mission is to empower individuals by strategically multiplying their investments across diverse projects and various digital assets.
              </p>
              <div className="mt-6 md:mt-10">
                <button className="px-6 py-2 font-bold text-white bg-yellow-500 rounded md:px-10 md:py-2 hover:bg-yellow-700">
                  Button
                </button>
              </div>
            </div>
          </div>
        </NavLink>
      </div>
    </div> */}



{/* correct section */}
<section className="w-full max-w-5xl px-10 mx-auto mt-12 dark:bg-gray-800 dark:text-white">
  <div className="grid w-full grid-cols-1 gap-5 lg:grid-cols-5">
   
    <div className="flex flex-col justify-between col-span-2 bg-white border p-7 rounded-xl dark:bg-gray-700 drop-shadow-md border-neutral-200/50 gap-y-10">
      <div className="flex flex-col gap-y-3.5">
        <div className="flex items-center gap-x-3">
          <FaHome className="text-xl" /> {/* Home icon */}
          <h1 className="text-2xl font-bold">Home</h1>
        </div>
        <p className='pl-6 text-lg'>
          Open source DK Group operates as an open-source 
          platform, fostering collaboration and innovation with
          its community-focused initiatives.
        </p>
      </div>
      
      <div className="flex flex-col items-center">
        <button className="p-3 pl-8 pr-8 bg-gray-300 border rounded-xl">
          <NavLink to="/">Learn More</NavLink>
        </button>
      </div>
    </div>
   

    <div className="flex flex-col justify-between col-span-3 bg-white border p-7 rounded-xl dark:bg-gray-700 drop-shadow-md border-neutral-200/50 gap-y-10">
      <div className="flex flex-col gap-y-3.5">
        <div className="flex items-center gap-x-3">
          <FaProjectDiagram className="text-xl" /> {/* Projects icon */}
          <h1 className="text-2xl font-bold">Projects</h1>
        </div>
        <p className='pl-6 text-lg'>
          Open source DK Group operates as an open-source 
          platform, fostering collaboration and innovation with
          its community-focused initiatives.
        </p>
      </div>
      <div className="flex flex-col items-center">
        <button className="p-3 pl-8 pr-8 bg-gray-300 border rounded-xl">
          <NavLink to="/projects">Learn More</NavLink>
        </button>
      </div>
    </div>

    <div className="flex flex-col justify-between col-span-3 bg-white border p-7 rounded-xl dark:bg-gray-700 drop-shadow-md border-neutral-200/50 gap-y-10">
      <div className="flex flex-col gap-y-3.5">
        <div className="flex items-center gap-x-3">
          <FaTasks className="text-xl" /> {/* Plans icon */}
          <h1 className="text-2xl font-bold">Plans</h1>
        </div>
        <p className='pl-6 text-lg'>
          Open source DK Group operates as an open-source 
          platform, fostering collaboration and innovation with
          its community-focused initiatives.
        </p>
      </div>
      <div className="flex flex-col items-center">
        <button className="p-3 pl-8 pr-8 bg-gray-300 border rounded-xl">
          <NavLink to="/projects">Learn More</NavLink>
        </button>
      </div>
    </div>

    <div className="flex flex-col justify-between col-span-2 bg-white border p-7 rounded-xl dark:bg-gray-700 drop-shadow-md border-neutral-200/50 gap-y-10">
      <div className="flex flex-col gap-y-3.5">
        <div className="flex items-center gap-x-3">
          <FaEnvelope className="text-xl" /> {/* Contact Us icon */}
          <h1 className="text-2xl font-bold">Contact Us</h1>
        </div>
        <p className='pl-6 text-lg'>
          Open source DK Group operates as an open-source 
          platform, fostering collaboration and innovation with
          its community-focused initiatives.
        </p>
      </div>
      <div className="flex flex-col items-center">
        <button className="p-3 pl-8 pr-8 bg-gray-300 border rounded-xl">
          <NavLink to="/contact">Learn More</NavLink>
        </button>
      </div>
    </div>

  </div>
</section>


    
    


   
    

    
{/* section */}
{/* <div className='grid grid-cols-1 gap-6 mx-4 mt-10 mb-10 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 sm:mx-10 lg:mx-48'>
  <Link to='http://localhost:5173/' className='transition duration-300 transform hover:scale-105'>
    <div className='p-4 bg-yellow-500 border shadow-2xl rounded-2xl'>
      <h1 className='flex items-center mb-3 text-2xl font-bold'>
        <FaCode className="inline mr-2" /> Home
      </h1>
      <p className='pl-6'>
        Open source
        DK Group operates as an open-source <br />
        platform, fostering collaboration and innovation with<br />
        its community-focused initiatives.
      </p>
    </div>
  </Link>

  <Link to='http://localhost:5173/projects' className='transition duration-300 transform hover:scale-105'>
    <div className='p-4 bg-yellow-500 border shadow-2xl rounded-2xl'>
      <h1 className='flex items-center mb-3 text-2xl font-bold'>
        <FaGlobe className="inline mr-2" /> Project
      </h1>
      <p className='pl-6'>
        Open source
        DK Group operates as an open-source <br />
        platform, fostering collaboration and innovation with<br />
        its community-focused initiatives.
      </p>
    </div>
  </Link>

  <Link to='/plans' className='transition duration-300 transform hover:scale-105'>
    <div className='p-4 bg-yellow-500 border shadow-2xl rounded-2xl'>
      <h1 className='flex items-center mb-3 text-2xl font-bold'>
        <FaEye className="inline mr-2" /> Plans
      </h1>
      <p className='pl-6'>
        Open source
        DK Group operates as an open-source <br />
        platform, fostering collaboration and innovation with<br />
        its community-focused initiatives.
      </p>
    </div>
  </Link>

  <Link to='http://localhost:5173/contact' className='transition duration-300 transform hover:scale-105'>
    <div className='p-4 bg-yellow-500 border shadow-2xl rounded-2xl'>
      <h1 className='flex items-center mb-3 text-2xl font-bold'>
        <FaUsers className="inline mr-2" /> Contact Us
      </h1>
      <p className='pl-6'>
        Open source
        DK Group operates as an open-source <br />
        platform, fostering collaboration and innovation with<br />
        its community-focused initiatives.
      </p>
    </div>
  </Link>
</div> */}



      <div className='flex flex-col items-center p-4 md:flex-row md:justify-center'>
  <div className='my-6 md:mx-4 md:w-1/2'>
    <h1 className='m-4 text-2xl font-bold text-center md:text-left'>Our Mission</h1>
    <p className='text-center md:text-left'>_______________________________________________________________________</p>
    <p className='my-2 text-center border-t border-b md:my-4 md:border-none md:text-left'>
      At DK Group, our mission is to empower individuals by strategically multiplying their investments across diverse projects and various digital assets. We believe in the transformative power of strategic investments, aiming not only to generate wealth but to do so with integrity, security, and purpose. Our commitment extends beyond profits; we are dedicated to creating opportunities for our clients and communities alike.
    </p>
    <p className='mt-4 text-center md:mt-8 md:text-left'>
      Through our innovative approach, we strive to provide monthly returns on investments, ensuring a steady income stream for our clients. Our focus on diversity, both in projects and digital assets, allows us to mitigate risks and maximize returns. With a dedication to excellence and a vision for social impact, we invite you to join us in rewriting the story of success through responsible investing.
    </p>
  </div>
  <img className='object-cover w-full h-48 md:h-96 md:w-auto' src="https://dkgroup.pk/wp-content/uploads/2024/03/Globe-image.png" alt="img" />
</div>




      <div className="flex flex-col items-center mb-12 text-center my-14">
        <h1 className="text-4xl font-bold text-yellow-500 ">Timeline</h1>
        <p className="mt-4 text-base">
          DK Group timeline showcases a journey of growth, innovation<br />
          and client-centric excellence, setting benchmarks in <br />the financial industry globally.
        </p>
      </div>
      <Copy />
      <Vedio/>

      <div className="flex flex-col items-center mb-12 text-center">
        <h1 className="m-8 text-5xl font-bold text-yellow-500">Investors</h1>
        <p className="mt-4 text-base">
          Investors
          DK Group attracts investors seeking superior returns and ethical<br />
          investment opportunities supported by robust financial<br />
          expertise and a proven track record.
        </p>
      </div>
      <Investor />
    </div>
  )
}

export default OutStory