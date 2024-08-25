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
      <div className="absolute top-0 left-0 w-full h-full flex flex-wrap justify-center items-center p-4">
        {projects.map((project, index) => {
          const angle = (index % 5) * 18; // Spread out in a semi-circular pattern
          const radius = 200 + (index * 20); // Increasing radius for each subsequent card

          const x = radius * Math.cos((index * Math.PI) / 5);
          const y = radius * Math.sin((index * Math.PI) / 5);

          return (
            <div
              key={index}
              className="absolute p-4 bg-white border border-gray-300 rounded-lg shadow-lg"
              style={{
                width: '180px', // Adjusted width
                height: '130px', // Adjusted height
                transform: `translate(${x}px, ${y}px) rotate(${angle}deg)`,
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)' // Enhanced shadow
              }}
            >
              <img
                src={project.src}
                alt={`Project ${index + 1}`}
                className="w-full h-auto mb-2 rounded-lg"
              />
              <p className="text-sm text-center">{project.text}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
