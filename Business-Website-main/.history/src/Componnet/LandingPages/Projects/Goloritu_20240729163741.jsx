import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import p1 from '../../../assets/a4.jpg'
import p2 from '../../../assets/p1.png'
import p3 from '../../../assets/p1.png'
import p4 from '../../../assets/p1.png'
import p5 from '../../../assets/p1.png'
// Define your project data
const projects = [
  {
    src: p1,
    alt: "Project Image",
    txt: "Thoughts and Vision",
    text: "The heart of Gotrolley lies a vision to provide customers with a seamless shopping experience for premium mobile accessories. The company understands the importance of technology in modern living and aims to bridge the gap between functionality, style, and affordability. Gotrolley’s ethos revolves around offering a curated selection of products that combine innovation, durability, and aesthetics to meet the diverse needs of mobile users."
  },
  {
    src: p2,
    alt: "Project Image",
    txt: "Aim",
    text: "Gotrolley's primary aim is to become the ultimate destination for mobile accessories, offering a wide range of products that cater to various devices, brands, and user preferences. The company strives to be a trusted source where customers can find everything they need to protect, enhance, and personalize their mobile devices, whether it’s smartphones, tablets, smartwatches, or accessories like chargers, cases, screen protectors, and more.",
  },
  {
    src: p3,
    alt: "Project Image",
    txt: "Products",
    text: "Gotrolley prides itself on its diverse product portfolio, which includes: Protective Cases: Stylish and durable cases designed to safeguard mobile devices from scratches, drops, and other daily wear and tear. Screen Protectors: High-quality tempered glass and film protectors that offer enhanced screen clarity and protection against scratches and cracks."
  },
  {
    team: true,
  },
  {
    src: p4,
    alt: "Future Goal",
    txt: "Future Goal",
    text: "Looking ahead, Gotrolley has ambitious goals to expand its product offerings, enhance customer engagement, and strengthen its market presence. The company plans to introduce new product categories, forge partnerships with leading brands, and leverage data-driven insights to personalize the shopping experience for customers. Additionally, Gotrolley aims to integrate sustainability practices into its operations and contribute positively to environmental conservation efforts.",
  },
  {
    src: p5,
    alt: "Project Image",
    txt: "Success",
    text: "The success of Gotrolley is evident in its growing customer base, positive reviews, and repeat business. The company's dedication to offering high-quality products, competitive pricing, fast shipping, and excellent customer support has earned it a reputation for reliability and trustworthiness. Gotrolley’s success is not just measured in sales but in the satisfaction and loyalty of its customers who rely on the brand for their mobile accessory needs. Gotrolley: Your Ultimate Destination for Mobile Accessories",
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

  const TeamSection = () => (
    <div className='max-w-4xl text-center p-4 mt-16'>
      <h2 className='text-2xl font-bold mb-4'>Our Team</h2>
      <div className='flex flex-wrap justify-center gap-8'>
        <motion.img
          src="https://avatars.mds.yandex.net/i?id=75322acd1b181d93994c36676188b351e6acf2d5-9266026-images-thumbs&n=13" // Replace with actual team member image URLs
          alt="Team Member 1"
          className="w-32 h-32 rounded-full border-2 border-gray-300"
        
        />
        <motion.img
          src="https://avatars.mds.yandex.net/i?id=a00e066eeb169eef54e3e30bf45b8adda9b505d6-10748854-images-thumbs&n=13" // Replace with actual team member image URLs
          alt="Team Member 2"
          className="w-32 h-32 rounded-full border-2 border-gray-300"
          
        />
        <motion.img
          src="https://avatars.mds.yandex.net/i?id=a00e066eeb169eef54e3e30bf45b8adda9b505d6-10748854-images-thumbs&n=13" // Replace with actual team member image URLs
          alt="Team Member 3"
          className="w-32 h-32 rounded-full border-2 border-gray-300"
         
        />
        <motion.img
          src="https://avatars.mds.yandex.net/i?id=0769260822b5a5ca2b8bfd655089c8598f7c463f-9243502-images-thumbs&n=13" // Replace with actual team member image URLs
          alt="Team Member 4"
          className="w-32 h-32 rounded-full border-2 border-gray-300"
          
        />
      </div>
    </div>
  );

  return (
    <motion.div
      ref={ref}
      className='flex flex-col md:flex-row items-center m-3'
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
      transition={{ duration: 1.5, delay: index * 0.3 }}
    >
      {project.team ? (
        <TeamSection />
      ) : (
        index % 2 === 0 ? (
          <>
            <img 
              src={project.src} 
              alt={project.alt} 
              className='md:w-1/2 mb-16 md:mb-8 rounded-tl-2xl rounded-br-2xl' 
            />
            <div className='flex flex-col items-start md:items-center md:ml-4 pl-12'>
              <h1 className='font-bold text-2xl mb-3'>{project.txt}</h1>
              <p className='text-sm'>{project.text}</p>
            </div>
          </>
        ) : (
          <>
            <div className='flex flex-col items-start md:items-center md:ml-4 pr-12'>
              <h1 className='font-bold text-2xl mb-3'>{project.txt}</h1>
              <p className='text-sm'>{project.text}</p>
            </div>
            <img 
              src={project.src} 
              alt={project.alt} 
              className='w-full md:w-1/2 h-auto mb-16 md:mb-8 rounded-tl-2xl rounded-br-2xl' 
            />
          </>
        )
      )}
    </motion.div>
  );
};

// Main Projects component
const Gotrolley  = () => {
  const [inView, setInView] = useState(Array(projects.length).fill(false));

  const handleSetInView = (index, value) => {
    setInView(prevInView => {
      const updatedInView = [...prevInView];
      updatedInView[index] = value;
      return updatedInView;
    });
  };

  return (
    <div className='bg-white flex flex-col justify-center items-center min-h-screen'>
      <div className='text-center max-w-4xl flex flex-col items-center'>
        <div className='flex items-center mb-8'>
          <img
            src="https://loja.pk/cdn/shop/files/loja_logo_shopify.png?v=1719387390&width=135" // Replace with your logo URL
            alt="Logo"
            className='w-16 h-16 mr-4'
          />
          <motion.h1
            className='text-7xl font-bold text-yellow-500'
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
          Gotrolley 
          </motion.h1>
        </div>
        <motion.h1
          className='text-3xl font-bold m-20 text-black'
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          Gotrolley Your Ultimate Destination for<br /> Mobile Accessories
        </motion.h1>
        <motion.p
          className='text-semibold mb-16'
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          In the fast-paced digital age, mobile devices have become an integral part of our daily lives, serving as tools for communication, productivity, entertainment, and more. Recognizing the growing need for high-quality mobile accessories, Gotrolley emerges as the go-to destination for consumers seeking top-notch products to enhance their mobile experience. Let’s explore the core aspects of Gotrolley, including its thoughts, aims, products, team, future goals, and the path to its success.
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
      <div>
        <button
          className='bg-yellow-500 text-white pt-2 pb-2 p-8 pr-8 rounded-lg shadow-lg hover:bg-yellow-600 mb-6'
        >
          <a href='https://loja.pk/'><h1 className='font-serif text-black'>Learn More</h1></a>  
        </button>
      </div>
    </div>
  );
};

export default Gotrolley ;
