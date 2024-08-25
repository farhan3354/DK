import React, { useState, useEffect } from 'react';
const [currentSet, setCurrentSet] = useState(0);
const slidesPerPage = 3; // Number of slides to show per set

const totalSets = Math.ceil(projects.length / slidesPerPage);

useEffect(() => {
    const interval = setInterval(() => {
        setCurrentSet((prevSet) => (prevSet + 1) % totalSets);
    }, 2000); // Change set every 2 seconds

    return () => clearInterval(interval);
}, [totalSets]);

// Define the array of comments
const comments = [
  {
    id: 1,
    image: 'https://dkgroup.pk/wp-content/uploads/2024/03/stylish-indian-beard-man-pink-tshirt-india-model-posed-outdoor-streets-city.jpg', // Replace with actual image URLs
    text: 'Earn daily rewards effortlessly as your idle tokens work for you with unmatched efficiency. Embrace the power of passive income with'
  },
  {
    id: 2,
    image: 'https://dkgroup.pk/wp-content/uploads/2024/03/2147645587-e1711354319559.jpg', // Replace with actual image URLs
    text: 'Another comment here. Enjoy seamless rewards and a hassle-free experience with our system.'
  },
  {
    id: 2,
    image: 'https://dkgroup.pk/wp-content/uploads/2024/03/handsome-smiling-man-wearing-green-shirt-standing-against-blue-background.jpg', // Replace with actual image URLs
    text: 'Another comment here. Enjoy seamless rewards and a hassle-free experience with our system.'
  },
  
  // Add more comments as needed
];

const Comment = () => {
  return (
    <div className="flex flex-wrap justify-center p-4 ">
           {comment
                        .slice(currentSet * slidesPerPage, (currentSet + 1) * slidesPerPage)
      {comments.map(comment => (
        <div key={comment.id} className="flex flex-col items-center w-full sm:w-64 md:w-80 p-4 m-2 rounded-lg shadow-md">
          <div className="relative w-32 h-32 mb-4">
            <img 
              src={comment.image} // Use image URL from the array
              alt={`Comment ${comment.id}`}
              className="absolute inset-0 w-full h-full object-cover rounded-full shadow-lg"
            />
          </div>
          <p className="text-center ">
            {comment.text} {/* Use text from the array */}
          </p>
        </div>
      ))}
    </div>
  );
}

export default Comment;
