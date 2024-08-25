import React from 'react';
import { Link } from 'react-router-dom';

const Pricing = () => {
  return (
    <div className='flex items-center justify-center bg-gradient-to-b from-yellow-100 via-white to-yellow-100'>
      <div className="text-center">
        <h1 className="text-5xl font-bold mb-4 m-12 text-yellow-500">Pricing</h1>
        <p className="mb-4 text-sm">
          DK Group offers competitive pricing structures tailored to client needs<br/> ensuring affordability and value across its comprehensive<br/>  range of financial services.
        </p>
        {/* Add your additional content here */}
      </div>
      <div className="flex justify-around items-center">
      <div className="text-center">
        <img src="https://dkgroup.pk/wp-content/uploads/2024/03/div-1.png" alt="Send & Receive" />
        <p>Send & Receive</p>
      </div>
      <div className="text-center">
        <img src="https://dkgroup.pk/wp-content/uploads/2024/03/div-2.png" alt="Trading Charts" />
        <p>Trading Charts</p>
      </div>
      <div className="text-center">
        <img src="https://dkgroup.pk/wp-content/uploads/2024/03/div-3.png" alt="Wallet" />
        <p>Wallet</p>
      </div>
      <div className="text-center">
        <img src="https://dkgroup.pk/wp-content/uploads/2024/03/div-4.png" alt="Real Time Trading" />
        <p>Real Time Trading</p>
      </div>
    </div>
    </div>
  );
};

export default Pricing;
