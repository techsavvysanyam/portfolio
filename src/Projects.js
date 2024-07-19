import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import './Projects.css';

function Projects() {
  return (
    <div className="projects-page">
      <Container>
        <Row className="header-section">
          <Col xs={12} className="text-center">
            <div className="logo-wrapper">
              <Image className="logo" src={require("./techsavvy-logo.png")} alt="Logo" />
            </div>
            <h1 className="projects-header-title">PROJECTS</h1>
          </Col>
        </Row>
        <Row className="projects-section">
          <Col xs={12}>
            <h2 className="projectSS">ANDROID PROJECTS</h2>
            <ul className="project-list">
              <li>
                <a href="https://github.com/Sanyamsoni77/Meme-Station" target="_blank" rel="noopener noreferrer">
                  - MEME STATION
                </a>
              </li>
              <li>
                <a href="https://github.com/Sanyamsoni77/MultiTableX" target="_blank" rel="noopener noreferrer">
                  - MultiTableX
                </a>
              </li>
              <li>
                <a href="https://github.com/Sanyamsoni77/Greetify" target="_blank" rel="noopener noreferrer">
                  - GREETIFY
                </a>
              </li>
              <li>
                <a href="https://github.com/Sanyamsoni77/Unit-Swap" target="_blank" rel="noopener noreferrer">
                  - UNIT SWAP
                </a>
              </li>
            </ul>
            <h2 className="projectSSS">WEB PROJECTS</h2>
            <ul className="project-list">
              <li>
                <a href="https://github.com/Sanyamsoni77/Online-RTO-PROJECT" target="_blank" rel="noopener noreferrer">
                  - ONLINE RTO MANAGEMENT SYSTEM
                </a>
              </li>
              <li>
                <a href="https://sanyamsoni77.github.io/Online-RTO-PROJECT/" target="_blank" rel="noopener noreferrer">
                  - VISIT THIS SITE
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Projects;
