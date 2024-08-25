import React, { useState, useEffect } from 'react';

const Comment = () => {
  const [currentSet, setCurrentSet] = useState(0);
  const slidesPerPage = 3; // Number of slides to show per set

  // Sample comments data
  const comments = [
    {
      id: 1,
      image: 'https://dkgroup.pk/wp-content/uploads/2024/03/stylish-indian-beard-man-pink-tshirt-india-model-posed-outdoor-streets-city.jpg',
      name: 'Ahmed',
      text: 'Earn daily rewards effortlessly as your idle tokens work for you with unmatched efficiency. Embrace the power of passive income with'
    },
    {
      id: 2,
      image: 'https://dkgroup.pk/wp-content/uploads/2024/03/2147645587-e1711354319559.jpg',
      name: 'Razaaq',
      text: 'Another comment here. Enjoy seamless rewards and a hassle-free experience with our system.'
    },
    {
      id: 3,
      image: 'https://dkgroup.pk/wp-content/uploads/2024/03/handsome-smiling-man-wearing-green-shirt-standing-against-blue-background.jpg',
      name: 'Raiz Rafeeq',
      text: 'Yet another comment here. Discover the ease of earning rewards through our innovative platform.'
    },
    {
        id: 3,
        image: 'https://dkgroup.pk/wp-content/uploads/2024/03/young-indian-man-black-shirt-tie-posed-outdoor-e1711354971290.jpg',
        name: 'Asad Munner',
        text: 'Yet another comment here. Discover the ease of earning rewards through our innovative platform.'
      },
      {
        id: 4,
        image: 'https://dkgroup.pk/wp-content/uploads/2024/03/2147645587-e1711354319559.jpg',
        name: 'Razaaq',
        text: 'Another comment here. Enjoy seamless rewards and a hassle-free experience with our system.'
      },
      {
        id: 5,
        image: 'https://dkgroup.pk/wp-content/uploads/2024/03/handsome-smiling-man-wearing-green-shirt-standing-against-blue-background.jpg',
        name: 'Raiz Rafeeq',
        text: 'Yet another comment here. Discover the ease of earning rewards through our innovative platform.'
      },
    // Add more comments as needed
  ];

  const totalSets = Math.ceil(comments.length / slidesPerPage);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSet((prevSet) => (prevSet + 1) % totalSets);
    }, 2000); // Change set every 2 seconds

    return () => clearInterval(interval);
  }, [totalSets]);

  return (
    <div className="flex flex-wrap justify-center p-4">
      {comments
        .slice(currentSet * slidesPerPage, (currentSet + 1) * slidesPerPage)
        .map(comment => (
          <div key={comment.id} className="flex flex-col items-center w-full sm:w-64 md:w-80 p-4 m-2 rounded-lg shadow-md">
            <div className="relative w-32 h-32 mb-4">
              <img 
                src={comment.image}
                alt={`Comment ${comment.id}`}
                className="absolute inset-0 w-full h-full object-cover rounded-full shadow-lg"
              />
            </div>
            <h1 className='font-bold text-xl text-center m-2'>{comment.name}</h1>
            <p className="text-center m-2">
              {comment.text}
            </p>
          </div>
        ))}
    </div>
  );
};

export default Comment;
