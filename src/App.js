import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { Navbar } from "react-bootstrap";
import Image from "react-bootstrap/Image";
import Offcanvas from "react-bootstrap/Offcanvas";
import { List } from "react-bootstrap-icons"; // Hamburger icon
import SidebarContent from "./SidebarContent"; // Import the reusable content
import "./App.css"; // For custom styles
import "bootstrap/dist/css/bootstrap.min.css";
import MainContent from "./MainContent";
import myself from "./assets/images/myself.jpg";

function App() {
  // State to control the Offcanvas visibility on small screens
  const [showOffcanvas, setShowOffcanvas] = useState(false);

  const handleOffcanvasClose = () => setShowOffcanvas(false);
  const handleOffcanvasShow = () => {
    setShowOffcanvas(true)
  };

  return (
    <>
      {/* Main Layout using Container, Row, Col */}
      <Container fluid>
        <Row>
          {/* --- Sidebar Column (visible on medium screens and up) --- */}
          {/*
             - `d-none d-md-block`: Hides the column on xs and sm screens, shows on md, lg, xl, xxl
             - `col-md-3 col-lg-2`: Defines column width for medium (3/12) and large (2/12) screens
             - `sidebar-sticky`: Custom class for potential sticky positioning and styling
          */}
          <Col
            md={3}
            lg={2}
            className="d-none d-md-block sidebar-sticky animated-gradient-background"
          >
            {/* --- Static Sidebar for Larger Screens --- */}
            <div className="sidebar-content">
              {" "}
              {/* Wrapper div */}
              {/* <h5 className="p-3 mb-0 border-bottom">My App</h5> */}
              <Image
                src={myself}
                fluid
                roundedCircle
                className="p-3 mb-0 border-bottom image-style w-100"
              />
              <SidebarContent />
            </div>
          </Col>

          {/* --- Main Content Column --- */}
          {/*
             - `col-12`: Takes full width on xs and sm screens (when sidebar Col is hidden)
             - `col-md-9 col-lg-10`: Takes remaining width on medium (9/12) and large (10/12) screens
             - `ms-sm-auto`: Adjusts margin slightly on small screens if needed (often automatic with Col)
             - `main-content`: Custom class for styling
          */}
          <Col xs={12} md={9} lg={10} className="main-content">
            <Row className="topbar-style">
              <Col>
              </Col>
            </Row>
            <Row>
              <Col>
                <MainContent onGreet={handleOffcanvasShow} />
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>

      {/* --- Offcanvas Sidebar (for small screens) --- */}
      {/*
          - `show`: Controls visibility based on state
          - `onHide`: Function to call when closing (clicking backdrop, close button)
          - `responsive="md"`: THIS IS KEY! It makes the Offcanvas *only* behave as an offcanvas *BELOW* the 'md' breakpoint. Above 'md', it doesn't render, letting the static Col sidebar take over.
          - `placement="start"`: Slides in from the left
      */}
      <Offcanvas
        show={showOffcanvas}
        onHide={handleOffcanvasClose}
        responsive="md" // Only act as Offcanvas below md breakpoint
        placement="start" // Slide from left
        className="bg-light" // Match background with static sidebar
        backdrop="static"
        scroll={true}
      >
        <Offcanvas.Header closeButton></Offcanvas.Header>
        <Offcanvas.Body className="p-0 d-md-none animated-gradient-background">
          {" "}
          {/* Remove padding to use SidebarContent's padding */}
          {/* --- Re-use the same sidebar content --- */}
          <SidebarContent closeSidebar={handleOffcanvasClose} />
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default App;
