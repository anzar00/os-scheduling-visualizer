import React from 'react';  
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            
            <h1 className="text-4xl font-bold text-blue-600">OS Scheduling Algorithms</h1>
            
            <p className="mt-4 text-lg text-gray-700 text-center max-w-2xl">
                Operating System Scheduling Algorithms are crucial for efficient CPU utilization and system performance.
                These algorithms manage how processes are assigned to the CPI and executed, impacting waiting times, 
                turnaround times, and overall system efficiency. </p>
            
            <p className="mt-4 text-lg text-gray-700 text-center max-w-2xl">
                In this application, you will be able to explore and visualize various sich algorithms 
                like First Come First Serve (FCFS), Shortest Job First (SJF), Round Robin, and more. 
                Understand how each algorithm works and analyze its performance through simulations.
            </p>

            <div className="mt-6 flex space-x-4">
                <Link to="/algorithms" className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-700">
                Learn About Algorithms
                </Link>
                <Link to="/visualizer" className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-700">
                Go to Visualizer
                </Link>
            </div>

        </div>
    );
};

export default Home;