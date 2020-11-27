import React from 'react';
import { Jumbotron, Container, Row, Image, Col, Nav, Tab, Tabs, TabList, Card, Button } from 'react-bootstrap';
// import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import './ESPNAPIPage.css'

import ffl_web_img from '../assets/images/ffl_page_img.PNG'
import draft_page_img from '../assets/images/2020draft_page.PNG'
import admin_page_img from '../assets/images/admin_page.PNG'
import bylaws_page_img from '../assets/images/bylaws_page.PNG'
import freeparking_page_img from '../assets/images/freeparking_page.PNG'
import lifetime_stats_page_img from '../assets/images/lifetime_stats_page.PNG'
import side_bets_page_img from '../assets/images/side_bets_page.PNG'

function ESPNAPIPage(props) {
    return (
        <div>
            <Jumbotron className="jumbotron-clear" fluid>
                <Container fluid>
                    <h1 className="jumbo_fflwebsite">ESPN APIs</h1>
                    <h2 className="h2_fflwebsite">Python, Pandas, ETL</h2>
                    <Button variant="light" style={{ marginRight: "20px", marginTop: "10px", marginBottom: "10px" }} href='https://github.com/RFOSHA/espnAPIData' target="_blank">Go To GitHub Repo</Button>

                    <Row>
                        <Col lg={8}>

                            <p>As part of the fantasy football website project, I wanted to get our league's historical matchup data
                                This would give me the ability to pull lifetime stats, which are always fun for talking smack, and would 
                                also allow us to see who was truly the best manager over several years. Also, I wanted to be able to show
                                the lifetime wins and losses for individual matchups.
                            </p>

                            <p>The first challenge for this project was finding documentation for the ESPN fantasy football API. A blog post by
                                by Steven Morse <a href="https://stmorse.github.io/journal/espn-fantasy-python.html">link here</a> proved to be
                                invaluable. After doing some initial exploration, I was able to find the right end points.
                            </p>

                            <p>From there I used a lot of Pandas to manipulate the results of the API calls. In some instances I created some 
                                reference tables in Azure database to make mappings between IDs and manager names easier. The overall wins, losses,
                                points for/against was pretty easy to pull out. Creating the lifetime head to head matchup stats between managers
                                required a bit more of finesse. Ultimately, I was able to create both and loaded the data into Azure database, which
                                is referenced and used within the website.
                            </p>
                        </Col>
                        <Col lg={4}>
                            <Image src={lifetime_stats_page_img} fluid />
                        </Col>
                    </Row>


                </Container>
            </Jumbotron>
        </div>


    );
}

export default ESPNAPIPage;