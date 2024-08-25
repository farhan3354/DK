import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center">
                    {/* Logo */}
                    <div className="flex-shrink-0">
                        <img className="h-8" src="path/to/your/logo.png" alt="Logo" />
                    </div>
                    
                    {/* Social Media Icons (Replace with actual icons or links) */}
                    <div className="flex space-x-4">
                        <a href="#" className="text-gray-400 hover:text-white">
                            <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                                {/* Replace with your social media icon */}
                                <path fillRule="evenodd" d="M12 2a10 10 0 00-3.16 19.49 10.17 10.17 0 005.14 1.37 9.76 9.76 0 006.33-2.24 9.89 9.89 0 002.54-6.7 9.5 9.5 0 00-.26-2.17h-3.34v1.7a1.43 1.43 0 01-1.34 1.56h-1.92v2.06h3.88a3.64 3.64 0 003.8-4.13v-.2a3.81 3.81 0 00-.47-1.8 3.54 3.54 0 00-1.27-1.21 5.08 5.08 0 00-1.87-.61 8.34 8.34 0 00-2.73-.09 11.47 11.47 0 00-2.77.92 5.09 5.09 0 00-2.1 1.77 5.78 5.78 0 00-.81 2.88 4.18 4.18 0 00.07.85 3.62 3.62 0 00.44 1.29 1.37 1.37 0 01-.16 1.5 1.47 1.47 0 01-1.35.47h-.43a1.43 1.43 0 01-1.48-1.52l.13-2.3a3.76 3.76 0 00-1.43-.08l-2.12.14c-.68.05-1.28.33-1.74.8A2.53 2.53 0 002 12.82a25 25 0 004 2.75 1.37 1.37 0 01.48.55l.63 1.57a1.44 1.44 0 01-1.3 1.93 7.33 7.33 0 01-2.18-.33 1.41 1.41 0 01-1.15-1.58 8.51 8.51 0 01.4-2.2 17.44 17.44 0 015.32-9.21 11.84 11.84 0 017.31-3.71 5.13 5.13 0 012.57.09 4.65 4.65 0 012.4 1.65 4.89 4.89 0 01.9 2.86 7.27 7.27 0 01-.08 1.12 2.15 2.15 0 01-.5 1.11 1.39 1.39 0 01-1.26.35 2.85 2.85 0 01-1.34-.94 1.49 1.49 0 01-.2-1.29c.23-.56.42-1.12.6-1.68a5.6 5.6 0 00.8-2.84 3.42 3.42 0 00-.27-1.17z"/>
                            </svg>
                        </a>
                        {/* Add more social media icons as needed */}
                    </div>
                </div>

                {/* Content */}
                <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                        <h3 className="text-lg font-semibold">JOIN OUR OF INVESTOR TODAY</h3>
                        <p className="text-gray-300 mt-2">DK Group insightful strategies and commitment to client success have transformed my portfolio, earning both trust and impressive returns.</p>
                        <button className="mt-4 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg">Join Now</button>
                    </div>
                    <nav className="text-base">
                        <ul>
                            <li><a href="/" className="text-gray-400 hover:text-white">Home</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white">Our Story</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white">Project</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white">Pricing</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white">Contact Us</a></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
