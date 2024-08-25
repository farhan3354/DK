import React from 'react';

const Detail = () => {
  return (
    <div className='bg-yellow-500 p-6 md:p-12 flex flex-col md:flex-row items-center'>
      <div className='px-12 md:pl-32 md:w-1/2'>
        <h1 className='font-bold text-3xl mb-8'>Token Harvest Unleash Daily Gains <br/>
          from Idle Assets</h1>
        <p className='mb-8'>
          Earn daily rewards effortlessly as your idle tokens work for you with<br/> unmatched efficiency. Embrace the power of passive income with <br />our innovative platform, maximizing your earnings while you relax.
        </p>
        <ul className='m-0'>
          <li className='mb-2'>Lowest fees in market</li>
          <li className='mb-2'>Fast and secure transactions</li>
          <li className='mb-2'>256-bit secure encryption</li>
        </ul>
      </div>
      <div className='md:w-1/2'>
        {/* Contact Section */}
        <div className='bg-gray-900 text-white p-6 h-full'>
          <h2 className='text-2xl font-bold mb-4'>Contact Us</h2>
          <p className='mb-4'>Reach out to us for any inquiries or support.</p>
          {/* Add your contact form or details here */}
        </div>
      </div>
    </div>
  );
}

export default Detail;
