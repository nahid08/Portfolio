import React from 'react';
import './MainContent.css'; // We'll create this CSS file
import AboutMyself from './components/AboutMyself/AboutMysefl'; 
import Experience from './components/Experience/Experience';
import Education from './components/Education/Education';
import Skills from './components/Skills/Skills';
import { Container, Row, Col, Navbar, Button, Nav } from 'react-bootstrap';
import ExtraCurricular from './components/ExtraCurricular/ExtraCurricular';
import Achievements from './components/Achievements/Achievements';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function MainContent({onGreet}) {
  return (
     <Container  className="main-container">
      <Navbar className="d-md-none topbar-style" fixed="top">
                        <Container >
                          <Button onClick={onGreet}>
                            <FontAwesomeIcon icon={faBars}/>
                          </Button>
                        </Container>
      </Navbar>
      <Row>
        <Col>
        <section id="about"><AboutMyself/></section>
        </Col>
      </Row>

      <Row>
        <Col>
       <section id="experience"><Experience/></section>
        </Col>
      </Row>

      <Row>
        <Col>
       <section id="education"><Education/></section>
        </Col>
      </Row>

      <Row>
        <Col>
       <section id="skills"><Skills/></section>
        </Col>
      </Row>

      <Row>
        <Col>
       <section id="programming"><ExtraCurricular/></section>
        </Col>
      </Row>

      <Row>
        <Col>
       <section id="achievements"><Achievements/></section>
        </Col>
      </Row>
     </Container>
  );
}

export default MainContent;