import React, { useState } from 'react';
import { FaCheckCircle, FaStar, FaChevronDown, FaChevronUp, FaMoneyBill, FaExclamationTriangle, FaFileContract } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
const PackageCard = ({ title, price, profitPercent, profitAmount, details }) => {
  const [showDetails, setShowDetails] = useState(false);

  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };

  return (
    <div className="p-6 text-gray-900 transition-shadow duration-300 border border-gray-200 shadow-lg bg-gradient-to-br from-yellow-100 to-yellow-300 rounded-3xl hover:shadow-xl">
      <h1 className="flex items-center text-2xl font-bold text-yellow-500">
        <FaStar className="mr-2" /> {title}
      </h1>
      <div className="my-6 text-center">
        <span className="text-5xl font-extrabold">{price}</span>
        <span className="text-gray-600">/year</span>
      </div>
      <NavLink to="/contact" className="block px-6 py-3 font-semibold text-center text-white transition-colors bg-yellow-500 rounded-md shadow-sm">
        Get started
      </NavLink>
      <ul className="mt-6 space-y-4 text-gray-600">
        {details.basic.map((item, index) => (
          <li key={index} className="flex items-center space-x-3">
            <FaCheckCircle className="w-5 h-5 text-yellow-500" />
            <span>{item}</span>
          </li>
        ))}
        <li className="flex items-center space-x-3 cursor-pointer" onClick={toggleDetails}>
          <FaCheckCircle className="w-5 h-5 text-yellow-500" />
          <span className='text-lg font-bold'>{showDetails ? 'Show Less' : 'Read More...'}</span>
          {showDetails ? <FaChevronUp className="ml-2" /> : <FaChevronDown className="ml-2" />}
        </li>
      </ul>
      {showDetails && (
        <div className="mt-6 space-y-4 text-gray-600">
          <div className="flex items-center space-x-3">
            <FaMoneyBill className="w-5 h-5 text-black" />
            <span>Profit Distribution: {details.profitDistribution}</span>
          </div>
          <div className="flex items-center space-x-3">
            <FaExclamationTriangle className="w-5 h-5 text-black" />
            <span>Risk Factors: {details.riskFactors}</span>
          </div>
          <div className="flex items-center space-x-3">
            <FaFileContract className="w-5 h-5 text-black" />
            <span>Investment Terms: {details.investmentTerms}</span>
          </div>
        </div>
      )}
    </div>
  );
};

const DkR = () => {
  return (
    <div className="py-16">
      <div className="container px-4 mx-auto">
        <div className="mb-12 text-center">
          <h1 className="text-5xl font-bold text-yellow-500">DK  Recruitment  </h1>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          <PackageCard
            title="Bronze Package"
            price="500,000 PKR"
            profitPercent="5% per month"
            profitAmount="25,000 PKR"
            details={{
              basic: [
                "Profit Percent: 5% per month",
                "Monthly Profit Amount: 25,000 PKR",
                "Monthly performance reports",
                "Quarterly business updates",
                "Quarterly investor meetings",
                "Basic access to growth insights",
                "Exit after 12 months with return on investment plus profit"
              ],
              profitDistribution: "5% monthly",
              riskFactors: "Moderate",
              investmentTerms: "12 months"
            }}
          />
          <PackageCard
            title="Gold Package"
            price="800,000 PKR"
            profitPercent="8% per month"
            profitAmount="64,000 PKR"
            details={{
              basic: [
                "Profit Percent: 8% per month",
                "Monthly Profit Amount: 64,000 PKR",
                "Detailed monthly reports",
                "Monthly updates on strategy and performance",
                "Monthly investor meetings",
                "Early access to new products",
                "Exit after 12 months with return on investment plus profit"
              ],
              profitDistribution: "8% monthly",
              riskFactors: "High",
              investmentTerms: "12 months"
            }}
          />
          <PackageCard
            title="Diamond Package"
            price="1,000,000 PKR"
            profitPercent="10% per month"
            profitAmount="100,000 PKR"
            details={{
              basic: [
                "Profit Percent: 10% per month",
                "Monthly Profit Amount: 100,000 PKR",
                "Comprehensive monthly reports",
                "Weekly updates on business activities",
                "Weekly investor meetings",
                "VIP access to business initiatives",
                "Dedicated support",
                "Exit after 12 months with return on investment plus profit"
              ],
              profitDistribution: "10% monthly",
              riskFactors: "High",
              investmentTerms: "12 months"
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default DkR;
