import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import './About.css';

function About() {
  return (
    <div className="about-page">
      <Container>
        <Row className="header-section">
          <Col xs={12} className="text-left align-self-center">
            <div className="logo-wrapper">
              <Image className="logo" src={require("./techsavvy-logo.png")} alt="Logo" />
            </div>
            <h1 className="header-title">ABOUT</h1>
            <p className="cursive-text">
              I am a passionate Android developer with a strong background in IT operations. I thrive on challenges and enjoy finding innovative solutions to complex problems. With a deep love for technology and a constant desire to learn and grow new tech concepts and also share same knowledge by creating content and posting on social platforms, I am always up-to-date with the latest industry trends and updates, and improving all the mix of tech trends day by day.
            </p>
            <h2>Android Developer</h2>
            <p className="cursive-text">
              I have a wealth of experience in developing high-quality Android applications that deliver exceptional user experiences. From concept to deployment, I am skilled in the entire app development lifecycle, including designing intuitive user interfaces, implementing robust functionality, and ensuring smooth performance across various devices and screen sizes. My expertise also extends to integrating APIs, optimizing app performance, and incorporating cutting-edge technologies to create innovative mobile solutions.
            </p>
            <h2>Tech Enthusiast & Digital Creator</h2>
            <p className="cursive-text">
              A passionate digital creator with a deep love for all things tech. On my platform, I focus on delivering a blend of the latest tech trends, updates, and insights. Whether it's exploring emerging technologies, diving into cutting-edge gadgets, or breaking down complex tech concepts, my goal is to make tech knowledge accessible to everyone.
            </p>
            <p className="cursive-text">
              From gadget spec updates to product launches, I cover it all—keeping you informed about the latest advancements in the tech world.
            </p>
            <p className="cursive-text">
              In addition to content creation, I've been working on exciting android projects.
              Currently working on Project Detectify, an offline mobile app with features like real-time barcode scanning, facial analysis, and object detection. And there's much more to come! Stay tuned as I continue to innovate, explore, and bring new ideas to life in the tech space.
            </p>
          </Col>
        </Row>
      </Container>
    </div >
  );
}

export default About;
