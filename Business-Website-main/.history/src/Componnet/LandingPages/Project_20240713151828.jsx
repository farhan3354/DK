import React, { useState, useEffect } from 'react';

const Project = () => {
  const projects = [
    {
      imageUrl: 'https://dkgroup.pk/wp-content/uploads/2024/03/1-2-768x432.png',
      title: 'Social Swiril',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla accumsan arcu fermentum, congue velit id, cursus justo.',
    },
    {
      imageUrl: 'https://dkgroup.pk/wp-content/uploads/2024/03/loja-1-768x432.png',
      title: 'Loja',
      description: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer rutrum quam nec varius vestibulum.',
    },
    {
      imageUrl: 'https://dkgroup.pk/wp-content/uploads/2024/03/gotrolly-sen-768x432.png',
      title: 'Gotrolly',
      description: 'Fusce vulputate eros sed enim vehicula, vitae posuere nulla gravida. Vivamus id sem a libero aliquam ultricies.',
    },
    {
      imageUrl: 'https://dkgroup.pk/wp-content/uploads/2024/03/2-1-768x432.png',
      title: 'Elisha',
      description: 'Phasellus dapibus metus sed augue fringilla, at ultricies mi dictum. In suscipit dolor vitae dui condimentum, non luctus neque viverra.',
    },
    {
      imageUrl: 'https://dkgroup.pk/wp-content/uploads/2024/03/3-2-768x432.png',
      title: 'DK Recruitment',
      description: 'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel.',
    },
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
    <div className="slideshow-container flex justify-center items-center bg-yellow-300 px-20 py-4">
      {projects
        .slice(currentSet * slidesPerPage, (currentSet + 1) * slidesPerPage)
        .map((project, index) => (
          <div
            key={index}
            className="slide px-4"
            style={{ width: `calc(100% / ${slidesPerPage})` }}
          >
            <div className="border-2 border-gray-200 border-opacity-60 rounded-xl overflow-hidden bg-white p-0">
              <img
                className="h-48 w-full object-cover object-center rounded-t-xl"
                src={project.imageUrl}
                alt="Project Image"
              />
              <div className="px-4 pb-4 text-center">
                <h1 className="text-base font-medium text-gray-900 mb-2">{project.title}</h1>
                <p className="text-sm leading-relaxed">{project.description}</p>
                <button className="bg-black text-white font-bold py-2 px-8 rounded mt-2">
  Read More
</button>

              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Project;
