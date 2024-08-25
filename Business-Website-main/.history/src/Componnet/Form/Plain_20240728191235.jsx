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
    { title: 'Sharing Plan', description: 'Description for Sharing Plan' }, // Corrected from 'Sharing Plain' to 'Sharing Plan'
    { title: 'Real Estate', description: 'Description for Real Estate' },
    { title: 'Car Financed', description: 'Description for Car Financed' },
    { title: 'One Million Plan', description: 'Description for One Million Plan' },
    { title: 'Stock Market Plan', description: 'Description for Stock Market Plan' },
  ];

  return (
    <div className="flex justify-center items-center min-h-screen mb-8">
      <div>
        <div>
          <h1 className='font-bold text-yellow-500 text-7xl text-center mt-10 mb-10'>Our Plans</h1>
        </div>
        <div className="grid grid-cols-1 gap-4 mb-4 sm:ml-0 md:ml-16 lg:ml-72">
          <Card cardData={cardDataArray[0]} onClick={handleOpenModal} />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4 ml-32">
          <Card cardData={cardDataArray[1]} onClick={handleOpenModal} />
          <Card cardData={cardDataArray[2]} onClick={handleOpenModal} />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-32  mb-4">
          <Card cardData={cardDataArray[3]} onClick={handleOpenModal} />
          <Card cardData={cardDataArray[4]} onClick={handleOpenModal} />
          <Card cardData={cardDataArray[5]} onClick={handleOpenModal} />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 ml-32">
          <Card cardData={cardDataArray[6]} onClick={handleOpenModal} />
          <Card cardData={cardDataArray[7]} onClick={handleOpenModal} />
        </div>
      </div>
      <Modal isVisible={isModalVisible} content={modalContent} onClose={handleCloseModal} />
    </div>
  );
};

export default Plain;
