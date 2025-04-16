import React from 'react';
import './MainContent.css'; // We'll create this CSS file
import AboutMyself from './components/AboutMyself/AboutMysefl'; 
import Experience from './components/Experience/Experience';
import Education from './components/Education/Education';
import Skills from './components/Skills/Skills';
import { Container, Row, Col } from 'react-bootstrap';

function MainContent() {
  return (
    <main className="main-content">
    <section id="about" className="section">
           <AboutMyself/>
        </section>
        <section id="experience" className="section">
          <Experience/>
        </section>
        <section id="education" className="section">
          <Education/>
        </section>
        <section id="skills" className="section">
          <Skills/>
        </section>
  </main>
  );
}

export default MainContent;