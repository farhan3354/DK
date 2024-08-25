import React from 'react';

const TreeCard = ({ title, content }) => {
  return (
    <div className="w-60 h-32 mt-8 bg-gray-100 border border-gray-300 rounded-lg shadow-md text-center">
      <div className="text-xl font-semibold mb-3">{title}</div>
      <div className="text-base">{content}</div>
    </div>
  );
};

const Tree = () => {
  return (
    <div className="flex flex-col items-center">
      {/* Root */}
      <div className="mb-16">
        <TreeCard title="Root" content="Root Node" />
      </div>
      
      {/* First level children */}
      <div className="flex justify-center items-end mb-16">
        <div className="flex flex-col items-center mx-12">
          <TreeCard title="Child 1" content="Child Node 1" />
          <div className="border-l border-gray-300 h-50 mt-3"></div>
        </div>
        <div className="flex flex-col items-center mx-12 ">
          <TreeCard title="Child 2" content="Child Node 2" />
          <div className="border-l border-gray-300 h-50 mt-3"></div>
        </div>
      </div>

    
    </div>
  );
};

export default Tree;
