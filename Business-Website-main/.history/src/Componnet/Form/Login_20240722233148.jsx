import React from 'react';

const projects = [
  { text: 'Project 1' },
  { text: 'Project 2' },
  { text: 'Project 3' },
  { text: 'Project 4' },
  { text: 'Project 5' },
  { text: 'Project 6' },
  { text: 'Project 7' },
  { text: 'Project 8' }
];

const Projects = () => {
  return (
    <div
      className="relative w-full h-full py-10 px-4"
      style={{ backgroundImage: 'url("https://dkgroup.pk/wp-content/uptment-tree-811x1024.png")', backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
      <div className="container mx-auto">
        {/* Project grid layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="relative p-6 bg-white border border-gray-300 rounded-lg shadow-lg flex flex-col items-center justify-center group transition-transform transform hover:scale-105">
              <p className="text-lg text-center mb-4">{project.text}</p>
              <button className="bg-blue-500 text-white py-2 px-4 rounded-lg">Learn More</button>
              <div className="absolute top-0 left-0 w-full h-full border-2 border-blue-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
