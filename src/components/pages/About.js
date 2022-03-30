import React from 'react';
import GitHubCalendar from 'react-github-calendar';
import { Card, CardGroup, Col, Container, Row } from "react-bootstrap";
import TypeWriterEffect from 'react-typewriter-effect';
import Image from 'react-bootstrap/Image'
import me from "../../images/me.jpg"
import techStackList from '../dataMaps/technologies.js'
import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardImage, MDBBtn } from 'mdb-react-ui-kit';


const styles = { color: 'white', background: 'black', padding: '40px', borderRadius: 25 + 'px' }
const stylesConttributions = { color: 'white', background: 'black', padding: '40px', borderRadius: 25 + 'px' }
const stylesCol = { color: 'white', fontSize: '20px', padding: '40px', boderstyle: 'solid', boder: 'black' }
const stylesCont = { padding: '2px' }


const renderTechnologies = () => {

  return (
    <MDBCard style={{ maxWidth: '22rem' }}>
      <MDBCardImage src='https://mdbootstrap.com/img/new/standard/nature/184.webp' position='top' alt='...' />
      <MDBCardBody>
        <MDBCardTitle>Card title</MDBCardTitle>
        <MDBCardText>
          Some quick example text to build on the card title and make up the bulk of the card's content.
        </MDBCardText>
        <MDBBtn href='#'>Button</MDBBtn>
      </MDBCardBody>
    </MDBCard>
  )
}

const renderCloudTechnologies = () => {

  return (
    <CardGroup> 
      {techStackList.Cloud.map((card) => (
        <MDBCard style={{ maxWidth: '22rem' }}>
        <MDBCardImage src={card.path} position='top' alt='...' />
        <MDBCardBody>
          <MDBCardTitle>{card.title}</MDBCardTitle>
          <MDBCardText>
            Some quick example text to build on the card title and make up the bulk of the card's content.
          </MDBCardText>
          <MDBBtn href='#'>Button</MDBBtn>
        </MDBCardBody>
      </MDBCard>
      )
      )}
    </CardGroup>
  )
}

const renderOtherTechnologies = () => {

  return (
    <CardGroup> 
      {techStackList.Other.map((card) => (
        <Card
          id={card.id}
          image={card.path}
          header={card.title}
          
        />
      )
      )}
    </CardGroup>
  )
}


export default function About() {
  return (

    <Container   style={stylesCont}>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />

      <Row container-fluid d-flex m-0>
        <Col col-md-6 p-0 style={stylesCol}>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <p style={styles}><span>
          <TypeWriterEffect
            textStyle={{
              fontFamily: 'Red Hat Display',
              color: 'white',
              fontWeight: 500,
              fontSize: '1.5em',
            }}
            startDelay={3000}
            cursorColor="#3F3D56"
            multiTextLoop
            multiText={[
              'Hi!!!',
            

            ]}
            multiTextDelay={1000}
            typeSpeed={30}
          />
            
            </span>I am Ernesto Tham</p>
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
          <p style={{ color: 'white' }}>
            I graduated from Kennesaw State University with a bachelor's degree in Computer Science.
            I have 13 years’ experience system Engineering. I specialized on mergers and acquisitions, privilege Identity management and automation.
            I love designing and building applications and keeping up with the latest technology. I am currently working on getting a certification as a software Engineer at Georgia Tech.



          </p>

        </Col>

        <Col col-md-6 p-0 className="topbody">
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

      <Row>
            {renderTechnologies}

      </Row>

      <Row>
            {renderCloudTechnologies}

      </Row>


      <Row>
            {renderOtherTechnologies}

      </Row>



      <br />
      <br />
      <br />
      <br />
      <Row  >
        <Col background='black'>
          <h1 className="portfolio-About" style={{ color: 'white', paddingBottom: "20px", justifyContent: "center" }}>
            My Github contributions
          </h1>
        </Col>

      </Row>

      <Row >
        <Col >
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
