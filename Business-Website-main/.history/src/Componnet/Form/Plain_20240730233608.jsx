import React from 'react';

const Plain = () => {
  return (
    <div className="relative w-screen h-screen overflow-hidden">
      <iframe
        className="absolute top-0 left-0 w-full h-full object-cover"
        src="https://www.youtube.com/embed/mlDVTGqdgwg?autoplay=1&mute=1&loop=1&playlist=mlDVTGqdgwg&controls=0&rel=0&modestbranding=1"
        title="Background Video"
        frameBorder="0"
        allow="autoplay; loop; fullscreen"
        allowFullScreen
      />
      <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
        <h1 className="text-white text-4xl md:text-6xl font-bold">
          Your Title Here
        </h1>
      </div>
    </div>
  );
};

export default Plain;
