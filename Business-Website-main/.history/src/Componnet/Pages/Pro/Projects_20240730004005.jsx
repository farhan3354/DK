import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Login from '../../Form/Plain';
import { FaSearch } from 'react-icons/fa';
import p1 from '../../../assets/D1.png';
import p2 from '../../../assets/Loja.jpeg';
import p3 from '../../../assets/Elis.jpeg';
import p4 from '../../../assets/Gotorolly.jpg';
import p5 from '../../../assets/Social.png';

const projects = [
  {
    src: p1,
    alt: "Project Image",
    title: "Dk",
    star: "★ ★ ★ ★ ☆",
    text: "“Our recruitment services go beyond matching skills to jobs; we connect businesses with talent that aligns with their culture and goals, ensuring mutual success and growthInvestors in DK Recruitment benefit from the growth of human capital, as our recruitment services connect businesses with the right talent andgenerating returns through the strategic placement of skilled professionals”",
  },
  {
    src: p2,
    alt: "Project Image",
    title: "Loja",
    star: "★ ★ ★ ☆ ☆",
    text: "Loja a clothing brand, has attracted investment from DK Group, marking a significant milestone in its growth journey. Specialising in fashion apparel, Loja is poised to elevate its presence in the market with the support of DK Group. This strategic investment aims to fuel Loja’s expansion efforts, allowing it to diversify its product range, enhance customer experiences, and establish a stronger foothold in the fashion industry."
  },
  {
    src: p3,
    alt: "Project Image",
    title: "Elisha",
    star: "★ ★ ★ ★ ★",
    text: "Indulge in the elegance of Elisha, where fashion meets flair. Our women’s clothing brand blends timeless style with contemporary trends, offering a curated collection that empowers and celebrates individuality. Invest in Elisha for lucrative returns as our women’s clothing brand continues to capture market trends, ensuring both style and profitability."
  },
  {
    src: p4,
    alt: "Project Image",
    title: "Gotrolly",
    star: "★ ★ ★ ★ ☆",
    text: "Gotrolley, an accessory store specializing in items like hands-free devices, chargers, andearbuds, has recently secured investment from DK Group; this strategic partnership is poised to bolster Gotrolley's market presence and enhance its product offerings, with Gotrolley aiming to further expand its range of accessories while maintaining its commitment to quality and customer satisfaction",
  },
  {
    src: p5,
    alt: "Project Image",
    title: "Social Swirl",
    star: "★ ★ ★ ☆ ☆",
    text: "At Social Swirl, we transform ideas into digital realities. As an IT software house, we specialize in scalable solutions, leveraging technology to drive business growth. Investors in Social Swirl gain from the burgeoning tech industry, with our IT software house consistently delivering innovative solutions, positioning them for profitable returns in the rapidly evolving digital landscape.”"
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
          <img src={project.src} alt={project.alt} className='w-1/2 h-auto ' />
          <div className='flex flex-col '>
            <h1 className='text-3xl font-bold'>{project.title}</h1>
            <h1 className='text-yellow-500 text-xl'>{project.star}</h1>
            <p className='text-md'>{project.text}</p>
            <div className='flex gap-8'>
              <button className='bg-yellow-500 text-white p-2  m'>Button 1</button>
              <button className='bg-yellow-500 text-white p-2 rounded'>Button 2</button>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className='flex flex-col '>
            <h1 className='text-3xl font-bold'>{project.title}</h1>
            <h1 className='text-yellow-500 text-xl'>{project.star}</h1>
            <p className='text-md'>{project.text}</p>
            <div className='flex space-x-4 mt-2'>
              <button className='bg-yellow-500 text-white p-2 rounded'>Button 1</button>
              <button className='bg-yellow-500 text-white p-2 rounded'>Button 2</button>
            </div>
          </div>
          <img src={project.src} alt={project.alt} className='w-1/2 h-auto mb-6' />
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
    <div className='bg-white to-yellow-100 flex justify-center items-center'>
      <div className='text-center max-w-4xl flex flex-col items-center'>
        <h1 className='text-5xl font-bold m-4 text-yellow-500'>Project</h1>
        <p className='text-semibold mb-12'>
          Discover our handpicked projects spanning diverse sectors<br />
          offering solid investment prospects and shaping the future of finance.
        </p>
        <div className='relative mb-5 w-full flex justify-center'>
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className='relative w-2/3'
          >
            <input
              type='text'
              className='border-2 border-yellow-500 rounded-full p-3 pl-10 w-full focus:outline-none focus:border-yellow-600'
              placeholder='Search Projects...'
              value={searchQuery}
              onChange={handleSearch}
            />
            <FaSearch className='absolute top-1/2 transform -translate-y-1/2 left-3 text-yellow-500' />
          </motion.div>
        </div>
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
