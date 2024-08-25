import React, { useState, useEffect } from 'react';
import { MdEdit } from 'react-icons/md';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Graph from './Graph'

const User = () => {
    const [clients, setClients] = useState([]);
    const [user, setUser] = useState({ name: '', email: '', idCard: '', imageUrl: '' });
    const [isEditing, setIsEditing] = useState(false);
    const [editableUser, setEditableUser] = useState({ name: '', email: '', idCard: '', imageUrl: '' });
    const [imageFile, setImageFile] = useState(null);

    useEffect(() => {
        const storedClients = JSON.parse(localStorage.getItem('clients')) || [];
        setClients(storedClients);

        const storedUser = {
            name: 'M.Asad',
            email: 'asad3407886839@gmail.com',
            idCard: '12345-6789012-3',
            imageUrl: 'https://i3.wp.com/photocatchthemoment.com/wp-content/uploads/2016/01/business_headshot_linkedIn_profile-picture_Dublin_Rafael-Photography.jpg?ssl=1',
        };
        setUser(storedUser);
    }, []);

    const handleEditProfile = () => {
        setEditableUser(user);
        setIsEditing(true);
    };

    const handleSaveProfile = () => {
        const updatedUser = { ...editableUser };
        if (imageFile) {
            const reader = new FileReader();
            reader.onloadend = () => {
                updatedUser.imageUrl = reader.result;
                setUser(updatedUser);
                setIsEditing(false);
                toast.success("Profile updated successfully.");
            };
            reader.readAsDataURL(imageFile);
        } else {
            setUser(updatedUser);
            setIsEditing(false);
            toast.success("Profile updated successfully.");
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setEditableUser(prevUser => ({ ...prevUser, [name]: value }));
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setImageFile(file);
        }
    };

    return (
        <div>
        <div className="w-full max-w-4xl p-6 mx-auto">
            {/* User Profile Card */}
            <div className="flex items-center p-6 mt-8 bg-white rounded-lg shadow-md">
                <img 
                    src={user.imageUrl} 
                    alt="User Profile" 
                    className="w-32 h-32 mr-6 border-4 border-green-500 rounded-full"
                />
                <div>
                    {isEditing ? (
                        <div className="space-y-3">
                            <input
                                type="text"
                                name="name"
                                value={editableUser.name}
                                onChange={handleChange}
                                className="block w-full p-2 border rounded"
                                placeholder="Name"
                            />
                            <input
                                type="email"
                                name="email"
                                value={editableUser.email}
                                onChange={handleChange}
                                className="block w-full p-2 border rounded"
                                placeholder="Email"
                            />
                            <input
                                type="text"
                                name="idCard"
                                value={editableUser.idCard}
                                onChange={handleChange}
                                className="block w-full p-2 border rounded"
                                placeholder="ID Card"
                            />
                            <input
                                type="file"
                                accept="image/*"
                                onChange={handleImageChange}
                                className="block w-full p-2 border rounded"
                            />
                            <button 
                                onClick={handleSaveProfile} 
                                className="px-4 py-2 text-white transition duration-200 bg-green-500 rounded hover:bg-green-600">
                                Save Profile
                            </button>
                        </div>
                    ) : (
                        <div>
                            <h2 className="text-2xl font-semibold">{user.name}</h2>
                            <p className="text-gray-700">Email: {user.email}</p>
                            <p className="text-gray-700">ID Card: {user.idCard}</p>
                            <button 
                                onClick={handleEditProfile} 
                                className="flex items-center mt-3 text-blue-500 hover:text-blue-700">
                                <MdEdit className="mr-1" /> Edit Profile
                            </button>
                        </div>
                    )}
                </div>
            </div>

            {/* Clients Table */}
            <div className="pt-8">
                <table className="w-full bg-white border border-collapse border-gray-200">
                    <thead>
                        <tr className='text-white bg-green-500'>
                            <th className="px-4 py-2 border border-gray-300">Name</th>
                            <th className="px-4 py-2 border border-gray-300">Email</th>
                            <th className="px-4 py-2 border border-gray-300">Date</th>
                            <th className="px-4 py-2 border border-gray-300">Time</th>
                            <th className="px-4 py-2 border border-gray-300">Project</th>
                            <th className="px-4 py-2 border border-gray-300">Investment Amount</th>
                            <th className="px-4 py-2 border border-gray-300">Profit Amount</th>
                            <th className="px-4 py-2 border border-gray-300">PDF</th>
                        </tr>
                    </thead>
                    <tbody>
                        {clients.map((client, index) => (
                            <tr key={index}>
                                <td className="px-4 py-2 border border-gray-300">{client.name}</td>
                                <td className="px-4 py-2 border border-gray-300">{client.email}</td>
                                <td className="px-4 py-2 border border-gray-300">{client.date}</td>
                                <td className="px-4 py-2 border border-gray-300">{client.time}</td>
                                <td className="px-4 py-2 border border-gray-300">{client.project}</td>
                                <td className="px-4 py-2 border border-gray-300">{client.investmentAmount}</td>
                                <td className="px-4 py-2 border border-gray-300">{client.profitAmount}</td>
                                <td className="px-4 py-2 border border-gray-300">
                                    {client.pdf === 'No file selected' ? 'No file' : 
                                        <a href={client.pdf} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">View PDF</a>
                                    }
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Toast Notifications */}
            <ToastContainer />
            
        </div>
        <Graph/>
        </div>
    );
};

export default User;
