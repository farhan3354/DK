import React from 'react';

const TreeCard = ({ title, content }) => {
  return (
    <div className="w-40 p-4 bg-gray-100 border border-gray-300 rounded-lg shadow-md text-center">
      <div className="text-lg font-semibold mb-2">{title}</div>
      <div className="text-sm">{content}</div>
    </div>
  );
};

const Tree = () => {
  return (
    <div className="flex flex-col items-center">
      {/* Root */}
      <div className="mb-12">
        <TreeCard title="Root" content="Root Node" />
      </div>
      
      {/* First level children */}
      <div className="flex justify-center items-end mb-12">
        <div className="flex flex-col items-center mx-8">
          <TreeCard title="Child 1" content="Child Node 1" />
          <div className="border-l border-gray-300 h-12 mt-2"></div>
        </div>
        <div className="flex flex-col items-center mx-8">
          <TreeCard title="Child 2" content="Child Node 2" />
          <div className="border-l border-gray-300 h-12 mt-2"></div>
        </div>
      </div>

      {/* Second level children */}
      <div className="flex justify-center items-end mb-12">
        <div className="flex flex-col items-center mx-6">
          <TreeCard title="Grandchild 1" content="Grandchild Node 1" />
          <div className="border-l border-gray-300 h-12 mt-2"></div>
        </div>
        <div className="flex flex-col items-center mx-6">
          <TreeCard title="Grandchild 2" content="Grandchild Node 2" />
          <div className="border-l border-gray-300 h-12 mt-2"></div>
        </div>
        <div className="flex flex-col items-center mx-6">
          <TreeCard title="Grandchild 3" content="Grandchild Node 3" />
        </div>
      </div>

      {/* Third level children */}
      <div className="flex justify-center items-end mb-12">
        <div className="flex flex-col items-center mx-4">
          <TreeCard title="Great-Grandchild 1" content="Great-Grandchild Node 1" />
        </div>
        <div className="flex flex-col items-center mx-4">
          <TreeCard title="Great-Grandchild 2" content="Great-Grandchild Node 2" />
        </div>
      </div>
    </div>
  );
};

export default Tree;
