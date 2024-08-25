import React from 'react';
import ReactDOM from 'react-dom';
import { MdCancel, MdCheckCircle } from 'react-icons/md';

const Model = ({ isOpen, onClose, onConfirm }) => {
    if (!isOpen) return null;

    return ReactDOM.createPortal(
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-500 bg-opacity-75 ">
            <div className="p-6 bg-white rounded-lg shadow-lg w-86">
                <div className="flex items-center justify-between ">
                    <h3 className="text-lg font-semibold">Confirm Deletion</h3>
                    <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
                        <MdCancel />
                    </button>
                </div>
                <p className="mt-4 text-gray-700">Are you sure you want to delete this client?</p>
                <div className="flex justify-end mt-4">
                    <button
                        onClick={onClose}
                        className="px-4 py-2 mr-2 text-gray-700 bg-gray-300 rounded-md"
                    >
                        Cancel
                    </button>
                    <button
                        onClick={onConfirm}
                        className="px-4 py-2 text-white bg-red-600 rounded-md"
                    >
                        <MdCheckCircle className="inline mr-2" /> Delete
                    </button>
                </div>
            </div>
        </div>,
        document.body
    );
};

export default Model;
