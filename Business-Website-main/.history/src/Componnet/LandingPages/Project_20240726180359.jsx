import React, { useState, useEffect } from 'react';

const Project = () => {
  const projects = [
    {
      imageUrl: 'https://dkgroup.pk/wp-content/uploads/2024/03/1-2-768x432.png',
      title: 'Social Swiril',
      description: 'In today’s digital age, the realm of education and professional development has undergone a transformative shift, with e-learning platforms emerging as a cornerstone of modern learning methodologies. Among these platforms, Social Swirl stands out as a beacon of innovative educational solutions, committed to providing unparalleled learning experiences through its dynamic online courses and interactive content.',
      buttonLabel: 'Read More',  // Unique button label
      buttonLink: '/Social-swiril'  // Unique button link
    },
    {
      imageUrl: 'https://dkgroup.pk/wp-content/uploads/2024/03/3-2-768x432.png',
      title: 'DK Recruitment',
      description: 'In the era of digital connectivity and flexible work arrangements DK Recruitment emerges as a beacon of innovation, offering remote job opportunities and remote internships to individuals seeking versatile and fulfilling career paths.',
      buttonLabel: 'Read More',
      buttonLink: '/DK'
    },
    {
      imageUrl: 'https://dkgroup.pk/wp-content/uploads/2024/03/loja-1-768x432.png',
      title: 'Loja',
      description: 'In the bustling landscape of retail, The Elisha stands out as a beacon of excellence, offering a unique shopping experience rooted in innovation, quality products, and unwavering customer satisfaction. Let’s delve into the core aspects of The Elisha, exploring its thoughts, aims, products, team, future goals, and the path to its success as a leading shopping store.',
      buttonLabel: 'Read More',
      buttonLink: '/Loja'
    },
    {
      imageUrl: 'https://dkgroup.pk/wp-content/uploads/2024/03/gotrolly-sen-768x432.png',
      title: 'Gotrolly',
      description: 'In the fast-paced digital age, mobile devices have become an integral part of our daily lives, serving as tools for communication, productivity, entertainment, and more. Recognizing the growing need for high-quality mobile accessories, Gotrolley emerges as the go-to destination for consumers seeking top-notch products to enhance their mobile experience. Let’s explore the core aspects of Gotrolley, including its thoughts, aims, products, team, future goals, and the path to its success.',
      buttonLabel: 'Read More',
      buttonLink: '/Gotrolly'
    },
    {
      imageUrl: 'https://dkgroup.pk/wp-content/uploads/2024/03/2-1-768x432.png',
      title: 'Elisha',
      description: 'In the bustling landscape of retail, The Elisha stands out as a beacon of excellence, offering a unique shopping experience rooted in innovation, quality products, and unwavering customer satisfaction. Let’s delve into the core aspects of The Elisha, exploring its thoughts, aims, products, team, future goals, and the path to its success as a leading shopping store.',
      buttonLabel: 'Read More',
      buttonLink: '/Elisha'
    },
    {
      imageUrl: 'https://dkgroup.pk/wp-content/uploads/2024/03/07-768x432.jpg',
      title: 'DK Tech',
      description: 'In today’s corporate landscape, social responsibility plays a pivotal role in driving positive change and fostering sustainable development. DK Tech, a leading technology company, exemplifies this ethos through its commitment to Corporate Social Responsibility (CSR). Let’s explore the core aspects of DK Tech, including its thoughts, aims, services, team, future goals, and the impact of its CSR endeavours.',
      buttonLabel: 'Read More',
      buttonLink: '/DKTech'
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
    <div className="flex justify-center items-center bg-white py-4  mt-44">
      <div className="container mx-auto px-4 md:px-20">
        <div className="flex justify-center">
          <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {projects
              .slice(currentSet * slidesPerPage, (currentSet + 1) * slidesPerPage)
              .map((project, index) => (
                <div
                  key={index}
                  className="slide px-4"
                >
                  <div className="border-2 border-gray-200 border-opacity-60 rounded-xl overflow-hidden bg-white p-0 flex flex-col items-center">
                    <img
                      className="h-55 w-full object-cover object-center rounded-xl"
                      src={project.imageUrl}
                      alt="Project Image"
                    />
                    <div className="px-4 py-4 text-center p-10">
                      <h1 className="text-base font-medium text-gray-900 m-3">{project.title}</h1>
                      <p className="text-sm leading-relaxed text-center pl-5">{project.description}</p>
                      <button className="bg-black text-white font-bold py-2 px-5 mt-3 rounded-xl">
                        <a href={project.buttonLink} target="_blank" rel="noopener noreferrer">{project.buttonLabel}</a>
                      </button>
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

export default Project;
