import React from 'react';

// Example data for team members
const teamMembers = [
  {
    id: 1,
    name: 'Holden Caulfield',
    role: 'UI Developer',
    description: 'DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.',
    image: 'https://dummyimage.com/200x200'
  },
  // Add more team members as needed
];

const Team = () => {
  return (
    <section className="py-12 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map(member => (
            <div key={member.id} className="bg-white rounded-lg overflow-hidden shadow-md">
              <img src={member.image} alt={member.name} className="w-full h-56 object-cover object-center hover:opacity-75 transition-opacity duration-300" />
              <div className="p-4">
                <h3 className="text-xl font-bold mb-2">{member.name}</h3>
                <p className="text-gray-600 text-sm mb-2">{member.role}</p>
                <p className="text-gray-700">{member.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
