import React from 'react';

const TreeCard = ({ title, content }) => {
  return (
    <div className="tree-card-container">
      <div className="tree-card tree-card-animate">
        {/* Front Side */}
        <div className="tree-card-front">
          <div className="tree-card-title">{title}</div>
          <div className="tree-card-text">
            {content.map((line, index) => (
              <p key={index}>{line}</p>
            ))}
          </div>
          <button className="tree-card-button">Learn More</button>
        </div>
        
        {/* Back Side */}
        <div className="tree-card-back">
          <div className="tree-card-title">{title}</div>
          <div className="tree-card-text">
            {content.map((line, index) => (
              <p key={index}>{line}</p>
            ))}
          </div>
          <button className="tree-card-button">Learn More</button>
        </div>
      </div>
    </div>
  );
};

const Tree = () => {
  const content = [
    "Line 1 of text",
    "Line 2 of text",
    "Line 3 of text",
    "Line 4 of text"
  ];

  return (
    <div className="tree-container">
      {/* Root */}
      <div className="tree-node-container">
        <TreeCard title="Root" content={content} />
      </div>

      {/* First level children */}
      <div className="tree-level">
        <div className="tree-node-container">
          <TreeCard title="Child 1" content={content} />
        </div>
        <div className="tree-node-container">
          <TreeCard title="Child 2" content={content} />
        </div>
      </div>

      {/* Second level children */}
      <div className="tree-level">
        <div className="tree-node-container">
          <TreeCard title="Grandchild 1" content={content} />
        </div>
        <div className="tree-node-container">
          <TreeCard title="Grandchild 2" content={content} />
        </div>
        <div className="tree-node-container">
          <TreeCard title="Grandchild 3" content={content} />
        </div>
      </div>

      {/* Third level children */}
      <div className="tree-level">
        <div className="tree-node-container">
          <TreeCard title="Great-Grandchild 1" content={content} />
        </div>
        <div className="tree-node-container">
          <TreeCard title="Great-Grandchild 2" content={content} />
        </div>
      </div>
    </div>
  );
};

export default Tree;
