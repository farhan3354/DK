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
        }, 2000); // Change set every 5 seconds

        return () => clearInterval(interval);
    }, [totalSets]);

    return (
        <div className="">
            <div className="container mx-auto px-4 md:px-24">
                <div className="m-8 ml-20 ">
                    <h2 className="text-4xl font-bold text-black  ">Meet Our Team</h2>
                    <p className="text-lg text-gray-700 mt-2 ">A talented group dedicated to innovation and excellence.</p>
                </div>
                <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                    {projects
                        .slice(currentSet * slidesPerPage, (currentSet + 1) * slidesPerPage)
                        .map((project, index) => (
                            <div key={index} className="bg-gray-200 rounded-lg overflow-hidden shadow-lg">
                                <div className="relative flex justify-center items-center">
                                    <div className="overflow-hidden rounded-full w-80 h-80 flex items-center justify-center p-8">
                                        <img
                                            className="w-full h-full object-cover object-center rounded-full"
                                            src={project.imageUrl}
                                            alt="Team Member"
                                        />
                                    </div>
                                    <div className="absolute inset-0 bg-black opacity-0 hover:opacity-50 transition duration-300"></div>
                                </div>
                                <div className="p-10 text-center">
                                    <h3 className="text-xl font-semibold mt-2">{project.title}</h3>
                                    <p className="text-sm mt-2">{project.description}</p>
                                    <button className="bg-yellow-500 text-white py-2 px-4 rounded-md hover:bg-yellow-600 focus:outline-none focus:bg-yellow-600 mt-4 transition duration-300">View Profile</button>
                                </div>
                            </div>
                        ))}
                </div>
            </div>
        </div>
    );
};

export default Team;
