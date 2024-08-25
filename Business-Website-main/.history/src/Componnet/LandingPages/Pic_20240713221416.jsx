import React from 'react';

const images = [
    { id: 1, src: 'https://dkgroup.pk/wp-content/uploads/2024/03/project-coins-2-1024x442.png', alt: 'Image 1' },
    { id: 2, src: 'https://dkgroup.pk/wp-content/uploads/2024/03/Screenshot_2024-02-29_at_16-15-38_our_clients.pdf-removebg-preview.png', alt: 'Image 2' }
];

const Pic = () => {
    return (
        <div className="bg-fefae0 flex justify-center items-center h-screen">
            <div className="space-x-4">
                {images.map((image) => (
                    <img key={image.id} src={image.src} alt={image.alt} className="w-90 h-auto" />
                ))}
            </div>
        </div>
    );
}

export default Pic;
