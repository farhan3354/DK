import React from 'react';

const Plain = () => {
  return (
    <div className="relative w-screen h-screen overflow-hidden">
      <iframe
        className="absolute top-0 left-0 w-full h-full"
        src="https://www.youtube.com/embed/mlDVTGqdgwg?autoplay=1&mute=1&loop=1&playlist=mlDVTGqdgwg&controls=0&showinfo=0&rel=0&modestbranding=1"
        title="Background Video"
        frameBorder="0"
        allow="autoplay; loop; fullscreen"
        allowFullScreen
      />
      <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
        <p className="text-white text-3xl font-bold">Your Hover Text Here</p>
      </div>
    </div>
  );
};

export default Plain;
