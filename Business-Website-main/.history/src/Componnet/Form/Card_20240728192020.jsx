// Card.jsx
import React from 'react';

const Card = ({ cardData, onClick }) => {
    return (
        <div className="card cursor-pointer" onClick={() => onClick(cardData)}>
            <h2></h2>
        </div>
    );
};

export default Card;
