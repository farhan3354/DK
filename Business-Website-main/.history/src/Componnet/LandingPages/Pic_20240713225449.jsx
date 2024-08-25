import React from 'react';

const images = [
  { id: 1, src: 'https://dkgroup.pk/wp-content/uploads/2024/03/project-coins-2-1024x442.png', alt: 'Image 1' },
  { id: 2, src: 'https://dkgroup.pk/wp-content/uploads/2024/03/Screenshot_2024-02-29_at_16-15-38_our_clients.pdf-removebg-preview.png', alt: 'Image 2' }
];

const teamMembers = [
  {
    id: 1,
    name: 'John Doe',
    role: 'CEO',
    bio: 'Experienced leader in the industry.',
    image: 'https://dkgroup.pk/wp-content/uploads/2024/03/team-member-1.jpg'
  },
  {
    id: 2,
    name: 'Jane Smith',
    role: 'CTO',
    bio: 'Expert in technology and innovation.',
    image: 'https://dkgroup.pk/wp-content/uploads/2024/03/team-member-2.jpg'
  },
  // Add more team members as needed
];

const Pic = () => {
  return (
    <div className="bg-yellow-100 py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center justify-center">
          <div className="space-y-6 md:order-2">
            <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">OUR TEAM</h2>
            <p className="text-lg text-gray-700">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably haven't heard of them.</p>
          </div>
          <div className="space-y-6 md:order-1">
            {images.map(image => (
              <img key={image.id} src={image.src} alt={image.alt} className="rounded-lg shadow-lg max-w-full h-auto" />
            ))}
          </div>
        </div>
        <div className="mt-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamMembers.map(member => (
              <div key={member.id} className="bg-white overflow-hidden shadow rounded-lg">
                <div className="p-6">
                  <img className="h-48 w-full object-cover object-center mb-6 rounded-lg" src={member.image} alt={member.name} />
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{member.name}</h3>
                  <p className="text-sm text-gray-700 mb-2">{member.role}</p>
                  <p className="text-sm text-gray-700">{member.bio}</p>
                  <div className="mt-4 flex justify-center space-x-4">
                    <a href="#" className="text-gray-500 hover:text-gray-700">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24">
                        <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                      </svg>
                    </a>
                    <a href="#" className="text-gray-500 hover:text-gray-700">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24">
                        <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                      </svg>
                    </a>
                    <a href="#" className="text-gray-500 hover:text-gray-700">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24">
                        <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pic;
