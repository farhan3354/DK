import React from 'react';
import Price from './Price';

const Pricing = () => {
  return (
    <div className='flex flex-col items-center bg-gradient-to-b from-yellow-100 via-white to-yellow-100'>
      <div className="text-center mb-12 m-4">
        <h1 className="text-5xl font-bold text-yellow-500 m-5">Pricing</h1>
        <p className="mt-4 text-base">
          DK Group offers competitive pricing structures tailored to client needs
          ensuring affordability and value across its comprehensive
          range of financial services.
        </p>
      </div>
      <div className="flex justify-around flex-wrap max-w-4xl">
        <div className="flex flex-col items-center max-w-xs p-4">
          <img src="https://dkgroup.pk/wp-content/uploads/2024/03/div-1.png" alt="Send & Receive" className="mb-2" />
          <p className="text-sm">Send & Receive</p>
        </div>
        <div className="flex flex-col items-center max-w-xs p-4">
          <img src="https://dkgroup.pk/wp-content/uploads/2024/03/div-2.png" alt="Trading Charts" className="mb-2" />
          <p className="text-sm">Trading Charts</p>
        </div>
        <div className="flex flex-col items-center max-w-xs p-4">
          <img src="https://dkgroup.pk/wp-content/uploads/2024/03/div-3.png" alt="Wallet" className="mb-2" />
          <p className="text-sm">Wallet</p>
        </div>
        <div className="flex flex-col items-center max-w-xs p-4">
          <img src="https://dkgroup.pk/wp-content/uploads/2024/03/div-4.png" alt="Real Time Trading" className="mb-2" />
          <p className="text-sm">Real Time Trading</p>
        </div>
      </div>
      <Price />
      <div className="flex items-center justify-center my-8 max-w-4xl mx-auto">
        <div className="flex-1">
          <h2 className="text-xl font-bold mb-2">Plan Features</h2>
          <ul className="list-disc pl-4">
            <li>Fixed Profit On Investment</li>
            <li>Secure Transactions</li>
            <li>Withdraw Your Investment After 9 Months</li>
            <li>Profit On Your Current Investment</li>
            <li>Accessible Platform</li>
          </ul>
        </div>
        <img src="https://dkgroup.pk/wp-content/uploads/2024/04/samson-ZGjbiukp_-A-unsplash-1024x683.jpg" alt="Investment Image" className="h-40 w-50" />
      </div>
    </div>
  );
};

export default Pricing;
