import React from 'react';

const TreeCard = ({ title, content }) => {
  return (
    <div className="w-40 p-4 m-2 bg-gray-100 border border-gray-300 rounded-lg shadow-md text-center">
      <div className="text-lg font-semibold mb-2">{title}</div>
      <div className="text-sm">{content}</div>
    </div>
  );
};

const Tree = () => {
  return (
    <div className="flex flex-col items-center">
      {/* Root */}
      <div className="mb-8">
        <TreeCard title="Root" content="Root Node" />
      </div>
      
      {/* First level children */}
      <div className="flex justify-center mb-8">
        <div className="flex flex-col items-center">
          <TreeCard title="Child 1" content="Child Node 1" />
          <div className="border-l border-gray-300 h-12 mt-2"></div>
        </div>
        <div className="flex flex-col items-center mx-8">
          <TreeCard title="Child 2" content="Child Node 2" />
          <div className="border-l border-gray-300 h-12 mt-2"></div>
        </div>
      </div>

      {/* Second level children */}
      <div className="flex justify-center">
        <div className="flex flex-col items-center mx-4">
          <TreeCard title="Grandchild 1" content="Grandchild Node 1" />
          <div className="border-l border-gray-300 h-12 mt-2"></div>
        </div>
        <div className="flex flex-col items-center mx-4">
          <TreeCard title="Grandchild 2" content="Grandchild Node 2" />
          <div className="border-l border-gray-300 h-12 mt-2"></div>
        </div>
        <div className="flex flex-col items-center mx-4">
          <TreeCard title="Grandchild 3" content="Grandchild Node 3" />
          <div className="border-l border-gray-300 h-12 mt-2"></div>
        </div>
        <div className="flex flex-col items-center mx-4">
          <TreeCard title="Grandchild 4" content="Grandchild Node 4" />
        </div>
      </div>
    </div>
  );
};

export default Tree;
