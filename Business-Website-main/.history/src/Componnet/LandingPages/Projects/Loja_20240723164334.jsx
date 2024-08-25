import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';

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
    text: "LOJA philosophy revolves around the idea that fashion should be accessible, trendy, and reflective of individuality. The company believes in empowering customers to express themselves through their clothing choices, regardless of age or gender. LOJA envisions a fashion landscape that celebrates diversity, embraces innovation, and fosters confidence in every wearer.",
  },
  {
    src: "https://dkgroup.pk/wp-content/uploads/2024/03/aim-loja-1.jpg",
    alt: "Project Image",
    txt: "Aim",
    text: "The primary aim of LOJA is to offer a wide range of stylish and affordable fashion options for men, kids, and girls. By curating collections that blend timeless classics with contemporary trends, LOJA aims to become a go-to destination for individuals and families seeking quality clothing that resonates with their personal style preferences."
  },
  {
    src: "https://dkgroup.pk/wp-content/uploads/2024/03/loja-product-1024x683.jpg",
    alt: "Project Image",
    txt: "Product",
    text: "LOJA product offerings span across various categories, ensuring that every customer finds something appealing and suitable for their wardrobe. Here are some of the key product lines.Men Fashion: From smart casual wear to formal attire and accessories, LOJA offers a comprehensive range of clothing options for men, including shirts, trousers, jackets, suits, ties and more."
    },
  {
    src: "https://dkgroup.pk/wp-content/uploads/2024/03/loja-products-1-e1711782525697-1024x718.jpg",
    alt: "Future Goal",
    txt: "Team",
    text: "Behind LOJA success story is a talented and dedicated team comprising fashion designers, stylists, merchandisers, marketing professionals, and customer service representatives. The team collaborates seamlessly to curate collections, create compelling campaigns, deliver exceptional customer experiences, and stay ahead of industry trends. Their passion for fashion and commitment to excellence drive LOJA reputation as a trusted fashion brand."
  },
  {
    src: "https://dkgroup.pk/wp-content/uploads/2024/03/feature-golas-loja.jpg",
    alt: "Project Image",
    txt: "Future Goal",
    text: "Looking ahead LOJA has ambitious goals aimed at expanding its reach, enhancing its product offerings and embracing sustainability initiatives. The company plans to introduce new collections explore eco-friendly materials and production practices, expand its online presence and foster deeper connections with customers through personalised experiences and engagement." }

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
            <h1 className='font-bold text-2xl mb-3 mr-8'>{project.txt}</h1>
            <p className='text-sm mr-8'>{project.text}</p>
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
    <div className='bg-gradient-to-b from-yellow-100 via-white to-yellow-100 flex justify-center items-center'>
      <div className='text-center max-w-4xl flex flex-col items-center'>
        <motion.h1
          className='text-7xl font-bold m-4 text-yellow-500'
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Loja
        </motion.h1>
        <motion.h1
          className='text-3xl font-bold m-20 text-black'
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >Loja Redefining Fashion with Innovation<br /> and Style
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
    </div>
  );
};

export default Loja;
