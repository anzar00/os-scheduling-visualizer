import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import App from './App';
import Home from './components/Home';
import Algorithms from './components/Algorithms';
import Visualizer from './components/Visualizer';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="/algorithms" element={<Algorithms />} />
          <Route path="/visualizer" element={<Visualizer />} />
        </Route>
      </Routes>
    </Router>
  </React.StrictMode>,
);
