import React from 'react';

const TreeCard = ({ title, content }) => {
  return (
    <div className="tree-card">
      <div className="tree-card-content">
        <div className="tree-card-title">{title}</div>
        <div className="tree-card-text">
          {content.map((line, index) => (
            <p key={index}>{line}</p>
          ))}
        </div>
        <button className="tree-card-button">Learn More</button>
      </div>
    </div>
  );
};

const Tree = () => {
  const content1 = ["Line 1 of text Line 1 Line 1 of text Line 1 of textLine 1 of textLine 1 of textLine 1 of textLine 1 of text"];
  const content2 = ["Line 1 of textLine 1 of text"];
  // Define content for all cards similarly

  return (
    <div className="tree-container">
      {/* Root */}
      <div className="tree-node-container">
        <TreeCard title="Root" content={content1} />
      </div>

      {/* First level children */}
      <div className="tree-level">
        <div className="tree-node-container">
          <TreeCard title="Child 1" content={content1} />
        </div>
        <div className="tree-node-container">
          <TreeCard title="Child 2" content={content2} />
        </div>
      </div>

      {/* Second level children */}
      <div className="tree-level">
        <div className="tree-node-container">
          <TreeCard title="Grandchild 1" content={content1} />
        </div>
        <div className="tree-node-container">
          <TreeCard title="Grandchild 2" content={content2} />
        </div>
        <div className="tree-node-container">
          <TreeCard title="Grandchild 3" content={content1} />
        </div>
      </div>

      {/* Third level children */}
      <div className="tree-level">
        <div className="tree-node-container">
          <TreeCard title="Great-Grandchild 1" content={content1} />
        </div>
        <div className="tree-node-container">
          <TreeCard title="Great-Grandchild 2" content={content2} />
        </div>
      </div>
    </div>
  );
};

export default Tree;
