import React from 'react';

const Detail = () => {
  return (
    <div className="bg-yellow-400 flex justify-center items-center min-h-screen">
      <div className="p-4" style={{ width: '40%' }}>
        <h2 className="text-center font-bold text-xl mb-4 text-black">About DK Group</h2>
        <div className="flex flex-col items-center text-black">
          <p className="text-center mb-4">
            Welcome to DK Group: Where strategic investments meet social responsibility. Our platform is designed for those seeking financial growth with integrity. Through diverse projects and cryptocurrencies, we provide professional, attractive opportunities that generate monthly returns while making a positive impact on communities.
          </p>
          <ul className="list-disc list-inside mb-4">
            <li>Lowest fees in market</li>
            <li>Fast and secure transaction</li>
            <li>256-bit secure encryption</li>
          </ul>
          <img 
            src="https://dkgroup.pk/wp-content/uploads/2024/03/black-1536x1025.png" 
            alt="DK Group" 
            className="w-1/3" 
          />
        </div>
      </div>
    </div>
  );
};

export default Detail;
