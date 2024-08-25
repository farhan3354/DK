import React, { useState, useEffect } from 'react';

const Copy = () => {
    const projects = [
        {
            imagel: 'https://dkgroup.pk/wp-content/uploads/2024/03/WhatsApp-Image-2024-03-15-at-11.32.16_1eaa5554.jpg',
            title1: "Umer Mirza",
            description1: "Lead Developer"
        },
        {
            imagel: 'https://dkgroup.pk/wp-content/uploads/2024/03/Akasha-1024x1024.jpg',
            title1: "Akasha",
            description1: "Designer"
        },
        {
            imagel: 'https://dkgroup.pk/wp-content/uploads/2024/03/PXL_20240306_1257328522-967x1024.jpg',
            title1: "Yashwa",
            description1: "Project Manager"
        },
        {
            imagel: 'https://dkgroup.pk/wp-content/uploads/2024/03/PXL_20240306_1256075102-963x1024.jpg',
            title1: "Nouman Rauf",
            description1: "Marketing Specialist"
        },
        {
            imagel: 'https://dkgroup.pk/wp-content/uploads/2024/03/WhatsApp-Image-2024-03-15-at-11.32.16_1eaa5554.jpg',
            title1: "Umer Mirza",
            description1: "Lead Developer"
        },
        {
            imagel: 'https://dkgroup.pk/wp-content/uploads/2024/03/Akasha-1024x1024.jpg',
            title1: "Akasha",
            description1: "Designer"
        },
        {
            imagel: 'https://dkgroup.pk/wp-content/uploads/2024/03/Akasha-1024x1024.jpg',
            title1: "Akasha",
            description1: "Designer"
        },
        {
            imagel: 'https://dkgroup.pk/wp-content/uploads/2024/03/PXL_20240306_1257328522-967x1024.jpg',
            title1: "Yashwa",
            description1: "Project Manager"
        },
        {
            imagel: 'https://dkgroup.pk/wp-content/uploads/2024/03/PXL_20240306_1256075102-963x1024.jpg',
            title1: "Nouman Rauf",
            description1: "Marketing Specialist"
        },
    ];

    const [currentSet, setCurrentSet] = useState(0);
    const slidesPerPage = 3;

    const totalSets = Math.ceil(projects.length / slidesPerPage);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSet((prevSet) => (prevSet + 1) % totalSets);
        }, 2000);

        return () => clearInterval(interval);
    }, [totalSets]);

    const handleDotClick = (index) => {
        setCurrentSet(index);
    };

    return (
        <div className="container px-4 m-16 mx-auto md:px-24">
            <div className="p-4 mx-4 sm:p-6 md:p-8 lg:p-12 sm:mx-8 md:mx-12 lg:mx-36">
                <h2 className="text-2xl font-bold text-black sm:text-3xl md:text-4xl">Our Legend</h2>
                <p className="mt-2 text-base text-gray-700 sm:text-lg md:text-xl">
                    A passionate legend committed to delivering excellence.
                </p>
            </div>

            <div className="overflow-x-hidden no-scrollbar">
                <div className="flex gap-8 sm:grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                    {projects
                        .slice(currentSet * slidesPerPage, (currentSet + 1) * slidesPerPage)
                        .map((project, index) => (
                            <div key={index} className="flex-shrink-0 overflow-hidden bg-yellow-400 rounded-lg shadow-lg w-72 sm:w-96 md:w-full lg:w-auto">
                                <div className="relative flex items-center justify-center">
                                    <div className="flex items-center justify-center p-8 overflow-hidden rounded-full w-80 h-80">
                                        <img
                                            className="object-cover object-center w-full h-full rounded-full"
                                            src={project.imagel}
                                            alt="Team Member"
                                        />
                                    </div>
                                    <div className="absolute inset-0 transition duration-300 bg-black opacity-0 hover:opacity-50"></div>
                                </div>
                                <div className="p-5 text-center bg-yellow-300">
                                    <h3 className="mt-2 text-xl font-semibold">{project.title1}</h3>
                                    <p className="mt-2 text-sm">{project.description1}</p>
                                    <button className="px-4 py-2 mt-4 text-white transition duration-300 bg-black rounded-2xl hover:bg-green-600 focus:outline-none focus:bg-green-600">View Profile</button>
                                </div>
                            </div>
                        ))}
                </div>
            </div>

            <div className="flex justify-center mt-4">
                {Array.from({ length: totalSets }, (_, index) => (
                    <button
                        key={index}
                        onClick={() => handleDotClick(index)}
                        className={`w-3 h-3 mx-1 rounded-full ${currentSet === index ? 'bg-black' : 'bg-gray-400'}`}
                    />
                ))}
            </div>
        </div>
    );
};

export default Copy;
