import React from 'react';

const projects = [
  { text: 'DK Group is a renowned financial institution committed to excellence,
providing comprehensive services globally with a focus on transparency and
community-driven initiatives.' },
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
        <div className="space-y-8">
          {/* First row: 1 card */}
          <div className="flex justify-center">
            <div className="p-6 bg-white border border-gray-300 rounded-lg shadow-lg w-80 h-60 flex flex-col items-center justify-center">
              <p className="text-lg text-center mb-4">{projects[0].text}</p>
              <button className="bg-blue-500 text-white py-2 px-4 rounded-lg">Learn More</button>
            </div>
          </div>

          {/* Second row: 2 cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pl-32">
            <div className="p-6 bg-white border border-gray-300 rounded-lg shadow-lg flex flex-col items-center justify-center">
              <p className="text-lg text-center mb-4">{projects[1].text}</p>
              <button className="bg-blue-500 text-white py-2 px-4 rounded-lg">Learn More</button>
            </div>
            <div className="p-6 bg-white border border-gray-300 rounded-lg shadow-lg flex flex-col items-center justify-center">
              <p className="text-lg text-center mb-4">{projects[2].text}</p>
              <button className="bg-blue-500 text-white py-2 px-4 rounded-lg">Learn More</button>
            </div>
          </div>

          {/* Third row: 3 cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-6 bg-white border border-gray-300 rounded-lg shadow-lg flex flex-col items-center justify-center">
              <p className="text-lg text-center mb-4">{projects[3].text}</p>
              <button className="bg-blue-500 text-white py-2 px-4 rounded-lg">Learn More</button>
            </div>
            <div className="p-6 bg-white border border-gray-300 rounded-lg shadow-lg flex flex-col items-center justify-center">
              <p className="text-lg text-center mb-4">{projects[4].text}</p>
              <button className="bg-blue-500 text-white py-2 px-4 rounded-lg">Learn More</button>
            </div>
            <div className="p-6 bg-white border border-gray-300 rounded-lg shadow-lg flex flex-col items-center justify-center">
              <p className="text-lg text-center mb-4">{projects[5].text}</p>
              <button className="bg-blue-500 text-white py-2 px-4 rounded-lg">Learn More</button>
            </div>
          </div>

          {/* Fourth row: 2 cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div className="p-6 bg-white border border-gray-300 rounded-lg shadow-lg flex flex-col items-center justify-center">
              <p className="text-lg text-center mb-4">{projects[6].text}</p>
              <button className="bg-blue-500 text-white py-2 px-4 rounded-lg">Learn More</button>
            </div>
            <div className="p-6 bg-white border border-gray-300 rounded-lg shadow-lg flex flex-col items-center justify-center">
              <p className="text-lg text-center mb-4">{projects[7].text}</p>
              <button className="bg-blue-500 text-white py-2 px-4 rounded-lg">Learn More</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
