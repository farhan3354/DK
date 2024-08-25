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

  // State to manage current set of slides
  const [currentSet, setCurrentSet] = useState(0); // Track the current set of slides

  // Constants for carousel display
  const slidesPerPage = [3, 4, 5, 6]; // Number of slides to show in each set
  const totalSets = slidesPerPage.length;

  // Auto slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSet((currentSet + 1) % totalSets);
    }, 2000); // Change set every 2 seconds

    return () => clearInterval(interval);
  }, [currentSet, totalSets]); // Re-run effect when currentSet or totalSets changes

  return (
    <div className="slideshow-container flex justify-center items-center bg-yellow-300 min-h-screen">
      <div className="slides flex">
        {/* Map over projects array to render each project */}
        {slidesPerPage.map((slides, index) => (
          <div
            key={index}
            className={`slide p-4 flex flex-col items-center justify-center ${index === currentSet ? 'block' : 'hidden'}`}
            style={{ width: `calc(100% / ${slides})` }}
          >
            {projects.slice(0, slides).map((project, idx) => (
              <div
                key={idx}
                className="border-2 border-gray-200 border-opacity-60 rounded-xl overflow-hidden bg-white mb-4"
                style={{ width: '90%' }}
              >
                <img
                  className="h-48 w-full object-cover object-center rounded-t-xl"
                  src={project.imageUrl}
                  alt="Project Image"
                />
                <div className="p-4 text-center">
                  <h2 className="text-xs text-gray-400 mb-1">{project.category}</h2>
                  <h1 className="text-base font-medium text-gray-900 mb-2">{project.title}</h1>
                  <p className="text-sm leading-relaxed">{project.description}</p>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};z

export default Project;
