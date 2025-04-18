import React from 'react';
import Nav from 'react-bootstrap/Nav';
import { HouseDoorFill, BarChartFill, PeopleFill, GearFill } from 'react-bootstrap-icons'; // Example icons

function SidebarContent() {
  return (
    <Nav className="flex-column p-3"> {/* Use flex-column for vertical nav */}
      <Nav.Link href="#about" className="d-flex align-items-center mb-2">
        <HouseDoorFill className="me-2" /> {/* Icon */}
        About
      </Nav.Link>
      <Nav.Link href="#experience" className="d-flex align-items-center mb-2">
        <BarChartFill className="me-2" />
        Experience
      </Nav.Link>
      <Nav.Link href="#users" className="d-flex align-items-center mb-2">
        <PeopleFill className="me-2" />
        Users
      </Nav.Link>
      <Nav.Link href="#settings" className="d-flex align-items-center">
        <GearFill className="me-2" />
        Settings
      </Nav.Link>
      {/* Add more links as needed */}
    </Nav>
  );
}

export default SidebarContent;