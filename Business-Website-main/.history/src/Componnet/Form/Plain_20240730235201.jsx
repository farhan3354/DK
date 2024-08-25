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
        <div className="grid grid-cols-4 gap-8">
          {cards.map((card) => (
            <div
              key={card.id}
              className="w-24 h-24 bg-white flex justify-center items-center transform transition-transform duration-300 cursor-pointer"
              onClick={() => console.log(`Clicked on ${card.label}`)}
              style={{
                borderRadius: '100%',
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)',
                perspective: '700px', // Deeper 3D space
                transformStyle: 'preserve-3d', // Ensures children maintain their 3D transformation
              }}
            >
              <div
                className="flex justify-center items-center"
                style={{
                  transform: 'rotateX(60deg) rotateY(-60deg) translateZ(30px)', // Increased rotation and depth
                  backfaceVisibility: 'hidden', // Hides the backface when rotated
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
