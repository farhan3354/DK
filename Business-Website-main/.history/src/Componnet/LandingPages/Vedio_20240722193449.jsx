import React from 'react';

const Vedio = () => {
  return (
    <div className='p-6 md:p-12 flex flex-col md:flex-row items-center'>
      <div className='px-12 md:pl-32'>
        <h1 className='font-bold text-5xl mb-8'>
        About DK Group
        </h1>
        <p className='mb-8'>
          Earn daily rewards effortlessly as your idle tokens work for you with<br />
          unmatched efficiency. Embrace the power of passive income with <br />
          our innovative platform, maximizing your earnings while you relax.
        </p>
        <ul className='list-disc pl-6 mb-8'>
          <li className='mb-2'>Lowest fees in market</li>
          <li className='mb-2'>Fast and secure transactions</li>
          <li className='mb-2'>256-bit secure encryption</li>
        </ul>
      </div>
      <div className='w-full max-w-lg mx-auto rounded-xl overflow-hidden'>
        <iframe
         // title="Token Harvest Video"
          width="100%"
          height="315"
          src="https://www.youtube.com/results?search_query=vedio"
          frameBorder="0"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
}

export default Vedio;
