import React, { useState, useEffect } from 'react';

const Team = () => {
    const projects = [
        {
            imageUrl: 'https://dkgroup.pk/wp-content/uploads/2024/03/WhatsApp-Image-2024-03-15-at-11.32.16_1eaa5554.jpg',
            title: "Umer Mirza",
            description: "Lead Developer"
        },
        {
            imageUrl: 'https://dkgroup.pk/wp-content/uploads/2024/03/Akasha-1024x1024.jpg',
            title: "Akasha",
            description: "Designer"
        },
        {
            imageUrl: 'https://dkgroup.pk/wp-content/uploads/2024/03/PXL_20240306_1257328522-967x1024.jpg',
            title: "Yashwa",
            description: "Project Manager"
        },
        {
            imageUrl: 'https://dkgroup.pk/wp-content/uploads/2024/03/PXL_20240306_1256075102-963x1024.jpg',
            title: "Nouman Rauf",
            description: "Marketing Specialist"
        },
        {
            imageUrl: 'https://dkgroup.pk/wp-content/uploads/2024/03/WhatsApp-Image-2024-03-15-at-11.32.16_1eaa5554.jpg',
            title: "Umer Mirza",
            description: "Lead Developer"
        },
        {
            imageUrl: 'https://dkgroup.pk/wp-content/uploads/2024/03/Akasha-1024x1024.jpg',
            title: "Akasha",
            description: "Designer"
        },
        // Add more projects as needed
    ];

    const [currentSet, setCurrentSet] = useState(0);
    const slidesPerPage = 3; // Number of slides to show per set

    const totalSets = Math.ceil(projects.length / slidesPerPage);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSet((prevSet) => (prevSet + 1) % totalSets);
        }, 5000); // Change set every 5 seconds

        return () => clearInterval(interval);
    }, [totalSets]);

    return (
        <div className="bg-gray-100 py-12">
            <div className="container mx-auto px-4 md:px-24">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold text-gray-900">Meet Our Team</h2>
                    <p className="text-lg text-gray-700 mt-2">A talented group dedicated to innovation and excellence.</p>
                </div>
                <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
                    {projects
                        .slice(currentSet * slidesPerPage, (currentSet + 1) * slidesPerPage)
                        .map((project, index) => (
                            <div key={index} className="bg-white rounded-lg overflow-hidden shadow-lg p-24 ">
                                <div className="relative">
                                    <div className="overflow-hidden rounded-full w-40 h-40 mx-auto -mt-20">
                                        <img
                                            className="w-full h-full object-cover object-center"
                                            src={project.imageUrl}
                                            alt="Team Member"
                                        />
                                    </div>
                                    <div className="absolute inset-0 bg-black opacity-0 hover:opacity-50 transition duration-300"></div>
                                    <div className="absolute bottom-0 left-0 p-4 text-white">
                                        <h3 className="text-xl font-semibold">{project.title}</h3>
                                        <p className="text-sm">{project.description}</p>
                                    </div>
                                </div>
                                <div className="p-4">
                                    <button className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600 transition duration-300">View Profile</button>
                                </div>
                            </div>
                        ))}
                </div>
            </div>
        </div>
    );
};

export default Team;
