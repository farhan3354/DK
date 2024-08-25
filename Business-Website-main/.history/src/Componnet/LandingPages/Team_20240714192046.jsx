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
        }, 2000); // Change set every 2 seconds

        return () => clearInterval(interval);
    }, [totalSets]);

    return (
        <div className="bg-gray-100 py-6">
            <div className="container mx-auto px-4 md:px-20">
                <div className="text-center mb-8">
                    <h2 className="text-3xl font-bold text-gray-800">Our Team</h2>
                </div>
                <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                    {projects
                        .slice(currentSet * slidesPerPage, (currentSet + 1) * slidesPerPage)
                        .map((project, index) => (
                            <div key={index} className="bg-white shadow-md rounded-lg overflow-hidden">
                                <img
                                    className="h-64 w-full object-cover object-center"
                                    src={project.imageUrl}
                                    alt="Project"
                                />
                                <div className="p-4">
                                    <h3 className="text-lg font-semibold text-gray-800 mb-2">{project.title}</h3>
                                    <p className="text-sm text-gray-600 mb-4">{project.description}</p>
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
