import React from 'react';

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
      <iframe
        className="absolute top-0 left-0 w-full h-full"
        src="https://www.youtube.com/embed/mlDVTGqdgwg?autoplay=1&mute=1&loop=1&playlist=mlDVTGqdgwg&controls=0&showinfo=0&rel=0&modestbranding=1&iv_load_policy=3&fs=0&disablekb=1"
        title="Background Video"
        frameBorder="0"
        allow="autoplay; loop; fullscreen"
        allowFullScreen
      />
      <div className="absolute inset-0 flex justify-center items-center">
        <div className="grid grid-cols-4 gap-4">
          {cards.map((card) => (
            <div
              key={card.id}
              className="w-24 h-24 rounded-full bg-white shadow-lg flex justify-center items-center transform hover:scale-105 transition-transform duration-300 cursor-pointer"
              onClick={() => console.log(`Clicked on ${card.label}`)}
              style={{
                perspective: '1000px', // Optional: Creates a 3D space
              }}
            >
              <div
                className="flex justify-center items-center"
                style={{
                  transform: 'rotateX(20deg) rotateY(-20deg)', // Optional: Adds a slight 3D tilt effect
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
