import React from 'react';
import { FaCheckCircle } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
const M8 = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl mx-4 rounded-lg shadow-xl bg-gradient-to-r from-white to-yellow-200 lg:mx-8 xl:max-w-6xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200 rounded-t-lg bg-gradient-to-r from-yellow-600 to-yellow-200">
          <h3 className="text-xl font-semibold text-gray-800">Stock Market Plan</h3>
          <button
            className="text-gray-600 hover:text-gray-900"
            onClick={onClose}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          </button>
        </div>

        {/* Content */}
        <div className="p-6 max-h-[75vh] overflow-y-auto ">
          <div className="grid gap-6 sm:grid-cols-1 lg:grid-cols-3">
            {/* Starter Plan */}
            <div className="flex flex-col p-6 text-center transition-shadow duration-300 border border-gray-200 rounded-lg shadow-sm bg-gradient-to-r from-white to-yellow-400 hover:shadow-md">
              <h3 className="mb-4 text-2xl font-semibold text-gray-800">Starter</h3>
              <p className="mb-6 text-gray-600">Ideal for individuals and small projects.</p>
              <div className="flex items-baseline justify-center mb-6">
                <span className="text-4xl font-bold text-gray-900">$29</span>
                <span className="ml-2 text-gray-500">/month</span>
              </div>
              <ul className="space-y-4 text-left text-gray-700">
                {[
                  'Individual configuration',
                  'No setup fees',
                  '1 developer',
                  '6 months premium support',
                  '6 months free updates',
                ].map((item, index) => (
                  <li key={index} className="flex items-center">
                    <FaCheckCircle className="mr-2 text-green-500" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <NavLink
  to="/contact"
  className="inline-block px-5 py-3 mt-8 text-sm font-medium text-white rounded-lg bg-gradient-to-r from-yellow-200 to-yellow-600"
>
  Get Started
</NavLink>
            </div>

            {/* Company Plan */}
            <div className="flex flex-col p-6 text-center transition-shadow duration-300 border border-gray-200 rounded-lg shadow-sm bg-gradient-to-r from-white to-yellow-400 hover:shadow-md">
              <h3 className="mb-4 text-2xl font-semibold text-gray-800">Company</h3>
              <p className="mb-6 text-gray-600">Best for teams and growing businesses.</p>
              <div className="flex items-baseline justify-center mb-6">
                <span className="text-4xl font-bold text-gray-900">$99</span>
                <span className="ml-2 text-gray-500">/month</span>
              </div>
              <ul className="space-y-4 text-left text-gray-700">
                {[
                  'Custom configuration',
                  'No setup fees',
                  'Up to 10 developers',
                  '24 months premium support',
                  '24 months free updates',
                ].map((item, index) => (
                  <li key={index} className="flex items-center">
                    <FaCheckCircle className="mr-2 text-green-500" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <a
                href="/contact"
                className="inline-block px-5 py-3 mt-8 text-sm font-medium text-white rounded-lg bg-gradient-to-r from-yellow-200 to-yellow-600"
              >
                Get Started
              </a>
            </div>

            {/* Enterprise Plan */}
            <div className="flex flex-col p-6 text-center transition-shadow duration-300 border border-gray-200 rounded-lg shadow-sm bg-gradient-to-r from-white to-yellow-400 hover:shadow-md">
              <h3 className="mb-4 text-2xl font-semibold text-gray-800">Enterprise</h3>
              <p className="mb-6 text-gray-600">Perfect for large-scale operations.</p>
              <div className="flex items-baseline justify-center mb-6">
                <span className="text-4xl font-bold text-gray-900">$499</span>
                <span className="ml-2 text-gray-500">/month</span>
              </div>
              <ul className="space-y-4 text-left text-gray-700">
                {[
                  'Custom configuration',
                  'No setup fees',
                  '100+ developers',
                  '36 months premium support',
                  '36 months free updates',
                ].map((item, index) => (
                  <li key={index} className="flex items-center">
                    <FaCheckCircle className="mr-2 text-green-500" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <a
                href="/contact"
                className="inline-block px-5 py-3 mt-8 text-sm font-medium text-white rounded-lg bg-gradient-to-r from-yellow-200 to-yellow-600 "
              >
                Get Started
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default M8;
