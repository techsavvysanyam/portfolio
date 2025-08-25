import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { FaBars, FaTimes } from 'react-icons/fa'; // Import Hamburger and Close icons
import './Layout.css';
import '@fontsource/playfair-display';

const Layout = ({ children }) => {
  const [menuOpen, setMenuOpen] = useState(false); // State to control the menu visibility

  const toggleMenu = () => {
    setMenuOpen(!menuOpen); // Toggle the menu state
  };

  return (
    <div className="app-layout">
      <Container>
        <Row className="header-section">
          {/* Logo Section */}
          <Col xs={6} className="text-left align-self-center">
            <div className="logo-wrapper">
              <img className="logo" src={require("./techsavvy-logo.png").default} alt="Logo" />
            </div>
          </Col>

          {/* Hamburger Menu Section (on the right side) */}
          <Col xs={6} className="text-right align-self-center">
            <div className="hamburger-menu" onClick={toggleMenu}>
              {menuOpen ? <FaTimes /> : <FaBars />} {/* Toggle between Hamburger and Close icon */}
            </div>
          </Col>
        </Row>

        {/* Navbar and Content */}
        <Row className={`navbar-section ${menuOpen ? 'expanded' : ''}`}>
          <Col>
            <nav className="navbar landing-page-navbar">
              <ul className={`navbar-list ${menuOpen ? 'open' : ''}`}>
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

        {/* Lower Content Section */}
        <Row className={`additional-text-sec ${menuOpen ? 'content-expanded' : ''}`}>
          <Col>
            {/* Your additional content here */}
            {children}
          </Col>
        </Row>

        {/* Social Icons (moved to appear after the additional text section, only on mobile) */}
        <Row className={`social-icons-section ${menuOpen ? 'centered' : ''}`}>
          <Col>
            <div className="social-icons">
              <a href="https://www.facebook.com/sanyam.soni.14" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faFacebook} className="social-icon" />
              </a>
              <a href="https://x.com/sanyam__soni" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faTwitter} className="social-icon" />
              </a>
              <a href="https://instagram.com/techsavvysanyam" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faInstagram} className="social-icon" />
              </a>
              <a href="https://github.com/techsavvysanyam" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faGithub} className="social-icon" />
              </a>
              <a href="https://www.linkedin.com/in/sanyam-soni" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faLinkedin} className="social-icon" />
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Layout;
