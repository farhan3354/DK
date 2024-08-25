import React from 'react';

const TreeCard = ({ title, content }) => {
  return (
    <div className="w-60 h-40 mt-8 bg-white border border-yellow-600 border-3 rounded-2xl shadow-md text-center">
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
      <div className="flex justify-center items-end mb-12 ">
        <div className="flex flex-col items-center mx-12 mr-32">
          <TreeCard title="Child 1" content="Child Node 1" />
          <div className="border-l border-gray-300 h-50 mt-16"></div>
        </div>
        <div className="flex flex-col items-center mx-12 ">
          <TreeCard title="Child 2" content="Child Node 2" />
          <div className="border-l border-gray-300 h-50 mt-3"></div>
        </div>
      </div>
  {/* Second level children */}
  <div className="flex justify-center items-end mb-12 ">
        <div className="flex flex-col items-center mx-8">
          <TreeCard title="Grandchild 1" content="Grandchild Node 1" />
          <div className="border-l border-gray-300 h-50 "></div>
        </div>
        <div className="flex flex-col items-center mx-8">
          <TreeCard title="Grandchild 2" content="Grandchild Node 2" />
          <div className="border-l border-gray-300 h-50 mt-16 "></div>
        </div>
        <div className="flex flex-col items-center mx-8">
          <TreeCard title="Grandchild 3" content="Grandchild Node 3" />
        </div>
      </div>

      {/* Third level children */}
      <div className="flex justify-center items-end mb-16">
        <div className="flex flex-col items-center mr-80 mx-10">
          <TreeCard title="Great-Grandchild 1" content="Great-Grandchild Node 1" />
        </div>
        <div className='  '>
        <div className="flex flex-col items-center  ">
          <TreeCard title="Great-Grandchild 2" content="Great-Grandchild Node 2" />
        </div>
        </div>
      </div>
    
    </div>
  );
};

export default Tree;
