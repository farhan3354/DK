import React from 'react';

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
  ];

  return (
    <div className="flex flex-wrap -m-4">
      {/* Map over projects array to render each project */}
      {projects.map((project, index) => (
        <div key={index} className="p-4 md:w-1/3">
          <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-xl overflow-hidden bg-white">
            <img
              className="lg:h-64 md:h-48 w-full object-cover object-center rounded-xl"
              src={project.imageUrl}
              alt="Project Image"
            />
            <div className="p-6 text-center">
              <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">{project.category}</h2>
              <h1 className="title-font text-lg font-medium text-gray-900 mb-3">{project.title}</h1>
              <p className="leading-relaxed">{project.description}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Project;
