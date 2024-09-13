import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import './About.css';

function qualifications() {
  return (
    <div className="about-page">
      <Container>
        <Row className="header-section">
          <Col xs={12} className="text-left align-self-center">
            <div className="logo-wrapper">
              <Image className="logo" src={require("./techsavvy-logo.png")} alt="Logo" />
            </div>
            <h1 className="header-title">QULALIFICATIONS</h1>
            <ul className="project-list">
            <h2 className="projectSS">Education</h2>
              <li className="cursive-text">
                <strong>Bachelor's Degree in Computer Applications (BCA)</strong>, Govt. College, Dharamshala Affiliated HPU, Shimla.
                <br />
                <br />
                <em>2019 - 2022</em>
                <br />
              </li>
              <li>
                <strong>Master's Degree in Computer Applications (MCA)</strong>, Lovely Professional University
                <br />
                <br />
                <em>2022 - 2024</em>
                <br />
              </li>
            </ul >
            <br/>
            <br/>
            <h2 className="projectSS">Certifications</h2>
            <ul className="project-list">
              <li>
                <strong>Android With Kotlin</strong>, Infosys Springboard
                <br />
                <em>Issued Sep 2024</em>
                <br />
                <em>Credential ID 1-127604d5-7947-41f4-b829-8a1c3fe029bd</em>
                <br />
                <a href="https://drive.google.com/file/d/1-3Nj0AOcGP9ExLyqs9h43gCbcjYfagkT/view" target="_blank" rel="noopener noreferrer">
                  <em>View Certificate</em>
                </a>
                <br />
              </li>
              <li>
                <strong>Git & Github EssentialsGit & Github Essentials</strong>, LetsUpgradeLetsUpgrade
                <br />
                <em>Issued May 2023</em>
                <br />
                <em>Credential ID LUEGGMAY12331</em>
                <br />
                <a href="https://verify.letsupgrade.in/certificate/LUEGGMAY12331" target="_blank" rel="noopener noreferrer">
                  <em>View Certificate</em>
                </a>
                <br />
              </li>
              <li>
                <strong>Doing more with Google Sheets</strong>, Coursera
                <br />
                <em>Issued Dec 2022</em>
                <br />
                <em>Credential ID GUL2U6SHXHF6</em>
                <br />
                <a href="https://www.coursera.org/account/accomplishments/verify/GUL2U6SHXHF6?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=course" target="_blank" rel="noopener noreferrer">
                  <em>View Certificate</em>
                </a>
                <br />
              </li>
              <li>
                <strong>Developing Applications with Google Cloud</strong>, Coursera
                <br />
                <em>Issued Aug 2022</em>
                <br />
                <em>Credential ID 3DXPVBPD8Z96</em>
                <br />
                <a href="https://www.coursera.org/account/accomplishments/specialization/3DXPVBPD8Z96?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=s12n" target="_blank" rel="noopener noreferrer">
                  <em>View Certificate</em>
                </a>
                <br />
              </li>
              <li>
                <strong>Java Basics</strong>, Great Learning
                <br />
                <em>Issued July 2022</em> 
                <br />
                <em>Credential ID AYWSGQSC</em>
                <br />
                <a href="https://www.mygreatlearning.com/certificate/AYWSGQSC" target="_blank" rel="noopener noreferrer">
                  <em>View Certificate</em>
                </a>
                <br />
              </li>
              <li>
                <strong>Python</strong>, Udmey
                <br />
                <em>Issued July 2022</em>
                <br />
                <em>Credential ID UC-dac1aa37-d9aa-4781-bba8-49d7af666223</em>
                <br />
                <a href="https://www.udemy.com/certificate/UC-dac1aa37-d9aa-4781-bba8-49d7af666223/" target="_blank" rel="noopener noreferrer">
                  <em>View Certificate</em>
                </a>
                <br />
              </li>
              <li>
                <strong>HTML 5 and CSS 3</strong>, Pirple
                <br />
                <em>Issued July 2022</em>
                <br />
                <em>Credential ID u7w0wuzzxn</em>
                <br />
                <a href="https://www.pirple.com/certificates/u7w0wuzzxn" target="_blank" rel="noopener noreferrer">
                  <em>View Certificate</em>
                </a>
                <br />
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </div >
  );
}

export default qualifications;