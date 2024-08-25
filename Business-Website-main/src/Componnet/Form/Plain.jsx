import React from 'react';
import a111 from '../../assets/tree.png';
import { Link } from 'react-router-dom';

const Plain = () => {
  
  return (
   <div>
    <Link to={'/pricing'}>
    <h1 className='mt-16 text-5xl font-bold hover:text-yellow-500'>Our Plans</h1>
     <img src={a111} alt="Tree" className="w-full h-auto" />
     </Link>
     
   </div>
   
  );
};

export default Plain;


// import React, { useState } from 'react';
// import { FaCheck, FaCaretDown, FaCaretUp, FaMoneyBill, FaShieldAlt, FaHandshake } from 'react-icons/fa'; // Updated icons

// const PricingComponent = () => {
//   const [billingPeriod, setBillingPeriod] = useState('monthly');
//   const [expandedPlan, setExpandedPlan] = useState(null);

//   const handleBillingChange = (period) => {
//     setBillingPeriod(period);
//   };

//   const toggleDetails = (plan) => {
//     setExpandedPlan(expandedPlan === plan ? null : plan);
//   };

//   return (
//     <div className="p-10 sm:flex sm:flex-col sm:align-center">
//       <div className="relative self-center bg-gray-200 rounded-lg p-0.5 flex">
//         <button
//           type="button"
//           onClick={() => handleBillingChange('monthly')}
//           className={`relative w-1/2 rounded-md py-2 text-sm font-medium whitespace-nowrap focus:outline-none sm:w-auto sm:px-8 ${
//             billingPeriod === 'monthly' ? 'bg-gray-50 border-gray-50 text-gray-900 shadow-sm' : 'border-transparent text-gray-900'
//           }`}
//         >
//           Monthly billing
//         </button>
//         <button
//           type="button"
//           onClick={() => handleBillingChange('yearly')}
//           className={`ml-0.5 relative w-1/2 rounded-md py-2 text-sm font-medium whitespace-nowrap focus:outline-none sm:w-auto sm:px-8 ${
//             billingPeriod === 'yearly' ? 'bg-gray-50 border-gray-50 text-gray-900 shadow-sm' : 'border-transparent text-gray-900'
//           }`}
//         >
//           Yearly billing
//         </button>
//       </div>

//       <div className="mt-12 space-y-3 sm:mt-16 sm:space-y-0 sm:grid sm:grid-cols-3 sm:gap-6 md:max-w-5xl md:mx-auto xl:grid-cols-3">
//         {/* Starter Plan */}
//         <div className="border border-gray-200 divide-y divide-gray-200 rounded-lg shadow-sm">
//           <div className="p-6">
//             <h2 className="text-xl font-bold leading-6 text-gray-900">Starter</h2>
//             <p className="mt-2 text-base leading-tight text-gray-700">
//               For new makers who want to fine-tune and test an idea.
//             </p>
//             <p className="mt-8">
//               <span className="text-4xl font-bold tracking-tighter text-gray-900">
//                 {billingPeriod === 'monthly' ? '$0' : '$0'}
//               </span>
//               <span className="text-base font-medium text-gray-500">
//                 /{billingPeriod === 'monthly' ? 'mo' : 'yr'}
//               </span>
//             </p>
//             <a
//               href="/sign-up"
//               className="block w-full py-2 mt-8 text-sm font-semibold text-center text-white bg-gray-900 rounded-md"
//             >
//               Join as a Starter
//             </a>
//           </div>
//           <div className="px-6 pt-6 pb-8">
//             <h3 className="text-sm font-bold tracking-wide text-gray-900 uppercase">What's included</h3>
//             <ul role="list" className="mt-4 space-y-3">
//               <li className="flex items-center space-x-3">
//                 <FaCheck className="w-5 h-5 text-green-500" aria-hidden="true" />
//                 <span className="text-gray-900">1 landing page included</span>
//               </li>
//               <li className="flex items-center space-x-3">
//                 <FaCheck className="w-5 h-5 text-green-500" aria-hidden="true" />
//                 <span className="text-gray-900">1,000 visits/mo</span>
//               </li>
//               <li className="flex items-center space-x-3">
//                 <FaCheck className="w-5 h-5 text-green-500" aria-hidden="true" />
//                 <span className="text-gray-900">Access to all UI blocks</span>
//               </li>
//               <li className="flex items-center space-x-3">
//                 <FaCheck className="w-5 h-5 text-green-500" aria-hidden="true" />
//                 <span className="text-gray-900">50 conversion actions included</span>
//               </li>
//               <li className="flex items-center space-x-3">
//                 <FaCheck className="w-5 h-5 text-green-500" aria-hidden="true" />
//                 <span className="text-gray-900">5% payment commission</span>
//               </li>
//               <li className="flex items-center space-x-3 cursor-pointer" onClick={() => toggleDetails('starter')}>
//                 <span className="text-gray-900">Read More</span>
//                 {expandedPlan === 'starter' ? (
//                   <FaCaretUp className="w-5 h-5 text-gray-500" aria-hidden="true" />
//                 ) : (
//                   <FaCaretDown className="w-5 h-5 text-gray-500" aria-hidden="true" />
//                 )}
//               </li>
//             </ul>
//             {expandedPlan === 'starter' && (
//               <div className="mt-4 text-gray-700">
//                 <p><FaMoneyBill className="inline w-5 h-5 mb-3 text-yellow-600" aria-hidden="true" /> <strong>Profit Distribution:</strong></p>
//                 <p><FaShieldAlt className="inline w-5 h-5 mb-3 text-yellow-600" aria-hidden="true" /> <strong>Risk Factors:</strong></p>
//                 <p><FaHandshake className="inline w-5 h-5 text-yellow-600" aria-hidden="true" /> <strong>Investment Terms:</strong></p>
//               </div>
//             )}
//           </div>
//         </div>

