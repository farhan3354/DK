import React from 'react';
import { Link } from 'react-router-dom';

const Pricing = () => {
  return (
    <div className='flex items-center justify-center bg-gradient-to-b from-yellow-100 via-white to-yellow-100'>
      <div className="text-center">
        <h1 className="text-5xl font-bold mb-4 m-12 text-yellow-500">Pricing</h1>
        <p className="mb-4">
          DK Group offers competitive pricing structures tailored to client needs,<br/> ensuring affordability and value across its comprehensive range of financial services.
        </p>
        {/* Add your additional content here */}
      </div>
    </div>
  );
};

export default Pricing;
