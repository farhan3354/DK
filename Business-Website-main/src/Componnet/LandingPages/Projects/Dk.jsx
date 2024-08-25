import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import p1 from '../../../assets/t2.jpg'
import p2 from '../../../assets/a2.jpg'
import p3 from '../../../assets/se2.jpg'
import p6 from '../../../assets/d2.png'
import DkR from './DkR';

// Define your project data
const projects = [
  {
    src: p1,
    alt: "Project Image",
    txt: "DK Recruitment Redefining Opportunities Through Remote Jobs and Internships",
    text: "In the era of digital connectivity and flexible work arrangements DK Recruitment emerges as a beacon of innovation, offering remote job opportunities and remote internships to individuals seeking versatile and fulfilling career paths.",
  },
  {
    src: p2,
    alt: "Project Image",
    txt: "Aim",
    text: "The primary aim of DK Recruitment is to connect talented individuals with remote job opportunities and remote internships that align with their skills, interests, and career aspirations. By curating a diverse range of positions across industries such as technology, marketing, finance, and more, DK Recruitment aims to empower individuals to build rewarding careers from anywhere in the world."
  },
  {
    src: p3,
    alt: "Project Image",
    txt: "Services",
    text: "DK Recruitment distinguishes itself through its comprehensive range of services designed to facilitate seamless remote employment experiences. From job matching and candidate screening to onboarding support and ongoing career development resources, the company ensures that both employers and job seekers receive personalised attention and assistance throughout the recruitment process. Additionally, DK Recruitment provides guidance on remote work best practices, fostering productivity and work-life balance for remote teams."
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
      className='flex flex-col items-center m-3 md:flex-row'
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
      transition={{ duration: 1.5, delay: index * 0.3 }}
    >
      {index % 2 === 0 ? (
        <>
          <img
            src={project.src}
            alt={project.alt}
            className='mb-16 mr-12 md:w-1/2 md:mb-8 rounded-tl-2xl rounded-br-2xl'
          />
          <div className='flex flex-col items-start md:items-center md:ml-4 md:pl-12'>
            <h1 className='mb-3 text-2xl font-bold'>{project.txt}</h1>
            <p className='text-sm'>{project.text}</p>
          </div>
        </>
      ) : (
        <>
          <div className='flex flex-col items-start md:items-center md:ml-4 md:pr-12'>
            <h1 className='mb-3 text-2xl font-bold'>{project.txt}</h1>
            <p className='text-sm'>{project.text}</p>
          </div>
          <img
            src={project.src}
            alt={project.alt}
            className='w-full h-auto mb-16 md:w-1/2 md:mb-8 rounded-tl-2xl rounded-br-2xl ml-14'
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
    <div className='flex flex-col items-center bg-white'>
      <div className='flex flex-col items-center max-w-4xl text-center'>
        <div className='flex items-center mb-12 rounded-xl'>
          <motion.img
            src={p6} // Replace with your logo URL
            alt="Logo"
            className="w-40 h-40 mr-4"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
          />
          {/* <motion.h1
            className='m-4 text-4xl font-bold text-yellow-500'
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            DK Recruitment
          </motion.h1> */}
        </div>

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

      <div className='max-w-4xl p-4 mt-16 text-center'>
        <h2 className='mb-4 text-2xl font-bold'>Our Team</h2>
        <div className='flex justify-center space-x-7'>
          <motion.img
            src="https://avatars.mds.yandex.net/i?id=7217f4b2ec7b91b71b76103ecae3f1ca0774f8d6-12319474-images-thumbs&n=13" // Replace with your team member's image URL
            alt="Team Member 1"
            className="border-2 rounded-full w-36 h-36"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
          />
          <motion.img
            src="https://avatars.mds.yandex.net/i?id=7217f4b2ec7b91b71b76103ecae3f1ca0774f8d6-12319474-images-thumbs&n=13" // Replace with your team member's image URL
            alt="Team Member 2"
            className="border-2 rounded-full w-36 h-36"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
          />
          <motion.img
            src="https://avatars.mds.yandex.net/i?id=7217f4b2ec7b91b71b76103ecae3f1ca0774f8d6-12319474-images-thumbs&n=13" // Replace with your team member's image URL
            alt="Team Member 3"
            className="border-2 rounded-full w-36 h-36"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
          />
          <motion.img
            src="https://avatars.mds.yandex.net/i?id=7217f4b2ec7b91b71b76103ecae3f1ca0774f8d6-12319474-images-thumbs&n=13" // Replace with your team member's image URL
            alt="Team Member 3"
            className="border-2 rounded-full w-36 h-36"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
          />
        </div>
      </div>

      <div className='max-w-4xl p-4 mt-16 text-center'>
        <h2 className='mb-4 text-2xl font-bold'>Future Goals</h2>
        <p className='mb-8 text-sm'>
          Looking ahead, DK Recruitment has ambitious goals aimed at expanding its reach and impact within the remote work ecosystem. The company plans to forge strategic partnerships with remote-friendly companies, enhance its technological infrastructure for streamlined recruitment processes, and provide additional resources for remote job seekers to enhance their skills and employability. By staying agile and responsive to market dynamics, DK Recruitment aims to be a trusted partner for remote talent acquisition and career advancement.
        </p>
        <button className='items-center pt-3 pb-3 pl-8 pr-8 text-xl font-semibold text-black bg-yellow-500 rounded-xl'>
          <a href="https://dkrecruitment.pk/company/">Learn More</a>
        </button>
      </div>
      <div className="flex items-center justify-around gap-16 mt-10 mb-6">
      <div className="text-center">
        <img 
          src="https://banner2.cleanpng.com/20180330/ueq/kisspng-abu-dhabi-dubai-national-day-flag-of-the-united-ar-uae-5abe5565811e83.6580053315224231415289.jpg" 
          alt="Title 1" 
          className="object-cover w-40 h-40 rounded-full" 
        />
        <div className="mt-2 text-lg font-bold">Dubai</div>
      </div>
      <div className="text-center">
        <img 
          src="https://avatars.mds.yandex.net/i?id=8715aa712c2810864eed91b97abbb2a84169a446f696e18e-5249548-images-thumbs&n=13" 
          alt="Title 2" 
          className="object-cover w-40 h-40 rounded-full" 
        />
        <div className="mt-2 text-lg font-bold">USA</div>
      </div>
      <div className="text-center">
        <img 
          src="https://avatars.mds.yandex.net/i?id=d9f11a422ba2e41340264a0eeba35495289151f3-8265302-images-thumbs&n=13" 
          alt="Title 3" 
          className="object-cover w-40 h-40 rounded-full" 
        />
        <div className="mt-2 text-lg font-bold">Pakistan</div>
      </div>
    </div>
    <DkR/>
    </div>
  );
};

export default Dk;
