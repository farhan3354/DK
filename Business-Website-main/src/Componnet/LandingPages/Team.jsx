
import React, { useState, useEffect } from 'react';

const Team = () => {
    const projects = [
        {
            imagel: 'https://dkgroup.pk/wp-content/uploads/2024/03/WhatsApp-Image-2024-03-15-at-11.32.16_1eaa5554.jpg',
            title1: "Umer Mirza",
        },
        {
            imagel: 'https://dkgroup.pk/wp-content/uploads/2024/03/Akasha-1024x1024.jpg',
            title1: "Akasha",
        },
        {
            imagel: 'https://dkgroup.pk/wp-content/uploads/2024/03/PXL_20240306_1257328522-967x1024.jpg',
            title1: "Yashwa",
        },
        {
            imagel: 'https://dkgroup.pk/wp-content/uploads/2024/03/PXL_20240306_1256075102-963x1024.jpg',
            title1: "Nouman Rauf",
        },
        {
            imagel: 'https://dkgroup.pk/wp-content/uploads/2024/03/WhatsApp-Image-2024-03-15-at-11.32.16_1eaa5554.jpg',
            title1: "Umer Mirza",
        },
        {
            imagel: 'https://dkgroup.pk/wp-content/uploads/2024/03/Akasha-1024x1024.jpg',
            title1: "Akasha",
        },
        {
            imagel: 'https://dkgroup.pk/wp-content/uploads/2024/03/Akasha-1024x1024.jpg',
            title1: "Akasha",
        },
        {
            imagel: 'https://dkgroup.pk/wp-content/uploads/2024/03/PXL_20240306_1257328522-967x1024.jpg',
            title1: "Yashwa",
        },
        {
            imagel: 'https://dkgroup.pk/wp-content/uploads/2024/03/PXL_20240306_1256075102-963x1024.jpg',
            title1: "Nouman Rauf",
        },
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

    const handleDotClick = (index) => {
        setCurrentSet(index);
    };

    return (
        <div className="p-8 bg-white">
            <div className="container px-4 mx-auto md:px-24">
                <div className="overflow-hidden">
                    <div className="flex justify-center gap-8 flex-nowrap">
                        {projects
                            .slice(currentSet * slidesPerPage, (currentSet + 1) * slidesPerPage)
                            .map((project, index) => (
                                <div
                                    key={index}
                                    className="flex-shrink-0 w-64 mb-4 overflow-hidden border-2 border-yellow-500 rounded-lg shadow-lg sm:w-1/2 lg:w-1/4 xl:w-1/5"
                                >
                                    <div className="relative flex items-center justify-center">
                                        <div className="overflow-hidden rounded-full w-[120%] h-80 flex items-center justify-center p-8">
                                            <img
                                                className="object-cover object-center w-full h-full rounded-full"
                                                src={project.imagel}
                                                alt="Team Member"
                                            />
                                        </div>
                                        <div className="absolute inset-0 transition duration-300 bg-black opacity-0 hover:opacity-50"></div>
                                    </div>
                                    <div className="p-5 text-center">
                                        <h3 className="mt-2 text-xl font-semibold">{project.title1}</h3>
                                    </div>
                                </div>
                            ))}
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
            </div>
        </div>
    );
};

export default Team;
