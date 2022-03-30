import React, { useState, useEffect } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { Row, Col, Container } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import bitfit from '../../images/BitFit.png';
import scheduler from '../../images/scheduler.jpg';
import weatherapp from '../../images/weatherapp.jpg';
import githomies from '../../images/githomies.jpg';
import employeeMan from '../../images/EmployeeManager.jpg';
import techblog from '../../images/techBlog.jpg';
import { SiGithub } from "react-icons/si";
import { IoRocketOutline } from "react-icons/io5";



export default function Work() {

  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  const styleimg = { width: "18rem", height: "18rem", overflow: "hidden", alignitems: "center", }


  return (
    <Container>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />


      <Carousel class="container mx-auto d-flex align-center" activeIndex={index} onSelect={handleSelect} >

        <Carousel.Item >

          <Row>
            <Col>
              <Card style={{ width: '18rem', alignitems: "center" }}>
                <Card.Img className="p-2 bg-light border" variant="top" src={bitfit} style={styleimg} />
                <Card.Body className="justify-center" style={{ alignitems: "center" }}>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                  </Card.Text>
                  <div>
                    <a 
                      href="https://github.com/ernestotham"
                      style={{ color: "black", width:"20px",height:"20px"}}
                      target="_blank"
                      rel="noopener noreferrer">
                      <SiGithub style={{ color: "black", width:"20px",height:"20px"}}/>
                      </a>

                  
                    <a href="https://github.com/ernestotham"
                      style={{ color: "black" }}
                      target="_blank"
                      rel="noopener noreferrer" >
                      <IoRocketOutline /> </a>
                  </div>
                </Card.Body>
              </Card>
            </Col>

            <Col>
              <Card fluid style={{ width: '18rem' }}>
                <Card.Img variant="top" src={githomies} style={styleimg} />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
            </Col>



            <Col>
              <Card fluid style={{ width: '18rem' }}>
                <Card.Img variant="top" src={weatherapp} style={styleimg} />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>

            </Col>
          </Row>

        </Carousel.Item>

        <Carousel.Item >

          <Row>
            <Col>
              <Card fluid style={{ width: '18rem' }}>
                <Card.Img variant="top" src={scheduler} style={styleimg} />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
            </Col>

            <Col>
              <Card fluid style={{ width: '18rem' }}>
                <Card.Img variant="top" src={employeeMan} style={styleimg} />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
            </Col>



            <Col>
              <Card fluid style={{ width: '18rem' }}>
                <Card.Img variant="top" src={techblog} style={styleimg} />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>

            </Col>
          </Row>

        </Carousel.Item>

      </Carousel>


      <br />
      <br />
      <br />
      <br />
      <br />
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