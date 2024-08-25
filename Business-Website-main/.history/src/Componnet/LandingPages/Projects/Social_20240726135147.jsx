import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';

// Define your project data, including the team section
const projects = [
  {
    src: "https://dkgroup.pk/wp-content/uploads/2024/03/thought-.jpg",
    alt: "Project Image",
    txt: "Thoughts and Vision",
    text: "At the heart of Social Swirl lies a profound belief in the power of education to transform lives. The company envisions a world where learning knows no boundaries, where individuals can access high-quality educational content anytime, anywhere. By harnessing the potential of technology, Social Swirl aims to break traditional barriers to education and create a globally accessible platform for knowledge exchange."
  },
  {
    src: "https://dkgroup.pk/wp-content/uploads/2024/03/aim-1024x683.jpg",
    alt: "Project Image",
    txt: "Aim",
    text: "Social Swirl's primary aim is to democratize learning by offering a diverse range of courses through its e-learning platform. Whether it’s professional development, academic enhancement, or personal growth, Social Swirl strives to cater to the learning needs of individuals across various domains. By providing a user-friendly interface and engaging content, the company aims to make learning enjoyable and accessible to all."
  },
  {
    src: "https://dkgroup.pk/wp-content/uploads/2024/03/services.jpg",
    alt: "Project Image",
    txt: "Services",
    text: "Our recruitment services go beyond matching skills to jobs; we connect businesses with talent that aligns with their culture and goals, ensuring mutual success and growth. Investors in DK Recruitment benefit from the growth of human capital, as our recruitment services connect businesses with the right talent, generating returns through the strategic placement of skilled professionals."
  },
  // Add the team section as a separate object
  {
    team: true
  },
  {
    src: "https://dkgroup.pk/wp-content/uploads/2024/03/future-goals.jpg",
    alt: "Future Goal",
    txt: "Future Goal",
    text: "Looking ahead, Social Swirl has ambitious goals aimed at further expanding its impact on the e-learning landscape. The company plans to diversify its course offerings, forge strategic partnerships with educational institutions and industry leaders, and enhance its technological infrastructure for seamless user experiences. By staying agile and responsive to market trends and user feedback, Social Swirl aims to remain at the forefront of educational innovation."
  },
  {
    src: "https://dkgroup.pk/wp-content/uploads/2024/03/success-1024x683.jpg",
    alt: "Project Image",
    txt: "Success",
    text: "The success of Social Swirl is evident in the positive feedback from learners, the growing community of users, and the recognition received for its innovative approach to e-learning. Through continuous refinement of its services, adherence to high-quality standards, and a customer-centric approach, Social Swirl has established itself as a trusted name in the e-learning industry, contributing significantly to the advancement of education on a global scale."
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
            className='w-full md:w-1/2 h-auto mb-16 md:mb-8 rounded-tl-2xl rounded-br-2xl' 
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
    </motion.div>
  );
};

// Component for the team section
const TeamSection = () => (
  <div className='max-w-4xl text-center p-4 mt-16'>
    <h2 className='text-2xl font-bold mb-4'>Our Team</h2>
    <div className='flex justify-center space-x-8'>
      <motion.img
        src="https://avatars.mds.yandex.net/i?id=a00e066eeb169eef54e3e30bf45b8adda9b505d6-10748854-images-thumbs&n=13" // Replace with your team member's image URL
        alt="Team Member 1"
        className="w-32 h-32 rounded-full border-2"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      />
      <motion.img
        src="https://avatars.mds.yandex.net/i?id=a00e066eeb169eef54e3e30bf45b8adda9b505d6-10748854-images-thumbs&n=13" // Replace with your team member's image URL
        alt="Team Member 2"
        className="w-32 h-32 rounded-full border-2"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      />
      <motion.img
        src="https://avatars.mds.yandex.net/i?id=a00e066eeb169eef54e3e30bf45b8adda9b505d6-10748854-images-thumbs&n=13" // Replace with your team member's image URL
        alt="Team Member 3"
        className="w-32 h-32 rounded-full border-2"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      />
      <motion.img
        src="https://avatars.mds.yandex.net/i?id=0769260822b5a5ca2b8bfd655089c8598f7c463f-9243502-images-thumbs&n=13" // Replace with your team member's image URL
        alt="Team Member 4"
        className="w-32 h-32 rounded-full border-2"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      />
    </div>
  </div>
);

// Component for the locations section
const LocationsSection = () => (
  <div className="flex justify-around items-center mt-10 gap-16 mb-6">
    
    <div className="text-center">
      <img 
        src="https://banner2.cleanpng.com/20180330/ueq/kisspng-abu-dhabi-dubai-national-day-flag-of-the-united-ar-uae-5abe5565811e83.6580053315224231415289.jpg" 
        alt="Dubai" 
        className="rounded-full w-40 h-40 object-cover" 
      />
      <div className="mt-2 text-lg font-bold">Dubai</div>
    </div>
    <div className="text-center">
      <img 
        src="https://avatars.mds.yandex.net/i?id=8715aa712c2810864eed91b97abbb2a84169a446f696e18e-5249548-images-thumbs&n=13" 
        alt="USA" 
        className="rounded-full w-40 h-40 object-cover" 
      />
      <div className="mt-2 text-lg font-bold">USA</div>
    </div>
    <div className="text-center">
      <img 
        src="https://avatars.mds.yandex.net/i?id=d9f11a422ba2e41340264a0eeba35495289151f3-8265302-images-thumbs&n=13" 
        alt="Pakistan" 
        className="rounded-full w-40 h-40 object-cover" 
      />
      <div className="mt-2 text-lg font-bold">Pakistan</div>
    </div>
  </div>
);

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
    <div className='flex justify-center items-center'>
      <div className='text-center max-w-4xl flex flex-col items-center'>
        <motion.div
          className='flex items-center m-4'
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className='text-7xl font-bold text-yellow-500'>
            Social Swirl
          </h1>
          <img 
            src="https://socialswirl.tech/assets/sa-u-h9tFrc.png" // Replace with your logo URL
            alt="Logo"
            className="w-32 h-32 rounded-full ml-8" 
          />
        </motion.div>
        <motion.h1
          className='text-3xl font-bold m-20 text-black'
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          Social Swirl Learning Through Innovative<br /> E-Learning Solutions
        </motion.h1>
        <motion.p
          className='text-semibold mb-16'
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          In today’s digital age, the realm of education and professional development has undergone a transformative shift, with e-learning platforms emerging as a cornerstone of modern learning methodologies. Among these platforms, Social Swirl stands out as a beacon of innovative educational solutions, committed to providing unparalleled learning experiences through its dynamic online courses and interactive content.
        </motion.p>
        {projects.map((project, index) => (
          project.team ? (
            <TeamSection key={index} />
          ) : (
            <ProjectItem 
              key={index}
              project={project}
              index={index}
              inView={inView[index]}
              setInView={handleSetInView}
            />
          )
        ))}
        <LocationsSection />
      </div>
    </div>
  );
};

export default Projects;
