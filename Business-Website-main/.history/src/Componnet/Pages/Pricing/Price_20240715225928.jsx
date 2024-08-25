import React from 'react';

const Price = () => {
  return (
    <div className="flex flex-wrap justify-center items-center mx-auto max-w-screen-xl p-4">
      <div className="w-full md:w-1/2 lg:w-1/3 xl:w-1/3 mb-4 px-2">
        <div className="bg-yellow-500 text-white rounded-lg shadow-md p-6">
          <h2 className="bg-black text-yellow-500 py-2 px-4 rounded-lg w-32 m-2">BASIC</h2>
          <p className="text-3xl font-bold mb-2">50,000 PKR</p>
          <p className="text-black font-medium">
            Get a steady return on your investment <br /> with our Basic Plan.
          </p>
          <h3 className="text-xl font-bold m-3">Features</h3>
          <ul className="list-disc pl-6 mb-4 text-black font-medium">
            <li>Fixed Profit On Investment</li>
            <li>Secure Transactions</li>
            <li>Transparent Returns</li>
            <li>Diverse Portfolios</li>
            <li>Withdraw Your Investment <br />After 9 Months</li>
          </ul>
          <button className="bg-black text-yellow-500 py-2 px-4 rounded-lg w-full md:w-32 mx-auto block mb-4">
            Let's Start
          </button>
        </div>
      </div>
      <div className="w-full md:w-1/2 lg:w-1/3 xl:w-1/3 mb-4 px-2">
        <div className="bg-yellow-500 text-white rounded-lg shadow-md p-6">
          <h2 className="bg-black text-yellow-500 py-2 px-4 rounded-lg w-32 m-2">PRO</h2>
          <p className="text-3xl font-bold mb-2">100,000 PKR</p>
          <p className="mb-4 text-black font-medium">
            Earn more with our Pro Plan where <br />returns are based on a percentage.
          </p>
          <h3 className="text-xl font-bold mb-3 ">Features</h3>
          <ul className="list-disc pl-6 mb-4 text-black font-medium">
            <li>Profit On Your Current Investment</li>
            <li>Secure Transactions</li>
            <li>Accessible Platform</li>
            <li>Dedicated Support</li>
            <li>Withdraw Your Investment<br /> After 9 Months</li>
          </ul>
          <button className="bg-black text-yellow-500 py-2 px-4 rounded-lg w-full md:w-32 mx-auto block mb-4">
            Let's Start
          </button>
        </div>
      </div>
      <div className="w-full md:w-1/2 lg:w-1/3 xl:w-1/3 mb-4 px-2">
        <div className="bg-yellow-500 text-white rounded-lg shadow-md p-6">
          <h2 className="bg-black text-yellow-500 py-2 px-4 rounded-lg w-32 m-2">EXPERT</h2>
          <p className="text-3xl font-bold mb-2">500,000 PKR</p>
          <p className="mb-4 text-black font-medium">Earn dynamic returns based<br /> on percentages.</p>
          <h3 className="text-xl font-bold mb-2">Features</h3>
          <ul className="list-disc pl-6 mb-4 text-black font-medium">
            <li>Flexible Withdrawals</li>
            <li>Regulatory Compliance</li>
            <li>Performance Tracking</li>
            <li>Community Engagement</li>
            <li>Withdraw Your Investment <br />After 9 Months</li>
          </ul>
          <button className="bg-black text-yellow-500 py-2 px-4 rounded-lg w-full md:w-32 mx-auto block mb-4">
            Let's Start
          </button>
        </div>
      </div>
    </div>
  );
};

export default Price;
