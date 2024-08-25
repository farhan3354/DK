import React, { useState } from 'react';
import p111 from '../../assets/p1.png';
import p222 from '../../assets/p2.png';
import p333 from '../../assets/p3.png';
import p444 from '../../assets/p4.png';
import p555 from '../../assets/p5.png';
import p666 from '../../assets/p6.png';
import { NavLink } from 'react-router-dom';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md'; // Import icons for navigation

const Project = () => {
  const projects = [
    {
      img: p111,
      title: 'Social Swiril',
      description: 'In today’s digital age, the realm of education and professional development has undergone a transformative shift, with e-learning platforms emerging as a cornerstone of modern learning methodologies. Among these platforms, Social Swirl stands out as a beacon of innovative educational solutions, committed to providing unparalleled learning experiences through its dynamic online courses and interactive content.',
      buttonLabel: 'Read More',
      buttonLink: '/Social-swiril'
    },
    {
      img: p222,
      title: 'DK Recruitment',
      description: 'In the era of digital connectivity and flexible work arrangements DK Recruitment emerges as a beacon of innovation, offering remote job opportunities and remote internships to individuals seeking versatile and fulfilling career paths.',
      buttonLabel: 'Read More',
      buttonLink: '/DK'
    },
    {
      img: p333,
      title: 'Loja',
      description: 'In the bustling landscape of retail, The Elisha stands out as a beacon of excellence, offering a unique shopping experience rooted in innovation, quality products, and unwavering customer satisfaction. Let’s delve into the core aspects of The Elisha, exploring its thoughts, aims, products, team, future goals, and the path to its success as a leading shopping store.',
      buttonLabel: 'Read More',
      buttonLink: '/Loja'
    },
    {
      img: p444,
      title: 'Gotrolly',
      description: 'In the fast-paced digital age, mobile devices have become an integral part of our daily lives, serving as tools for communication, productivity, entertainment, and more. Recognizing the growing need for high-quality mobile accessories, Gotrolley emerges as the go-to destination for consumers seeking top-notch products to enhance their mobile experience. Let’s explore the core aspects of Gotrolley, including its thoughts, aims, products, team, future goals, and the path to its success.',
      buttonLabel: 'Read More',
      buttonLink: '/Gotrolly'
    },
    {
      img: p555,
      title: 'Elisha',
      description: 'In the bustling landscape of retail, The Elisha stands out as a beacon of excellence, offering a unique shopping experience rooted in innovation, quality products, and unwavering customer satisfaction. Let’s delve into the core aspects of The Elisha, exploring its thoughts, aims, products, team, future goals, and the path to its success as a leading shopping store.',
      buttonLabel: 'Read More',
      buttonLink: '/Elisha'
    },
    {
      img: p666,
      title: 'DK Tech',
      description: 'In today’s corporate landscape, social responsibility plays a pivotal role in driving positive change and fostering sustainable development. DK Tech, a leading technology company, exemplifies this ethos through its commitment to Corporate Social Responsibility (CSR). Let’s explore the core aspects of DK Tech, including its thoughts, aims, services, team, future goals, and the impact of its CSR endeavors.',
      buttonLabel: 'Read More',
      buttonLink: '/DKTech'
    },
  ];
  const [currentSet, setCurrentSet] = useState(0);

  // Define slides per page based on screen size
  const slidesPerPage = window.innerWidth >= 768 ? 3 : 1;

  const totalSets = Math.ceil(projects.length / slidesPerPage);

  const handlePrevClick = () => {
    setCurrentSet((prevSet) => (prevSet === 0 ? totalSets - 1 : prevSet - 1));
  };

  const handleNextClick = () => {
    setCurrentSet((prevSet) => (prevSet + 1) % totalSets);
  };

  return (
    <div className="py-4 mx-4 mt-20 bg-white md:mt-52 md:mx-10 lg:mx-12">
      <div className="ml-20 mr-20">
        <div className="relative overflow-hidden">
          <div className="flex justify-center gap-4 flex-nowrap">
            {projects
              .slice(currentSet * slidesPerPage, (currentSet + 1) * slidesPerPage)
              .map((project, index) => (
                <div
                  key={index}
                  className="flex flex-col flex-shrink-0 w-full overflow-hidden bg-white border border-yellow-500 md:w-64 lg:w-96 sm:w-32 border-opacity-60 rounded-xl"
                >
                  <img
                    className="w-full h-auto"
                    src={project.img}
                    alt={project.title}
                  />
                  <div className="flex flex-col flex-grow p-4 text-center">
                    <h1 className="mb-2 text-xl font-semibold sm:text-2xl md:text-3xl">{project.title}</h1>
                    <p className="mb-4 text-xs sm:text-sm md:text-base">{project.description}</p>
                    <NavLink to={project.buttonLink}>
                      <button className="px-4 py-2 font-bold text-white bg-black rounded-xl">
                        {project.buttonLabel}
                      </button>
                    </NavLink>
                  </div>
                </div>
              ))}
          </div>
          {/* Navigation Icons */}
          {totalSets > 1 && (
            <>
              <button
                className="absolute left-0 p-2 transform -translate-y-1/2 bg-gray-300 rounded-full top-1/2"
                onClick={handlePrevClick}
              >
                <MdChevronLeft size={24} />
              </button>
              <button
                className="absolute right-0 p-2 transform -translate-y-1/2 bg-gray-300 rounded-full top-1/2"
                onClick={handleNextClick}
              >
                <MdChevronRight size={24} />
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Project;
