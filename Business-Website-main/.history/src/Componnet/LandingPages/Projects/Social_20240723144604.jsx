import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';

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

  return (
    <motion.div
      ref={ref}
      className='flex flex-col md:flex-row items-center m-3'
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
      transition={{ duration: 1.5, delay: index * 0.3 }}
    >
      {/* Layout for text on both sides of the image */}
      {index % 3 === 0 ? (
        <>
          <p className='text-sm mb-6 md:mb-0 md:mr-4'>{project.text}</p>
          <img src={project.src} alt={project.alt} className='w-full md:w-1/2 h-auto mb-6' />
          <p className='text-sm mb-6 md:mb-0 md:ml-4'>{project.text}</p>
        </>
      ) : (
        <>
          <img src={project.src} alt={project.alt} className='w-full md:w-1/2 h-auto mb-6' />
          <p className='text-sm mb-6 md:mb-0 md:ml-4'>{project.text}</p>
        </>
      )}
    </motion.div>
  );
};

const Projects = () => {
  const [inView, setInView] = useState(Array(projects.length).fill(false));

  const handleSetInView = (index, value) => {
    setInView(prevInView => {
      const updatedInView = [...prevInView];
      updatedInView[index] = value;
      return updatedInView;
    });
  };

  return (
    <div className='bg-gradient-to-b from-yellow-100 via-white to-yellow-100 flex justify-center items-center'>
      <div className='text-center max-w-4xl flex flex-col items-center'>
        <h1 className='text-5xl font-bold m-4 text-yellow-500'>Project</h1>
        <p className='text-semibold mb-5'>
          Discover our handpicked projects spanning diverse sectors<br />
          offering solid investment prospects and shaping the future of finance.
        </p>
        <h1 className='text-yellow-500 text-3xl font-bold m-5'>Our Projects</h1>
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
    </div>
  );
};

export default Projects;
