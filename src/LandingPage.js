import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import './LandingPage.css';

const LandingPage = () => {
  return (
    <div className="landing-page">
      <Container>
        <Row className="profile-section">
          <Col className="text-left align-self-center">
          <div className="logo-wrapper">
              <Image className="logo" src={require("./techsavvy-logo.png")} alt="Logo" />
            </div>
            <Image className="profile-picture" src={require("./jod-blue-edit.png")} alt="Profile Picture" />
          </Col>
          <Col className="text-right align-self-center">
            <div className="name">SANYAM</div>
            <div className="lname">SONI</div>
            <div className="additional-text">Android Developer</div>
            <div className="additional-text-sec">Tech | Content Creator | Android | Web | </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default LandingPage;
