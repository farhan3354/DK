import React from 'react';
import "./Login.css"; // Assuming you have some custom styles

const Login = () => {
  return (
    <div className="flex flex-col items-center min-h-screen mb-8 px-4">
      {/* Header */}
      <div className="w-full text-center mb-10">
        <h1 className='font-bold text-yellow-500 text-3xl sm:text-4xl md:text-5xl lg:text-7xl'>
          Our Plans
        </h1>
      </div>

      {/* First line with 1 card */}
      <div className="w-full max-w-screen-lg mb-4">
        <div className="grid grid-cols-1 gap-4 mx-auto">
          <div className="card text-black">
            <h2>Student Plan</h2>
          </div>
        </div>
      </div>

      {/* Second line with 2 cards */}
      <div className="w-full max-w-screen-lg mb-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mx-auto">
          <div className="card text-black">
            <h2>Dk Share</h2>
          </div>
          <div className="card text-black">
            <h2 className='pl-10'>Golden Plans</h2>
          </div>
        </div>
      </div>

      {/* Third line with 3 cards */}
      <div className="w-full max-w-screen-lg mb-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mx-auto">
          <div className="card text-black">
            <h2>Sharing Plan</h2>
          </div>
          <div className="card text-black">
            <h2>Real Estate</h2>
          </div>
          <div className="card text-black">
            <h2>Car Financed</h2>
          </div>
        </div>
      </div>

      {/* Fourth line with 2 cards */}
      <div className="w-full max-w-screen-lg">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mx-auto">
          <div className="card text-black">
            <h2 className='pl-8'>One Million Plan</h2>
          </div>
          <div className="card text-black">
            <h2 className='pl-8'>Stock Market Plan</h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
