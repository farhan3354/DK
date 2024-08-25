// Modal.jsx
import React from 'react';

const Modal = ({ isVisible, content, onClose }) => {
    if (!isVisible) return null;

    return (
        <div
            id="authentication-modal"
            className="fixed inset-0 z-50 flex justify-center items-center overflow-hidden bg-black bg-opacity-50"
        >
            <div className="relative bg-white rounded-lg shadow dark:bg-gray-700 max-w-md w-full p-4">
                <div className="flex items-center justify-between border-b p-4 dark:border-gray-600">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white pl-32">{content.title}</h3>
                    
                    <button
                        type="button"
                        onClick={onClose}
                        className="text-gray-400 hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                        <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                        </svg>
                        <span className="sr-only">Close modal</span>
                    </button>
                </div>
                <div className="p-4">
  <p>How are you</p>
  <table className="min-w-full border border-gray-300">
    <tbody>
      <tr>
        <td className="border border-gray-300 p-2">1000</td>
        <td className="border border-gray-300 p-2">2000</td>
      </tr>
      <tr>
        <td className="border border-gray-300 p-2">1000</td>
        <td className="border border-gray-300 p-2">2000</td>
      </tr>
      <tr>
        <td className="border border-gray-300 p-2">1000</td>
        <td className="border border-gray-300 p-2">2000</td>
      </tr>
      <tr>
        <td className="border border-gray-300 p-2">1000</td>
        <td className="border border-gray-300 p-2">2000</td>
      </tr>
      <tr>
        <td className="border border-gray-300 p-2">1000</td>
        <td className="border border-gray-300 p-2">2000</td>
      </tr>
      <tr>
        <td className="border border-gray-300 p-2">1000</td>
        <td className="border border-gray-300 p-2">2000</td>
      </tr>
    </tbody>
  </table>
  <button className="mt-4 pl-7 pr-9 pt-2 pb-3 bg-yellow-500 text-white rounded">Contact Us</button>
</div>


            </div>
        </div>
    );
};

export default Modal;
