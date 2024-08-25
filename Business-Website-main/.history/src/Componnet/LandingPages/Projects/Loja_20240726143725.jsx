import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';

// Define your project data
const projects = [
  // ... your project data
];

// Component for individual project items
const ProjectItem = ({ project, index, inView, setInView }) => {
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(index, true);
        } else {
          setInView(index, false);
        }
      },
      { threshold: 0.4 }
    );
    if (ref.current) observer.observe(ref.current);

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, [index, setInView]);

  const TeamSection = () => (
    <div className='max-w-4xl text-center p-4 mt-16'>
      <h2 className='text-2xl font-bold mb-4'>Our Team</h2>
      <div className='flex flex-wrap justify-center gap-8'>
        {/* Add team member images here */}
      </div>
    </div>
  );

  return (
    <motion.div
      ref={ref}
      className='flex flex-col md:flex-row items-center m-3'
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
      transition={{ duration: 1.5, delay: index * 0.3 }}
    >
      {project.team ? (
        <TeamSection />
      ) : (
        <>
          {index % 2 === 0 ? (
            <>
              <img
                src={project.src}
                alt={project.alt}
                className='md:w-1/2 mb-16 md:mb-8 rounded-tl-2xl rounded-br-2xl'
              />
              <div className='flex flex-col items-start md:items-center md:ml-4 pl-12'>
                <h1 className='font-bold text-2xl mb-3'>{project.txt}</h1>
                <p className='text-sm'>{project.text}</p>
              </div>
            </>
          ) : (
            <>
              <div className='flex flex-col items-start md:items-center md:ml-4 pr-12'>
                <h1 className='font-bold text-2xl mb-3'>{project.txt}</h1>
                <p className='text-sm'>{project.text}</p>
              </div>
              <img
                src={project.src}
                alt={project.alt}
                className='w-full md:w-1/2 h-auto mb-16 md:mb-8 rounded-tl-2xl rounded-br-2xl'
              />
            </>
          )}
        </>
      )}
    </motion.div>
  );
};

// Main Projects component
const Loja = () => {
  const [inView, setInView] = useState(Array(projects.length).fill(false));

  const handleSetInView = (index, value) => {
    setInView(prevInView => {
      const updatedInView = [...prevInView];
      updatedInView[index] = value;
      return updatedInView;
    });
  };

  return (
    <div className='relative bg-white flex flex-col justify-center items-center min-h-screen'>
      <div className='text-center max-w-4xl flex flex-col items-center'>
        <motion.h1
          className='text-7xl font-bold m-4 text-yellow-500'
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Loja
        </motion.h1>
        <motion.h1
          className='text-3xl font-bold m-20 text-black'
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          Loja Redefining Fashion with Innovation<br /> and Style
        </motion.h1>
        <motion.p
          className='text-semibold mb-16'
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          In the bustling landscape of retail, The Elisha stands out as a beacon of excellence, offering a unique shopping experience rooted in innovation, quality products, and unwavering customer satisfaction. Let’s delve into the core aspects of The Elisha, exploring its thoughts, aims, products, team, future goals, and the path to its success as a leading shopping store.
        </motion.p>
        {projects.map((project, index) => (
          <ProjectItem
            key={index}
            project={project}
            index={index}
            inView={inView[index]}
            setInView={handleSetInView}
          />
        ))}
      </div>
      <button className='bg-yellow-500 text-black font-semibold pl-8 pr-8 pt-2 pb-2 text-xl rounded-lg shadow-2xl absolute bottom-8'>
        <a href='/'>
          <h1>Learn More</h1>
        </a>
      </button>
    </div>
  );
};

export default Loja;