//         {/* Superior Plan */}
//         <div className="border border-gray-200 divide-y divide-gray-200 rounded-lg shadow-sm">
//           <div className="p-6">
//             <h2 className="text-xl font-bold leading-6 text-gray-900">Superior</h2>
//             <p className="mt-2 text-base leading-tight text-gray-700">
//               For creators with multiple ideas who want to efficiently test and refine them.
//             </p>
//             <p className="mt-8">
//               <span className="text-4xl font-bold tracking-tighter text-gray-900">
//                 {billingPeriod === 'monthly' ? '$8' : '$80'}
//               </span>
//               <span className="text-base font-medium text-gray-500">
//                 /{billingPeriod === 'monthly' ? 'mo' : 'yr'}
//               </span>
//             </p>
//             <a
//               href="/sign-up"
//               className="block w-full py-2 mt-8 text-sm font-semibold text-center text-white bg-gray-900 rounded-md"
//             >
//               Join as a Superior
//             </a>
//           </div>
//           <div className="px-6 pt-6 pb-8">
//             <h3 className="text-sm font-bold tracking-wide text-gray-900 uppercase">What's included</h3>
//             <ul role="list" className="mt-4 space-y-3">
//               <li className="flex items-center space-x-3">
//                 <FaCheck className="w-5 h-5 text-green-500" aria-hidden="true" />
//                 <span className="text-gray-900">All Starter features</span>
//               </li>
//               <li className="flex items-center space-x-3">
//                 <FaCheck className="w-5 h-5 text-green-500" aria-hidden="true" />
//                 <span className="text-gray-900">5 landing pages included</span>
//               </li>
//               <li className="flex items-center space-x-3">
//                 <FaCheck className="w-5 h-5 text-green-500" aria-hidden="true" />
//                 <span className="text-gray-900">50,000 visits/mo</span>
//               </li>
//               <li className="flex items-center space-x-3">
//                 <FaCheck className="w-5 h-5 text-green-500" aria-hidden="true" />
//                 <span className="text-gray-900">1,000 conversion actions included</span>
//               </li>
//               <li className="flex items-center space-x-3">
//                 <FaCheck className="w-5 h-5 text-green-500" aria-hidden="true" />
//                 <span className="text-gray-900">1% payment commission</span>
//               </li>
//               <li className="flex items-center space-x-3 cursor-pointer" onClick={() => toggleDetails('superior')}>
//                 <span className="text-gray-900">Read More</span>
//                 {expandedPlan === 'superior' ? (
//                   <FaCaretUp className="w-5 h-5 text-gray-500" aria-hidden="true" />
//                 ) : (
//                   <FaCaretDown className="w-5 h-5 text-gray-500" aria-hidden="true" />
//                 )}
//               </li>
//             </ul>
//             {expandedPlan === 'superior' && (
//               <div className="mt-4 text-gray-700">
//                 <p><FaMoneyBill className="inline w-5 h-5 mb-3 text-yellow-600" aria-hidden="true" /> <strong>Profit Distribution:</strong></p>
//                 <p><FaShieldAlt className="inline w-5 h-5 mb-3 text-yellow-600" aria-hidden="true" /> <strong>Risk Factors:</strong></p>
//                 <p><FaHandshake className="inline w-5 h-5 text-yellow-600" aria-hidden="true" /> <strong>Investment Terms:</strong></p>
//               </div>
//             )}
//           </div>
//         </div>

