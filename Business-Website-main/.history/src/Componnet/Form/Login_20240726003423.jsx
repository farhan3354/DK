import React from 'react';
import './Tree.css'; // Make sure to import the CSS file

const TreeCard = ({ title, content }) => {
  return (
    <div className="tree-card">
      <div className="tree-card-content">
        <div className="tree-card-title">{title}</div>
        <div className="tree-card-text">{content}</div>
      </div>
    </div>
  );
};

const Login= () => {
  return (
    <div className="tree-container">
      {/* Root */}
      <div className="tree-node mb-16">
        <TreeCard title="Root" content="Root Node" />
      </div>

      {/* First level children */}
      <div className="tree-level flex justify-center items-end mb-12">
        <div className="tree-node-container flex flex-col items-center mx-12 mr-32">
          <TreeCard title="Child 1" content="Child Node 1" />
          <div className="tree-connector"></div>
        </div>
        <div className="tree-node-container flex flex-col items-center mx-12">
          <TreeCard title="Child 2" content="Child Node 2" />
          <div className="tree-connector"></div>
        </div>
      </div>

      {/* Second level children */}
      <div className="tree-level flex justify-center items-end mb-10">
        <div className="tree-node-container flex flex-col items-center mx-8">
          <TreeCard title="Grandchild 1" content="Grandchild Node 1" />
          <div className="tree-connector"></div>
        </div>
        <div className="tree-node-container flex flex-col items-center mx-8">
          <TreeCard title="Grandchild 2" content="Grandchild Node 2" />
          <div className="tree-connector"></div>
        </div>
        <div className="tree-node-container flex flex-col items-center mx-8">
          <TreeCard title="Grandchild 3" content="Grandchild Node 3" />
        </div>
      </div>

      {/* Third level children */}
      <div className="tree-level flex justify-center items-end mb-16">
        <div className="tree-node-container flex flex-col items-center mx-80">
          <TreeCard title="Great-Grandchild 1" content="Great-Grandchild Node 1" />
        </div>
        <div className="tree-node-container flex flex-col items-center mr-24">
          <TreeCard title="Great-Grandchild 2" content="Great-Grandchild Node 2" />
        </div>
      </div>
      <div>
        <img className='h- w-full'
        src="https://img.freepik.com/premium-psd/picture-gold-coins-falling-from-white-background-with-white-background_176841-13357.jpg" alt="" />
      </div>
    </div>
  );
};

export default Login;
