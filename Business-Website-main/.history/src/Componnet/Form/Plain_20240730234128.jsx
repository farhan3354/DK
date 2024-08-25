import React from 'react';

const Plain = () => {
  return (
    <div className=" w-screen h-screen overflow-hidden">
      <iframe
        className=""
        src="https://www.youtube.com/embed/mlDVTGqdgwg?autoplay=1&mute=1&loop=1&playlist=mlDVTGqdgwg&controls=0&showinfo=0&rel=0&modestbranding=1"
        title="Background Video"
        frameBorder="0"
        allow="autoplay; loop; fullscreen"
        allowFullScreen
      />
    </div>
  );
};

export default Plain;
