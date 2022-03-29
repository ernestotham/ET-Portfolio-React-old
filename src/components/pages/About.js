import React from 'react';
import GitHubCalendar from 'react-github-calendar';
import { Col, Container, Row } from "react-bootstrap";
import TypeWriterEffect from 'react-typewriter-effect';
import Image from 'react-bootstrap/Image'
import me from "../../images/me.jpg"


const styles = {color:'white', background:'black', padding:'40px', borderRadius: 25 + 'px'}
const stylesConttributions = {color:'white', background:'black', padding:'40px', borderRadius: 25 + 'px'}

export default function About() {
  return (

    <Container fluid="md">

      <        Row>
        <Col fluid="md" style={styles}>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <p style={{color:'white'}}>Hi!!! I am Ernesto Tham</p>
          <TypeWriterEffect
            textStyle={{
              fontFamily: 'Red Hat Display',
              color: 'white',
              fontWeight: 500,
              fontSize: '2.5em',
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
          <p style={{color:'white'}}>
            I graduated from Kennesaw State University with a bachelor's degree in Computer Science.
            I have 13 years’ experience system Engineering. I specialized on system mergers and acquisitions, privilege Identity management and automation.
            I love designing and building applications and keeping up with the latest technology. I am currently working on getting a certification as a software Engineer at Georgia Tech.



          </p>

        </Col>

        <Col fluid="md">
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
        <Col fluid="md" background='black'>
          <h1 className="portfolio-About" style={{color:'white', paddingBottom: "20px", justifyContent: "center" }}>
            My Github contributions
          </h1>
        </Col>

      </Row>

      <Row className="mx-0">
        <Col fluid="md">
          <div class="d-flex justify-content-center">
            <GitHubCalendar username="ernestotham" style={stylesConttributions} />
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
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />




    </Container>

 
  );
}
