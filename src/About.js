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

            <h2>Education</h2>
            <ul className="project-list">
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
            </ul>
            <h2>Certifications</h2>
            <ul>
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

export default About;
