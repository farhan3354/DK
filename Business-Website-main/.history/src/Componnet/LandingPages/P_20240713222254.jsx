import React from 'react';

const P = () => {
  return (
    <div className="relative bg-amber-100 h-screen flex justify-center items-center">
      <div className="relative z-10">
        <div className="bg-amber-100 flex justify-center items-center">
          <img
            className="w-2/3 h-auto transform -translate-y-1/4" // Adjust width and position
            src="https://dkgroup.pk/wp-content/uploads/2024/03/Screenshot_2024-02-29_at_17-17-52_funnel.pdf-removebg-preview.png"
            alt="Project Image"
          />
        </div>
      </div>
    </div>
  );
};

export default P;
