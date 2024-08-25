import React from 'react';
import "./Login.css"; // Assuming you have some custom styles

const Login = () => {
  return (
    <div className="flex flex-col items-center min-h-screen mb-8">
      {/* Centered header */}
      <div className="w-full text-center mb-8">
        <h1 className='text-yellow-500 font-bold text-4xl'>Our Plans</h1>
      </div>

      <div className="w-full flex flex-col items-center">
        {/* First line with 1 card */}
        <div className="grid grid-cols-1 gap-4 mb-4 w-full max-w-4xl">
          <div className="card">
            <h2>Student Plan</h2>
          </div>
        </div>

        {/* Second line with 2 cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4 w-full max-w-4xl">
          <div className="card">
            <h2>Student Plan</h2>
          </div>
          <div className="card">
            <h2>Student Plan</h2>
          </div>
        </div>

        {/* Third line with 3 cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-4 w-full max-w-4xl">
          <div className="card">
            <h2>Student Plan</h2>
          </div>
          <div className="card">
            <h2>Student Plan</h2>
          </div>
          <div className="card">
            <h2>Student Plan</h2>
          </div>
        </div>

        {/* Fourth line with 2 cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full max-w-4xl">
          <div className="card">
            <h2>Student Plan</h2>
          </div>
          <div className="card">
            <h2>Student Plan</h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
