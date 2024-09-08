import React from 'react';

const Algorithms = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-blue-600">Scheduling Algorithms</h1>
      <p className="mt-4 text-lg text-gray-700 max-w-3xl">
        Here you will find detailed information about various OS scheduling algorithms. 
        This includes First Come First Serve (FCFS), Shortest Job First (SJF), 
        Round Robin (RR), Priority Scheduling, and more.
      </p>
      {/* Add more details or content here */}
    </div>
  );
};

export default Algorithms;
