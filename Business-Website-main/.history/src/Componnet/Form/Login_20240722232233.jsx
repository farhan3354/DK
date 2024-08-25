import React from 'react';

const projects = [
  { src: 'https://dkgroup.pk/wp-content/uploads/2024/03/Untitled-2-1024x580.png', text: 'Project 1' },
  { src: 'https://dkgroup.pk/wp-content/uploads/2024/03/Untitled-3-1024x580.png', text: 'Project 2' },
  { src: 'https://dkgroup.pk/wp-content/uploads/2024/03/Untitled-6-1024x580.png', text: 'Project 3' },
  { src: 'https://dkgroup.pk/wp-content/uploads/2024/03/Untitled-4-1024x580.png', text: 'Project 4' },
  { src: 'https://dkgroup.pk/wp-content/uploads/2024/03/Untitled-5-1024x580.png', text: 'Project 5' },
  { src: 'https://dkgroup.pk/wp-content/uploads/2024/03/Untitled-2-1024x580.png', text: 'Project 6' },
  { src: 'https://dkgroup.pk/wp-content/uploads/2024/03/Untitled-3-1024x580.png', text: 'Project 7' },
  { src: 'https://dkgroup.pk/wp-content/uploads/2024/03/Untitled-6-1024x580.png', text: 'Project 8' }
];

const Projects = () => {
  return (
    <div
      className="relative w-full h-screen  bg-center"
      style={{ backgroundImage: 'url("https://dkgroup.pk/wp-content/uptment-tree-811x1024.png")' }}
    >
      <div className="absolute top-0 left-0 w-full h-full p-4 flex flex-col items-center">
        {/* First row */}
        <div className="w-full flex justify-center mb-6">
          <div className="p-4 bg-white border border-gray-300 rounded-lg shadow-lg w-60 h-40">
            <img
              src={projects[0].src}
              alt={`Project 1`}
              className="w-full h-full object-cover mb-2 rounded-lg"
            />
            <p className="text-sm text-center">{projects[0].text}</p>
          </div>
        </div>
        
        {/* Second row */}
        <div className="w-full flex justify-between mb-6 max-w-xl">
          <div className="p-4 bg-white border border-gray-300 rounded-lg shadow-lg w-60 h-40">
            <img
              src={projects[1].src}
              alt={`Project 2`}
              className="w-full h-full object-cover mb-2 rounded-lg"
            />
            <p className="text-sm text-center">{projects[1].text}</p>
          </div>
          <div className="p-4 bg-white border border-gray-300 rounded-lg shadow-lg w-60 h-40">
            <img
              src={projects[2].src}
              alt={`Project 3`}
              className="w-full h-full object-cover mb-2 rounded-lg"
            />
            <p className="text-sm text-center">{projects[2].text}</p>
          </div>
        </div>
        
        {/* Third row */}
        <div className="w-full flex justify-center gap-8 mb-6 max-w-2xl">
          <div className="p-4 bg-white border border-gray-300 rounded-lg shadow-lg ">
            <img
              src={projects[3].src}
              alt={`Project 4`}
              className="w-full h-full object-cover mb-2 rounded-lg"
            />
            <p className="text-sm text-center">{projects[3].text}</p>
          </div>
          <div className="p-4 bg-white border border-gray-300 rounded-lg shadow-lg ">
            <img
              src={projects[4].src}
              alt={`Project 5`}
              className="w-full h-full object-cover mb-2 rounded-lg"
            />
            <p className="text-sm text-center">{projects[4].text}</p>
          </div>
          <div className="p-4 bg-white border border-gray-300 rounded-lg shadow-lg ">
            <img
              src={projects[5].src}
              alt={`Project 6`}
              className="w-full h-full object-cover mb-2 rounded-lg"
            />
            <p className="text-sm text-center">{projects[5].text}</p>
          </div>
        </div>
        
        {/* Fourth row */}
        <div className="w-full flex justify-between mb-6 max-w-xl">
          <div className="p-4 bg-white border border-gray-300 rounded-lg shadow-lg w-60 h-40">
            <img
              src={projects[6].src}
              alt={`Project 7`}
              className="w-full h-full object-cover mb-2 rounded-lg"
            />
            <p className="text-sm text-center">{projects[6].text}</p>
          </div>
          <div className="p-4 bg-white border border-gray-300 rounded-lg shadow-lg w-60 h-40">
            <img
              src={projects[7].src}
              alt={`Project 8`}
              className="w-full h-full object-cover mb-2 rounded-lg"
            />
            <p className="text-sm text-center">{projects[7].text}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
