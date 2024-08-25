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
    { title: 'Student Plan', tableData: [[1000, 2000], [1000, 2000], [1000, 2000], [1000, 2000]] },
    { title: 'Dk Share', tableData: [[3000, 4000], [3000, 4000], [3000, 4000], [3000, 4000]] },
    { title: 'Golden Plans', tableData: [[5000, 6000], [5000, 6000], [5000, 6000], [5000, 6000]] },
    { title: 'Sharing Plan', tableData: [[7000, 8000], [7000, 8000], [7000, 8000], [7000, 8000]] },
    { title: 'Real Estate', tableData: [[9000, 10000], [9000, 10000], [9000, 10000], [9000, 10000]] },
    { title: 'Car Financed', tableData: [[11000, 12000], [11000, 12000], [11000, 12000], [11000, 12000]] },
    { title: 'One Million Plan', tableData: [[13000, 14000], [13000, 14000], [13000, 14000], [13000, 14000]] },
    { title: 'Stock Market Plan', tableData: [[15000, 16000], [15000, 16000], [15000, 16000], [15000, 16000]] },
  ];

  return (
    <div className='bg-ye'>
     
      <div className="relative z-10 ">
        <h1 className="font-bold text-yellow-500 text-7xl text-center mt-10 mb-10">Our Plans</h1>
        <div className="grid grid-cols-1 gap-4 mb-4 sm:ml-0 md:ml-16 lg:ml-80">
          <Card cardData={cardDataArray[0]} onClick={handleOpenModal} />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-4 ml-32">
          <Card cardData={cardDataArray[1]} onClick={handleOpenModal} />
          <Card cardData={cardDataArray[2]} onClick={handleOpenModal} />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-32 mb-6">
          <Card cardData={cardDataArray[3]} onClick={handleOpenModal} />
          <Card cardData={cardDataArray[4]} onClick={handleOpenModal} />
          <Card cardData={cardDataArray[5]} onClick={handleOpenModal} />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 ml-32">
          <Card cardData={cardDataArray[6]} onClick={handleOpenModal} />
          <Card cardData={cardDataArray[7]} onClick={handleOpenModal} />
        </div>
      </div>
      <Modal isVisible={isModalVisible} content={modalContent} onClose={handleCloseModal} />
    </div>
  );
};

export default Plain;