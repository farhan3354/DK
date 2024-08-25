import React from 'react';

const Detail = () => {
  return (
    <div className="bg-yellow-400 flex justify-center items-center min-h-screen">
      <div className="p-4" style={{ width: '40%' }}>
        <h2 className="text-center font-bold text-xl mb-4 text-black">About DK Group</h2>
        <div className="flex flex-col items-center text-black">
          <img 
            src="https://dkgroup.pk/wp-content/uploads/2024/03/black-1536x1025.png" 
            alt="DK Group" 
            className="w-1/3 mb-4" 
          />
          <p className="text-center mb-4">
            Token Harvest: Unleash Daily Gains from Idle Assets. Earn daily rewards effortlessly as your idle tokens work for you with unmatched efficiency. Embrace the power of passive income with our innovative platform, maximizing your earnings while you relax.
          </p>
          <ul className="list-disc list-inside mb-4">
            <li>Lowest fees in market</li>
            <li>Fast and secure transaction</li>
            <li>256-bit secure encryption</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Detail;
