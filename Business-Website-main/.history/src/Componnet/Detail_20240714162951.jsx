import React from 'react';

const Detail = () => {
  return (
    <div className='bg-yellow-500 p-12 flex items-center'>
      <div className='px-12'>
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
      <img className='w-96 h-75 mx-auto rounded-xl' src="https://dkgroup.pk/wp-content/uploads/2024/03/black-1536x1025.png" alt="img" />
    </div>
  );
}

export default Detail;
