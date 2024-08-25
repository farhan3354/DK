import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';

// Define your project data
const projects = [
  {
    src: "https://dkgroup.pk/wp-content/uploads/2024/03/dk-tech-thought-.jpg",
    alt: "Project Image",
    txt: "Thoughts and Vision",
    text: "DK Tech operates with a vision that extends beyond business success to encompass social impact and environmental stewardship. The company firmly believes that businesses have a responsibility to contribute positively to society and address pressing global challenges. Through its CSR initiatives, DK Tech aims to make a meaningful difference in the lives of people and communities."
  },
  {
    src: "https://dkgroup.pk/wp-content/uploads/2024/03/dk-tech-aim.jpg",
    alt: "Project Image",
    txt: "Aim",
    text: "The primary aim of DK Tech CSR initiatives is to create lasting social impact by addressing key issues such as education, environmental sustainability, community development, and empowerment of underprivileged groups. The company seeks to leverage its technological expertise, resources, and partnerships to implement impactful projects that drive positive change and contribute to a better world."
  },
  {
    src: "https://dkgroup.pk/wp-content/uploads/2024/03/dk-tech-services-1024x1024.jpg",
    alt: "Project Image",
    txt: "Services",
    text: "While DK Tech is renowned for its technological innovations and services, its CSR efforts are equally noteworthy. The company’s CSR services encompass a wide range of activities, including but not limited to:"
  },
  {
    src: "https://dkgroup.pk/wp-content/uploads/2024/03/dk-tech-team.jpg",
    alt: "Project Image",
    txt: "Team",
    text: "DK Tech CSR success is attributed to a dedicated team of professionals who are passionate about social impact and community engagement. From CSR managers and project coordinators to volunteers and advocates, the team works collaboratively to plan, execute, and evaluate CSR programmes effectively. Their collective expertise, empathy, and drive for positive change drive DK Tech’s CSR initiatives forward."
  },
  {
    src: "https://dkgroup.pk/wp-content/uploads/2024/03/dk-tech-future.jpg",
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
            className=' md:w-1/2 mb-16 md:mb-8 rounded-tl-2xl rounded-br-2xl' 
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
            className='w-full md:w-1/2 h-auto mb-16 md:mb-8 rounded-tl-2xl rounded-br-2xl' 
          />
        </>
      )}
    </motion.div>
  );
};

// Main Projects component
const Elisha = () => {
  const [inView, setInView] = useState(Array(projects.length).fill(false));

  const handleSetInView = (index, value) => {
    setInView(prevInView => {
      const updatedInView = [...prevInView];
      updatedInView[index] = value;
      return updatedInView;
    });
  };

  return (
    <div className='bg-white flex flex-col items-center'>
      <div className='text-center max-w-4xl flex flex-col items-center'>
        <motion.h1
          className='text-7xl font-bold m-4 text-yellow-500'
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          DK Tech
        </motion.h1>
        <motion.h1
          className='text-3xl font-bold m-12 text-black'
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          DK Tech Empowering Communities<br /> CSR Initiatives
        </motion.h1>
        <motion.p
          className='text-semibold mb-16'
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
      <div className='max-w-4xl text-center p-4 mt-16'>
        <h2 className='text-2xl font-bold mb-4'>Success</h2>
        <p className='text-sm mb-8'>
          Looking ahead, DK Recruitment has ambitious goals aimed at expanding ts reach and impact within the remote work ecosystem<br/>. The company plans to forge strategic partnerships with remote-friendly companies, enhance its technological infrastructure<br/> for streamlined recruitment processes, and provide additional resources for remote job seekers to enhance their skills and employability.<br/> By staying agile and responsive to market dynamics, DK Recruitment aims to be a trusted partner for remote <br/>talent acquisition and career advancement.
        </p>
      </div>
      <div>
        <button>
          <a href="https://
        </button>
      </div>
    </div>
  );
};

export default Elisha;
