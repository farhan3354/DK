import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FiHome, FiUser, FiSearch, FiLogOut, FiUserPlus, FiEdit } from 'react-icons/fi';
import AddClientForm from './AddClinetForm'
import UserPortal from './UserPortal';
import UserInfo from './UserInfo';

const Dashboard = () => {
    const [activeView, setActiveView] = useState(null);
    const [showProfile, setShowProfile] = useState(false);
    const [isEditing, setIsEditing] = useState(false);
    const [profileImage, setProfileImage] = useState("https://via.placeholder.com/150");
    const [profileName, setProfileName] = useState("John Doe");
    const [profileEmail, setProfileEmail] = useState("johndoe@example.com");

    const showView = (view) => {
        setActiveView(view);
    };

    const handleLogout = () => {
        // Implement actual logout logic here
        window.location.href = '/login'; // Redirect to login page
    };

    const handleEditClick = () => {
        setIsEditing(true);
        setActiveView(null);
    };

    const handleSaveProfile = () => {
        setIsEditing(false);
    };

    const handleImageUpload = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setProfileImage(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    return (
        <div className="flex flex-col h-screen md:flex-row bg-gradient-to-r from-gray-100 to-blue-100">
            {/* Sidebar */}
            <div className="flex-col flex-shrink-0 hidden w-full shadow-lg md:w-64 bg-gradient-to-b from-gray-800 to-gray-900 rounded-r-3xl md:flex md:block">
                <div className="flex flex-col flex-1 overflow-y-auto">
                    <nav className="flex flex-col flex-1 gap-10 px-4 py-6">
                        <div className="mb-8 text-2xl font-bold text-white">Dk Dashboard</div>
                        <div className="flex flex-col flex-1 gap-6">
                            {/* <NavLink
                                to="#"
                                className="flex items-center px-4 py-3 text-gray-100 transition-all duration-300 ease-in-out shadow-lg bg-opacity-20 hover:bg-gradient-to-r from-blue-400 to-purple-600 hover:text-white rounded-xl"
                                onClick={() => showView(null)}
                            >
                                <FiHome className="w-6 h-6 mr-3" />
                                Dashboard
                            </NavLink> */}
                            <button
                                onClick={() => showView('userinfo')}
                                className="flex items-center w-full px-4 py-3 text-left text-gray-100 transition-all duration-300 ease-in-out shadow-lg bg-opacity-20 hover:bg-gradient-to-r from-blue-400 to-purple-600 hover:text-white rounded-xl"
                                aria-label="Dashboardr"
                            >
                                <FiHome className="w-6 h-6 mr-3" />
                                Dashboard
                            </button>
                            <button
                                onClick={() => showView('addClient')}
                                className="flex items-center w-full px-4 py-3 text-left text-gray-100 transition-all duration-300 ease-in-out shadow-lg bg-opacity-20 hover:bg-gradient-to-r from-blue-400 to-purple-600 hover:text-white rounded-xl"
                                aria-label="Add User"
                            >
                                <FiUserPlus className="w-6 h-6 mr-3" />
                                Add User
                            </button>
                            <button
                                onClick={() => showView('userPortal')}
                                className="flex items-center w-full px-4 py-3 text-left text-gray-100 transition-all duration-300 ease-in-out shadow-lg bg-opacity-20 hover:bg-gradient-to-r from-blue-400 to-purple-600 hover:text-white rounded-xl"
                                aria-label="User Portal"
                            >
                                <FiUserPlus className="w-6 h-6 mr-3" />
                                User Portal
                            </button>
                            {/* Logout Button */}
                            <button
                                onClick={handleLogout}
                                className="flex items-center w-full px-4 py-3 text-left text-gray-100 transition-all duration-300 ease-in-out shadow-lg bg-opacity-20 hover:bg-gradient-to-r from-blue-400 to-purple-600 hover:text-white rounded-xl"
                                aria-label="Logout"
                            >
                                <FiLogOut className="w-6 h-6 mr-3" />
                                Logout
                            </button>
                        </div>
                    </nav>
                </div>
            </div>

            {/* Mobile Sidebar */}
            <div className="flex-shrink-0 w-full shadow-lg md:hidden bg-gradient-to-b from-gray-800 to-gray-900">
                <nav className="flex items-center justify-around px-4 py-2">
                <button
                        onClick={() => showView('userinfo')}
                        className="flex items-center px-4 py-3 text-gray-100 transition-all duration-300 ease-in-out shadow-lg bg-opacity-20 hover:bg-gradient-to-r from-blue-400 to-purple-600 hover:text-white rounded-xl"
                        aria-label="Add User"
                    >
                        <FiHome className="w-6 h-6" />
                    </button>
                    <button
                        onClick={() => showView('addClient')}
                        className="flex items-center px-4 py-3 text-gray-100 transition-all duration-300 ease-in-out shadow-lg bg-opacity-20 hover:bg-gradient-to-r from-blue-400 to-purple-600 hover:text-white rounded-xl"
                        aria-label="Add User"
                    >
                        <FiUserPlus className="w-6 h-6" />
                    </button>
                    <button
                        onClick={() => showView('userPortal')}
                        className="flex items-center px-4 py-3 text-gray-100 transition-all duration-300 ease-in-out shadow-lg bg-opacity-20 hover:bg-gradient-to-r from-blue-400 to-purple-600 hover:text-white rounded-xl"
                        aria-label="User Portal"
                    >
                        <FiUserPlus className="w-6 h-6" />
                    </button>
                    <button
                        onClick={handleLogout}
                        className="flex items-center px-4 py-3 text-gray-100 transition-all duration-300 ease-in-out shadow-lg bg-opacity-20 hover:bg-gradient-to-r from-blue-400 to-purple-600 hover:text-white rounded-xl"
                        aria-label="Logout"
                    >
                        <FiLogOut className="w-6 h-6" />
                    </button>
                </nav>
            </div>

            {/* Main content */}
            <div className="flex-1 overflow-y-auto">
                <div className="flex items-center justify-between h-16 px-4 bg-white border-b border-gray-200 shadow-md">
                    <div className="flex items-center space-x-4">
                        {/* Toggle button for mobile */}
                        <button className="block text-gray-600 md:hidden hover:text-gray-800">
                            <FiHome />
                        </button>
                        {/* Search */}
                        <div className="relative w-full max-w-xs">
                            <input
                                className="w-full h-10 pl-4 pr-10 text-sm placeholder-current border border-gray-300 rounded-lg focus:outline-none"
                                type="search"
                                name="search"
                                placeholder="Search"
                            />
                            <button type="submit" className="absolute inset-y-0 right-0 flex items-center pr-3">
                                <FiSearch className="w-4 h-4 text-gray-600" />
                            </button>
                        </div>
                    </div>

                    {/* Profile and settings */}
                    <div className="relative mr-10">
                        <button
                            onClick={() => setShowProfile(!showProfile)}
                            className="flex items-center text-gray-600 hover:text-gray-800 focus:outline-none"
                            aria-label="Profile"
                        >
                            <FiUser className="w-6 h-6" />
                            <span className="hidden ml-2 font-bold md:inline">Profile</span>
                        </button>

                        {/* Profile Dropdown */}
                        {showProfile && (
                            <div className="absolute right-0 z-20 w-64 mt-2 bg-white border border-gray-300 rounded-lg shadow-lg">
                                {/* Profile Image */}
                                <div className="flex items-center p-4 space-x-4">
                                    <img
                                        className="w-10 h-10 rounded-full"
                                        src={profileImage}
                                        alt="Profile"
                                    />
                                    <div>
                                        <div className="text-sm font-bold text-gray-800">{profileName}</div>
                                        <div className="text-sm text-gray-600">{profileEmail}</div>
                                    </div>
                                </div>
                                <button
                                    onClick={handleEditClick}
                                    className="block w-full px-4 py-2 text-left text-gray-700 hover:bg-gray-100"
                                    aria-label="Edit Profile"
                                >
                                    <FiEdit className="inline w-5 h-5 mr-2" />
                                    Edit Profile
                                </button>
                                <button
                                    onClick={handleLogout}
                                    className="block w-full px-4 py-2 text-left text-gray-700 hover:bg-gray-100"
                                    aria-label="Logout"
                                >
                                    <FiLogOut className="inline w-5 h-5 mr-2" />
                                    Logout
                                </button>
                            </div>
                        )}
                    </div>
                </div>

                <div className="p-8">
                    <h1 className="text-3xl font-extrabold text-gray-800">Welcome to Dk Dashboard!</h1>
                    {activeView === 'userinfo' && <UserInfo />}
                    {activeView === 'addClient' && <AddClientForm/>}
                    {activeView === 'userPortal' && <UserPortal />}
                </div>
            </div>

            {/* Edit Profile Modal */}
            {isEditing && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="w-full max-w-lg p-6 bg-white rounded-lg shadow-lg">
                        <h2 className="mb-4 text-xl font-bold">Edit Profile</h2>
                        
                        <div>
                            <label className="block mb-2 font-semibold">Profile Image:</label>
                            <input
                                type="file"
                                accept="image/*"
                                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none"
                                onChange={handleImageUpload}
                            />
                        </div>
                        <div className="mt-4">
                            <label className="block mb-2 font-semibold">Name:</label>
                            <input
                                type="text"
                                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none"
                                value={profileName}
                                onChange={(e) => setProfileName(e.target.value)}
                                placeholder="Enter name"
                            />
                        </div>
                        <div className="mt-4">
                            <label className="block mb-2 font-semibold">Email:</label>
                            <input
                                type="email"
                                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none"
                                value={profileEmail}
                                onChange={(e) => setProfileEmail(e.target.value)}
                                placeholder="Enter email"
                            />
                        </div>
                        <div className="flex justify-end mt-6 space-x-2">
                            <button
                                onClick={() => setIsEditing(false)}
                                className="px-4 py-2 text-gray-600 bg-gray-200 rounded-md hover:bg-gray-300"
                                aria-label="Cancel Edit"
                            >
                                Cancel
                            </button>
                            <button
                                onClick={handleSaveProfile}
                                className="px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600"
                                aria-label="Save Profile"
                            >
                                Save
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Dashboard;
