import React from 'react';

const Vedio = () => {
  return (
    <div className="p-6 bg-white md:p-12">
      {/* Flex container for first and second sections */}
      <div className="flex flex-col md:flex-row md:space-x-8">
        {/* First Section */}
        <div className="flex-1 mb-8 md:mb-0 md:px-6 lg:px-12">
          <h1 className="mb-8 text-3xl font-bold md:text-4xl lg:text-5xl">
            DK Group
          </h1>
          <p className="mb-8 text-sm leading-relaxed md:text-base lg:text-lg">
            Welcome to DK Group: Where strategic investments meet social
            responsibility. Our platform is designed for those seeking financial growth 
            with integrity. Through diverse projects and cryptocurrencies, we provide 
            professional, attractive opportunities that generate monthly returns while 
            making a positive impact on communities.
          </p>
          <ul className="pl-6 mb-8 space-y-2 text-sm list-disc md:text-base lg:text-lg">
            <li>Lowest fees in the market</li>
            <li>Fast and secure transactions</li>
            <li>256-bit secure encryption</li>
          </ul>
        </div>

        {/* Video Section */}
        <div className="flex-1 w-full max-w-lg mx-auto overflow-hidden rounded-2xl">
          <iframe
            className="w-full h-48 md:h-64 lg:h-80"
            src="https://www.youtube.com/embed/your_video_id" // Replace with actual video ID
            frameBorder="0"
            allowFullScreen
            title="Video"
          ></iframe>
        </div>
      </div>

      {/* Video Information */}
      <div className="px-4 mt-8 md:px-8 lg:px-16">
        <h1 className="mb-4 text-2xl font-bold md:text-3xl lg:text-4xl">
          DK Group Our Latest News
        </h1>
        <p className="text-sm leading-relaxed md:text-base lg:text-lg">
          Stay informed and empowered with the latest investment news and updates from DK Group.
          By staying abreast of market trends, sector developments, and economic indicators,
          you can make informed investment decisions that align with your financial goals and objectives.
          Trust DK Group to keep you informed and guide you on your investment journey.
        </p>
      </div>
    </div>
  );
};

export default Vedio;
