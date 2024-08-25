// src/components/Project.jsx
import React from 'react';

const Project = ({ project }) => {
  return (
    <div className="container">
      <div className="bg-amber-100 flex justify-center items-center">
        <img
          className="max-w-xs max-h-10%"
          src={project.image}
          alt={project.title}
        />
      </div>

      <div className="flex flex-wrap -m-4">
        <div className="p-4 md:w-1/3">
          <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-xl overflow-hidden bg-white">
            <img
              className="lg:h-64 md:h-48 w-full object-cover object-center rounded-xl"
              src={project.image}
              alt={project.title}
            />
            <div className="p-6 text-center">
              <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">{project.category}</h2>
              <h1 className="title-font text-lg font-medium text-gray-900 mb-3">{project.title}</h1>
              <p className="leading-relaxed">{project.description}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
