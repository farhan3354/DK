import React, { useState, useEffect } from 'react';

const Team = () => {
  const projects = [
    {
      imageUrl: 'https://dkgroup.pk/wp-content/uploads/2024/03/WhatsApp-Image-2024-03-15-at-11.32.16_1eaa5554.jpg',
      title: "Umer Mirza",
    },
    {
        imageUrl: 'https://dkgroup.pk/wp-content/uploads/2024/03/Akasha-1024x1024.jpg',
        title: "Umer Mirza",
      },
      {
        imageUrl: 'https://dkgroup.pk/wp-content/uploads/2024/03/PXL_20240306_1257328522-967x1024.jpg',
        title: "Umer Mirza",
      },
      {
        imageUrl: 'https://dkgroup.pk/wp-content/uploads/2024/03/PXL_20240306_1257328522-967x1024.jpg',
        title: "Umer Mirza",
      },
    // Add more projects as needed
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
    <div className="flex justify-center items-center bg-yellow-100 py-6">
      <div className="container mx-auto px-4 md:px-20">
        <div className="flex justify-center">
          <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {projects
              .slice(currentSet * slidesPerPage, (currentSet + 1) * slidesPerPage)
              .map((project, index) => (
                <div
                  key={index}
                  className="slide px-4 flex justify-center"
                >
                  <div className="border-2 border-gray-200 border-opacity-60 rounded-xl overflow-hidden bg-white p-0 flex flex-col items-center">
                    <img
                      className="h-100 w-full object-cover object-center rounded-t-xl"
                      src={project.imageUrl}
                      alt="Project Image"
                    />
                    <div className="px-4 py-4 text-center">
                      <h1 className="text-base font-medium text-gray-900 mb-2">{project.title}</h1>
                      <p className="text-sm leading-relaxed">{project.description}</p>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
