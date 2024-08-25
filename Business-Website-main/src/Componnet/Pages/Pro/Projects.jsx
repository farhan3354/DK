import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaSearch } from 'react-icons/fa';
import p11 from '../../../assets/DkLogo.png';
import p12 from '../../../assets/Loja.jpeg';
import p13 from '../../../assets/Elis.jpeg';
import p14 from '../../../assets/Gotorolly.jpg';
import p15 from '../../../assets/Social.png';
import Plain from '../../Form/Plain'
import { NavLink } from 'react-router-dom';

const projects = [
  
  {
    src: p12,
    alt: "Project Image",
    title: "Loja",
    star: "★ ★ ★ ☆ ☆",
    text: "Loja, a clothing brand, has attracted investment from DK Group, marking a significant milestone in its growth journey. Specialising in fashion apparel, Loja is poised to elevate its presence in the market with the support of DK Group. This strategic investment aims to fuel Loja’s expansion efforts, allowing it to diversify its product range, enhance customer experiences, and establish a stronger foothold in the fashion industry.",
    learnMoreLink: "https://loja.pk/",
    planLink: "/pricing",
  },
  {
    src: p13,
    alt: "Project Image",
    title: "Elisha",
    star: "★ ★ ★ ★ ★",
    text: "Indulge in the elegance of Elisha, where fashion meets flair. Our women’s clothing brand blends timeless style with contemporary trends, offering a curated collection that empowers and celebrates individuality. Invest in Elisha for lucrative returns as our women’s clothing brand continues to capture market trends, ensuring both style and profitability.",
    learnMoreLink: "/elisha-learn-more",
    planLink: "/pricing",
  },
  {
    src: p14,
    alt: "Project Image",
    title: "Gotrolly",
    star: "★ ★ ★ ★ ☆",
    text: "Gotrolley, an accessory store specializing in items like hands-free devices, chargers, and earbuds, has recently secured investment from DK Group; this strategic partnership is poised to bolster Gotrolley's market presence and enhance its product offerings, with Gotrolley aiming to further expand its range of accessories while maintaining its commitment to quality and customer satisfaction.",
    learnMoreLink: "/gotrolly-learn-more",
    planLink: "/pricing",
  },
  {
    src: p15,
    alt: "Project Image",
    title: "Social Swirl",
    star: "★ ★ ★ ☆ ☆",
    text: "At Social Swirl, we transform ideas into digital realities. As an IT software house, we specialize in scalable solutions, leveraging technology to drive business growth. Investors in Social Swirl gain from the burgeoning tech industry, with our IT software house consistently delivering innovative solutions, positioning them for profitable returns in the rapidly evolving digital landscape.",
    learnMoreLink: "https://socialswirl.tech/",
    planLink: "/pricing",
  },
  {
    src: p11,
    alt: "Project Image",
    title: "Dk Recruitment ",
    star: "★ ★ ★ ★ ☆",
    text: "“Our recruitment services go beyond matching skills to jobs; we connect businesses with talent that aligns with their culture and goals, ensuring mutual success and growth. Investors in DK Recruitment benefit from the growth of human capital, as our recruitment services connect businesses with the right talent and generate returns through the strategic placement of skilled professionals.”",
    learnMoreLink: "https://dkrecruitment.pk/",
    planLink: "/pricing",
  },
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
      className='flex flex-col items-center m-3 md:flex-row'
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
      transition={{ duration: 1.5, delay: index * 0.3 }}
    >
      {index % 2 === 0 ? (
        <>
          <img src={project.src} alt={project.alt} className='w-full h-auto md:w-1/2 ' />
          
          <div className='flex flex-col p-4 text-center md:text-left'>
            <h1 className='text-xl font-bold text-center md:text-3xl'>{project.title}</h1>
            <h1 className='text-lg text-center text-yellow-500 md:text-xl'>{project.star}</h1>
            <p className='text-sm md:text-md'>{project.text}</p>
            <div className='flex flex-col items-center justify-center mt-2 space-y-3 md:flex-row md:space-y-0 md:space-x-4'>
  <NavLink to={project.learnMoreLink} className='p-2 px-6 text-white bg-yellow-500 rounded-xl'>Learn More</NavLink>
  <NavLink to={project.planLink} className='p-2 px-6 mt-5 text-white bg-yellow-500 rounded-xl'>Plan</NavLink>
</div>

          </div>
        </>
      ) : (
        <>
          <div className='flex flex-col p-4 text-center md:text-left'>
            <h1 className='text-xl font-bold text-center md:text-3xl'>{project.title}</h1>
            <h1 className='text-lg text-center text-yellow-500 md:text-xl'>{project.star}</h1>
            <p className='text-sm md:text-md'>{project.text}</p>
            <div className='flex flex-col items-center justify-center mt-2 space-y-3 md:flex-row md:space-y-0 md:space-x-4'>
  <a href={project.learnMoreLink} className='p-2 px-6 text-white bg-yellow-500 rounded-xl'>Learn More</a>
  <a href={project.planLink} className='p-2 px-6 text-white bg-yellow-500 rounded-xl'>Plan</a>
</div>

          </div>
          <img src={project.src} alt={project.alt} className='w-full h-auto mb-6 md:w-1/2' />
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
    <div className='flex items-center justify-center bg-white'>
      <div className='flex flex-col items-center max-w-4xl text-center'>
        <h1 className='m-4 text-3xl font-bold text-yellow-500 md:text-5xl'>Project</h1>
        <p className='mb-12 text-md md:text-lg'>
          Discover our handpicked projects spanning diverse sectors<br />
          offering solid investment prospects and shaping the future of finance.
        </p>
        <div className='relative flex justify-center w-full mb-5'>
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className='relative w-11/12 md:w-2/3'
          >
            <input
              type='text'
              className='w-full p-3 pl-10 border-2 border-yellow-500 rounded-full focus:outline-none focus:border-yellow-600'
              placeholder='Search Projects...'
              value={searchQuery}
              onChange={handleSearch}
            />
            <FaSearch className='absolute text-yellow-500 transform -translate-y-1/2 top-1/2 left-3' />
          </motion.div>
        </div>
        <h1 className='m-5 mt-2 mb-3 text-xl font-bold text-yellow-500 md:text-3xl'>Our Projects</h1>
        {filteredProjects.map((project, index) => (
          <ProjectItem
            key={index}
            project={project}
            index={index}
            inView={inView[index]}
            setInView={handleSetInView}
          />
        ))}
<Plain/>
      </div>
    </div>
    
  );
};

export default Projects;
