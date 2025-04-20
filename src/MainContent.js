import React from 'react';
import './MainContent.css'; // We'll create this CSS file
import AboutMyself from './components/AboutMyself/AboutMysefl'; 
import Experience from './components/Experience/Experience';
import Education from './components/Education/Education';
import Skills from './components/Skills/Skills';
import { Container, Row, Col } from 'react-bootstrap';
import ExtraCurricular from './components/ExtraCurricular/ExtraCurricular';
import Achievements from './components/Achievements/Achievements';

function MainContent() {
  return (
     <Container  className="main-container">
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
       <section id="extracurricular"><ExtraCurricular/></section>
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