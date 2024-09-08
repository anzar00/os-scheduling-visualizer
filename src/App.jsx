import React from 'react';
import Navbar from './components/Navbar';
import { Outlet } from 'react-router-dom';

const App = () => {
  return (
    <div>
      <Navbar />
      <main className="p-6">
        <Outlet /> {/* This will render the matched route component */}
      </main>
    </div>
  );
};

export default App;
