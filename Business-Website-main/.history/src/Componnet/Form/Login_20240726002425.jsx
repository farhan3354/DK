import React from 'react';

const TreeCard = ({ title, content }) => {
  return (
    <div
      className="tree-card"
      data-aos="zoom-in" /* AOS animation effect */
      data-aos-duration="1000" /* Duration of animation */
    >
      <div className="tree-card-content">
        <div className="tree-card-title">{title}</div>
        <div className="tree-card-text">{content}</div>
      </div>
    </div>
  );
};

const Tree = () => {
  return (
    <div className="tree-container">
      {/* Root */}
      <div className="tree-node-container" data-aos="fade-up">
        <TreeCard title="Root" content="Root Node" />
      </div>

      {/* First level children */}
      <div className="tree-level">
        <div className="tree-node-container" data-aos="fade-up" data-aos-delay="200">
          <TreeCard title="Child 1" content="Child Node 1" />
        </div>
        <div className="tree-node-container" data-aos="fade-up" data-aos-delay="400">
          <TreeCard title="Child 2" content="Child Node 2" />
        </div>
      </div>

      {/* Second level children */}
      <div className="tree-level">
        <div className="tree-node-container" data-aos="fade-up" data-aos-delay="600">
          <TreeCard title="Grandchild 1" content="Grandchild Node 1" />
        </div>
        <div className="tree-node-container" data-aos="fade-up" data-aos-delay="800">
          <TreeCard title="Grandchild 2" content="Grandchild Node 2" />
        </div>
        <div className="tree-node-container" data-aos="fade-up" data-aos-delay="1000">
          <TreeCard title="Grandchild 3" content="Grandchild Node 3" />
        </div>
      </div>

      {/* Third level children */}
      <div className="tree-level">
        <div className="tree-node-container" data-aos="fade-up" data-aos-delay="1200">
          <TreeCard title="Great-Grandchild 1" content="Great-Grandchild Node 1" />
        </div>
        <div className="tree-node-container" data-aos="fade-up" data-aos-delay="1400">
          <TreeCard title="Great-Grandchild 2" content="Great-Grandchild Node 2" />
        </div>
      </div>
    </div>
  );
};

export default Tree;
