import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-blue-600 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-white text-2xl font-bold">
          OS Scheduling App
        </Link>
        <div>
          <Link to="/algorithms" className="text-white px-4 py-2 hover:bg-blue-700 rounded">
            Algorithms
          </Link>
          <Link to="/visualizer" className="text-white px-4 py-2 hover:bg-blue-700 rounded">
            Visualizer
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
