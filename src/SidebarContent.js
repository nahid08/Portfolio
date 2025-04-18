import React from 'react';
import Nav from 'react-bootstrap/Nav';
import { HouseDoorFill, BarChartFill, PeopleFill, GearFill } from 'react-bootstrap-icons'; // Example icons

function SidebarContent() {
  return (
    <Nav className="flex-column p-3"> {/* Use flex-column for vertical nav */}
      <Nav.Link href="#about" className="d-flex align-items-center justify-content-md-center mb-2">
       About
      </Nav.Link>
      <Nav.Link href="#experience" className="d-flex align-items-center justify-content-md-center mb-2">
        Experience
      </Nav.Link>
      <Nav.Link href="#education" className="d-flex align-items-center justify-content-md-center mb-2">
        Education
      </Nav.Link>
      <Nav.Link href="#skills" className="d-flex align-items-center justify-content-md-center">
        Skills
      </Nav.Link>
      {/* Add more links as needed */}
    </Nav>
  );
}

export default SidebarContent;