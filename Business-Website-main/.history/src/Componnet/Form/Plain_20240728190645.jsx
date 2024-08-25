// Login.js
import React, { useState } from 'react';
import Modal from './Modal';
import Card from './Card';
import './Plan.css'; // Assuming you have some custom styles

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
    { title: 'Student Plan', description: 'Description for Student Plan' },
    { title: 'Dk Share', description: 'Description for Dk Share' },
    { title: 'Golden Plans', description: 'Description for Golden Plans' },
    { title: 'Sharing Plain', description: 'Description for Sharing Plain' },
    { title: 'Real Estate', description: 'Description for Real Estate' },
    { title: 'Car Financed', description: 'Description for Car Financed' },
    { title: 'One Million Plan', description: 'Description for One Million Plan' },
    { title: 'Stock Market Plan', description: 'Description for Stock Market Plan' },
  ];
<Card cardData={cardDataArray[0]} onClick={handleOpenModal} />
  return (
    <div className="flex justify-center items-center min-h-screen mb-8">
      <div>
        <div>
          <h1 className='font-bold text-yellow-500 text-7xl items-center ml-26 mt-10 mb-10'>Our Plans</h1>
        </div>
       
      </div>
      <Modal isVisible={isModalVisible} content={modalContent} onClose={handleCloseModal} />
    </div>
  );
};

export default Plain;
