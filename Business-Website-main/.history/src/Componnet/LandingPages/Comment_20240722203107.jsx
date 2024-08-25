import React from 'react';

// Define the array of comments
const comments = [
  {
    id: 1,
    image: 'https://via.placeholder.com/300', // Replace with actual image URLs
    text: 'Earn daily rewards effortlessly as your idle tokens work for you with unmatched efficiency. Embrace the power of passive income with'
  },
  {
    id: 2,
    image: 'https://via.placeholder.com/300', // Replace with actual image URLs
    text: 'Another comment here. Enjoy seamless rewards and a hassle-free experience with our system.'
  },
  // Add more comments as needed
];

const Comment = () => {
  return (
    <div className="flex flex-col items-center p-4 max-w-md mx-auto bg-white rounded-lg shadow-md">
      {comments.map(comment => (
        <div key={comment.id} className="mb-4 w-full">
          <div className="relative w-32 h-32 mb-4 mx-auto">
            <img 
              src={comment.image} // Use image URL from the array
              alt={`Comment ${comment.id}`}
              className="absolute inset-0 w-full h-full object-cover rounded-full shadow-lg"
            />
          </div>
          <p className="text-center text-gray-700">
            {comment.text} {/* Use text from the array */}
          </p>
        </div>
      ))}
    </div>
  );
}

export default Comment;
