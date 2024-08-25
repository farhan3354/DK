import React from 'react';

const Detail = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto flex flex-wrap">
        <div className="lg:w-1/2 w-full mb-10 lg:mb-0 rounded-lg overflow-hidden">
          <img alt="feature" className="object-cover object-center h-full w-full" src="https://dkgroup.pk/wp-content/uploads/2024/03/black-1536x1025.png" />
        </div>
        <div className="flex flex-col flex-wrap lg:py-6 -mb-10 lg:w-1/2 lg:pl-12 lg:text-left text-center">
          <div className="flex flex-col mb-10 lg:items-start items-center">
            <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5">
              <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-6 h-6" viewBox="0 0 24 24">
                <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
              </svg>
            </div>
            <div className="flex-grow">
              <h2 className="text-gray-900 text-lg title-font font-medium mb-3">Token Harvest</h2>
              <p className="leading-relaxed text-base">
                Unleash Daily Gains from Idle Assets. Earn daily rewards effortlessly as your idle tokens work for you with unmatched efficiency. Embrace the power of passive income with our innovative platform, maximizing your earnings while you relax.
              </p>
              <a href="#" className="mt-3 text-indigo-500 inline-flex items-center">Learn More
                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
          </div>
          <div className="flex flex-col mb-10 lg:items-start items-center">
            <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5">
              <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-6 h-6" viewBox="0 0 24 24">
                <circle cx="6" cy="6" r="3"></circle>
                <circle cx="6" cy="18" r="3"></circle>
                <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12"></path>
              </svg>
            </div>
            <div className="flex-grow">
              <h2 className="text-gray-900 text-lg title-font font-medium mb-3">Earn Daily Rewards</h2>
              <p className="leading-relaxed text-base">
                Lowest fees in market. Fast and secure transaction. 256-bit secure encryption.
              </p>
              <a href="#" className="mt-3 text-indigo-500 inline-flex items-center">Learn More
                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Detail;
