import React from 'react';

const Modal = ({ image, closeModal }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-80 backdrop-blur-sm flex items-center justify-center z-50 overflow-auto">
      <div className="relative bg-white rounded-lg shadow-lg max-w-3xl w-full">
        <button 
          className="absolute top-3 right-3 text-black bg-gray-200 rounded-full p-2 hover:bg-gray-300 transition duration-200"
          onClick={closeModal}
        >
          &times;
        </button>
        <div className="p-4">
          <img 
            src={image} 
            alt="Project full view" 
            className="w-full h-auto rounded-lg"
            style={{ objectFit: 'contain' }}
          />
        </div>
      </div>
    </div>
  );
};

export default Modal;
