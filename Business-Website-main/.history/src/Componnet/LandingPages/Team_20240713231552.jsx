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
    <section className="py-5 bg-gray-100">
      <div className="container">
        <h2 className="text-3xl font-bold text-center mb-8">Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {teamMembers.map(member => (
            <div key={member.id} className="bg-white shadow-md rounded-lg overflow-hidden">
              <img src={member.image} alt={member.name} className="w-full h-48 object-cover object-center" />
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
