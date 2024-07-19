import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import './Contact.css';

function Contact() {
  return (
    <div className="contact-page">
      <Container>
        <Row className="header-section">
          <Col xs={12} className="text-center">
            <div className="logo-wrapper">
              <Image className="logo" src={require("./techsavvy-logo.png")} alt="Logo" />
            </div>
            <h1 className="header-title">CONTACT</h1>
          </Col>
        </Row>
        <Row className="contact-info-section">
          <Col>
            <h1 className="nameSS">SANYAM SONI</h1>
            <p>techsavvysanyam@gmail.com</p>
            <h2>GET IN TOUCH</h2>
            <div className="contact-form">
              <form action="https://mail.google.com/?view=cm&to=techsavvysanyam@gmail.com&su=$" method="GET">
                <input type="hidden" name="view" value="cm" />
                <input type="hidden" name="to" value="techsavvysanyam@gmail.com" readOnly />
                <input type="text" name="name" placeholder="Name" />
                <input type="text" name="subject" placeholder="Subject" />
                <textarea name="body" placeholder="Message"></textarea>
                <button type="submit">Contact Me 📩</button>
              </form>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Contact;
