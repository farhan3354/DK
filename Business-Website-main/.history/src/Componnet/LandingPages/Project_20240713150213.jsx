import React, { useState, useEffect } from 'react';

const Project = () => {
  const projects = [
    {
      imageUrl: 'https://dkgroup.pk/wp-content/uploads/2024/03/2-1-768x432.png',
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
      description: 'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel.',
    },
    {
      imageUrl: 'https://dummyimage.com/720x400',
      category: 'CATEGORY 4',
      title: 'Project 7',
      description: 'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel.',
    },
    {
      imageUrl: 'https://dummyimage.com/720x400',
      category: 'CATEGORY 5',
      title: 'Project 8',
      description: 'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel.',
    },
    {
      imageUrl: 'https://dummyimage.com/720x400',
      category: 'CATEGORY 6',
      title: 'Project 9',
      description: 'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel.',
    },
  ];

  const [currentSet, setCurrentSet] = useState(0);
  const slidesPerPage = 3; // Number of slides to show per set

  const totalSets = Math.ceil(projects.length / slidesPerPage);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSet((prevSet) => (prevSet + 1) % totalSets);
    }, 2000); // Change set every 2 seconds

    return () => clearInterval(interval);
  }, [totalSets]);

  return (
    <div className="slideshow-container flex justify-center items-center bg-yellow-300 px-20 py-4">
      {projects
        .slice(currentSet * slidesPerPage, (currentSet + 1) * slidesPerPage)
        .map((project, index) => (
          <div
            key={index}
            className="slide px-4"
            style={{ width: `calc(100% / ${slidesPerPage})` }}
          >
            <div className="border-2 border-gray-200 border-opacity-60 rounded-xl overflow-hidden bg-white p-0">
              <img
                className="h-48 w-full object-cover object-center rounded-t-xl"
                src={project.imageUrl}
                alt="Project Image"
              />
              <div className="px-4 pb-4 text-center">
                <h2 className="text-xs text-gray-400 mb-1">{project.category}</h2>
                <h1 className="text-base font-medium text-gray-900 mb-2">{project.title}</h1>
                <p className="text-sm leading-relaxed">{project.description}</p>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Project;
