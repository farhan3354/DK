import React from 'react';
import { Link } from 'react-router-dom';

const Projects = () => {
  return (
    <div className='bg-gradient-to-b from-yellow-100 via-white to-yellow-100 h-screen flex justify-center items-center'>
      <div className='text-center max-w-4xl flex flex-col items-center'>
        <h1 className='text-2xl font-bold mb-4'>Project</h1>
        <p className='text-lg mb-4'>
          Discover our handpicked projects spanning diverse sectors<br/> offering solid investment prospects and shaping the future of finance.
        </p>
        <div className='flex flex-row items-center m-3'>
          <img
            src="https://dkgroup.pk/wp-content/uploads/2024/03/Untitled-2-1024x580.png" 
            alt="Project Image" 
            className='w-1/2 h-auto mb-6'
          />
          <p className='text-m ml-4'>
            Our recruitment services go beyond matching skills to jobs; we connect businesses with talent that aligns with their culture and goals, ensuring mutual success and growth. Investors in DK Recruitment benefit from the growth of human capital, as our recruitment services connect businesses with the right talent, generating returns through the strategic placement of skilled professionals.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Projects;
