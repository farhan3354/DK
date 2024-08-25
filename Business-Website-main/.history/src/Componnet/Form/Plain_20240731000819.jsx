import React from 'react';
import v1 from '../../assets/v1.mp4';

const Plain = () => {
  // Sample data for the cards
  const cards = [
    { id: 1, label: 'Card 1' },
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
      <div className="absolute inset-0 flex justify-center items-center">
        <div className="grid grid-cols-4 gap-8">
          {cards.map((card) => (
            <div
              key={card.id}
              className="w-56 h-52 bg-yellow-700 flex justify-center items-center transform transition-transform duration-500 cursor-pointer hover:scale-105 hover:shadow-lg hover:transform hover:rotateX(0deg) hover:rotateY(0deg)"
              onClick={() => console.log(`Clicked on ${card.label}`)}
              style={{
                borderRadius: '50%', // Perfect circle
                boxShadow: '0 6px 12px rgba(0, 0, 0, 0.3)', // Enhanced shadow for depth
                perspective: '1000px', // Increased perspective for more 3D effect
                transformStyle: 'preserve-3d',
                transform: 'rotateX(30deg) rotateY(-30deg)', // Default rotation for 3D effect
                transition: 'transform 0.5s ease, box-shadow 0.5s ease', // Smooth transition
              }}
            >
              <div
                className="flex justify-center items-center w-full h-full"
                style={{
                  transform: 'rotateX(0deg) rotateY(0deg)', // Ensure proper alignment
                  backfaceVisibility: 'hidden',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  fontSize: '1.25rem',
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
