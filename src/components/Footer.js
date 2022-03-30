import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import { SiGmail, SiGithub,SiLinkedin}  from "react-icons/si";



export default function Footer() {
  const linkStyle = { border: '1px black', padding: '5px' };

  return (
    <Container fluid className="footer" >
      <Row bg="light" variant="light">
        <Col md="4">
          <h3>Contact me:</h3>
        </Col>
        
        <Col md="4">
          <ul className="list-group list-group-horizontal-md d-flex justify-content-between">
          <span> </span>
            <li className="list-group-item list-group-item-action list-group-item-dark ">
              <a
                href="https://github.com/ernestotham"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <SiGithub />
              </a>
              <span> </span>
            </li>
            <li className="list-group-item list-group-item-action list-group-item-dark">
              <a
                href="https://www.linkedin.com/in/tham-ernesto-42b1b96b/"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <SiLinkedin />
              </a>
            </li>
            <span> </span>
            <li className="list-group-item list-group-item-action list-group-item-dark">
              <a
                href="mailto:ernestotha@gmail.com"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <SiGmail />
              </a>
            </li>
          </ul>
        </Col>

        <Col md="4" className="footer-copywright">
          <h3>Copyright © 2022</h3>
        </Col>
      </Row>
    </Container>
  );
}


