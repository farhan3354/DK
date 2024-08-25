import React, { useState } from 'react';

const SignUp = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        contact: '',
        subject: '',
        message: ''
    });

    const [successMessage, setSuccessMessage] = useState('');

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Uncomment the following line to display a success message
        // setSuccessMessage('Form submitted successfully!');
        // Reset form
        setFormData({
            name: '',
            email: '',
            contact: '',
            subject: '',
            message: ''
        });
    };

    return (
        <div className="bg-gradient-to-b from-yellow-100 via-white to-yellow-100 min-h-screen flex flex-col justify-center items-center">
            <div className="mb-12">
                <h1 className="text-5xl font-bold text-yellow-500 m-5">Sign Up Form</h1>
            </div>
            <div className="flex justify-center items-start space-x-10">
                <form onSubmit={handleSubmit} className="bg-white shadow-md rounded-lg px-8 pt-6 pb-8 mb-4 w-1/2">
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                            Name
                        </label>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className="shadow appearance-none border rounded-lg w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            placeholder="Enter your name"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                            Email
                        </label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="shadow appearance-none border rounded-lg w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            placeholder="Enter your email"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="contact">
                            Contact
                        </label>
                        <input
                            type="text"
                            name="contact"
                            value={formData.contact}
                            onChange={handleChange}
                            className="shadow appearance-none border rounded-lg w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            placeholder="Enter your contact number"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="subject">
                            Subject
                        </label>
                        <input
                            type="text"
                            name="subject"
                            value={formData.subject}
                            onChange={handleChange}
                            className="shadow appearance-none border rounded-lg w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            placeholder="Enter the subject"
                            required
                        />
                    </div>
                    <div className="mb-6">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
                            Message
                        </label>
                        <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            className="shadow appearance-none border rounded-lg w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-32 resize-none"
                            placeholder="Enter your message"
                            required
                        ></textarea>
                    </div>
                    <div className="flex items-center justify-between">
                        <button
                            type="submit"
                            className="bg-black text-white font-bold py-3 px-6 rounded-lg focus:outline-none focus:shadow-outline"
                        >
                            Send
                        </button>
                    </div>
                    {successMessage && (
                        <p className="text-green-500 text-sm italic mt-4">{successMessage}</p>
                    )}
                </form>
            </div>
        </div>
    );
};

export default SignUp;
