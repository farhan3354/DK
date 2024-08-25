import React, { useState, useEffect } from 'react';

const Project = () => {
  // Array of project data objects
  const projects = [
    {
      imageUrl: 'https://dummyimage.com/720x400',
      category: 'CATEGORY 1',
      title: 'Project 1',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla accumsan arcu fermentum, congue velit id, cursus justo.',
    },
    {
      imageUrl: 'https://dummyimage.com/720x400',
      category: 'CATEGORY 2',
      title: 'Project 2',
      description: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer rutrum quam nec varius vestibulum.',
    },
    {
      imageUrl: 'https://dummyimage.com/720x400',
      category: 'CATEGORY 3',
      title: 'Project 3',
      description: 'Fusce vulputate eros sed enim vehicula, vitae posuere nulla gravida. Vivamus id sem a libero aliquam ultricies.',
    },
    {
      imageUrl: 'https://dummyimage.com/720x400',
      category: 'CATEGORY 1',
      title: 'Project 4',
      description: 'Sed in est nec libero interdum euismod. Aliquam erat volutpat. Nunc vehicula nibh vitae nibh dictum, sit amet blandit nulla semper.',
    },
    {
      imageUrl: 'https://dummyimage.com/720x400',
      category: 'CATEGORY 2',
      title: 'Project 5',
      description: 'Phasellus dapibus metus sed augue fringilla, at ultricies mi dictum. In suscipit dolor vitae dui condimentum, non luctus neque viverra.',
    },
    {
      imageUrl: 'https://dummyimage.com/720x400',
      category: 'CATEGORY 3',
      title: 'Project 6',
      description: 'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula.',
    },
  ];

  // State to manage current slide index
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentSet, setCurrentSet] = useState(0); // Track the current set of slides

  // Constants for carousel display
  const slidesPerPage = 3;
  const totalSets = Math.ceil(projects.length / slidesPerPage);

  // Function to move to the next set of slides
  const nextSet = () => {
    setCurrentSet((currentSet + 1) % totalSets);
  };

  // Function to move to the previous set of slides
  const prevSet = () => {
    setCurrentSet((currentSet - 1 + totalSets) % totalSets);
  };

  // Auto slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSet((currentSet + 1) % totalSets);
    }, 5000); // Change set every 5 seconds

    return () => clearInterval(interval);
  }, [currentSet]); // Re-run effect when currentSet changes

  return (
    <div className="slideshow-container flex justify-center items-center">
      {/* Map over projects array to render each project */}
      {projects.slice(currentSet * slidesPerPage, (currentSet + 1) * slidesPerPage).map((project, index) => (
        <div
          key={index}
          className={`slide flex-1 p-4`}
        >
          <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-xl overflow-hidden bg-white">
            <img
              className="h-64 w-full object-cover object-center rounded-xl"
              src={project.imageUrl}
              alt="Project Image"
            />
            <div className="p-6 text-center">
              <h2 className="text-xs text-gray-400 mb-1">{project.category}</h2>
              <h1 className="text-lg font-medium text-gray-900 mb-3">{project.title}</h1>
              <p className="leading-relaxed">{project.description}</p>
            </div>
          </div>
        </div>
      ))}
      {/* Navigation buttons */}
      <button
        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-200 px-2 py-1 rounded-lg"
        onClick={prevSet}
      >
        Prev
      </button>
      <button
        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-200 px-2 py-1 rounded-lg"
        onClick={nextSet}
      >
        Next
      </button>
    </div>
  );
};

export default Project;
