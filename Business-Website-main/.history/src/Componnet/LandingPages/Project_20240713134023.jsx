import React from 'react';

const Project = () => {
  // Array of project data objects
  const projects = [
    {
      imageUrl: 'https://dummyimage.com/720x400',
      category: 'CATEGORY 2',
      title: 'The Reactor',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s.',
    },
    // Add more objects for additional projects as needed
  ];

  return (
    <div>
      <div className="bg-amber-100 flex justify-center items-center">
        <img
          className="max-w-xs  max-h-100%"  // Adjusted max-h-4/5 for 20% height decrease
          src="https://dkgroup.pk/wp-content/uploads/2024/03/Screenshot_2024-02-29_at_17-17-52_funnel.pdf-removebg-preview.png"
          alt="Project Image"
        />
      </div>
      {/* Map over projects array to render each project */}
      {projects.map((project, index) => (
        <div key={index} className="flex flex-wrap -m-4">
          <div className="p-4 md:w-1/3">
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
        </div>
      ))}
    </div>
  );
};

export default Project;
