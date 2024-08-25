import React from 'react';
import './Tree.css';

const TreeCard = ({ title, content }) => {
  return (
    <div className="tree-card-wrapper">
      <div className="tree-card">
        <div className="tree-card-front">
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
        <div className="tree-card-back">
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
      </div>
    </div>
  );
};

export default TreeCard;
