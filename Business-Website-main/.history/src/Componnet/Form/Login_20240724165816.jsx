import React, { useState } from 'react';
import { FaChevronDown, FaChevronRight } from 'react-icons/fa';

const TreeCardComponent = ({ data }) => {
  const [openNodes, setOpenNodes] = useState({});

  const toggleNode = (id) => {
    setOpenNodes((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const renderNode = (node, level = 0, index = 0) => {
    const nodeId = `node-${level}-${index}`;
    const isOpen = openNodes[nodeId];

    return (
      <div
        key={nodeId}
        className={`card bg-white p-4 shadow-lg rounded-lg mb-4 transition-all duration-300 ${level > 0 ? 'ml-8' : ''}`}
      >
        <div className="flex items-center justify-between">
          <span className="font-semibold text-lg text-gray-800">{node.label}</span>
          {node.children && node.children.length > 0 && (
            <button
              onClick={() => toggleNode(nodeId)}
              className="text-gray-500 hover:text-gray-700 transition-colors duration-200"
            >
              {isOpen ? <FaChevronDown size={20} /> : <FaChevronRight size={20} />}
            </button>
          )}
        </div>
        {isOpen && node.children && (
          <div className={`mt-4 ${level === 0 ? 'grid grid-cols-1 gap-4' : 'grid grid-cols-2 gap-6'}`}>
            {node.children.map((childNode, childIndex) =>
              renderNode(childNode, level + 1, childIndex)
            )}
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      {data.map((node, index) => renderNode(node, 0, index))}
    </div>
  );
};

export default Login;
