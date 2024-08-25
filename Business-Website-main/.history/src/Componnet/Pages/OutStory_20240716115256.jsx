import React, { useState } from 'react';

const ContactForm = () => {
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
    setSuccessMessage('Form submitted successfully!');
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
    <div className="flex ">
      <form onSubmit={handleSubmit} className=" px-8 pt-6 pb-8 mb-4">
        <div className="flex mb-4 space-x-4">
          <div className="w-2/1">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
              Name
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter your name"
              required
            />
          </div>
          <div className="w-2/1">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter your email"
              required
            />
          </div>
        </div>
        <div className="flex mb-4 space-x-4">
          <div className="w-1/2">
            <label className="block text-gray-700 text-sm font-bold mb-2 bg-yellow-500" htmlFor="contact">
              Contact
            </label>
            <input
              type="text"
              name="contact"
              value={formData.contact}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter your contact number"
              required
            />
          </div>
          <div className="w-2/">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="subject">
              Subject
            </label>
            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
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
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter your message"
            required
          ></textarea>
        </div>
        <div className="flex items-center justify-between">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Send
          </button>
        </div>
        {successMessage && <p className="text-green-500 text-xs italic mt-4">{successMessage}</p>}
      </form>
      <div className="flex flex-col mt-10 space-y-2 text-center ml-10">
        <p className="text-gray-700">Want to reach us directly?</p>
        <p className="text-gray-700">Connect with us to explore investment opportunities<br/> tailored to your needs and goals.</p>
        <p className="text-gray-700">+92 3064257447</p>
        <p className="text-gray-700">info@dkgroup.pk</p>
      </div>
    </div>
  );
};

export default ContactForm;
