import React from 'react';

const projects = [
  { src: 'https://dkgroup.pk/wp-content/uploads/2024/03/Untitled-2-1024x580.png', text: 'Project 1' },
  { src: 'https://dkgroup.pk/wp-content/uploads/2024/03/Untitled-3-1024x580.png', text: 'Project 2' },
  { src: 'https://dkgroup.pk/wp-content/uploads/2024/03/Untitled-6-1024x580.png', text: 'Project 3' },
  { src: 'https://dkgroup.pk/wp-content/uploads/2024/03/Untitled-4-1024x580.png', text: 'Project 4' },
  { src: 'https://dkgroup.pk/wp-content/uploads/2024/03/Untitled-5-1024x580.png', text: 'Project 5' },
  { src: 'https://dkgroup.pk/wp-content/uploads/2024/03/Untitled-2-1024x580.png', text: 'Project 6' },
  { src: 'https://dkgroup.pk/wp-content/uploads/2024/03/Untitled-3-1024x580.png', text: 'Project 7' },
  { src: 'https://dkgroup.pk/wp-content/uploads/2024/03/Untitled-6-1024x580.png', text: 'Project 8' },
  { src: 'https://dkgroup.pk/wp-content/uploads/2024/03/Untitled-4-1024x580.png', text: 'Project 9' },
  { src: 'https://dkgroup.pk/wp-content/uploads/2024/03/Untitled-5-1024x580.png', text: 'Project 10' }
];

const Projects = () => {
  return (
    <div
      className="relative w-full h-screen bg-cover bg-center"
      style={{ backgroundImage: 'url("https://dkgroup.pk/wp-content/uploads/2024/03/investment-tree-811x1024.png")' }}
    >
      {projects.map((project, index) => (
        <div
          key={index}
          className="absolute p-4 bg-white border rounded shadow-lg"
          style={{
            top: `${Math.random() * 32}vh`, // Random vertical position
            left: `${Math.random() * 80}vw`, // Random horizontal position
            transform: `translate(${Math.random() * 20 - 10}px, ${Math.random() * 20 - 10}px)`, // Random offset
          }}
        >
          <img
            src={project.src}
            alt={`Project ${index + 1}`}
            className="w-full h-auto mb-2 rounded"
          />
          <p>{project.text}</p>
        </div>
      ))}
    </div>
  );
};

export default Projects;
