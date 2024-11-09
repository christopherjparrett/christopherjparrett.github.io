import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import necessary router components
import HomePage from './Pages/standardPage.js';  // Your home page component
import MobilePage from './Pages/mobilePage.js';  // Your mobile page component

const App = () => {
  return (
    <Router>  {/* Ensure Router is wrapping your entire app */}
      <Routes>
        <Route path="/" element={<HomePage />} />  {/* Route for homepage */}
        <Route path="/mobilePage" element={<MobilePage />} />  {/* Route for mobile page */}
      </Routes>
    </Router>
  );
};

export default App;