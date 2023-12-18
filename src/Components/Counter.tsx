'use client'
import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className="bg-gray-200 p-4 rounded-md shadow-md max-w-xs mx-auto mt-8">
      <h2 className="text-2xl font-semibold mb-4 font-serif">Counter Component</h2>
      <div className="flex items-center">
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded-md mr-2 hover:bg-blue-700 focus:outline-none focus:ring focus:border-blue-300"
          onClick={() => setCount(count + 1)}
        >
          Click Meeeee
        </button>
        <div className="text-xl font-bold font-serif">{count}</div>
      </div>
    </div>
  );
}

export default Counter;
