// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './Pages/standardPage';  // Your standard homepage component
import MobilePage from './Pages/mobilePage';  // Your mobile page component
import DynamicCSSLoader from './DynamicCSSLoader'; // Component responsible for dynamic CSS loading

const App = () => {
  return (
    <Router>
      {/* DynamicCSSLoader will dynamically load and unload the correct stylesheets */}
      <DynamicCSSLoader />

      {/* Define your Routes */}
      <Routes>
        <Route path="/mobilePage" element={<MobilePage />} />  {/* Route for mobile page */}
        <Route path="/standardPage" element={<HomePage />} />  {/* Route for standard homepage */}
        <Route path="/" element={<HomePage />} />  {/* Optional: Home route */}
      </Routes>
    </Router>
  );
};

export default App;
