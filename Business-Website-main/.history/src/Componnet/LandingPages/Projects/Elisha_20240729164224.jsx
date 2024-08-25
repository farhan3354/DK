import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import p1 from '../../../assets/t6.jpg';
import p2 from '../../../assets/a5.jpg';
import p3 from '../../../assets/pr3.jpg';
import p4 from '../../../assets/f5
';
import p5 from '../../../assets/p5.png';
import ElishaLogo from '../../../assets/Elisha.png';

// Define your project data
const projects = [
  {
    src: p1,
    alt: "Project Image",
    txt: "Thoughts and Vision",
    text: "The Elisha is driven by a vision to redefine shopping by blending the convenience of online retail with the personalised touch of traditional brick-and-mortar stores. The company believes in creating an immersive shopping environment where customers can discover, explore, and purchase a curated selection of high-quality products that cater to their diverse needs and preferences. This vision is underpinned by a commitment to innovation, sustainability, and customer-centricity."
  },
  {
    src: p2,
    alt: "Project Image",
    txt: "Aim",
    text: "The primary aim of The Elisha is to provide customers with a seamless and enjoyable shopping experience that exceeds their expectations. By offering a wide range of products across categories such as fashion, beauty, home essentials and more, The Elisha aims to be a one-stop destination for discerning shoppers. Additionally, the company focuses on affordability, accessibility, and sustainability ensuring that customers can make informed and conscious purchasing decisions."
  },
  {
    src: p3,
    alt: "Project Image",
    txt: "Product",
    text: "The Elisha prides itself on its curated selection of products, sourced from trusted brands and suppliers known for their quality and craftsmanship. Some of the key product categories available at The Elisha include: Fashion Apparel and Accessories: Trendy clothing, footwear, bags, jewellery, and accessories for men, women, and children."
  },
  {
    team: true,
  },
  {
    src: p4,
    alt: "Future Goal",
    txt: "Future Goal",
    text: "Looking ahead, The Elisha has ambitious goals aimed at enhancing its offerings, expanding its customer base, and embracing emerging retail trends. The company plans to introduce new product lines, enhance its online shopping platform for a more immersive experience, and implement sustainable practices throughout its operations. Additionally, The Elisha aims to strengthen its brand presence, foster customer loyalty, and adapt to evolving consumer preferences to stay ahead in the competitive retail landscape."
  },
  {
    src: p5,
    alt: "Project Image",
    txt: "Success",
    text: "The success of The Elisha is reflected in its growing customer base, positive feedback from shoppers, and recognition for its commitment to quality and innovation. By prioritising customer satisfaction, offering diverse product selections, and maintaining transparent business practices, The Elisha has earned a reputation as a trusted and reliable shopping destination. The company’s success is not just measured in sales but in the relationships built with customers who value quality, convenience, and value for money."
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

  const TeamSection = () => (
    <div className='max-w-4xl text-center p-4 mt-16'>
      <h2 className='text-2xl font-bold mb-4'>Our Team</h2>
      <div className='flex flex-wrap justify-center gap-8'>
        <motion.img
          src="https://avatars.mds.yandex.net/i?id=75322acd1b181d93994c36676188b351e6acf2d5-9266026-images-thumbs&n=13"
          alt="Team Member 1"
          className="w-32 h-32 rounded-full border-2 border-gray-300"
        />
        <motion.img
          src="https://avatars.mds.yandex.net/i?id=a00e066eeb169eef54e3e30bf45b8adda9b505d6-10748854-images-thumbs&n=13"
          alt="Team Member 2"
          className="w-32 h-32 rounded-full border-2 border-gray-300"
        />
        <motion.img
          src="https://avatars.mds.yandex.net/i?id=a00e066eeb169eef54e3e30bf45b8adda9b505d6-10748854-images-thumbs&n=13"
          alt="Team Member 3"
          className="w-32 h-32 rounded-full border-2 border-gray-300"
        />
        <motion.img
          src="https://avatars.mds.yandex.net/i?id=0769260822b5a5ca2b8bfd655089c8598f7c463f-9243502-images-thumbs&n=13"
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
    <div className='bg-white flex flex-col justify-center items-center min-h-screen'>
      <div className='text-center max-w-4xl flex flex-col items-center'>
        <div className='flex items-center mb-8'>
          <img
            src={ElishaLogo} // Replace with your logo URL
            alt="Logo"
            className='w-24 h-40 mr-4'
          />
          <motion.h1
            className='text-7xl font-bold text-yellow-500'
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Elisha
          </motion.h1>
        </div>
        <motion.h1
          className='text-3xl font-bold m-10 text-black'
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          The Elisha Redefining Shopping with Innovation<br /> Quality and Customer Satisfaction
        </motion.h1>
        <motion.p
          className='text-semibold mb-16'
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          In the bustling landscape of retail, The Elisha stands out as a beacon of excellence, offering a unique shopping experience rooted in innovation, quality products, and unwavering customer satisfaction. Let’s delve into the core aspects of The Elisha, exploring its thoughts, aims, products, team, future goals, and the path to its success as a leading shopping store.
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
          className='bg-yellow-500 text-white pt-2 pb-2 px-8 rounded-lg shadow-lg hover:bg-yellow-600 mb-6'
        >
          <a href='https://loja.pk/'><h1 className='font-serif text-black'>Learn More</h1></a>  
        </button>
      </div>
    </div>
  );
};

export default Elisha;
