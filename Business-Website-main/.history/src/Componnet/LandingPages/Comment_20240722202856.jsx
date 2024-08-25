
import React from 'react';

const Comment = () => {
  return (
    <div className="flex justify-center items-center ">
      <div className="relative w-32 h-32">
        <img 
          src="https://via.placeholder.com/300" // Replace with your image URL
          alt="Sample"
          className="absolute inset-0 w-full h-full object-cover rounded-full shadow-lg" // Rounded frame and shadow
        />
      </div>
    </div>
  );
}

export default  Comment;
