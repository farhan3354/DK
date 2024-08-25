import React, { useState } from 'react';

const SignUpForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    newPassword: '',
    confirmPassword: '',
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
      firstName: '',
      lastName: '',
      email: '',
      newPassword: '',
      confirmPassword: '',
      isRobot: false,
    });
  };

  return (
    <div className="bg-gradient-to-b from-yellow-100 via-white to-yellow-100 min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-yellow-500 p-6 rounded-3xl shadow-xl max-w-lg w-full">
        <h2 className="text-4xl font-bold mb-6 text-center">Sign Up</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-medium text-black">First Name</label>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              className="mt-1 block w-full p-3 border border-black rounded-lg shadow-xl focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-black">Last Name</label>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              className="mt-1 block w-full p-3 border border-black rounded-lg shadow-xl focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
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
              className="mt-1 block w-full p-3 border border-black rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-black">New Password</label>
            <input
              type="password"
              name="newPassword"
              value={formData.newPassword}
              onChange={handleChange}
              className="mt-1 block w-full p-3 border border-black rounded-lg shadow-lg focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              required
            />
          </div>
          <div className="mb-6">
            <label className="block text-sm font-medium text-black">Confirm Password</label>
            <input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              className="mt-1 block w-full p-3 border border-black rounded-lg shadow-xl focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
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
            <label className="ml-2 text-sm text-gray-700">Are you a robot?</label>
          </div>
          <button
            type="submit"
            className=" bg-black text-white p-3 pl-8 pr-8 ml-20 rounded-xl shadow-sm item-center"
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUpForm;
