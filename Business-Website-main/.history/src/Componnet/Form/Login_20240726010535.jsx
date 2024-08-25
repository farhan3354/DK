import React from 'react';

const T = ({ title, content }) => {
  return (
    <div className="tree-card">
      <div className="tree-card-content tree-card-front">
        <div className="tree-card-title">{title}</div>
        <div className="tree-card-text">
          {content.map((line, index) => (
            <p key={index}>{line}</p>
          ))}
        </div>
        <button className="tree-card-button">Learn More</button>
      </div>
      <div className="tree-card-content tree-card-back">
        {/* Content for the back of the card */}
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

export default TreeCard;
