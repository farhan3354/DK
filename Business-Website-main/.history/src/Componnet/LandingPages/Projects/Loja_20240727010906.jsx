import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import p1 from '../../../assets/p1.png'
import p2 from '../../../assets/p1.png'
import p3 from '../../../assets/p1.png'
import p4 from '../../../assets/p1.png'
import p5 from '../../../assets/p1.png'

// Define your project data
const projects = [
  {
    src: "https://dkgroup.pk/wp-content/uploads/2024/03/redefining-loja-e1711781433426.jpg",
    alt: "Project Image",
    txt: "LOJA Redefining Fashion for Men, Kids, and Girls",
    text: "In the vibrant world of fashion, LOJA stands out as a beacon of style and inclusivity, catering to the diverse wardrobe needs of men, kids, and girls. Let’s delve into the core aspects of LOJA including its success"
  },
  {
    src: "https://dkgroup.pk/wp-content/uploads/2024/03/visio-loja-1024x683.jpg",
    alt: "Project Image",
    txt: "Thoughts and Vision",
    text: "LOJA philosophy revolves around the idea that fashion should be accessible, trendy, and reflective of individuality. The company believes in empowering customers to express themselves through their clothing choices, regardless of age or gender. LOJA envisions a fashion landscape that celebrates diversity, embraces innovation, and fosters confidence in every wearer."
  },
  {
    src: "https://dkgroup.pk/wp-content/uploads/2024/03/aim-loja-1.jpg",
    alt: "Project Image",
    txt: "Aim",
    text: "The primary aim of LOJA is to offer a wide range of stylish and affordable fashion options for men, kids, and girls. By curating collections that blend timeless classics with contemporary trends, LOJA aims to become a go-to destination for individuals and families seeking quality clothing that resonates with their personal style preferences."
  },
  {
    team: true
  },
  {
    src: "https://dkgroup.pk/wp-content/uploads/2024/03/loja-product-1024x683.jpg",
    alt: "Project Image",
    txt: "Product",
    text: "LOJA product offerings span across various categories, ensuring that every customer finds something appealing and suitable for their wardrobe. Here are some of the key product lines: Men Fashion: From smart casual wear to formal attire and accessories, LOJA offers a comprehensive range of clothing options for men, including shirts, trousers, jackets, suits, ties and more."
  },
  {
    src: "https://dkgroup.pk/wp-content/uploads/2024/03/feature-golas-loja.jpg",
    alt: "Project Image",
    txt: "Future Goal",
    text: "Looking ahead, LOJA has ambitious goals aimed at expanding its reach, enhancing its product offerings, and embracing sustainability initiatives. The company plans to introduce new collections, explore eco-friendly materials and production practices, expand its online presence, and foster deeper connections with customers through personalized experiences and engagement."
  },
  {
    src: "https://dkgroup.pk/wp-content/uploads/2024/03/5762-1024x682.jpg",
    alt: "Project Image",
    txt: "Success",
    text: "The success of LOJA is evident in its growing customer base, positive feedback, repeat business, and industry recognition. By staying true to its core values of quality, style, affordability, and inclusivity, LOJA has carved a niche for itself in the competitive fashion market. The brand’s success is not only measured in sales but also in the confidence and satisfaction it instills in its customers across different age groups and style preferences."
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
          src="https://avatars.mds.yandex.net/i?id=a00e066eeb169eef54e3e30bf45b8adda9b505d6-10748854-images-thumbs&n=13" // Replace with your team member's image URL
          alt="Team Member 1"
          className="w-32 h-32 rounded-full border-2 border-gray-300"
          
        />
        <motion.img
          src="https://avatars.mds.yandex.net/i?id=a00e066eeb169eef54e3e30bf45b8adda9b505d6-10748854-images-thumbs&n=13" // Replace with your team member's image URL
          alt="Team Member 2"
          className="w-32 h-32 rounded-full border-2 border-gray-300"
          
        />
        <motion.img
          src="https://avatars.mds.yandex.net/i?id=a00e066eeb169eef54e3e30bf45b8adda9b505d6-10748854-images-thumbs&n=13" // Replace with your team member's image URL
          alt="Team Member 3"
          className="w-32 h-32 rounded-full border-2 border-gray-300"
         
        />
        <motion.img
          src="https://avatars.mds.yandex.net/i?id=0769260822b5a5ca2b8bfd655089c8598f7c463f-9243502-images-thumbs&n=13" // Replace with your team member's image URL
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
        <>
          {index % 2 === 0 ? (
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
          )}
        </>
      )}
    </motion.div>
  );
};

// Main Projects component
const Loja = () => {
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
            Loja
          </motion.h1>
        </div>
        <motion.h1
          className='text-3xl font-bold m-20 text-black'
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          Loja Redefining Fashion with Innovation<br /> and Style
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
          className='bg-yellow-500 text-white pt-2 pb-2 p-8 pr-8 rounded-lg shadow-lg hover:bg-yellow-600 mb-6'
        >
          <a href='https://loja.pk/'><h1 className='font-serif text-black'>Learn More</h1></a>  
        </button>
      </div>
    </div>
  );
};

export default Loja;