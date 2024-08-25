import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const projects = [
  {
    src: "https://dkgroup.pk/wp-content/uploads/2024/03/Untitled-2-1024x580.png",
    alt: "Project Image",
    txt: "Thoughts and Vision",
    text: "At the heart of Social Swirl lies a profound belief in the power of education to transform lives. The company envisions a world where learning knows no boundaries, where individuals can access high-quality educational content anytime, anywhere. By harnessing the potential of technology, Social Swirl aims to break traditional barriers to education and create a globally accessible platform for knowledge exchange."
  },
  {
    src: "https://dkgroup.pk/wp-content/uploads/2024/03/Untitled-3-1024x580.png",
    alt: "Project Image",
    
    text: "Our recruitment services go beyond matching skills to jobs; we connect businesses with talent that aligns with their culture and goals, ensuring mutual success and growth. Investors in DK Recruitment benefit from the growth of human capital, as our recruitment services connect businesses with the right talent, generating returns through the strategic placement of skilled professionals."
  },
  {
    src: "https://dkgroup.pk/wp-content/uploads/2024/03/Untitled-6-1024x580.png",
    alt: "Project Image",
    text: "Our recruitment services go beyond matching skills to jobs; we connect businesses with talent that aligns with their culture and goals, ensuring mutual success and growth. Investors in DK Recruitment benefit from the growth of human capital, as our recruitment services connect businesses with the right talent, generating returns through the strategic placement of skilled professionals."
  },
  {
    src: "https://dkgroup.pk/wp-content/uploads/2024/03/Untitled-4-1024x580.png",
    alt: "Project Image",
    text: "Our recruitment services go beyond matching skills to jobs; we connect businesses with talent that aligns with their culture and goals, ensuring mutual success and growth. Investors in DK Recruitment benefit from the growth of human capital, as our recruitment services connect businesses with the right talent, generating returns through the strategic placement of skilled professionals."
  },
  {
    src: "https://dkgroup.pk/wp-content/uploads/2024/03/Untitled-5-1024x580.png",
    alt: "Project Image",
    text: "Our recruitment services go beyond matching skills to jobs; we connect businesses with talent that aligns with their culture and goals, ensuring mutual success and growth. Investors in DK Recruitment benefit from the growth of human capital, as our recruitment services connect businesses with the right talent, generating returns through the strategic placement of skilled professionals."
  }
];

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
      className='flex flex-row items-center m-3'
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
      transition={{ duration: 1.5, delay: index * 0.3 }}
    >
      {index % 2 === 0 ? (
        <>
          <img src={project.src} alt={project.alt} className='w-1/2 h-auto mb-6' />
          <p className='text-sm ml-4'>{project.text}</p>
        </>
      ) : (
        <>
          <p className='text-sm ml-4'>{project.text}</p>
          <img src={project.src} alt={project.alt} className='w-1/2 h-auto mb-6' />
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
        <h1 className='text-7xl font-bold m-4 text-yellow-500'>Social Swirl</h1>
        <h1 className='text-3xl font-bold m-20 text-black '>Social Swirl Learning Through Innovative<br/> E-Learning Solutions</h1>
        <p className='text-semibold mb-16 '>
        In today’s digital age, the realm of education and professional development has undergone a transformative shift, with e-learning platforms emerging as a cornerstone of modern learning methodologies. Among these pioneers stands Social Swirl, a dynamic company driven by a vision to revolutionize education through innovative e-learning solutions. Let’s delve into the core aspects of Social Swirl, exploring its thoughts, aims, services, team, future goals, and the path to its success.
        </p>
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
