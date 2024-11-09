import React from 'react';
import { useNavigate } from 'react-router-dom';

const MobilePage = () => {
  const navigate = useNavigate();

  const handleBackToHome = () => {
    // Remove the redirection flag so it doesn't redirect again
    navigate('/');
  };

  return (
    <div>
      <h1>Welcome to the Mobile Page</h1>
      <p>This page is not entirely optimized for mobile devices.</p>
      <p>For best experience please use a computer screen</p>
      <button onClick={handleBackToHome}>
        Okay, bring me back
      </button>
    </div>
  );
};

export default MobilePage;