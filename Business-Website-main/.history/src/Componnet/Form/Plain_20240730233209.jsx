import React from 'react';

const Plain = () => {
  return (
    <div className="relative w-screen h-screen overflow-hidden">
      <iframe
        className="absolute top-0 left-0 w-full h-full object-cover"
        src="https://www.youtube.com/embed/mlDVTGqdgwg?autoplay=1&mute=1&loop=1&playlist=mlDVTGqdgwg"
        title="Background Video"
        frameBorder="0"
        allow="autoplay; loop; fullscreen"
        allowFullScreen
      />
    </div>
  );
};

export default Plain;
