import React from 'react';
import v1 from '../../assets/v1.mp4';

const Plain = () => {
  // Sample data for the cards
  const cards = [
    { id: 1, label: 'Student Plan',text:"In our invetment plan" },
    { id: 2, label: 'Card 2' },
    { id: 3, label: 'Card 3' },
    { id: 4, label: 'Card 4' },
    { id: 5, label: 'Card 5' },
    { id: 6, label: 'Card 6' },
    { id: 7, label: 'Card 7' },
    { id: 8, label: 'Card 8' },
  ];

  return (
    <div className="relative w-screen h-screen overflow-hidden">
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src={v1}
        autoPlay
        loop
        muted
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        {/* Title Section */}
        <h1 className="text-6xl font-bold text-black mb-10">
          Our Plans
        </h1>
        {/* Cards Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {cards.map((card) => (
            <div
              key={card.id}
              className="w-32 h-32 sm:w-44 sm:h-44 md:w-56 md:h-56 bg-gradient-to-r from-yellow-600 via-yellow-200 to-yellow-700 flex justify-center items-center transform transition-transform duration-500 cursor-pointer hover:scale-105 hover:shadow-lg"
              onClick={() => console.log(`Clicked on ${card.label}`)}
              style={{
                borderRadius: '50%', // Perfect circle
                boxShadow: '0 6px 12px rgba(0, 0, 0, 0.3)', // Enhanced shadow for depth
                // Removed perspective and transformStyle for flat effect
              }}
            >
              <div
                className="flex justify-center items-center w-full h-full"
                style={{
                  fontSize: '1rem',
                  color: '#fff',
                }}
              >
                {card.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Plain;
