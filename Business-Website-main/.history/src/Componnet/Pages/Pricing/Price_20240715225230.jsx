import React from 'react';

const Price = () => {
  return (
    <div className=" flex    m-12 justify-around">
      <div className="flex mx-4">
        <div className="flex-1">
          <div className="bg-yellow-500 text-white rounded-lg shadow-md p-6">
            <h2 className=" bg-black text-yellow-500  py-2 px-4 rounded-lg w-32 m-2">BASIC</h2>
            <p className="text-3xl font-bold mb-2">50,000 PKR</p>
            <p className="text-black font-medium">
            Get a steady return on your investment <br/> with our Basic Plan.
            </p>
            <h3 className="text-xl font-bold m-3">Features</h3>
            <ul className="list-disc pl-6 mb-4 text-black font-medium">
              <li>Fixed Profit On Investment</li>
              <li>Secure Transactions</li>
              <li>Transparent Returns</li>
              <li>Diverse Portfolios</li>
              <li>Withdraw Your Investment <br/>After 9 Months</li>
            </ul>
            <button className="bg-black text-yellow-500  py-2 px-4 rounded-lg w-32 mx-8">
              Let's Start
            </button>
          </div>
        </div>
        <div className="flex-1">
          <div className="bg-yellow-500 text-white rounded-lg shadow-md p-6">
            <h2 className="bg-black text-yellow-500  py-2 px-4 rounded-lg w-32 m-2">PRO</h2>
            <p className="text-3xl font-bold mb-2">100,000 PKR</p>
            <p className="mb-4 text-black font-medium">
              Earn more with our Pro Plan where <br/>returns are based on a percentage.
              
            </p>
            <h3 className="text-xl font-bold mb-3 ">Features</h3>
            <ul className="list-disc pl-6 mb-4 text-black font-medium">
              <li>Profit On Your Current Investment</li>
              <li>Secure Transactions</li>
              <li>Accessible Platform</li>
              <li>Dedicated Support</li>
              <li>Withdraw Your Investment<br/> After 9 Months</li>
            </ul>
            <button className="bg-black text-yellow-500  py-2 px-4 rounded-lg w-32 mx-8">
              Let's Start
            </button>
          </div>
        </div>
        <div className="flex-1">
          <div className="bg-yellow-500 text-white rounded-lg shadow-md p-6">
            <h2 className="bg-black text-yellow-500 py-2 px-4 rounded-lg w-32 m-2">EXPERT</h2>
            <p className="text-3xl font-bold mb-2">500,000 PKR</p>
            <p className="mb-4 text-black font-medium">Earn dynamic returns based<br/> on percentages.</p>
            <h3 className="text-xl font-bold mb-2">Features</h3>
            <ul className="list-disc pl-6 mb-4 text-black font-medium">
              <li>Flexible Withdrawals</li>
              <li>Regulatory Compliance</li>
              <li>Performance Tracking</li>
              <li>Community Engagement</li>
              <li>Withdraw Your Investment <br/>After 9 Months</li>
            </ul>
            <button className="bg-black text-yellow-500 rounded-lg p-2 w-32 m-3 mx-8 ">
              Let's Start
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Price;
