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
        <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-yellow-100 via-white to-yellow-100">
      <div className="max-w-3xl mx-auto p-6">
        <div className="flex justify-center space-x-6 mb-6">
          <div className="bg-white rounded-lg shadow-md p-6 w-64">
            <h2 className="text-2xl font-bold mb-4 text-center">BASIC</h2>
            <p className="text-3xl font-bold text-yellow-500 mb-2 text-center">50,000 PKR</p>
            <p className="mb-4 text-center">Get a steady return on your investment with our Basic Plan.</p>
            <h3 className="text-xl font-bold mb-2 text-center">Features</h3>
            <ul className="list-disc pl-6 mb-4">
              <li>Fixed Profit On Investment</li>
              <li>Secure Transactions</li>
              <li>Transparent Returns</li>
              <li>Diverse Portfolios</li>
              <li>Withdraw Your Investment After 9 Months</li>
            </ul>
            <button className="bg-yellow-500 hover:bg-yellow-600 text-white py-2 px-4 rounded-lg w-full">Let's Start</button>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6 w-64">
            <h2 className="text-2xl font-bold mb-4 text-center">PRO</h2>
            <p className="text-3xl font-bold text-yellow-500 mb-2 text-center">100,000 PKR</p>
            <p className="mb-4 text-center">Earn more with our Pro Plan, where returns are based on a percentage.</p>
            <h3 className="text-xl font-bold mb-2 text-center">Features</h3>
            <ul className="list-disc pl-6 mb-4">
              <li>Profit On Your Current Investment</li>
              <li>Secure Transactions</li>
              <li>Accessible Platform</li>
              <li>Dedicated Support</li>
              <li>Withdraw Your Investment After 9 Months</li>
            </ul>
            <button className="bg-yellow-500 hover:bg-yellow-600 text-white py-2 px-4 rounded-lg w-full">Let's Start</button>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6 w-64">
            <h2 className="text-2xl font-bold mb-4 text-center">EXPERT</h2>
            <p className="text-3xl font-bold text-yellow-500 mb-2 text-center">500,000 PKR</p>
            <p className="mb-4 text-center">Earn dynamic returns based on percentages.</p>
            <h3 className="text-xl font-bold mb-2 text-center">Features</h3>
            <ul className="list-disc pl-6 mb-4">
              <li>Flexible Withdrawals</li>
              <li>Regulatory Compliance</li>
              <li>Performance Tracking</li>
              <li>Community Engagement</li>
              <li>Withdraw Your Investment After 9 Months</li>
            </ul>
            <button className="bg-yellow-500 hover:bg-yellow-600 text-white py-2 px-4 rounded-lg w-full">Let's Start</button>
          </div>
        </div>
      </div>
    </div>
      </div>
    </div>
  );
};

export default Pricing;
