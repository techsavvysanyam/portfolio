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
                  - Detetify: Offline Recognition & Detection 
                </a>
              </li>
              <li>
                <a href="https://github.com/Sanyamsoni77/Meme-Station" target="_blank" rel="noopener noreferrer">
                  - Meme Station: Instant Meme Hub
                </a>
              </li>
              <li>
                <a href="https://github.com/Sanyamsoni77/MultiTableX" target="_blank" rel="noopener noreferrer">
                  - MultiTableX: For Students Quick Table Finder
                </a>
              </li>
              <li>
                <a href="https://github.com/Sanyamsoni77/Greetify" target="_blank" rel="noopener noreferrer">
                  - Greetify: Birthday Card Maker - Type, Create, Celebrate 
                </a>
              </li>
            </ul>
            <h2 className="projectSSS">WEB PROJECTS</h2>
            <ul className="project-list">
            <li>
                <a href="https://portfolio-techsavyysanyam.vercel.app/" target="_blank" rel="noopener noreferrer">
                  - Personal Portfolio
                </a>
              </li>
              <li>
                <a href="https://github.com/Sanyamsoni77/Online-RTO-PROJECT" target="_blank" rel="noopener noreferrer">
                  - ONLINE RTO MANAGEMENT SYSTEM
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
