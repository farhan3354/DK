import React from 'react';

const Vedio = () => {
  return (
    <div className='p-6 md:p-12'>
      {/* Flex container for first and second sections */}
      <div className='flex flex-col md:flex-row md:space-x-8'>
        {/* First Section */}
        <div className='flex-1 px-12 md:px-32 mb-8 md:mb-0'>
          <h1 className='font-bold text-5xl mb-8'>
            About DK Group
          </h1>
          <p className='mb-8 '>
            Welcome to DK Group: Where strategic investments meet social<br />
            responsibility. Our platform is designed for those seeking financial growth <br />
            with integrity. Through diverse projects and cryptocurrencies, we provide<br />
            professional, attractive opportunities that generate monthly returns while<br />
            making a positive impact on communities.
          </p>
          <ul className='list-disc pl-6 mb-8'>
            <li className='mb-2'>Lowest fees in the market</li>
            <li className='mb-2'>Fast and secure transactions</li>
            <li className='mb-2'>256-bit secure encryption</li>
          </ul>
        </div>

        {/* Video Section */}
        <div className='flex-1 w-full max-w-lg mx-auto rounded-2xl overflow-hidden'>
          <iframe
            width="100%"
            height="315"
            src="https://www.youtube.com/embed/your_video_id" // Replace with actual video ID
            frameBorder="0"
            allowFullScreen
            title="Video"
          ></iframe>
        </div>
      </div>

      {/* Video Information */}
      <div className='mt-8 justify-between item-center'>
        <h1 className='font-bold text-3xl mb-4'>
          DK Group Our Latest News
        </h1>
        <p className='text-lg'>
          Stay informed and empowered with the latest investment news and updates<br/> from DK Group. By staying abreast of market trends, <br/>sector developments, and economic indicators, you can <br/>make informed investment decisions that align with <br/>your financial goals and objectives. Trust DK Group to keep you informed and guide you on your investment journey.
        </p>
      </div>
    </div>
  );
}

export default Vedio;
