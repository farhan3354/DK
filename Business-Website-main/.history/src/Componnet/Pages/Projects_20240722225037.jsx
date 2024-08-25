import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const projects = [
  {
    src: "https://dkgroup.pk/wp-content/uploads/2024/03/Untitled-2-1024x580.png",
    alt: "Project Image",
    text: "Our recruitment services go beyond matching skills to jobs; we connect businesses with talent that aligns with their culture and goals, ensuring mutual success and growth. Investors in DK Recruitment benefit from the growth of human capital, as our recruitment services connect businesses with the right talent, generating returns through the strategic placement of skilled professionals."
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

const Projects = () => {
  const [inView, setInView] = useState(Array(projects.length).fill(false));
  const refs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const index = refs.current.indexOf(entry.target);
          setInView((prevInView) => {
            const updatedInView = [...prevInView];
            updatedInView[index] = true;
            return updatedInView;
          });
        } else {
          const index = refs.current.indexOf(entry.target);
          setInView((prevInView) => {
            const updatedInView = [...prevInView];
            updatedInView[index] = false;
            return updatedInView;
          });
        }
      });
    }, { threshold: 0.3 });

    refs.current.forEach((ref) => ref && observer.observe(ref));

    return () => {
      refs.current.forEach((ref) => ref && observer.unobserve(ref));
    };
  }, []);

  return (
    <div className='bg-gradient-to-b from-yellow-100 via-white to-yellow-100 flex justify-center items-center'>
      <div className='text-center max-w-4xl flex flex-col items-center'>
        <h1 className='text-5xl font-bold m-4 text-yellow-500'>Project</h1>
        <p className='text-semibold mb-5'>
          Discover our handpicked projects spanning diverse sectors<br />offering solid investment prospects and shaping the future of finance.
        </p>
        <h1 className='text-yellow-500 text-3xl font-bold m-5'>Our Projects</h1>
        
        {projects.map((project, index) => (
          <motion.div
            key={index}
            ref={(el) => (refs.current[index] = el)}
            className='flex flex-row items-center m-3'
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: inView[index] ? 1 : 0, y: inView[index] ? 0 : 50 }}
            transition={{ duration: 1.5, delay: index * 0.3 }}
          >
            {index % 2 === 0 ? (
              <>
                <img
                  src={project.src}
                  alt={project.alt}
                  className='w-1/2 h-auto mb-6'
                />
                <p className='text-sm ml-4'>
                  {project.text}
                </p>
              </>
            ) : (
              <>
                <p className='text-sm ml-4'>
                  {project.text}
                </p>
                <img
                  src={project.src}
                  alt={project.alt}
                  className='w-1/2 h-auto mb-6'
                />
              </>
            )}
          </motion.div>
        ))}
        
        <div className="flex flex-col items-center justify-center m-4">
          <h1 className="font-bold text-4xl text-right text-yellow-500">Plans</h1>
          <div className="flex justify-center items-center mt-3">
            <img className="w-auto h-auto" src="https://dkgroup.pk/wp-content/uploads/2024/03/investment-tree-811x1024.png" alt="Investment Tree" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
