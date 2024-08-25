import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';

// Define your project data
const projects = [
  {
    src: "https://dkgroup.pk/wp-content/uploads/2024/04/2151074301.jpg",
    alt: "Project Image",
    txt: "Thoughts and Vision",
    text: " the heart of Gotrolley lies a vision to provide customers with a seamless shopping experience for premium mobile accessories. The company understands the importance of technology in modern living and aims to bridge the gap between functionality, style, and affordability. Gotrolley’s ethos revolves around offering a curated selection of products that combine innovation, durability, and aesthetics to meet the diverse needs of mobile users."
  },
  {
    src: "https://dkgroup.pk/wp-content/uploads/2024/04/acc.jpg",
    alt: "Project Image",
    txt: "Aim",
    text: "Gotrolley primary aim is to become the ultimate destination for mobile accessories, offering a wide range of products that cater to various devices, brands, and user preferences. The company strives to be a trusted source where customers can find everything they need to protect, enhance, and personalise their mobile devices, whether it’s smartphones, tablets, smartwatches, or accessories like chargers, cases, screen protectors, and more.",
  },
  {
    src: "https://dkgroup.pk/wp-content/uploads/2024/04/2149309682-1024x684.jpg",
    alt: "Project Image",
    txt: "Products",
    text: "Gotrolley prides itself on its diverse product portfolio, which includes:Protective Cases: Stylish and durable cases designed to safeguard mobile devices from scratches, drops, and other daily wear and tear.Screen Protectors: High-quality tempered glass and film protectors that offer enhanced screen clarity and protection against scratches and cracks."
  },
  {
    team: true,
  },
  {
    src: "https://dkgroup.pk/wp-content/uploads/2024/04/watch.jpg",
    alt: "Future Goal",
    txt: "Future Goal",
    text: "Looking ahead, Gotrolley has ambitious goals to expand its product offerings, enhance customer engagement, and strengthen its market presence. The company plans to introduce new product categories, forge partnerships with leading brands, and leverage data-driven insights to personalise the shopping experience for customers. Additionally, Gotrolley aims to integrate sustainability practices into its operations and contribute positively to environmental conservation efforts.",
  },
  {
    src: "https://dkgroup.pk/wp-content/uploads/2024/04/ass.jpg",
    alt: "Project Image",
    txt: "Success",
    text: "The success of Gotrolley is evident in its growing customer base, positive reviews, and repeat business. The company dedication to offering high-quality products, competitive pricing, fast shipping, and excellent customer support has earned it a reputation for reliability and trustworthiness. Gotrolley’s success is not just measured in sales but in the satisfaction and loyalty of its customers who rely on the brand for their mobile accessory needs.Gotrolley: Your Ultimate Destination for Mobile Accessories",
  },
  ];

// Component for individual project items



// Main Projects component
const Projects = () => {
  const [inView, setInView] = useState(Array(projects.length).fill(false));

  const handleSetInView = (index, value) => {
    setInView(prevInView => {
      const updatedInView = [...prevInView];
      updatedInView[index] = value;
      return updatedInView;
    });
  };

  return (
    <div className='bg-white flex justify-center items-center'>
      <div className='text-center max-w-4xl flex flex-col items-center'>
        <motion.h1
          className='text-7xl font-bold m-4 text-yellow-500'
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          GOTROLLY
        </motion.h1>
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
          In the fast-paced digital age, mobile devices have become an integral part of our daily lives, serving as tools for communication, productivity, entertainment, and more. Recognising the growing need for high-quality mobile accessories, Gotrolley emerges as the go-to destination for consumers seeking top-notch products to enhance their mobile experience. Let’s explore the core aspects of Gotrolley, including its thoughts, aims, products, team, future goals, and the path to its success.
          {/* In today’s digital age, the realm of education and professional development has undergone a transformative shift, with e-learning platforms emerging as a cornerstone of modern learning methodologies. Among these pioneers stands Social Swirl, a dynamic company driven by a vision to revolutionize education through innovative e-learning solutions. Let’s delve into the core aspects of Social Swirl, exploring its thoughts, aims, services, team, future goals, and the path to its success. */}
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
    </div>
  );
};

export default Projects;
