import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';

// Define your project data
const projects = [
  {
    src: "https://dkgroup.pk/wp-content/uploads/2024/03/thought-.jpg",
    alt: "Project Image",
    txt: "Thoughts and Vision",
    text: "At the heart of Social Swirl lies a profound belief in the power of education to transform lives. The company envisions a world where learning knows no boundaries, where individuals can access high-quality educational content anytime, anywhere. By harnessing the potential of technology, Social Swirl aims to break traditional barriers to education and create a globally accessible platform for knowledge exchange."
  },
  {
    src: "https://dkgroup.pk/wp-content/uploads/2024/03/aim-1024x683.jpg",
    alt: "Project Image",
    txt: "Aim",
    text: "Social Swirl's primary aim is to democratize learning by offering a diverse range of courses through its e-learning platform. Whether it’s professional development, academic enhancement, or personal growth, Social Swirl strives to cater to the learning needs of individuals across various domains. By providing a user-friendly interface and engaging content, the company aims to make learning enjoyable and accessible to all."
  },
  {
    src: "https://dkgroup.pk/wp-content/uploads/2024/03/services.jpg",
    alt: "Project Image",
    txt: " Services",
    text: "Our recruitment services go beyond matching skills to jobs; we connect businesses with talent that aligns with their culture and goals, ensuring mutual success and growth. Investors in DK Recruitment benefit from the growth of human capital, as our recruitment services connect businesses with the right talent, generating returns through the strategic placement of skilled professionals."
  },
  {
    src: "https://dkgroup.pk/wp-content/uploads/2024/03/Untitled-4-1024x580.png",
    alt: "Project Image",
    txt: "Recruitment Services",
    text: "Our recruitment services go beyond matching skills to jobs; we connect businesses with talent that aligns with their culture and goals, ensuring mutual success and growth. Investors in DK Recruitment benefit from the growth of human capital, as our recruitment services connect businesses with the right talent, generating returns through the strategic placement of skilled professionals."
  },
  {
    src: "https://dkgroup.pk/wp-content/uploads/2024/03/future-goals.jpg",
    alt: "Project Image",
    txt: "Recruitment Services",
    text: "Our recruitment services go beyond matching skills to jobs; we connect businesses with talent that aligns with their culture and goals, ensuring mutual success and growth. Investors in DK Recruitment benefit from the growth of human capital, as our recruitment services connect businesses with the right talent, generating returns through the strategic placement of skilled professionals."
  },
  {
    src: "https://dkgroup.pk/wp-content/uploads/2024/03/success-1024x683.jpg",
    alt: "Project Image",
    txt: "Recruitment Services",
    text: "Our recruitment services go beyond matching skills to jobs; we connect businesses with talent that aligns with their culture and goals, ensuring mutual success and growth. Investors in DK Recruitment benefit from the growth of human capital, as our recruitment services connect businesses with the right talent, generating returns through the strategic placement of skilled professionals."
  }
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

  return (
    <motion.div
      ref={ref}
      className='flex flex-col md:flex-row items-center m-3'
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
      transition={{ duration: 1.5, delay: index * 0.3 }}
    >
      {index % 2 === 0 ? (
        <>
          <img 
            src={project.src} 
            alt={project.alt} 
            className='w-full md:w-1/2 h-auto mb-16 md:mb-8 rounded-tl-2xl rounded-br-2xl' 
          />
          <div className='flex flex-col items-start md:items-center'>
            <h1 className='font-bold text-2xl mb-3'>{project.txt}</h1>
            <p className='text-sm md:ml-4'>{project.text}</p>
          </div>
        </>
      ) : (
        <>
          <div className='flex flex-col items-start md:items-center'>
            <h1 className='font-bold text-2xl mb-3'>{project.txt}</h1>
            <p className='text-sm md:ml-4'>{project.text}</p>
          </div>
          <img 
            src={project.src} 
            alt={project.alt} 
            className='w-full md:w-1/2 h-auto mb-16 md:mb-8 rounded-tl-2xl rounded-br-2xl' 
          />
        </>
      )}
    </motion.div>
  );
};

export default ProjectItem;
