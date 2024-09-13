// Layout.js
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import './Layout.css';

const Layout = ({ children }) => {
  return (
    <div className="app-layout">
      <Container>
        <Row className="header-section">
          <Col xs={6} className="text-left align-self-center">
            <div className="logo-wrapper">
              <img className="logo" src={require("./techsavvy-logo.png").default} alt="Logo" />
            </div>
            <div className="social-icons">
              <a href="https://www.facebook.com/sanyam.soni.14" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faFacebook} className="social-icon" />
              </a>
              <a href="https://twitter.com/techsavvysanyam" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faTwitter} className="social-icon" />
              </a>
              <a href="https://instagram.com/techsavvy.sanyam?igshid=MzNlNGNkZWQ4Mg==" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faInstagram} className="social-icon" />
              </a>
              <a href="https://github.com/Sanyamsoni77" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faGithub} className="social-icon" />
              </a>
              <a href="https://www.linkedin.com/in/sanyam-soni-405629241?fbclid=PAAaZEzAfGBldcPHb4d1RrQ41RL6atea562kjYrF66KhArucCnRDjCWDnuN88&original_referer=https%3A%2F%2Fl.instagram.com%2F" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faLinkedin} className="social-icon" />
              </a>
            </div>
          </Col>
          <Col xs={6} className="text-right align-self-center">
            <nav className="navbar landing-page-navbar">
              <ul className="navbar-list">
                <li className="navbar-item">
                  <Link to="/">Home</Link>
                </li>
                <li className="navbar-item">
                  <Link to="/qualifications">Qualifications</Link>
                </li>
                <li className="navbar-item">
                  <Link to="/projects">Projects</Link>
                </li>
                <li className="navbar-item">
                  <Link to="/about">About</Link>
                </li>
                <li className="navbar-item">
                  <Link to="/contact">Contact</Link>
                </li>
              </ul>
            </nav>
          </Col>
        </Row>
        {children}
      </Container>
    </div>
  );
};

export default Layout;
