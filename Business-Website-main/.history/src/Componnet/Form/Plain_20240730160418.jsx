// Plain.js
import React, { useState } from 'react';
import Modal from './Modal';
import Card from './Card';
import './Plan.css';

const Plain = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [modalContent, setModalContent] = useState({});

  const handleOpenModal = (cardData) => {
    setModalContent(cardData);
    setIsModalVisible(true);
  };

  const handleCloseModal = () => {
    setIsModalVisible(false);
  };

  const cardDataArray = [
    { title: 'Basic Plan', features: ['Fixed Profit On Investment', 'Secure Transactions', 'Transparent Returns', 'Diverse Portfolios', 'Withdraw Your Investment After 9 Months'], tableData: [[1000, 2000], [1000, 2000], [1000, 2000], [1000, 2000]] },
    { title: 'Pro Plan', features: ['Profit On Your Current Investment', 'Secure Transactions', 'Accessible Platform', 'Dedicated Support', 'Withdraw Your Investment After 9 Months'], tableData: [[3000, 4000], [3000, 4000], [3000, 4000], [3000, 4000]] },
    { title: 'Expert Plan', features: ['Flexible Withdrawals', 'Regulatory Compliance', 'Performance Tracking', 'Community Engagement', 'Withdraw Your Investment After 9 Months'], tableData: [[5000, 6000], [5000, 6000], [5000, 6000], [5000, 6000]] },
  ];

  return (
    <div>
      <div className="relative z-10">
        <h1 className="font-bold text-yellow-500 text-7xl text-center mt-10 mb-10">Our Plans</h1>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-4">
          {cardDataArray.map((cardData, index) => (
            <Card key={index} cardData={cardData} onClick={() => handleOpenModal(cardData)} />
          ))}
        </div>
      </div>
      <Modal isVisible={isModalVisible} content={modalContent} onClose={handleCloseModal} />
    </div>
  );
};

export default Plain;
