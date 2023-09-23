import React, { useState } from 'react';

export const Model = () => {
  

  

  return (
    <div className={`modal ${isOpen ? 'block' : 'hidden'}`}>
      <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
        <div className="bg-white w-[45rem] h-[10rem] flex flex-col items-center justify-evenly">
          <h1 className="text-2xl font-bold">TodoInput</h1>
          <input
            type="text"
            value={inputValue}
            onChange={handleInputChange}
            className='border border-violet-700 w-[90%] h-10'
          />
          <button
            className='bg-blue-500 w-[90%] h-10 text-white'
            onClick={handleRenderSubmit}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}
