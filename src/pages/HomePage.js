import React from 'react';
import Hero from '../components/Hero';
// import Carousel from '../components/Carousel';
import Content from '../components/Content';
import { Jumbotron, Container, Carousel, Button, Card, Row, Col, Image, Navbar, Nav, NavItem, NavDropdown, MenuItem, NavLink } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './HomePage.css'

import projectsImg from '../assets/images/projects_homepage.jpg'
import blogImg from '../assets/images/blog_homepage.jpg'
import resumeImg from '../assets/images/resume_homepage.jpg'
import ryanImg from '../assets/images/homepage.jpg'
import ryanImg2 from '../assets/images/homepage2.jpg'
import github_logo from '../assets/images/github.png'
import linkedin_logo from '../assets/images/linkedin.png'

function HomePage(props) {
    return (
        <div>
            {/* <Hero title={props.title} subTitle={props.subTitle} text={props.text}/> */}
            {/* <Carousel /> */}
            {/* <Container className="homepage_pc1" fluid>
                <Row>
                    <Col  lg={6}>
                        <h1>Stuff</h1>
                    </Col>
                    <Col lg={6}>
                        <Row>
                            <Image src={ryanImg} fluid />
                        </Row>
                        <Row>
                            <Jumbotron className="jumbotron-clear" fluid>
                                <Container fluid>
                                    <h1 className="display-3">About Me</h1>
                                    <p className="lead">A web based portfolio of projects and thoughts showcasing what I have learned</p>
                                </Container>
                            </Jumbotron>
                        </Row>
                    </Col>
                </Row>
            </Container> */}

            <Container className="row_no_pad" fluid>
                <Row>
                    <Col className="homepage_pc1" lg={8}>
                        <h2 className="homepage_h2">Hello, I'm</h2>
                        <h1 className="homepage_h1">Ryan Foshage</h1>
                        <h3 className="homepage_h3">I'm a data analytics professional that likes to do a little web design for fun. Check out my website to learn about some of my projects and passions</h3>
                        <Button variant="light" style={{ marginRight: "20px", marginTop: "10px", marginBottom: "10px", width: "per00px", background: "#ffffff00", borderColor: "#ffffff00", color: "#ffffff", fontSize: "20px" }} href='/projects/'>Projects</Button>
                        <Button variant="light" style={{ marginRight: "20px", marginTop: "10px", marginBottom: "10px", width: "100px", background: "#ffffff00", borderColor: "#ffffff00", color: "#ffffff", fontSize: "20px"  }} href='/blog/'>Blog</Button>
                        <Button variant="light" style={{ marginRight: "20px", marginTop: "10px", marginBottom: "10px", width: "100px", background: "#ffffff00", borderColor: "#ffffff00", color: "#ffffff", fontSize: "20px"  }} href='/resume/'>Resume</Button>
                        {/* <h1 className="homepage_h1">Foshage</h1> */}
                    </Col>
                    <Col className="row_no_pad" lg={4} fluid>
                        <Row className="row_no_pad">
                            <Image className="img_homepage" src={ryanImg2} fluid />
                        </Row>
                    </Col>
                </Row>
            </Container>

            {/* <Card>
                <Card.Img src={ryanImg} alt="Card image" />
                <Card.ImgOverlay>
                    <Card.Title className="ct_homepage">Card title</Card.Title>
                    <Card.Text>
                        This is a wider card with supporting text below as a natural lead-in to
                        additional content. This content is a little bit longer.
                    </Card.Text>
                    <Card.Text>Last updated 3 mins ago</Card.Text>
                </Card.ImgOverlay>
            </Card> */}

            {/* <Container fluid>
                <Row>
                    <Col lg={4}>
                        <h1>Ryan Foshage</h1>
                        <h2>Analytics Professional and Web Design Hobbyist</h2>
                    </Col>
                    <Col lg={8}>
                        <Image src={ryanImg} fluid></Image>
                    </Col>
                </Row>
            </Container>
        
            
            <Carousel className="carousel_homepage">
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={ryanImg}
                        alt="First slide"
                    />
                    <Carousel.Caption className="carousel_caption_homepage">
                        <h1>Ryan Foshage</h1>
                        <h2>Analytics Professional and Web Design Hobbyist</h2>
                        <p>Built this website to learn React and to showcase my other projects</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel> */}

            {/* <Jumbotron className="jumbotron-clear" fluid>
                <Container fluid>
                    <h1 className="jumbo_homepage">Portfolio Sections</h1>
                </Container>
            </Jumbotron> */}


            {/* <Container fluid>
                <Row>
                    <Col lg={2} fluid></Col>
                    <Col lg={8} fluid>
                        <Carousel className="carousel_homepage">
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src={projectsImg}
                                    alt="First slide"
                                />
                                <Carousel.Caption>
                                    <h3>Projects</h3>
                                    <p>Check out the lastest personal projects I have been working on</p>
                                    <Button variant="outline-light" href='projects'>Go</Button>{' '}
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src={blogImg}
                                    alt="Third slide"
                                />

                                <Carousel.Caption>
                                    <h3>Blog</h3>
                                    <p>A collection of thoughts primarily about weightlifting, cooking, and of course data</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src={resumeImg}
                                    alt="Third slide"
                                />

                                <Carousel.Caption>
                                    <h3>Resume</h3>
                                    <p>Work history and skillsets</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                        </Carousel>
                    </Col>
                    <Col lg={2} fluid></Col>
                </Row>
            </Container> */}

        </div>


    );
}

export default HomePage;