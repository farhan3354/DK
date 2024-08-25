import React, { useState } from 'react';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic (e.g., validation, API call)
    console.log(formData);
    // Reset form after submission if needed
    setFormData({
      email: '',
      password: '',
    });
  };

  return (
    <div className="bg-gradient-to-b from-yellow-100 via-white to-yellow-100 min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="max-w-md w-full rounded-2xl">
        <h2 className="text-4xl font-bold mb-6 text-center">Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-medium text-black">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="mt-1 block w-full p-3 border border-black rounded-2xl shadow-2xl focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="Enter Email Address"
              required
            />
          </div>
          <div className="mb-6">
            <label className="block text-sm font-medium text-black">Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="mt-1 block w-full p-3 border border-black rounded-2xl shadow-2xl focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="Enter Password"
              required
            />
          </div>
          <button
            type="submit"
            className="bg-black text-white p-3 pl-8 pr-8 ml-32 rounded-2xl shadow-2xl"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
