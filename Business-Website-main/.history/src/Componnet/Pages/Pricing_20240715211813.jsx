import React from 'react';

const Pricing = () => {
  return (
    <div className='flex flex-col items-center  bg-gradient-to-b from-yellow-100 via-white to-yellow-100'>
      <div className="text-center mb-12 m-4">
        <h1 className="text-5xl font-bold text-yellow-500 m-5">Pricing</h1>
        <p className="mt-4 text-base">
        DK Group offers competitive pricing structures tailored to client needs<br/> ensuring affordability and value across its comprehensive<br/>  range of financial services.
        </p>
      </div>
      <div className="flex justify-around flex-wrap max-w-4xl ">
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
        <div>
          make pricing section
          BASIC
50,000 PKR
 Get a steady return on your investment with our Basic Plan.

Features
Fixed Pofit On Investment
Secure Transactions
Transparent Returns
Diverse Portfolios
Withdraw Your Investment After 9 Months
Lets Start
Pro
100000 PKR
Earn more with our Pro Plan, where returns are based on a percentage.

Features
Profit On Your Current Investment
Secure Transactions
Accessible Platform
Dedicated Support
Withdraw Your Investment After 9 Months
Lets Start
Expert
500,000 PKR
Earn dynamic returns based on percentages.

Features
Flexible Withdrawals
Regulatory Compliance
Performance Tracking
Community Engagement
Withdraw Your Investment After 9 Months
Lets Start
        </div>
      </div>
    </div>
  );
};

export default Pricing;
