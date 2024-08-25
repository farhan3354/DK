import React from 'react';
import "./Login.css"; // Assuming you have some custom styles

const Login = () => {
  return (
    <div className="flex justify-center items-center min-h-screen mb-8 ">
      <div>
        <div>
          <h1 className='font-bold text-yellow-500 text-7xl items-center ml-56 mb-10'>Our Plans</h1>
        </div>
        {/* First line with 1 card */}
        <div className="grid grid-cols-1 gap-4 mb-4 sm:ml-0 md:ml-16 lg:ml-56 ">
          <div className="card">
            <h2>Student Plan</h2>
          </div>
        </div>

        {/* Second line with 2 cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
          <div className="card sm:ml-0 md:ml-10 lg:ml-20">
            <h2>Dk Share</h2>
          </div>
          <div className="card sm:mr-0 md:mr-10 lg:mr-24">
            <h2 className='pl-10'>Golden Plans</h2>
          </div>
        </div>

        {/* Third line with 3 cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-4">
          <div className="card sm:mr-0 md:mr-10 lg:mr-20">
            <h2>Sharing Plain</h2>
          </div>
          <div className="card">
            <h2>Real Estate</h2>
          </div>
          <div className="card">
            <h2>Car Financed</h2>
          </div>
        </div>

        {/* Fourth line with 2 cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="card sm:ml-0 md:ml-16 lg:ml-32">
            <h2 className='pl-8'>One Million Plan</h2>
            
          </div>
          <div className="card">
            <h2 className='pl-8'>Stock Market Plan</h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
