import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Login from '../../Form/Plain';
import { FaSearch } from 'react-icons/fa';

const projects = [
  {
    src: "https://dkgroup.pk/wp-content/uploads/2024/03/Untitled-2-1024x580.png",
    alt: "Project Image",
    title: "Dk",
    star: "★ ★ ★ ★ ☆",
    text: "Our recruitment services go beyond matching skills to jobs; we connect businesses with talent that aligns with their culture and goals, ensuring mutual success and growth. Investors in DK Recruitment benefit from the growth of human capital, as our recruitment services connect businesses with the right talent, generating returns through the strategic placement of skilled professionals."
  },
  // other project objects...
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
      className='flex flex-row items-center m-3 p-4 bg-white shadow-lg rounded-lg'
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
      transition={{ duration: 1.5, delay: index * 0.3 }}
    >
      {index % 2 === 0 ? (
        <>
          <img src={project.src} alt={project.alt} className='w-1/2 h-auto mb-6 rounded-lg' />
          <div className='flex flex-col ml-4'>
            <h1 className='text-lg font-bold text-gray-800'>{project.title}</h1>
            <h1 className='text-yellow-500'>{project.star}</h1>
            <p className='text-sm text-gray-600'>{project.text}</p>
          </div>
        </>
      ) : (
        <>
          <div className='flex flex-col mr-4'>
            <h1 className='text-lg font-bold text-gray-800'>{project.title}</h1>
            <h1 className='text-yellow-500'>{project.star}</h1>
            <p className='text-sm text-gray-600'>{project.text}</p>
          </div>
          <img src={project.src} alt={project.alt} className='w-1/2 h-auto mb-6 rounded-lg' />
        </>
      )}
    </motion.div>
  );
};

const Projects = () => {
  const [inView, setInView] = useState(Array(projects.length).fill(false));
  const [searchQuery, setSearchQuery] = useState('');

  const handleSetInView = (index, value) => {
    setInView(prevInView => {
      const updatedInView = [...prevInView];
      updatedInView[index] = value;
      return updatedInView;
    });
  };

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  };

  const filteredProjects = projects.filter(project =>
    project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    project.text.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className='bg-gradient-to-b from-yellow-100 to-white flex justify-center items-center min-h-screen'>
      <div className='text-center max-w-4xl flex flex-col items-center'>
        <h1 className='text-5xl font-bold m-4 text-yellow-500'>Projects</h1>
        <p className='text-semibold mb-5 text-gray-700'>
          Discover our handpicked projects spanning diverse sectors<br />
          offering solid investment prospects and shaping the future of finance.
        </p>
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className='relative mb-5 w-full flex justify-center'
        >
          <div className='relative w-2/3'>
            <input
              type='text'
              className='border-2 border-yellow-500 rounded-full p-3 pl-10 w-full focus:outline-none focus:border-yellow-600 shadow-md'
              placeholder='Search Projects...'
              value={searchQuery}
              onChange={handleSearch}
            />
            <FaSearch className='absolute top-1/2 transform -translate-y-1/2 left-3 text-yellow-500' />
          </div>
        </motion.div>
        <h1 className='text-yellow-500 text-3xl font-bold m-5'>Our Projects</h1>
        {filteredProjects.map((project, index) => (
          <ProjectItem
            key={index}
            project={project}
            index={index}
            inView={inView[index]}
            setInView={handleSetInView}
          />
        ))}
        <Login />
      </div>
    </div>
  );
};

export default Projects;
