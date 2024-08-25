
import React from 'react';


const Pic = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="relative w-64 h-64">
        <img 
          src="https://via.placeholder.com/300" // Replace with your image URL
          alt="Sample"
          className="absolute inset-0 w-full h-full object-cover rounded-full shadow-lg" // Rounded frame and shadow
        />
      </div>
    </div>
  );
}

export default Pic;
