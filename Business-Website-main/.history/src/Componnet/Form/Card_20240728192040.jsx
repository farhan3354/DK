// Card.jsx
import React from 'react';

const Card = ({ cardData, onClick }) => {
    return (
        <div className="card cursor-pointer" onClick={() => onClick(cardData)}>
            <h2>{cardData.title}</h2>
        </div>
    );
};

export default Card;
