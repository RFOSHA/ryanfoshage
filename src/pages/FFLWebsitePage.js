import React from 'react';
import { Jumbotron, Container, Row, Image, Col, Nav, Tab, Tabs, TabList, Card, Button } from 'react-bootstrap';
// import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import './FFLWebsitePage.css'

import ffl_web_img from '../assets/images/ffl_page_img.PNG'
import draft_page_img from '../assets/images/2020draft_page.PNG'
import admin_page_img from '../assets/images/admin_page.PNG'
import bylaws_page_img from '../assets/images/bylaws_page.PNG'
import freeparking_page_img from '../assets/images/freeparking_page.PNG'
import lifetime_stats_page_img from '../assets/images/lifetime_stats_page.PNG'
import side_bets_page_img from '../assets/images/side_bets_page.PNG'

function FFLWebsitePage(props) {
    return (
        <div>
            <Jumbotron className="jumbotron-clear" fluid>
                <Container fluid>
                    <h1 className="jumbo_fflwebsite">Fantasy Football Website</h1>
                    <h2 className="h2_fflwebsite">Python, Flask, Bootstrap, Azure</h2>
                    <Button variant="light" style={{ marginRight: "20px", marginTop: "10px", marginBottom: "10px" }} href='https://bxbfolio.azurewebsites.net/' target="_blank">Go To the Site</Button>
                    <Button variant="light" style={{ marginRight: "20px", marginTop: "10px", marginBottom: "10px" }} href='https://github.com/RFOSHA/bxboysffl_portfolio' target="_blank">Go To GitHub Repo</Button>

                    <Row>
                        <Col lg={8}>

                            <p>The purpose of this project was twofold, learn how to build an interactive web page using Flask and generate
                            excitment for the upcoming fantasy football season after a long summer of COVID.</p>

                            <p>This was my first attempt at a website. Initially I started off with a bootstrap template from Colorlib in order
                            to get a jump start on the HTML and CSS. I later heavily modified the HTML portions to curate the funtionality
                            I wanted to incorporate into my site. In order to get the right Flask framework in place to support the website's
                            ability to read and write data I followed a couple of online courses.</p>

                            <p>Once I had a working webiste locally, the next challenge was to figure out a way to deploy it. While waiting
                            on results of a COVID test over the 4th of July weekend, I was able to successfully deploy a SQL Server database
                            on Microsoft Azure, connect my website to it, and host the webiste as an App Service.</p>

                            <p>Prior to the draft, I uneveiled the website to the league and it was received with plenty of excitement. Below is a
                            quick summary of the main sections of the website.</p>
                        </Col>
                        <Col lg={4}>
                            <Image src={ffl_web_img} fluid />
                        </Col>
                    </Row>


                </Container>
            </Jumbotron>

            {/* <Container fluid>
                <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                    <Row>
                        <Col sm={3}>
                            <Nav variant="pills" className="flex-column">
                                <Nav.Item>
                                    <Nav.Link eventKey="first">2020 Draft</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="second">By Laws</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="third">Free Parking</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="fourth">Side Bets</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="fifth">Stats</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="sixth">Admin</Nav.Link>
                                </Nav.Item>
                            </Nav>
                        </Col>
                        <Col sm={9}>
                            <Tab.Content>
                                <Tab.Pane eventKey="first">
                                    <Card border="light">
                                        <Card.Body >I wanted to integrate a Google map into a website, so this felt like the right spot to do it.
                                        Also, the other managers in the league can update when they will be arriving so we can coordinate rides
                                        from the airport.
                                    </Card.Body>
                                    </Card>
                                </Tab.Pane>
                                <Tab.Pane eventKey="second">
                                    <Card border="light">
                                        <Card.Body>Typically we have a PowerPoint that has all of the rules, but I wanted to include
                                        it in the website. This also outlines the punishments for coming in last place. The pictures
                                        of the managers have been chanegd to generic images.
                                    </Card.Body>
                                    </Card>
                                </Tab.Pane>
                                <Tab.Pane eventKey="third">
                                    <Card border="light">
                                        <Card.Body>Free Parking is a concept we created a few years ago. Certain events like having a
                                        player post a 0 score results in a fine. Certain accomplishments such as being the first to 10,000 lifetime
                                        points scored in the league will result in a 25% payout of the money collected in Free Parking. It
                                        is just another element to the league that adds some extra excitment and opportunites to win or lose.
                                    </Card.Body>
                                    </Card>
                                </Tab.Pane>
                                <Tab.Pane eventKey="fourth">
                                    <Card border="light">
                                        <Card.Body>During the draft we like to talk some smack and make wild bets about anything football related.
                                        This section captures those side bets that we make.
                                    </Card.Body>
                                    </Card>
                                </Tab.Pane>
                                <Tab.Pane eventKey="fifth">
                                    <Card border="light">
                                        <Card.Body>Since the league has been running for 5 years now it is fun to compile lifetime stats to
                                        see who the best managers are. Also, showing the lifetime individual matchup records just creates more opportunities
                                        to talk some trash. Finally, how I pulled this data from the ESPN APIs is covered in one of my other project posts.
                                        Read about it <Card.Link href='/projects/fflespnapi'>here</Card.Link>.
                                    </Card.Body>
                                    </Card>
                                </Tab.Pane>
                                <Tab.Pane eventKey="sixth">
                                    <Card border="light">
                                        <Card.Body>Basic functionality to reset passwords as well as request new features for the website.</Card.Body>
                                    </Card>
                                </Tab.Pane>
                            </Tab.Content>
                        </Col>
                    </Row>
                </Tab.Container>
            </Container> */}

            <Container fluid>
                <Jumbotron className="jumbotron-clear" fluid>
                        <h3 className="jumbo_fflwebsite_h3">Website Sections</h3>
                    </Jumbotron>
                    <Tabs defaultActiveKey="profile" style={{ paddingRight: "24px", paddingLeft: "24px" }} id="uncontrolled-tab-example">
                        <Tab eventKey="2020draft" title="2020 Draft">
                            <Container fluid>
                                <Row>
                                    <Col lg={7}>
                                        <Card border="light" style={{ border: "None" }}>
                                            <Card.Body>I wanted to integrate a Google map into a website, so this felt like the right spot to do it.
                                            Also, the other managers in the league can update when they will be arriving so we can coordinate rides
                                            from the airport.
                                        </Card.Body>
                                        </Card>
                                    </Col>
                                    <Col lg={5}>
                                        <Card.Img variant="top" src={draft_page_img} />
                                    </Col>
                                </Row>
                            </Container>
                        </Tab>
                        <Tab eventKey="bylaws" title="By Laws">
                            <Container fluid>
                                <Row>
                                    <Col lg={7}>
                                        <Card border="light" style={{ border: "None" }}>
                                            <Card.Body>Typically we have a PowerPoint that has all of the rules, but I wanted to include
                                            it in the website. This also outlines the punishments for coming in last place. The pictures
                                        of the managers have been chanegd to generic images.</Card.Body>
                                        </Card>
                                    </Col>
                                    <Col lg={5}>
                                        <Card.Img variant="top" src={bylaws_page_img} />
                                    </Col>
                                </Row>
                            </Container>
                        </Tab>
                        <Tab eventKey="freeparking" title="Free Parking">
                            <Container fluid>
                                <Row>
                                    <Col lg={7}>
                                        <Card border="light" style={{ border: "None" }}>
                                            <Card.Body>Free Parking is a concept we created a few years ago. Certain events like having a
                                            player post a 0 score results in a fine. Certain accomplishments such as being the first to 10,000 lifetime
                                            points scored in the league will result in a 25% payout of the money collected in Free Parking. It
                                        is just another element to the league that adds some extra excitment and opportunites to win or lose.</Card.Body>
                                        </Card>
                                    </Col>
                                    <Col lg={5}>
                                        <Card.Img variant="top" src={freeparking_page_img} />
                                    </Col>
                                </Row>
                            </Container>
                        </Tab>
                        <Tab eventKey="sidebets" title="Side Bets">
                            <Container fluid>
                                <Row>
                                    <Col lg={7}>
                                        <Card border="light" style={{ border: "None" }}>
                                            <Card.Body>During the draft we like to talk some smack and make wild bets about anything football related.
                                        This section captures those side bets that we make.</Card.Body>
                                        </Card>
                                    </Col>
                                    <Col lg={5}>
                                        <Card.Img variant="top" src={side_bets_page_img} />
                                    </Col>
                                </Row>
                            </Container>
                        </Tab>
                        <Tab eventKey="stats" title="Stats">
                            <Container fluid>
                                <Row>
                                    <Col lg={7}>
                                        <Card border="light" style={{ border: "None" }}>
                                            <Card.Body>Since the league has been running for 5 years now it is fun to compile lifetime stats to
                                            see who the best managers are. Also, showing the lifetime individual matchup records just creates more opportunities
                                            to talk some trash. Finally, how I pulled this data from the ESPN APIs is covered in one of my other project posts.
                                        Read about it <Card.Link href='/projects/fflespnapi'>here</Card.Link>.</Card.Body>
                                        </Card>
                                    </Col>
                                    <Col lg={5}>
                                        <Card.Img variant="top" src={lifetime_stats_page_img} />
                                    </Col>
                                </Row>
                            </Container>
                        </Tab>
                        <Tab eventKey="admin" title="Admin">
                            <Container fluid>
                                <Row>
                                    <Col lg={7}>
                                        <Card border="light" style={{ border: "None" }}>
                                            <Card.Body>Basic functionality to reset passwords as well as request new features for the website.</Card.Body>
                                        </Card>
                                    </Col>
                                    <Col lg={5}>
                                        <Card.Img variant="top" src={admin_page_img} />
                                    </Col>
                                </Row>
                            </Container>
                        </Tab>
                    </Tabs>
            </Container>

        </div>


    );
}

export default FFLWebsitePage;