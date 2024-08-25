// Login.js
import React, { useState } from 'react';
import Modal from './Modal';
import Card from './Card';
import './Plan.css'; // Assuming you have some custom styles
 import p1 from '../../assets/b3.png';

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

const backgroundImageStyle = {
   backgroundImage: `url(${p1})`,
    backgroundSize: '',
    backgroundPosition: 'center',
  
    backgroundRepeat: 'no-repeat',
   };

  return (
    <div style={backgroundImageStyle} className="flex justify-center items-center  ">
      <div>
        <div>
          <h1 className='font-bold text-yellow-500 text-7xl text-center mt-10 mb-10'>Our Plans</h1>
        </div>
       {/* / */}
      <Modal isVisible={isModalVisible} content={modalContent} onClose={handleCloseModal} />
    </div>
  );
};

export default Plain;
