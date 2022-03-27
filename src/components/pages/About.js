import React from 'react';
import GitHubCalendar from 'react-github-calendar';
import { Col, Container, Row } from "react-bootstrap";
import TypeWriterEffect from 'react-typewriter-effect';
import Image from 'react-bootstrap/Image'
import me from "../../images/me.jpg"

const styles = {
  navbarStyle: {
    background: 'green',
    justifyContent: 'flex-end',
  },
};


export default function About() {
  return (

    <Container fluid="md">

      <        Row>
        <Col>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <p>Hi!!! I am Ernesto Tham</p>
          <TypeWriterEffect
            textStyle={{
              fontFamily: 'Red Hat Display',
              color: 'white',
              fontWeight: 500,
              fontSize: '1.5em',
            }}
            startDelay={2000}
            cursorColor="#3F3D56"
            multiTextLoop
            multiText={[
              'Software Engineer',
              'Frontend developer',
              'Backend developer',
              'System Architect',

            ]}
            multiTextDelay={1000}
            typeSpeed={30}
          />
          <br></br>
          <p>
            I graduated from Kennesaw State University with a bachelor's degree in Computer Science.
            I have 13 years’ experience system Engineering. I specialized on system mergers and acquisitions, privilege Identity management and automation.
            I love designing and building applications and keeping up with the latest technology. I am currently working on getting a certification as a software Engineer at Georgia Tech.



          </p>

        </Col>

        <Col>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
          <Image className="d-block w-100"
            src={me}
            alt="Second slide"
            roundedCircle
          >


          </Image>
        </Col>

      </Row>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <Row className="mx-0"  >
        <Col>
          <h1 className="portfolio-About" style={{ paddingBottom: "20px", justifyContent: "center" }}>
            My Github contributions <strong className="purple"></strong>
          </h1>
        </Col>

      </Row>

      <Row className="mx-0">
        <Col>
          <div class="d-flex justify-content-center">
            <GitHubCalendar username="ernestotham" />
            <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
          </div>

        </Col>

      </Row>




    </Container>

 
  );
}
