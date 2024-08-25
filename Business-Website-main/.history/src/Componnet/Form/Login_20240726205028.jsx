import React, { useState } from 'react';
import './Login.css'; // Assuming you have some custom styles

const Login = () => {
  const [cards, setCards] = useState([
    { id: 1, title: 'Student Plan' },
    { id: 2, title: 'Student Plan' },
    { id: 3, title: 'Student Plan' },
    { id: 4, title: 'Student Plan' },
    { id: 5, title: 'Student Plan' },
    { id: 6, title: 'Student Plan' },
    { id: 7, title: 'Student Plan' },
    { id: 8, title: 'Student Plan' },
  ]);

  const changeCardTitle = (id) => {
    setCards(cards.map(card => card.id === id ? { ...card, title: 'Changed Title' } : card));
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div>
        {/* First line with 1 card */}
        <div className="grid grid-cols-1 gap-4 mb-4 ml-40">
          <div className="card" onClick={() => changeCardTitle(1)}>
            <h2>{cards[0].title}</h2>
          </div>
        </div>

        {/* Second line with 2 cards */}
        <div className="grid grid-cols-2 gap-4 mb-4">
          {cards.slice(1, 3).map(card => (
            <div key={card.id} className="card" onClick={() => changeCardTitle(card.id)}>
              <h2>{card.title}</h2>
            </div>
          ))}
        </div>

        {/* Third line with more cards */}
        <div className="grid grid-cols-3 gap-5 mb-4 mr-20">
          {cards.slice(3, 8).map(card => (
            <div key={card.id} className="card" onClick={() => changeCardTitle(card.id)}>
              <h2>{card.title}</h2>
            </div>
          ))}
        </div>

        {/* Fourth line with 2 cards */}
        <div className="grid grid-cols-2 gap-4">
          {cards.slice(8).map(card => (
            <div key={card.id} className="card" onClick={() => changeCardTitle(card.id)}>
              <h2>{card.title}</h2>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Login;
