import React, { useState } from 'react';
import { FaEnvelope, FaLock, FaFacebookF, FaGoogle, FaEye, FaEyeSlash } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SignupPage = () => {
    const [tab, setTab] = useState('signup');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();

    const handleUserSignup = (e) => {
        e.preventDefault();

        if (email && password) {
            // Simulate user creation logic
            toast.success('User created successfully!');
            navigate('/User'); // Redirect to the homepage or user dashboard
        } else {
            toast.error('Please fill in all the details.');
        }
    };

    const handleAdminLogin = (e) => {
        e.preventDefault();
        const correctEmail = 'admin@example.com';
        const correctPassword = 'password123';

        if (email === correctEmail && password === correctPassword) {
            navigate('/Dashboard'); // Ensure '/Dashboard' is the correct route
        } else {
            toast.error('Incorrect email or password');
        }
    };

    return (
        <div className="flex items-center justify-center pt-10 pb-10 bg-gray-100">
            <div className="container px-4 mx-auto">
                <div className="max-w-md mx-auto overflow-hidden bg-white rounded-lg shadow-2xl">
                    <div className="py-6 text-center text-white bg-gradient-to-r from-yellow-300 to-yellow-600">
                        <h1 className="text-3xl font-bold">Welcome</h1>
                        <p className="mt-2">Join our Team</p>
                    </div>
                    <div className="p-8">
                        <div className="flex justify-center mb-6">
                            <button
                                onClick={() => setTab('signup')}
                                className={`px-4 py-2 rounded-l-md focus:outline-none transition-colors duration-300 ${tab === 'signup' ? 'bg-gradient-to-r from-yellow-500 to-yellow-700 text-white' : 'bg-gray-200 text-gray-700'}`}
                            >
                                User Login
                            </button>
                            <button
                                onClick={() => setTab('login')}
                                className={`px-4 py-2 rounded-r-md focus:outline-none transition-colors duration-300 ${tab === 'login' ? 'bg-gradient-to-r from-yellow-500 to-yellow-700 text-white' : 'bg-gray-200 text-gray-700'}`}
                            >
                                Admin Login
                            </button>
                        </div>
                        {tab === 'signup' && (
                            <form className="space-y-4" onSubmit={handleUserSignup}>
                                <div className="relative">
                                    <input
                                        type="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        className="w-full px-4 py-2 pl-10 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        placeholder="Email"
                                    />
                                    <FaEnvelope className="absolute text-gray-400 left-3 top-3" />
                                </div>
                                <div className="relative">
                                    <input
                                        type={showPassword ? 'text' : 'password'}
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        className="w-full px-4 py-2 pl-10 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        placeholder="Password"
                                    />
                                    <FaLock className="absolute text-gray-400 left-3 top-3" />
                                    <button
                                        type="button"
                                        onClick={() => setShowPassword(!showPassword)}
                                        className="absolute text-gray-400 right-3 top-3"
                                    >
                                        {showPassword ? <FaEyeSlash /> : <FaEye />}
                                    </button>
                                </div>
                                <button type="submit" className="w-full py-2 text-white transition-opacity duration-300 transform rounded-md bg-gradient-to-r from-yellow-500 to-yellow-700 hover:opacity-90 hover:scale-105">
                                    Sign Up
                                </button>
                            </form>
                        )}
                        {tab === 'login' && (
                            <form className="space-y-4" onSubmit={handleAdminLogin}>
                                <div className="relative">
                                    <input
                                        type="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        className="w-full px-4 py-2 pl-10 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        placeholder="Email"
                                    />
                                    <FaEnvelope className="absolute text-gray-400 left-3 top-3" />
                                </div>
                                <div className="relative">
                                    <input
                                        type={showPassword ? 'text' : 'password'}
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        className="w-full px-4 py-2 pl-10 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        placeholder="Password"
                                    />
                                    <FaLock className="absolute text-gray-400 left-3 top-3" />
                                    <button
                                        type="button"
                                        onClick={() => setShowPassword(!showPassword)}
                                        className="absolute text-gray-400 right-3 top-3"
                                    >
                                        {showPassword ? <FaEyeSlash /> : <FaEye />}
                                    </button>
                                </div>
                                <button type="submit" className="w-full py-2 mt-4 text-white transition-opacity duration-300 transform rounded-md bg-gradient-to-r from-yellow-500 to-yellow-700 hover:opacity-90 hover:scale-105">
                                    Admin Login
                                </button>
                            </form>
                        )}
                        <div className="mt-6">
                            <p className="mb-4 text-center text-gray-600">Or continue with</p>
                            <div className="flex justify-center space-x-4">
                                <button className="flex items-center px-4 py-2 text-white transition-colors duration-300 rounded-md bg-gradient-to-r from-yellow-500 to-yellow-700 hover:opacity-90">
                                    <FaFacebookF className="mr-2" /> Facebook
                                </button>
                                <button className="flex items-center px-4 py-2 text-white transition-colors duration-300 rounded-md bg-gradient-to-r from-yellow-500 to-yellow-700 hover:opacity-90">
                                    <FaGoogle className="mr-2" /> Google
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default SignupPage;
