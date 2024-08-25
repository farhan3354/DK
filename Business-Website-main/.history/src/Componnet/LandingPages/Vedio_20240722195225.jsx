import React from 'react';

const Vedio = () => {
  return (
    <div className='relative p-6 md:p-12 flex flex-col md:flex-row items-center'>
      {/* Second Section (behind the others) */}
   

      {/* First Section */}
      <div className='relative z-10 px-12 md:pl-32 m-4'>
        <h1 className='font-bold text-5xl mb-8'>
          About DK Group
        </h1>
        <p className='mb-8'>
          Welcome to DK Group: Where strategic investments meet social<br />
          responsibility. Our platform is designed for those seeking financial growth <br />
          with integrity. Through diverse projects and cryptocurrencies, we provide<br/>
          professional, attractive opportunities that generate monthly returns while<br/>
          making a positive impact on communities.
        </p>
        <ul className='list-disc pl-6 mb-8'>
          <li className='mb-2'>Lowest fees in market</li>
          <li className='mb-2'>Fast and secure transactions</li>
          <li className='mb-2'>256-bit secure encryption</li>
        </ul>
      </div>

      {/* Video Section */}
      <div className='relative z-10 w-full max-w-lg mx-auto rounded-2xl overflow-hidden'>
        <iframe
          width="100%"
          height="315"
          src="https://www.youtube.com/embed/video_id" // Use embed URL here
          frameBorder="0"
          allowFullScreen
        ></iframe>
      </div>
      
    </div>
  );
}

export default Vedio;
