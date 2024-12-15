import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom'; // Hook to access route location

const DynamicCSSLoader = () => {
  const location = useLocation(); // Get the current location/path

  useEffect(() => {
    console.log('Current path:', location.pathname);  // Log current path for debugging

    // Create link elements for mobile.css and app.css
    const mobileCssLink = document.createElement('link');
    mobileCssLink.rel = 'stylesheet';
    mobileCssLink.href = '/styles/Mobile.css';  // Ensure the path is correct
    mobileCssLink.id = 'mobile-css';  // Unique ID for mobile CSS

    const appCssLink = document.createElement('link');
    appCssLink.rel = 'stylesheet';
    appCssLink.href = '/styles/App.css';  // Ensure the path is correct
    appCssLink.id = 'app-css';  // Unique ID for app CSS

    // Function to safely append or remove stylesheets
    const loadStylesheet = () => {
      console.log('Loading stylesheet for path:', location.pathname); // Log when stylesheet is loaded

      const existingMobileCss = document.getElementById('mobile-css');
      const existingAppCss = document.getElementById('app-css');

      // Remove any previously loaded stylesheets
      if (existingMobileCss) {
        document.head.removeChild(existingMobileCss); // Remove mobile.css if it exists
      }
      if (existingAppCss) {
        document.head.removeChild(existingAppCss); // Remove app.css if it exists
      }

      // Load the appropriate stylesheet based on the current route
      if (location.pathname === '/mobilePage') {
        document.head.appendChild(mobileCssLink); // Append mobile.css
      } else {
        document.head.appendChild(appCssLink); // Append app.css
      }
    };

    loadStylesheet(); // Call the function to load the correct CSS

    // Cleanup: Remove stylesheets on route change or unmount
    return () => {
      if (document.head.contains(mobileCssLink)) {
        document.head.removeChild(mobileCssLink);
      }
      if (document.head.contains(appCssLink)) {
        document.head.removeChild(appCssLink);
      }
    };
  }, [location]); // Re-run effect when location changes

  return null; // This component doesn't render anything, just handles side effects
};

export default DynamicCSSLoader;
