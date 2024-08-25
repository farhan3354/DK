import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';

// Define your project data
const projects = [
  {
    src: "https://dkgroup.pk/wp-content/uploads/2024/03/1729-1024x684.jpg",
    alt: "Project Image",
    txt: "DK Recruitment Redefining Opportunities Through Remote Jobs and Internships",
    text: "In the era of digital connectivity and flexible work arrangements DK Recruitment emerges as a beacon of innovation, offering remote job opportunities and remote internships to individuals seeking versatile and fulfilling career paths.",
  },
  {
    src: "https://dkgroup.pk/wp-content/uploads/2024/03/dk-aim.jpg",
    alt: "Project Image",
    txt: "Aim",
    text: "The primary aim of DK Recruitment is to connect talented individuals with remote job opportunities and remote internships that align with their skills, interests, and career aspirations. By curating a diverse range of positions across industries such as technology, marketing, finance, and more, DK Recruitment aims to empower individuals to build rewarding careers from anywhere in the world."
  },
  {
    src: "https://dkgroup.pk/wp-content/uploads/2024/03/services.jpg",
    alt: "Project Image",
    txt: "Services",
    text: "DK Recruitment distinguishes itself through its comprehensive range of services designed to facilitate seamless remote employment experiences. From job matching and candidate screening to onboarding support and ongoing career development resources, the company ensures that both employers and job seekers receive personalised attention and assistance throughout the recruitment process. Additionally, DK Recruitment provides guidance on remote work best practices, fostering productivity and work-life balance for remote teams."
  },
  {
    src: "https://dkgroup.pk/wp-content/uploads/2024/03/dk-team-1024x683.jpg",
    alt: "Project Image",
    txt: "Team",
    text: "Behind DK Recruitment success story is a dedicated team of recruitment specialists, HR professionals, and remote work advocates committed to driving positive change in the employment landscape. With expertise in talent acquisition, remote work strategies, and industry trends, the team collaborates closely to deliver exceptional service to clients and candidates alike. Through continuous learning and adaptation, DK Recruitment’s team remains at the forefront of remote recruitment innovation."
  },
 
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
            className='md:w-1/2 mb-16 md:mb-8 rounded-tl-2xl rounded-br-2xl mr-12' 
          />
          <div className='flex flex-col items-start md:items-center md:ml-4'>
            <h1 className='font-bold text-2xl mb-3'>{project.txt}</h1>
            <p className='text-sm'>{project.text}</p>
          </div>
        </>
      ) : (
        <>
          <div className='flex flex-col items-start md:items-center md:ml-4'>
            <h1 className='font-bold text-2xl mb-3'>{project.txt}</h1>
            <p className='text-sm'>{project.text}</p>
          </div>
          <img 
            src={project.src} 
            alt={project.alt} 
            className='w-full md:w-1/2 h-auto mb-16 md:mb-8 rounded-tl-2xl rounded-br-2xl ml-14' 
          />
        </>
      )}
    </motion.div>
  );
};

// Main Projects component
const Dk = () => {
  const [inView, setInView] = useState(Array(projects.length).fill(false));

  const handleSetInView = (index, value) => {
    setInView(prevInView => {
      const updatedInView = [...prevInView];
      updatedInView[index] = value;
      return updatedInView;
    });
  };

  return (
    <div className='bg-gradient-to-b from-yellow-100 via-white to-yellow-100 flex flex-col items-center'>
      <div className='text-center max-w-4xl flex flex-col items-center'>
        <motion.h1
          className='text-7xl font-bold m-4 text-yellow-500 mb-16'
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          DK Recruitment
        </motion.h1>
       
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
      <div className='max-w-4xl text-center p-4 mt-16'>
        <h2 className='text-2xl font-bold mb-4'>Future Goals</h2>
        <p className='text-sm'>
        Looking ahead, DK Recruitment has ambitious goals aimed at expanding its reach and  impact within the <br/>remote work ecosystem The company plans to forge strategic partnerships with remote-friendly<br/> companies, enhance its technological infrastructure for streamlined recruitment <br/>processes, and provide additional resources for remote job seekers to enhance their skills and employability. By staying agile and responsive to market <br/>dynamics, DK Recruitment aims to be a trusted partner for remote talent acquisition and career advancement.
        </p>
      </div>
    </div>
  );
};

export default Dk;
