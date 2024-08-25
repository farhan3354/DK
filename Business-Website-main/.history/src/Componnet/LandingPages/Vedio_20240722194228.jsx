import React from 'react';

const Vedio = () => {
  return (
    <div className='p-6 md:p-12 flex flex-col md:flex-row items-center'>
      <div className='px-12 md:pl-32'>
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
        {/* New section */}
        <div className='flex flex-col md:flex-row items-center'>
          <h1 className='font-bold text-3xl mb-4 md:mb-0 md:mr-8'>
            DK Group Our Latest News
          </h1>
          <p className='text-lg'>
            Stay informed and empowered with the latest investment news and updates from DK Group. By staying abreast of market trends, sector developments, and economic indicators, you can make informed investment decisions that align with your financial goals and objectives. Trust DK Group to keep you informed and guide you on your investment journey.
          </p>
        </div>
      </div>
      <div className='w-full max-w-lg mx-auto rounded-2xl overflow-hidden'>
        <iframe
          // title="Token Harvest Video"
          width="100%"
          height="315"
          src="https://www.youtube.com/results?search_query=video"
          frameBorder="0"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
}

export default Vedio;
