import React from 'react';
import Nav from 'react-bootstrap/Nav';
import { HouseDoorFill, BarChartFill, PeopleFill, GearFill } from 'react-bootstrap-icons'; // Example icons

function SidebarContent({closeSidebar}) {

  let sideMenues = [{id: "about", name: "ABOUT"}, {id: "experience", name: "EXPERIENCE"}, 
    {id: "education", name: "EDUCATION"}, {id: "skills", name: "SKILLS"}, {id: "programming", name: "PROGRAMMING"}, 
    {id: "achievements", name: "ACHIEVEMENTS"}];


  return (
    <Nav className="flex-column p-3"> {/* Use flex-column for vertical nav */}
      
      {sideMenues.map((menu) => (
        <Nav.Link href={`#${menu.id}`} onClick={closeSidebar} className="d-flex align-items-center justify-content-md-center mb-2">
            {menu.name}
      </Nav.Link>
      ))}
      {/* Add more links as needed */}
    </Nav>
  );
}

export default SidebarContent;