import React from 'react';

const Comment = () => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-4 relative overflow-hidden">
      <div className="content">
        <h2 className="text-xl font-bold mb-2">Card Title</h2>
        <p className="text-gray-700">This is a comment or content within the card.</p>
      </div>
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 mb-4">
        <img
          src="your-image-url.jpg"
          alt="Profile"
          className="w-16 h-16 object-cover rounded-full border-4 border-white"
        />
      </div>
    </div>
  );
};

export default Comment;
