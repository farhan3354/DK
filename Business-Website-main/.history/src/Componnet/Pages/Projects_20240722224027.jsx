import React from 'react';
import { Link } from 'react-router-dom'
import "../Pages../Project"
const Projects = () => {
  return (
    <div className='bg-gradient-to-b from-yellow-100 via-white to-yellow-100  flex justify-center items-center'>
      <div className='text-center max-w-4xl flex flex-col items-center'>
        <h1 className='text-5xl font-bold m-4 text-yellow-500'>Project</h1>
        <p className='text-semibold mb-5'>
          Discover our handpicked projects spanning diverse sectors<br/> offering solid investment prospects and shaping the future of finance.
        </p>
        <h1 className='text-yellow-500 text-3xl font-bold m-5'>Our Projects</h1>
        <div className='flex flex-row items-center m-5'>
          <img
            src="https://dkgroup.pk/wp-content/uploads/2024/03/Untitled-2-1024x580.png" 
            alt="Project Image" 
            className='w-1/2 h-auto mb-6'
          />
          <p className='text-sm ml-4'>
            Our recruitment services go beyond matching skills to jobs; we connect businesses with talent that aligns with their culture and goals, ensuring mutual success and growth. Investors in DK Recruitment benefit from the growth of human capital, as our recruitment services connect businesses with the right talent, generating returns through the strategic placement of skilled professionals.
          </p>
        </div>
        <div className='flex flex-row items-center m-3'>
          
          <p className='text-sm ml-4'>
            Our recruitment services go beyond matching skills to jobs; we connect businesses with talent that aligns with their culture and goals, ensuring mutual success and growth. Investors in DK Recruitment benefit from the growth of human capital, as our recruitment services connect businesses with the right talent, generating returns through the strategic placement of skilled professionals.
          </p>
          <img
            src="https://dkgroup.pk/wp-content/uploads/2024/03/Untitled-3-1024x580.png" 
            alt="Project Image" 
            className='w-1/2 h-auto mb-6'/>
        </div>

        <div className='flex flex-row items-center m-3'>
          <img
            src="https://dkgroup.pk/wp-content/uploads/2024/03/Untitled-6-1024x580.png" 
            alt="Project Image" 
            className='w-1/2 h-auto mb-6'
          />
          <p className='text-sm ml-4'>
            Our recruitment services go beyond matching skills to jobs; we connect businesses with talent that aligns with their culture and goals, ensuring mutual success and growth. Investors in DK Recruitment benefit from the growth of human capital, as our recruitment services connect businesses with the right talent, generating returns through the strategic placement of skilled professionals.
          </p>
        </div>
        
        <div className='flex flex-row items-center m-3'>
          
          <p className='text-sm ml-4'>
            Our recruitment services go beyond matching skills to jobs; we connect businesses with talent that aligns with their culture and goals, ensuring mutual success and growth. Investors in DK Recruitment benefit from the growth of human capital, as our recruitment services connect businesses with the right talent, generating returns through the strategic placement of skilled professionals.
          </p>
          <img
            src="https://dkgroup.pk/wp-content/uploads/2024/03/Untitled-4-1024x580.png" 
            alt="Project Image" 
            className='w-1/2 h-auto mb-6'/>
        </div>

        <div className='flex flex-row items-center m-3'>
          <img
            src="https://dkgroup.pk/wp-content/uploads/2024/03/Untitled-5-1024x580.png" 
            alt="Project Image" 
            className='w-1/2 h-auto mb-6'
          />
          <p className='text-sm ml-4'>
            Our recruitment services go beyond matching skills to jobs; we connect businesses with talent that aligns with their culture and goals, ensuring mutual success and growth. Investors in DK Recruitment benefit from the growth of human capital, as our recruitment services connect businesses with the right talent, generating returns through the strategic placement of skilled professionals.
          </p>
        </div>
        <div className="flex flex-col items-center justify-center m-4">
            <h1 className="font-bold text-4xl text-right text-yellow-500">Plans</h1>
            <div className="flex justify-center items-center mt-3">
                <img className="w-auto h-auto" src="https://dkgroup.pk/wp-content/uploads/2024/03/investment-tree-811x1024.png" alt="Investment Tree" />
            </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
