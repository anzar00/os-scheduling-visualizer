import React from 'react';

const Visualizer = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-blue-600">Visualizer</h1>
      <p className="mt-4 text-lg text-gray-700 max-w-3xl">
        This is the visualizer section where you can simulate and compare different OS scheduling algorithms.
        Here you will be able to input data, run simulations, and see charts comparing various algorithms.
      </p>
      {/* Add visualizer components or content here */}
    </div>
  );
};

export default Visualizer;
