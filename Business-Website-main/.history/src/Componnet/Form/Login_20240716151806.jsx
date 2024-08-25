import React, { useState } from 'react';

const LogIn = () => {
  const [formData, setFormData] = useState({
    Name: '',
    email: '',
    Password: '',
    isRobot: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic (e.g., validation, API call)
    console.log(formData);
    // Reset form after submission if needed
    setFormData({
      Name: '',
      email: '',
      Password: '',
      isRobot: false,
    });
  };

  return (
    <div className="bg-yellow-500 min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="max-w-lg w-full">
        <h2 className="text-4xl font-bold mb-6 text-center">LogIN Form</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-medium text-black">Name</label>
            <input
              type="text"
              name="Name"
              value={formData.Name}
              onChange={handleChange}
              className="mt-1 block w-full p-3 border border-black rounded-full shadow-2xl focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="Enter Name"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-black">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="mt-1 block w-full p-3 border border-black rounded-full shadow-2xl focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="Enter Email Address"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-black">Password</label>
            <input
              type="password"
              name="Password"
              value={formData.Password}
              onChange={handleChange}
              className="mt-1 block w-full p-3 border border-black rounded-full shadow-2xl focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="Enter Password"
              required
            />
          </div>
          <div className="mb-6 flex items-center">
            <input
              type="checkbox"
              name="isRobot"
              checked={formData.isRobot}
              onChange={handleChange}
              className="h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
              required
            />
            <label className="ml-2 text-sm text-black">Are you a robot?</label>
          </div>
          <button
            type="submit"
            className="bg-black text-white p-3 pl-8 pr-8 ml-32 rounded-full shadow-2xl item-center"
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default LogIn;
