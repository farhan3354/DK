import React, { useState } from 'react';

const SignUp = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        newPassword: '',
        confirmPassword: '',
        areYouRobot: false
    });

    const [successMessage, setSuccessMessage] = useState('');

    const handleChange = (e) => {
        const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
        setFormData({
            ...formData,
            [e.target.name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Uncomment the following line to display a success message
        // setSuccessMessage('Form submitted successfully!');
        // Reset form
        setFormData({
            firstName: '',
            lastName: '',
            email: '',
            newPassword: '',
            confirmPassword: '',
            areYouRobot: false
        });
    };

    return (
        <div className="bg-gradient-to-b from-yellow-100 via-white to-yellow-100">
            <div className="flex flex-col items-center text-center mb-12 p-5">
                <h1 className="text-5xl font-bold text-yellow-500 m-5">SignUp Form</h1>
            </div>
            <div className='flex justify-center items-start space-x-10'>
                <form onSubmit={handleSubmit} className="px-8 pt-6 pb-8 mb-4 w-1/2">
                    <div className="flex mb-4 space-x-4">
                        <div className="w-1/2">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="firstName">
                                First Name
                            </label>
                            <input
                                type="text"
                                name="firstName"
                                value={formData.firstName}
                                onChange={handleChange}
                                className="shadow appearance-none border rounded-lg w-full py-4 px-3 text-white bg-yellow-400 leading-tight focus:outline-none focus:shadow-outline"
                                placeholder="Enter your first name"
                                required
                            />
                        </div>
                        <div className="w-1/2">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="lastName">
                                Last Name
                            </label>
                            <input
                                type="text"
                                name="lastName"
                                value={formData.lastName}
                                onChange={handleChange}
                                className="shadow appearance-none border rounded-lg w-full py-4 px-3 text-white bg-yellow-400 leading-tight focus:outline-none focus:shadow-outline"
                                placeholder="Enter your last name"
                                required
                            />
                        </div>
                    </div>
                    <div className="flex mb-4 space-x-4">
                        <div className="w-1/2">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                                Email
                            </label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                className="shadow appearance-none border rounded-lg w-full py-4 px-3 text-white bg-yellow-400 leading-tight focus:outline-none focus:shadow-outline"
                                placeholder="Enter your email"
                                required
                            />
                        </div>
                        <div className="w-1/2">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="newPassword">
                                New Password
                            </label>
                            <input
                                type="password"
                                name="newPassword"
                                value={formData.newPassword}
                                onChange={handleChange}
                                className="shadow appearance-none border rounded-lg w-full py-4 px-3 text-white bg-yellow-400 leading-tight focus:outline-none focus:shadow-outline"
                                placeholder="Enter a new password"
                                required
                            />
                        </div>
                    </div>
                    <div className="flex mb-4 space-x-4">
                        <div className="w-1/2">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="confirmPassword">
                                Confirm Password
                            </label>
                            <input
                                type="password"
                                name="confirmPassword"
                                value={formData.confirmPassword}
                                onChange={handleChange}
                                className="shadow appearance-none border rounded-lg w-full py-4 px-3 text-white bg-yellow-400 leading-tight focus:outline-none focus:shadow-outline"
                                placeholder="Confirm your password"
                                required
                            />
                        </div>
                        <div className="w-1/2">
                            <div className="flex items-center">
                                <input
                                    type="checkbox"
                                    name="areYouRobot"
                                    checked={formData.areYouRobot}
                                    onChange={handleChange}
                                    className="form-checkbox h-5 w-5 text-yellow-500"
                                />
                                <label className="ml-2 block text-gray-700 text-sm font-bold mb-2" htmlFor="areYouRobot">
                                    Are you a robot?
                                </label>
                            </div>
                        </div>
                    </div>
                    <div className="mb-6">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
                            Message
                        </label>
                        <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            className="shadow appearance-none border rounded-lg w-full py-10 px-3 text-white bg-yellow-400 leading-tight focus:outline-none focus:shadow-outline"
                            placeholder="Enter your message"
                            required
                        ></textarea>
                    </div>
                    <div className="flex items-center justify-between">
                        <button
                            type="submit"
                            className="bg-black text-white font-bold p-3 pl-5 rounded-2xl w-32 focus:outline-none focus:shadow-outline"
                        >
                            Send
                        </button>
                    </div>
                    {successMessage && <p className="text-green-500 text-xs italic mt-4">{successMessage}</p>}
                </form>
            </div>
        </div>
    );
};

export default SignUp;
