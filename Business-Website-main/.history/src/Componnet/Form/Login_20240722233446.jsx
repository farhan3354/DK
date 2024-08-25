import React from 'react';

const projects = [
  { text: 'Through our innovative approach, we strive to provide monthly returns on investments, ensuring a steady income stream for our clients. Our focus on diversity, both in projects and digital assets, allows us to mitigate risks and maximize returns. With a dedication to excellence and a vision for social impact, we invite you to join us in rewriting the story of success through responsible investing.' },
  { text: 'Through our innovative approach, we strive to provide monthly returns on investments, ensuring a steady income stream for our clients. Our focus on diversity, both in projects and digital assets, allows us to mitigate risks and maximize returns. With a dedication to excellence and a vision for social impact, we invite you to join us in rewriting the story of success through responsible investing.' },
  { text: 'Through our innovative approach, we strive to provide monthly returns on investments, ensuring a steady income stream for our clients. Our focus on diversity, both in projects and digital assets, allows us to mitigate risks and maximize returns. With a dedication to excellence and a vision for social impact, we invite you to join us in rewriting the story of success through responsible investing.' },
  { text: 'Through our innovative approach, we strive to provide monthly returns on investments, ensuring a steady income stream for our clients. Our focus on diversity, both in projects and digital assets, allows us to mitigate risks and maximize returns. With a dedication to excellence and a vision for social impact, we invite you to join us in rewriting the story of success through responsible investing.' },
  { text: 'Project 2' },
  { text: 'Through our innovative approach, we strive to provide monthly returns on investments, ensuring a steady income stream for our clients. Our focus on diversity, both in projects and digital assets, allows us to mitigate risks and maximize returns. With a dedication to excellence and a vision for social impact, we invite you to join us in rewriting the story of success through responsible investing.' },
  { text: 'Project 2' },
  { text: 'Through our innovative approach, we strive to provide monthly returns on investments, ensuring a steady income stream for our clients. Our focus on diversity, both in projects and digital assets, allows us to mitigate risks and maximize returns. With a dedication to excellence and a vision for social impact, we invite you to join us in rewriting the story of success through responsible investing.' },
  { text: 'Project 2' },

];

const Projects = () => {
  return (
    <div
      className="relative w-full h-full py-10 px-4"
      style={{ backgroundImage: 'url("https://dkgroup.pk/wp-content/uptment-tree-811x1024.png")', backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
      <div className="container mx-auto">
        <div className="space-y-8">
          {/* First row: 1 card */}
          <div className="flex justify-center">
            <div className="p-6 bg-white border border-gray-300 rounded-lg shadow-lg w-80 h-60 flex flex-col items-center justify-center">
              <p className="text-lg text-center mb-4">{projects[0].text}</p>
              <button className="bg-blue-500 text-white py-2 px-4 rounded-lg">Learn More</button>
            </div>
          </div>

          {/* Second row: 2 cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pl-32">
            <div className="p-6 bg-white border border-gray-300 rounded-lg shadow-lg flex flex-col items-center justify-center">
              <p className="text-lg text-center mb-4">{projects[1].text}</p>
              <button className="bg-blue-500 text-white py-2 px-4 rounded-lg">Learn More</button>
            </div>
            <div className="p-6 bg-white border border-gray-300 rounded-lg shadow-lg flex flex-col items-center justify-center">
              <p className="text-lg text-center mb-4">{projects[2].text}</p>
              <button className="bg-blue-500 text-white py-2 px-4 rounded-lg">Learn More</button>
            </div>
          </div>

          {/* Third row: 3 cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-6 bg-white border border-gray-300 rounded-lg shadow-lg flex flex-col items-center justify-center">
              <p className="text-lg text-center mb-4">{projects[3].text}</p>
              <button className="bg-blue-500 text-white py-2 px-4 rounded-lg">Learn More</button>
            </div>
            <div className="p-6 bg-white border border-gray-300 rounded-lg shadow-lg flex flex-col items-center justify-center">
              <p className="text-lg text-center mb-4">{projects[4].text}</p>
              <button className="bg-blue-500 text-white py-2 px-4 rounded-lg">Learn More</button>
            </div>
            <div className="p-6 bg-white border border-gray-300 rounded-lg shadow-lg flex flex-col items-center justify-center">
              <p className="text-lg text-center mb-4">{projects[5].text}</p>
              <button className="bg-blue-500 text-white py-2 px-4 rounded-lg">Learn More</button>
            </div>
          </div>

          {/* Fourth row: 2 cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div className="p-6 bg-white border border-gray-300 rounded-lg shadow-lg flex flex-col items-center justify-center">
              <p className="text-lg text-center mb-4">{projects[6].text}</p>
              <button className="bg-blue-500 text-white py-2 px-4 rounded-lg">Learn More</button>
            </div>
            <div className="p-6 bg-white border border-gray-300 rounded-lg shadow-lg flex flex-col items-center justify-center">
              <p className="text-lg text-center mb-4">{projects[7].text}</p>
              <button className="bg-blue-500 text-white py-2 px-4 rounded-lg">Learn More</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
