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
      className="relative h-screen"
      style={{ backgroundImage: 'url("https://dkgroup.pk/wp-content/uptment-tree-811x1024.png")' }}
    >
      <div className="absolute top-0 left-0 w-full h-full p-4 flex flex-col items-center">
        {/* First row */}
        <div className="w-full flex justify-center mb-6">
          <div className="p-6 bg-white border border-gray-300 rounded-lg shadow-lg w-80 h-60 flex flex-col items-center justify-center">
            <p className="text-lg text-center mb-4">{projects[0].text}</p>
            <button className="bg-blue-500 text-white py-2 px-4 rounded-lg">Learn More</button>
          </div>
        </div>
        
        {/* Second row */}
        <div className="w-full flex justify-between mb-6 max-w-xl">
          <div className="p-6 bg-white border border-gray-300 rounded-lg shadow-lg w-80 h-60 flex flex-col items-center justify-center">
            <p className="text-lg text-center mb-4">{projects[1].text}</p>
            <button className="bg-blue-500 text-white py-2 px-4 rounded-lg">Learn More</button>
          </div>
          <div className="p-6 bg-white border border-gray-300 rounded-lg shadow-lg w-80 h-60 flex flex-col items-center justify-center">
            <p className="text-lg text-center mb-4">{projects[2].text}</p>
            <button className="bg-blue-500 text-white py-2 px-4 rounded-lg">Learn More</button>
          </div>
        </div>
        
        {/* Third row */}
        <div className="w-full flex justify-center gap-8 mb-6 max-w-2xl">
          <div className="p-6 bg-white border border-gray-300 rounded-lg shadow-lg w-80 h-60 flex flex-col items-center justify-center">
            <p className="text-lg text-center mb-4">{projects[3].text}</p>
            <button className="bg-blue-500 text-white py-2 px-4 rounded-lg">Learn More</button>
          </div>
          <div className="p-6 bg-white border border-gray-300 rounded-lg shadow-lg w-80 h-60 flex flex-col items-center justify-center">
            <p className="text-lg text-center mb-4">{projects[4].text}</p>
            <button className="bg-blue-500 text-white py-2 px-4 rounded-lg">Learn More</button>
          </div>
          <div className="p-6 bg-white border border-gray-300 rounded-lg shadow-lg w-80 h-60 flex flex-col items-center justify-center">
            <p className="text-lg text-center mb-4">{projects[5].text}</p>
            <button className="bg-blue-500 text-white py-2 px-4 rounded-lg">Learn More</button>
          </div>
        </div>
        
        {/* Fourth row */}
        <div className="w-full flex justify-between mb-6 max-w-xl">
          <div className="p-6 bg-white border border-gray-300 rounded-lg shadow-lg w-80 h-60 flex flex-col items-center justify-center">
            <p className="text-lg text-center mb-4">{projects[6].text}</p>
            <button className="bg-blue-500 text-white py-2 px-4 rounded-lg">Learn More</button>
          </div>
          <div className="p-6 bg-white border border-gray-300 rounded-lg shadow-lg w-80 h-60 flex flex-col items-center justify-center">
            <p className="text-lg text-center mb-4">{projects[7].text}</p>
            <button className="bg-blue-500 text-white py-2 px-4 rounded-lg">Learn More</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
