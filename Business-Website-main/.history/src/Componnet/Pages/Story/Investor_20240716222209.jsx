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
        <div className="">
            <div className="container mx-auto px-4 md:px-24 m-16">
                <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                    {projects
                        .slice(currentSet * slidesPerPage, (currentSet + 1) * slidesPerPage)
                        .map((project, index) => (
                            <div key={index} className="rounded-lg overflow-hidden shadow-lg bg-white">
                                <div className="relative flex justify-center items-center">
                                    <div className="overflow-hidden w-50 h-50 flex items-center justify-center p-4">
                                        <img
                                            className=""
                                            src={project.imagel}
                                            alt="Team Member"
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
