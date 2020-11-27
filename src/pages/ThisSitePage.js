import React from 'react';
import { Jumbotron, Container, Row, Image, Col, Nav, Tab, Tabs, TabList, Card, Button } from 'react-bootstrap';
// import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import './ThisSitePage.css'

import react_bootstrap_img from '../assets/images/reactBootstrap.png'


function ThisSitePage(props) {
    return (
        <div>
            <Jumbotron className="jumbotron-clear" fluid>
                <Container fluid>
                    <h1 className="jumbo_fflwebsite">Personal Portfolio Website</h1>
                    <h2 className="h2_fflwebsite">JavaScript, React, node JS, React Bootstrap</h2>
                    <Button variant="light" style={{ marginRight: "20px", marginTop: "10px", marginBottom: "10px" }} href='https://github.com/RFOSHA/portfolio' target="_blank">Go To GitHub Repo</Button>

                    <Row>

                        <Col lg={10}>

                            <p>While building the fantasy football website using Python and Flask, I realized that there were features that I wanted,
                                but would most likely need JavaScript in order build them. For example, it seemed like making interactive tables
                                would only be possible with JavaScript. As a result, I wanted to start a project that would get me introduced into 
                                JavaScript. 
                            </p>

                            <p>Without having any experience using JavaScript, I turned to YouTube for some tutorials. I have to give a big thanks
                                to Garret Love's <a href="https://www.youtube.com/watch?v=41-jn5tdg50">video series</a> on how to build a portfolio 
                                website using React. While the videos made use of passing properties to the functions/pages, I chose to make my pages
                                more static. While this likely wasn't the most efficient process, it just seemed more intuitive as I was making my
                                own custom edits to the template that was used in the video tutorial.
                            </p>

                            <p>During this project, I spent a lot more time creating custom CSS in order to get the visual impact that I wanted. While
                                the default Bootstrap options are nice, I enjoyed being able to finally control exactly how things would appear. The
                                biggest CSS work for this project was to get the Resume section formatted correctly. Finally, the generic photos are
                                from pexels.com. 
                            </p>
                        </Col>
                        <Col lg={2}>
                            <Image src={react_bootstrap_img} fluid />
                        </Col>
                    </Row>


                </Container>
            </Jumbotron>
        </div>


    );
}

export default ThisSitePage;