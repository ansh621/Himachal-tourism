import React from 'react';

const ArrowButton = ({ direction, onClick }) => {
  const isLeft = direction === 'left';

  return (
    <button
      className={`absolute top-1/2 ${isLeft ? 'left-4' : 'right-4'} transform -translate-y-1/2 bg-gradient-to-r ${isLeft ? 'from-gray-700 to-gray-900' : 'from-gray-900 to-gray-700'} text-white p-2 rounded-full shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer z-10`}
      onClick={onClick}
    >
      {isLeft ? (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
        </svg>
      ) : (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
        </svg>
      )}
    </button>
  );
};

export default ArrowButton;