//         {/* Everything Plan */}
//         <div className="border border-gray-200 divide-y divide-gray-200 rounded-lg shadow-sm">
//           <div className="p-6">
//             <h2 className="text-xl font-bold leading-6 text-gray-900">Everything</h2>
//             <p className="mt-2 text-base leading-tight text-gray-700">
//               For teams who want to collaborate and scale rapidly.
//             </p>
//             <p className="mt-8">
//               <span className="text-4xl font-bold tracking-tighter text-gray-900">
//                 {billingPeriod === 'monthly' ? '$25' : '$250'}
//               </span>
//               <span className="text-base font-medium text-gray-500">
//                 /{billingPeriod === 'monthly' ? 'mo' : 'yr'}
//               </span>
//             </p>
//             <a
//               href="/sign-up"
//               className="block w-full py-2 mt-8 text-sm font-semibold text-center text-white bg-gray-900 rounded-md"
//             >
//               Join Everything
//             </a>
//           </div>
//           <div className="px-6 pt-6 pb-8">
//             <h3 className="text-sm font-bold tracking-wide text-gray-900 uppercase">What's included</h3>
//             <ul role="list" className="mt-4 space-y-3">
//               <li className="flex items-center space-x-3">
//                 <FaCheck className="w-5 h-5 text-green-500" aria-hidden="true" />
//                 <span className="text-gray-900">All Superior features</span>
//               </li>
//               <li className="flex items-center space-x-3">
//                 <FaCheck className="w-5 h-5 text-green-500" aria-hidden="true" />
//                 <span className="text-gray-900">Unlimited landing pages</span>
//               </li>
//               <li className="flex items-center space-x-3">
//                 <FaCheck className="w-5 h-5 text-green-500" aria-hidden="true" />
//                 <span className="text-gray-900">Unlimited visits/mo</span>
//               </li>
//               <li className="flex items-center space-x-3">
//                 <FaCheck className="w-5 h-5 text-green-500" aria-hidden="true" />
//                 <span className="text-gray-900">Unlimited conversion actions</span>
//               </li>
//               <li className="flex items-center space-x-3">
//                 <FaCheck className="w-5 h-5 text-green-500" aria-hidden="true" />
//                 <span className="text-gray-900">No payment commission</span>
//               </li>
//               <li className="flex items-center space-x-3 cursor-pointer" onClick={() => toggleDetails('everything')}>
//                 <span className="text-gray-900">Read More</span>
//                 {expandedPlan === 'everything' ? (
//                   <FaCaretUp className="w-5 h-5 text-gray-500" aria-hidden="true" />
//                 ) : (
//                   <FaCaretDown className="w-5 h-5 text-gray-500" aria-hidden="true" />
//                 )}
//               </li>
//             </ul>
//             {expandedPlan === 'everything' && (
//               <div className="mt-4 text-gray-700">
//                 <p><FaMoneyBill className="inline w-5 h-5 mb-3 text-yellow-600" aria-hidden="true" /> <strong>Profit Distribution:</strong></p>
//                 <p><FaShieldAlt className="inline w-5 h-5 mb-3 text-yellow-600" aria-hidden="true" /> <strong>Risk Factors:</strong></p>
//                 <p><FaHandshake className="inline w-5 h-5 text-yellow-600" aria-hidden="true" /> <strong>Investment Terms:</strong></p>
//               </div>
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default PricingComponent;





