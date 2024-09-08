import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import App from './App';
import Algorithms from './components/Algorithms';  
import Visualizer from './components/Visualizer';  

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/algorithms" element={<Algorithms />} />
        <Route path="/visualizer" element={<Visualizer />} />
      </Routes>
    </Router>
  </React.StrictMode>,
);
