import React from 'react';
import { Nav } from 'react-bootstrap';
import { HouseDoorFill, PersonFill, GearFill, BoxArrowRight } from 'react-bootstrap-icons'; // Example icons
import './Sidebar.css'; // We'll create this CSS file next

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <Nav
      className={`sidebar bg-dark ${isOpen ? 'open' : ''}`} // Apply 'open' class conditionally
      activeKey="/home"
      onSelect={selectedKey => alert(`selected ${selectedKey}`)} // Example action
    >
      {/* Optional: Add a close button inside the sidebar for mobile */}
      <button className="close-btn d-md-none" onClick={toggle}>×</button>

      <div className="sidebar-sticky pt-3">
        <Nav.Item>
          <Nav.Link href="/home" className="text-white">
            <HouseDoorFill className="me-2" /> Dashboard
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="profile" className="text-white">
            <PersonFill className="me-2" /> Profile
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="settings" className="text-white">
            <GearFill className="me-2" /> Settings
          </Nav.Link>
        </Nav.Item>
      </div>
      <Nav.Item className="mt-auto mb-3"> {/* Push logout to bottom */}
          <Nav.Link eventKey="logout" className="text-white">
            <BoxArrowRight className="me-2" /> Logout
          </Nav.Link>
      </Nav.Item>
    </Nav>
  );
};

export default Sidebar;