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

  // Calculate the number of projects to show based on the current set index
  const startIndex = currentSet === 0 ? 0 : slidesPerPage.slice(0, currentSet).reduce((acc, val) => acc + val, 0);
  const endIndex = startIndex + slidesPerPage[currentSet];

  return (
    <div className="slideshow-container flex justify-center items-center">
      {/* Map over projects array to render each project */}
      {projects.slice(startIndex, endIndex).map((project, index) => (
        <div
          key={index}
          className={`slide flex-1 p-4`}
          style={{ flexBasis: `${100 / slidesPerPage[currentSet]}%` }}
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
    </div>
  );
};

export default Project;
