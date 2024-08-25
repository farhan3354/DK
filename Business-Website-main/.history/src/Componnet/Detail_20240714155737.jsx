import React from 'react';

const Detail = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto flex flex-wrap">
        <div className="lg:w-1/2 w-full mb-10 lg:mb-0 rounded-lg overflow-hidden">
          <img
            alt="feature"
            className="object-cover object-center h-full w-full"
            src="https://dkgroup.pk/wp-content/uploads/2024/03/black-1536x1025.png"
          />
          <div className="p-6">
            <h2 className="text-2xl font-medium title-font mb-4 text-gray-900">
              Token Harvest Unleash Daily Gains from Idle Assets
            </h2>
            <p className="leading-relaxed mb-4">
              Earn daily rewards effortlessly as your idle tokens work for you with unmatched
              efficiency. Embrace the power of passive income with our innovative platform,
              maximizing your earnings while you relax-
            </p>
            <ul className="list-disc ml-4 mb-6">
              <li>Lowest fees in market</li>
              <li>Fast and secure transaction</li>
              <li>256-bit secure encryption</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Detail;
