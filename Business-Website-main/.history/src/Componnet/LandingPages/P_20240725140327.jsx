import React from 'react';
import Logo from '../../assets/section2.png'
const P = () => {
  return (
    <div>
      <div className="bg-gradient-to-b from-yellow-100 via-white to-yellow-100 flex justify-center items-center ">
        <img
          className="pl-50" 
          src={<Logo/>}
          alt="Project Image"
        />
      </div>
    </div>
  );
};

export default P;
