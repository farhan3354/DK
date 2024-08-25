import React, { useState, useEffect } from 'react';

const Investor = () => {
    const projects = [
        {
            imagel: 'https://dkgroup.pk/wp-content/uploads/2024/03/crw_100h_100.webp',
        },
        {
            imagel: 'https://dkgroup.pk/wp-content/uploads/2024/03/crw_100h_100-3.webp',
        },
        {
            imagel: 'https://dkgroup.pk/wp-content/uploads/2024/03/crw_100h_100-2.webp',
        },
        {
            imagel: 'https://dkgroup.pk/wp-content/uploads/2024/03/crw_100h_100-1.webp',
        },
        {
            imagel: 'https://dkgroup.pk/wp-content/uploads/2024/03/crw_122h_100.webp',
        },
        {
            imagel: 'https://dkgroup.pk/wp-content/uploads/2024/03/crw_101h_100.webp',
        },
        {
            imagel: 'https://dkgroup.pk/wp-content/uploads/2024/03/crw_100h_100.webp',
        },
        {
            imagel: 'https://dkgroup.pk/wp-content/uploads/2024/03/crw_100h_100-3.webp',
        },
        {
            imagel: 'https://dkgroup.pk/wp-content/uploads/2024/03/crw_100h_100-2.webp',
        },
        {
            imagel: 'https://dkgroup.pk/wp-content/uploads/2024/03/crw_100h_100-1.webp',
        },
        {
            imagel: 'https://dkgroup.pk/wp-content/uploads/2024/03/crw_122h_100.webp',
        },
        {
            imagel: 'https://dkgroup.pk/wp-content/uploads/2024/03/crw_101h_100.webp',
        },
        {
            imagel: 'https://dkgroup.pk/wp-content/uploads/2024/03/crw_100h_100-2.webp',
        },
        {
            imagel: 'https://dkgroup.pk/wp-content/uploads/2024/03/crw_100h_100-1.webp',
        },
        {
            imagel: 'https://dkgroup.pk/wp-content/uploads/2024/03/crw_122h_100.webp',
        },
        {
            imagel: 'https://dkgroup.pk/wp-content/uploads/2024/03/crw_101h_100.webp',
        },
        // Add more projects as needed
    ];

    const [currentSet, setCurrentSet] = useState(0);
    const slidesPerRow = 4; // Number of slides to show per row

    const totalRows = Math.ceil(projects.length / slidesPerRow);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSet((prevSet) => (prevSet + 1) % totalRows);
        }, 2000); // Change row every 2 seconds

        return () => clearInterval(interval);
    }, [totalRows]);

    return (
        <div className="flex justify-center items-center">
            <div className="container mx-auto px-4 md:px-24 my-16">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    {projects
                        .slice(currentSet * slidesPerRow, (currentSet + 1) * slidesPerRow)
                        .map((project, index) => (
                            <div key={index} className="bg-white">
                                <div className="relative flex justify-center items-center">
                                    <div className="overflow-hidden w-32 h-32 flex items-center justify-center p-4">
                                        <img
                                            className="w-full h-full object-cover rounded"
                                            src={project.imagel}
                                            alt="Investor"
                                        />
                                    </div>
                                    <div className="absolute inset-0 bg-black opacity-0 hover:opacity-50 transition duration-300"></div>
                                </div>
                            </div>
                        ))}
                </div>
            </div>
        </div>
    );
};

export default Investor;
