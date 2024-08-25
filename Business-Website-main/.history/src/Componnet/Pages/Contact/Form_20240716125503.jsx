import React, { useState } from 'react';
impport {fa-shrap}

const Form = () => {
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
        <div className="flex justify-center items-start m-10 space-x-10">
            <form onSubmit={handleSubmit} className="px-8 pt-6 pb-8 mb-4 w-1/2">
                <div className="flex mb-4 space-x-4">
                    <div className="w-1/2">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                            Name
                        </label>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className="shadow appearance-none border rounded-lg w-full py-4 px-3 text-white bg-yellow-400 leading-tight focus:outline-none focus:shadow-outline"
                            placeholder="Enter your name"
                            required
                        />
                    </div>
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
                </div>
                <div className="flex mb-4 space-x-4">
                    <div className="w-1/2">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="contact">
                            Contact
                        </label>
                        <input
                            type="text"
                            name="contact"
                            value={formData.contact}
                            onChange={handleChange}
                            className="shadow appearance-none border rounded-lg w-full py-4 px-3 text-white bg-yellow-400 leading-tight focus:outline-none focus:shadow-outline"
                            placeholder="Enter your contact number"
                            required
                        />
                    </div>
                    <div className="w-1/2">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="subject">
                            Subject
                        </label>
                        <input
                            type="text"
                            name="subject"
                            value={formData.subject}
                            onChange={handleChange}
                            className="shadow appearance-none border rounded-lg w-full py-4 px-3 text-white bg-yellow-400 leading-tight focus:outline-none focus:shadow-outline"
                            placeholder="Enter the subject"
                            required
                        />
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
            <div className="flex flex-col justify-center items-start w-2/1 text-left space-y-4 m-28">
                <p className="text-black text-lg font-bold">Want to reach us directly?</p>
                <p className="text-black">Connect with us to explore investment opportunities <br />tailored to your needs and goals.</p>
                <p className="text-black pl-9">
                <i class="fa-sharp fa-solid fa-phone-volume">+92 3064257447</i>
                </p>
                <p className="text-black pl-9">
                    <i class="fa-solid fa-envelopes">info@dkgroup.pk</i>
                   
                </p>
            </div>
        </div>
    );
};

export default Form;
