import React, { useState, useEffect } from 'react';
import Sidebar from './Sidebar';
import MainContent from './MainContent';
import './App.css'; // We'll create this CSS file next
import 'bootstrap/dist/css/bootstrap.min.css';
import "@fontsource/poppins"; // Defaults to weight 400
import "@fontsource/poppins/400.css"; // Specify weight
import "@fontsource/poppins/400-italic.css"; // Specify weight and style
function App() {
  // State to manage sidebar visibility on smaller screens
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Function to toggle the sidebar
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  // Optional: Close sidebar if window is resized to be large
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsSidebarOpen(false); // Close sidebar when switching to large screen view
      }
    };
    window.addEventListener('resize', handleResize);
    // Cleanup listener on component unmount
    return () => window.removeEventListener('resize', handleResize);
  }, []);


  return (
    <div className={`app-container ${isSidebarOpen ? 'sidebar-open' : ''}`}>
      {/* Toggle Button (Hamburger Menu) - visible only on small screens */}
      <button className="sidebar-toggle" onClick={toggleSidebar} aria-label="Toggle sidebar">
        ☰ {/* You can replace this with an SVG icon */}
      </button>

      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />

      {/* Optional: Overlay to click and close sidebar on small screens */}
      {isSidebarOpen && <div className="overlay" onClick={toggleSidebar}></div>}

      <MainContent />
    </div>
  );
}

export default App;