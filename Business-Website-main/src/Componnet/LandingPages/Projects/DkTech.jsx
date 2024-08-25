import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import p1 from '../../../assets/t4.jpg'
import p2 from '../../../assets/a6.jpg'
import p3 from '../../../assets/se5.jpg'
import p4 from '../../../assets/f6.webp'
import DkT from './DkT';


// Define your project data
const projects = [
  {
    src: p1,
    alt: "Project Image",
    txt: "Thoughts and Vision",
    text: "DK Tech operates with a vision that extends beyond business success to encompass social impact and environmental stewardship. The company firmly believes that businesses have a responsibility to contribute positively to society and address pressing global challenges. Through its CSR initiatives, DK Tech aims to make a meaningful difference in the lives of people and communities."
  },
  {
    src: p2,
    alt: "Project Image",
    txt: "Aim",
    text: "The primary aim of DK Tech CSR initiatives is to create lasting social impact by addressing key issues such as education, environmental sustainability, community development, and empowerment of underprivileged groups. The company seeks to leverage its technological expertise, resources, and partnerships to implement impactful projects that drive positive change and contribute to a better world."
  },
  {
    team: true,
  },
  {
    src: p3,
    alt: "Project Image",
    txt: "Services",
    text: "While DK Tech is renowned for its technological innovations and services, its CSR efforts are equally noteworthy. The company’s CSR services encompass a wide range of activities, including but not limited to:"
  },
  
  {
    src: p4,
    alt: "Future Goal",
    txt: "Future Goal",
    text: "Looking ahead, DK Tech has ambitious goals for its CSR agenda. The company aims to expand its impact by scaling up existing projects, launching new initiatives in emerging areas of need, and fostering strategic partnerships with stakeholders. Additionally, DK Tech is committed to transparent reporting and accountability, ensuring that its CSR efforts create measurable and sustainable outcomes for communities and the environment."
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
            className='mb-16  md:w-1/2 md:mb-8 rounded-tl-2xl rounded-br-2xl' 
          />
          <div className='flex flex-col items-start md:items-center md:ml-4'>
            <h1 className='mb-3 text-2xl font-bold'>{project.txt}</h1>
            <p className='text-sm'>{project.text}</p>
          </div>
        </>
      ) : (
        <>
          <div className='flex flex-col items-start md:items-center md:ml-4'>
            <h1 className='mb-3 text-2xl font-bold'>{project.txt}</h1>
            <p className='text-sm'>{project.text}</p>
          </div>
          <img 
            src={project.src} 
            alt={project.alt} 
            className='w-full h-auto mb-16 md:w-1/2 md:mb-8 rounded-tl-2xl rounded-br-2xl' 
          />
        </>
      )}
    </motion.div>
  );
};

// Main Projects component
const DkTech = () => {
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
        <div className='flex items-center'>
          <motion.img
            src="https://dkgroup.pk/wp-content/uploads/2024/03/dk-group-2-1.png" // Replace with your logo URL
            alt="Logo"
            className="w-32 h-32 mr-4"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
          />
         {/*  <motion.h1
            className='font-bold text-yellow-500 text-7xl'
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            DK Tech
          </motion.h1> */}
        </div>
        <motion.h1
          className='m-12 text-3xl font-bold text-center text-black'
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
         DK Tech (Empowering Communities<br /> CSR Initiatives)
        </motion.h1>
        <motion.p
          className='mb-16 text-center text-semibold'
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          In today’s corporate landscape, social responsibility plays a pivotal role in driving positive change and fostering sustainable development. DK Tech, a leading technology company, exemplifies this ethos through its commitment to Corporate Social Responsibility (CSR). Let’s explore the core aspects of DK Tech, including its thoughts, aims, services, team, future goals, and the impact of its CSR endeavours.
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
      <div className='max-w-4xl p-4 mt-16 text-center'>
        <h2 className='mb-4 text-2xl font-bold'>Our Team</h2>
        <div className='flex justify-center space-x-7'>
          <motion.img
            src="https://avatars.mds.yandex.net/i?id=7217f4b2ec7b91b71b76103ecae3f1ca0774f8d6-12319474-images-thumbs&n=13" // Replace with your team member's image URL
            alt="Team Member 1"
            className="border-2 rounded-full w-36 h-36"
          />
          <motion.img
            src="https://avatars.mds.yandex.net/i?id=7217f4b2ec7b91b71b76103ecae3f1ca0774f8d6-12319474-images-thumbs&n=13" // Replace with your team member's image URL
            alt="Team Member 2"
            className="border-2 rounded-full w-36 h-36"
          />
          <motion.img
            src="https://avatars.mds.yandex.net/i?id=7217f4b2ec7b91b71b76103ecae3f1ca0774f8d6-12319474-images-thumbs&n=13" // Replace with your team member's image URL
            alt="Team Member 3"
            className="border-2 rounded-full w-36 h-36"
          />
          <motion.img
            src="https://avatars.mds.yandex.net/i?id=7217f4b2ec7b91b71b76103ecae3f1ca0774f8d6-12319474-images-thumbs&n=13" // Replace with your team member's image URL
            alt="Team Member 3"
            className="border-2 rounded-full w-36 h-36"
          />
        </div>
      </div>
      <div className='max-w-4xl p-4 mt-16 text-center'>
        <h2 className='mb-4 text-2xl font-bold'>Success</h2>
        <p className='mb-8 text-sm'>
          Looking ahead, DK Recruitment has ambitious goals aimed at expanding its reach and impact within the remote work ecosystem.<br /> The company plans to forge strategic partnerships with remote-friendly companies, enhance its technological infrastructure<br /> for streamlined recruitment processes, and provide additional resources for remote job seekers to enhance their skills and employability.<br /> By staying agile and responsive to market dynamics, DK Recruitment aims to be a trusted partner for remote <br /> talent acquisition and career advancement.
        </p>
      </div>
      <div>
        <button className='pt-2 pb-2 pl-6 pr-6 mb-6 bg-yellow-500 rounded'>
          <a href="/">
            <h1 className='text-xl font-semibold text-black'>Learn More</h1>
          </a>
        </button>
      </div>
      <DkT/>
    </div>
  );
};

export default DkTech;
