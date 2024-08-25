import React, { useState, useEffect } from 'react';
import {  MdEdit, MdDelete, MdVisibility, MdVisibilityOff } from 'react-icons/md';
import Model from './Model';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AddClientForm = () => {
    const [selectedProject, setSelectedProject] = useState('');
    const [pdfFile, setPdfFile] = useState(null);
    const [clients, setClients] = useState([]);
    const [isFormVisible, setIsFormVisible] = useState(false);
    const [editIndex, setEditIndex] = useState(null);
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        date: '',
        time: '',
        password: ''
    });
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [clientToDelete, setClientToDelete] = useState(null);
    const [showPassword, setShowPassword] = useState(false);

    useEffect(() => {
        const storedClients = JSON.parse(localStorage.getItem('clients')) || [];
        setClients(storedClients);
    }, []);

    useEffect(() => {
        localStorage.setItem('clients', JSON.stringify(clients));
    }, [clients]);

    const handleProjectChange = (e) => {
        setSelectedProject(e.target.value);
    };

    const handleFileChange = (e) => {
        setPdfFile(e.target.files[0]);
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
    
        const newClient = {
            ...formData,
            project: selectedProject,
            pdf: pdfFile ? URL.createObjectURL(pdfFile) : 'No file selected'
        };
    
        if (editIndex !== null) {
            const updatedClients = clients.map((client, index) =>
                index === editIndex ? newClient : client
            );
            setClients(updatedClients);
            setEditIndex(null);
            toast.success('Client updated successfully!');
        } else {
            setClients([...clients, newClient]);
            toast.success('Client added successfully!');
        }
    
        e.target.reset();
        setSelectedProject('');
        setPdfFile(null);
        setFormData({
            name: '',
            phone: '',
            email: '',
            date: '',
            time: '',
            password: ''
        });
    };

    const handleEdit = (index) => {
        const clientToEdit = clients[index];
        setFormData({
            name: clientToEdit.name,
            phone: clientToEdit.phone,
            email: clientToEdit.email,
            date: clientToEdit.date,
            time: clientToEdit.time,
            password: clientToEdit.password
        });
        setSelectedProject(clientToEdit.project);
        setPdfFile(null);
        setEditIndex(index);
        setIsFormVisible(true);
    };

    const handleDelete = (index) => {
        setClientToDelete(index);
        setIsModalOpen(true);
    };

    const confirmDelete = () => {
        setClients(prevClients => prevClients.filter((_, i) => i !== clientToDelete));
        toast.success("Client deleted successfully.");
        setIsModalOpen(false);
    };

    const cancelDelete = () => {
        setIsModalOpen(false);
    };

    const togglePasswordVisibility = () => {
        setShowPassword(prevState => !prevState);
    };

    return (
        <div>
            <div className="flex items-center justify-center p-12">
                <div className="w-full max-w-4xl p-8 mx-auto shadow-2xl rounded-xl">
                    <button
                        onClick={() => setIsFormVisible(!isFormVisible)}
                        className="w-full py-3 text-base font-semibold text-center text-white bg-green-600 rounded-md outline-none hover:bg-green-700 focus:ring-2 focus:ring-green-500"
                    >
                        {isFormVisible ? 'Close Form' : 'Open Form'}
                    </button>
                    
                    {isFormVisible && (
                        <form onSubmit={handleSubmit} className="mt-8">
                            {/* Name Input */}
                            <div className="mb-5">
                                <label htmlFor="name" className="block mb-3 text-base font-medium text-gray-700">
                                    Full Name
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    id="name"
                                    placeholder="Full Name"
                                    className="w-full px-4 py-3 text-base font-medium text-gray-700 bg-white border border-gray-300 rounded-md outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                                    value={formData.name}
                                    onChange={handleInputChange}
                                    required
                                />
                            </div>

                            {/* Phone Input */}
                            <div className="mb-5">
                                <label htmlFor="phone" className="block mb-3 text-base font-medium text-gray-700">
                                    Phone Number
                                </label>
                                <input
                                    type="text"
                                    name="phone"
                                    id="phone"
                                    placeholder="Enter your phone number"
                                    className="w-full px-4 py-3 text-base font-medium text-gray-700 bg-white border border-gray-300 rounded-md outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                                    value={formData.phone}
                                    onChange={handleInputChange}
                                    required
                                />
                            </div>

                            {/* Date and Time Input */}
                            <div className="flex flex-wrap mb-5 -mx-3">
                                <div className="w-full px-3 sm:w-1/2">
                                    <label htmlFor="date" className="block mb-3 text-base font-medium text-gray-700">
                                        Date
                                    </label>
                                    <input
                                        type="date"
                                        name="date"
                                        id="date"
                                        className="w-full px-4 py-3 text-base font-medium text-gray-700 bg-white border border-gray-300 rounded-md outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                                        value={formData.date}
                                        onChange={handleInputChange}
                                        required
                                    />
                                </div>
                                <div className="w-full px-3 sm:w-1/2">
                                    <label htmlFor="time" className="block mb-3 text-base font-medium text-gray-700">
                                        Time
                                    </label>
                                    <input
                                        type="time"
                                        name="time"
                                        id="time"
                                        className="w-full px-4 py-3 text-base font-medium text-gray-700 bg-white border border-gray-300 rounded-md outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                                        value={formData.time}
                                        onChange={handleInputChange}
                                        required
                                    />
                                </div>
                            </div>

                            {/* Project Selection */}
                            <div className="mb-5">
                                <label htmlFor="project" className="block mb-3 text-base font-medium text-gray-700">
                                    Project
                                </label>
                                <select
                                    name="project"
                                    id="project"
                                    className="w-full px-4 py-3 text-base font-medium text-gray-700 bg-white border border-gray-300 rounded-md outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                                    value={selectedProject}
                                    onChange={handleProjectChange}
                                    required
                                >
                                    <option value="" disabled>Select a project</option>
                                    <option value="student-plan">Student Plan</option>
<option value="Dk-share">Dk Share</option>
<option value="Gold-plan">Gold Plan</option>
<option value="Sharing-plan">Sharing Plan</option>
<option value="Real-estate-share">Real Estate Share</option>
<option value="Car-finance">Car Finance</option>
<option value="1-million-plan">1 Million Plan</option>
<option value="Stock-market-plan">Stock Market Plan</option>

                                </select>
                            </div>

                            {/* File Upload */}
                            <div className="mb-5">
                                <label htmlFor="pdf" className="block mb-3 text-base font-medium text-gray-700">
                                    Upload PDF
                                </label>
                                <input
                                    type="file"
                                    name="pdf"
                                    id="pdf"
                                    accept=".pdf"
                                    onChange={handleFileChange}
                                    className="w-full px-4 py-3 text-base font-medium text-gray-700 bg-white border border-gray-300 rounded-md outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                                />
                            </div>

                            {/* Email and Password Input */}
                            <div className="flex flex-wrap mb-5 -mx-3">
                                <div className="w-full px-3 sm:w-1/2">
                                    <label htmlFor="email" className="block mb-3 text-base font-medium text-gray-700">
                                        Email Address
                                    </label>
                                    <input
                                        type="email"
                                        name="email"
                                        id="email"
                                        placeholder="Enter your email"
                                        className="w-full px-4 py-3 text-base font-medium text-gray-700 bg-white border border-gray-300 rounded-md outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        required
                                    />
                                </div>
                                <div className="w-full px-3 sm:w-1/2">
                                    <label htmlFor="password" className="block mb-3 text-base font-medium text-gray-700">
                                        Password
                                    </label>
                                    <div className="relative">
                                        <input
                                            type={showPassword ? 'text' : 'password'}
                                            name="password"
                                            id="password"
                                            placeholder="Enter a password"
                                            className="w-full px-4 py-3 text-base font-medium text-gray-700 bg-white border border-gray-300 rounded-md outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                                            value={formData.password}
                                            onChange={handleInputChange}
                                            required
                                        />
                                        <button
                                            type="button"
                                            onClick={togglePasswordVisibility}
                                            className="absolute inset-y-0 right-0 flex items-center pr-3"
                                        >
                                            {showPassword ? <MdVisibilityOff /> : <MdVisibility />}
                                        </button>
                                    </div>
                                </div>
                            </div>

                            {/* Submit Button */}
                            <div>
                                <button
                                    type="submit"
                                    className="w-full px-8 py-3 text-base font-semibold text-center text-white bg-green-600 rounded-md outline-none hover:bg-green-700 focus:ring-2 focus:ring-green-500"
                                >
                                    {editIndex !== null ? 'Update Client' : 'Add Client'}
                                </button>
                            </div>
                        </form>
                    )}
                </div>
            </div>

            {/* Clients Table */}
            <div className="w-full max-w-4xl pt-8 mx-auto">
                <table className="w-full bg-white border border-collapse border-gray-200">
                    <thead>
                        <tr className='bg-green-500'>
                            <th className="px-4 py-2 border border-gray-300">Name</th>
                            <th className="px-4 py-2 border border-gray-300">Phone</th>
                            <th className="px-4 py-2 border border-gray-300">Email</th>
                            <th className="px-4 py-2 border border-gray-300">Date</th>
                            <th className="px-4 py-2 border border-gray-300">Time</th>
                            <th className="px-4 py-2 border border-gray-300">Project</th>
                            <th className="px-4 py-2 border border-gray-300">PDF</th>
                            <th className="px-4 py-2 border border-gray-300">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {clients.map((client, index) => (
                            <tr key={index}>
                                <td className="px-4 py-2 border border-gray-300">{client.name}</td>
                                <td className="px-4 py-2 border border-gray-300">{client.phone}</td>
                                <td className="px-4 py-2 border border-gray-300">{client.email}</td>
                                <td className="px-4 py-2 border border-gray-300">{client.date}</td>
                                <td className="px-4 py-2 border border-gray-300">{client.time}</td>
                                <td className="px-4 py-2 border border-gray-300">{client.project}</td>
                                <td className="px-4 py-2 border border-gray-300">
                                    {client.pdf !== 'No file selected' ? (
                                        <a href={client.pdf} target="_blank" rel="noopener noreferrer">
                                            View PDF
                                        </a>
                                    ) : 'No file uploaded'}
                                </td>
                                <td className="px-4 py-2 border border-gray-300">
                                    <button
                                        onClick={() => handleEdit(index)}
                                        className="px-2 py-1 text-blue-500 hover:text-blue-700"
                                    >
                                        <MdEdit />
                                    </button>
                                    <button
                                        onClick={() => handleDelete(index)}
                                        className="px-2 py-1 text-red-500 hover:text-red-700"
                                    >
                                        <MdDelete />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Confirmation Modal */}
            <Model
                isOpen={isModalOpen}
                onClose={cancelDelete}
                onConfirm={confirmDelete}
            />

            {/* Toast Notifications */}
            <ToastContainer />
        </div>
    );
};

export default AddClientForm;
