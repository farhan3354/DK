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

  return (
    <div className="flex justify-center items-center min-h-screen mb-8">
      <div>
        <div>
          <h1 className='font-bold text-yellow-500 text-7xl items-center ml-26 mt-10 mb-10'>Our Plans</h1>
        </div>
        <div className="grid grid-cols-1 gap-4 mb-4 sm:ml-0 md:ml-16 lg:ml-72">
        <Card cardData={cardDataArray[0]} onClick={handleOpenModal} />
        </div>

        {/* Second line with 2 cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
          <Card cardData={cardDataArray[0]} onClick={handleOpenModal} />
          <div onClick={handleOpenModal} className="card cursor-pointer sm:mr-0 md:mr-10 lg:mr-24">
            <h2 className='pl-10'>Golden Plans</h2>
          </div>
        </div>

        {/* Third line with 3 cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-4">
          <div onClick={handleOpenModal} className="card cursor-pointer sm:mr-0 md:mr-10 lg:mr-20">
            <h2>Sharing Plain</h2>
          </div>
          <div onClick={handleOpenModal} className="card cursor-pointer">
            <h2>Real Estate</h2>
          </div>
          <div onClick={handleOpenModal} className="card cursor-pointer">
            <h2>Car Financed</h2>
          </div>
        </div>

        {/* Fourth line with 2 cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div onClick={handleOpenModal} className="card cursor-pointer sm:ml-0 md:ml-16 lg:ml-32">
            <h2 className='pl-8'>One Million Plan</h2>
          </div>
          <div onClick={handleOpenModal} className="card cursor-pointer">
            <h2 className='pl-8'>Stock Market Plan</h2>
          </div>
      </div>
      <Modal isVisible={isModalVisible} content={modalContent} onClose={handleCloseModal} />
    </div>
  );
};

export default Plain;
