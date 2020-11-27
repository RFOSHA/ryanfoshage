import React from 'react';
import { Jumbotron, Container, Row, Image, Col, Nav, Tab, Tabs, TabList, Card, Button, ProgressBar } from 'react-bootstrap';
// import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import './ResumePage.css'

import ffl_web_img from '../assets/images/ffl_page_img.PNG'
import draft_page_img from '../assets/images/2020draft_page.PNG'
import admin_page_img from '../assets/images/admin_page.PNG'
import bylaws_page_img from '../assets/images/bylaws_page.PNG'
import freeparking_page_img from '../assets/images/freeparking_page.PNG'
import lifetime_stats_page_img from '../assets/images/lifetime_stats_page.PNG'
import side_bets_page_img from '../assets/images/side_bets_page.PNG'

function ResumePage(props) {
    return (
        <div>
            <Container fluid>
                <Row>
                    <Col className="leftResumeCol" lg={3}>

                        <Row>
                            <Jumbotron className="leftResumeJumbo">
                                <h1>Ryan Foshage</h1>
                                <h2 style={{ fontSize: "20px", fontWeight: "20", marginBottom: "0px" }}>BI & Analytics Professional</h2>
                            </Jumbotron>
                        </Row>
                        <Row className="leftResumeHeader">
                            <h1 style={{ fontSize: "20px", fontWeight: "400", marginBottom: "0px" }}>Personal Info</h1>
                        </Row>
                        <Row className="leftResumeSubHeader">
                            <h3 style={{ fontSize: "16px", fontWeight: "400", marginBottom: "0px" }}>Address</h3>
                        </Row>
                        <Row className="leftResumeSubHeader">
                            <h4 className="leftResumeText">197 Berry Manor Circle</h4>
                        </Row>
                        <Row className="leftResumeSubHeader">
                            <h4 className="leftResumeText">St. Peters, MO 63376</h4>
                        </Row>
                        <Row className="leftResumeSubHeader">
                            <h3 style={{ fontSize: "16px", fontWeight: "400", marginBottom: "0px" }}>Phone</h3>
                        </Row>
                        <Row className="leftResumeSubHeader">
                            <h4 className="leftResumeText">(314) 313-7452</h4>
                        </Row>
                        <Row className="leftResumeSubHeader">
                            <h3 style={{ fontSize: "16px", fontWeight: "400", marginBottom: "0px" }}>Email</h3>
                        </Row>
                        <Row className="leftResumeSubHeader">
                            <h4 className="leftResumeText">ryan.m.foshage@gmail.com</h4>
                        </Row>
                        <Row className="leftResumeSubHeader">
                            <h3 style={{ fontSize: "16px", fontWeight: "400", marginBottom: "0px" }}>Website</h3>
                        </Row>
                        <Row className="leftResumeSubHeader">
                            <h4 className="leftResumeText">ryanmfoshage@azure.com</h4>
                        </Row>
                        <Row className="leftResumeHeader">
                            <h1 style={{ fontSize: "20px", fontWeight: "400", marginBottom: "0px" }}>Technologies</h1>
                        </Row>
                        <Row className="leftResumeSubHeader">
                            <h3 style={{ fontSize: "16px", fontWeight: "400", marginBottom: "0px" }}>Python &nbsp;</h3>
                            <h4 className="leftResumeSkillSubText">Flask, Pandas</h4>
                        </Row>
                        <Row style={{ paddingTop: "6px", paddingBottom: "6px" }}>
                            <Container fluid>
                                <ProgressBar className="leftResumeSkillBar" now={80} label={'Advanced'} />
                            </Container>
                        </Row>
                        <Row className="leftResumeSubHeader">
                            <h3 style={{ fontSize: "16px", fontWeight: "400", marginBottom: "0px" }}>JavaScript &nbsp;</h3>
                            <h4 className="leftResumeSkillSubText">React, node JS</h4>
                        </Row>
                        <Row style={{ paddingTop: "6px", paddingBottom: "6px" }}>
                            <Container fluid>
                                <ProgressBar className="leftResumeSkillBar" now={20} label={'Beginner'} />
                            </Container>
                        </Row>
                        <Row className="leftResumeSubHeader">
                            <h3 style={{ fontSize: "16px", fontWeight: "400", marginBottom: "0px" }}>Tableau</h3>
                        </Row>
                        <Row style={{ paddingTop: "6px", paddingBottom: "6px" }}>
                            <Container fluid>
                                <ProgressBar className="leftResumeSkillBar" now={80} label={'Advanced'} />
                            </Container>
                        </Row>
                        <Row className="leftResumeSubHeader">
                            <h3 style={{ fontSize: "16px", fontWeight: "400", marginBottom: "0px" }}>Alteryx</h3>
                        </Row>
                        <Row style={{ paddingTop: "6px", paddingBottom: "6px" }}>
                            <Container fluid>
                                <ProgressBar className="leftResumeSkillBar" now={100} label={'Mastery'} />
                            </Container>
                        </Row>
                        <Row className="leftResumeSubHeader">
                            <h3 style={{ fontSize: "16px", fontWeight: "400", marginBottom: "0px" }}>Databases &nbsp;</h3>
                            <h4 className="leftResumeSkillSubText">SQL Server, Oracle, PostGres, Mongo</h4>
                        </Row>
                        <Row style={{ paddingTop: "6px", paddingBottom: "6px" }}>
                            <Container fluid>
                                <ProgressBar className="leftResumeSkillBar" now={60} label={'Proficient'} />
                            </Container>
                        </Row>
                        <Row className="leftResumeSubHeader">
                            <h3 style={{ fontSize: "16px", fontWeight: "400", marginBottom: "0px" }}>SQL</h3>
                        </Row>
                        <Row style={{ paddingTop: "6px", paddingBottom: "6px" }}>
                            <Container fluid>
                                <ProgressBar className="leftResumeSkillBar" now={80} label={'Advanced'} />
                            </Container>
                        </Row>
                        <Row className="leftResumeSubHeader">
                            <h3 style={{ fontSize: "16px", fontWeight: "400", marginBottom: "0px" }}>HTML/CSS</h3>
                        </Row>
                        <Row style={{ paddingTop: "6px", paddingBottom: "6px" }}>
                            <Container fluid>
                                <ProgressBar className="leftResumeSkillBar" now={60} label={'Proficient'} />
                            </Container>
                        </Row>
                        <Row className="leftResumeHeader">
                            <h1 style={{ fontSize: "20px", fontWeight: "400", marginBottom: "0px" }}>Skills</h1>
                        </Row>
                        <Row className="leftResumeSubHeader">
                            <h3 style={{ fontSize: "16px", fontWeight: "400", marginBottom: "0px" }}>Data Analysis & Mining</h3>
                        </Row>
                        <Row style={{ paddingTop: "6px", paddingBottom: "6px" }}>
                            <Container fluid>
                                <ProgressBar className="leftResumeSkillBar" now={80} label={'Advanced'} />
                            </Container>
                        </Row>

                        <Row className="leftResumeSubHeader">
                            <h3 style={{ fontSize: "16px", fontWeight: "400", marginBottom: "0px" }}>Data Visualization</h3>
                        </Row>
                        <Row style={{ paddingTop: "6px", paddingBottom: "6px" }}>
                            <Container fluid>
                                <ProgressBar className="leftResumeSkillBar" now={80} label={'Advanced'} />
                            </Container>
                        </Row>
                        <Row className="leftResumeSubHeader">
                            <h3 style={{ fontSize: "16px", fontWeight: "400", marginBottom: "0px" }}>Application Architecture</h3>
                        </Row>
                        <Row style={{ paddingTop: "6px", paddingBottom: "6px" }}>
                            <Container fluid>
                                <ProgressBar className="leftResumeSkillBar" now={60} label={'Proficient'} />
                            </Container>
                        </Row>
                        <Row className="leftResumeSubHeader">
                            <h3 style={{ fontSize: "16px", fontWeight: "400", marginBottom: "0px" }}>Machine Learning &nbsp;</h3>
                            <h4 className="leftResumeSkillSubText">Sci Py</h4>
                        </Row>
                        <Row style={{ paddingTop: "6px", paddingBottom: "6px" }}>
                            <Container fluid>
                                <ProgressBar className="leftResumeSkillBar" now={40} label={'Emerging'} />
                            </Container>
                        </Row>
                        <Row className="leftResumeSubHeader">
                            <h3 style={{ fontSize: "16px", fontWeight: "400", marginBottom: "0px" }}>Team Leadership</h3>
                        </Row>
                        <Row style={{ paddingTop: "6px", paddingBottom: "6px" }}>
                            <Container fluid>
                                <ProgressBar className="leftResumeSkillBar" now={80} label={'Advanced'} />
                            </Container>
                        </Row>
                        <Row className="leftResumeSubHeader">
                            <h3 style={{ fontSize: "16px", fontWeight: "400", marginBottom: "0px" }}>Project Mangement</h3>
                        </Row>
                        <Row style={{ paddingTop: "6px", paddingBottom: "6px" }}>
                            <Container fluid>
                                <ProgressBar className="leftResumeSkillBar" now={80} label={'Advanced'} />
                            </Container>
                        </Row>
                        <Row className="leftResumeSubHeader">
                            <h3 style={{ fontSize: "16px", fontWeight: "400", marginBottom: "0px" }}>Executive Presentations</h3>
                        </Row>
                        <Row style={{ paddingTop: "6px", paddingBottom: "6px" }}>
                            <Container fluid>
                                <ProgressBar className="leftResumeSkillBar" now={80} label={'Advanced'} />
                            </Container>
                        </Row>

                    </Col>


                    <Col lg={9} fluid>
                        <Row>
                            <Jumbotron className="jumbotronClear">
                                <p style={{ margin: "0px" }}>Reporting team lead with 7 years of combined data analytics and IT project management experience.
                                Detailed oriented leader that has worked in both agile and waterfall frameworks.
                                Efficient communicator that likes to present and teach.
                                Proficient with an array of data technologies such as Python, R, Tableau, Alteryx, and SQL.</p>
                            </Jumbotron>
                            <Jumbotron className="rightResumeJumbotronHeader" fluid>
                                <h2 style={{ marginBottom: "0px" }}>Expereience</h2>
                            </Jumbotron>
                            <Row className="rightResumeTimeframe">
                                <Col className="rightResumeTimeframeCol" lg={2} fluid>
                                    <h2 style={{ fontSize: "16px", fontWeight: "400", marginBottom: "0px" }}>Oct 2018 - Present</h2>
                                </Col>
                                <Col lg={10} fluid>
                                    <Row>
                                        <h1 style={{ fontSize: "24px", fontWeight: "600", marginBottom: "0px" }}>Charter</h1>
                                    </Row>
                                    <Row>
                                        <h2 style={{ fontSize: "20px", fontWeight: "600", marginBottom: "0px" }}>Reporting & Analytics Lead</h2>
                                        <ul className="resumeBullets">
                                            <li>Managed a seven-person reporting and data analysis team that is responsible for
                                        20+ reports and 400 users</li>
                                            <li>Delivered a custom developed app that provides increased incident data capture and
                                        reporting capabilities</li>
                                            <li>Updated the team’s intake and planning process to better align with the buyflow
                                        development cadence</li>
                                            <li>Owned the relationships with stakeholders including a monthly demo with leadership to
                                        showcase the team</li>
                                            <li>Provided vision on how to leverage additional data sources to continue expanding the
                                        reporting capabilities</li>
                                            <li>Coached team members through design challenges and how to better validate their work</li>
                                        </ul>
                                        <h2 style={{ fontSize: "20px", fontWeight: "600", marginBottom: "0px" }}>Senior Data Analyst</h2>
                                        <ul className="resumeBullets">
                                            <li>Developed and deployed an Alteryx workflow to process the $1.5+ M of weekly Retail
                                        affiliate bounties</li>
                                            <li>Built new Tableau dashboards that allowed execs to see new insights into the ecommerce
                                        order volume</li>
                                            <li>Created ETL processes via Alteryx to expose Solar Winds and AppDynamics API data on Tableau
                                        dashboards</li>
                                            <li>Constructed Python scripts to integrate Service Now incident data into a custom-built incident
                                        reporting app</li>
                                            <li>Wrote custom SQL queries to analyze customer and sale data to quantify the impact of website
                                        defects</li>
                                            <li>Provided guidance to junior team members and coached them on how to approach their projects</li>
                                        </ul>
                                    </Row>
                                </Col>

                                <Col className="rightResumeTimeframeCol" lg={2} fluid>
                                    <h2 style={{ fontSize: "16px", fontWeight: "400", marginBottom: "0px" }}>Nov 2017 - Oct 2018</h2>
                                </Col>
                                <Col lg={10} fluid>
                                    <Row>
                                        <h1 style={{ fontSize: "24px", fontWeight: "600", marginBottom: "0px" }}>Deloitte &nbsp;</h1>
                                        <h2 style={{ color: "#929399", fontSize: "20px", fontWeight: "600", marginBottom: "0px", paddingTop: "3px" }}>Senior SAP Supply Chain Consultant</h2>
                                    </Row>
                                    <Row>
                                        <h2 style={{ fontSize: "20px", fontWeight: "600", marginBottom: "0px" }}>Domestic Bulk Chemical Manufacturer - SAP Integrated Business Planning (IBP) Team Manager</h2>
                                        <ul className="resumeBullets">
                                            <li>Lead the combined client and Deloitte project team through the implementation of the
                                            planning solution</li>
                                            <li>Responsible for the design and implementation of all planning process activities through
                                            the project lifecycle</li>
                                            <li>Analyzed and fixed existing SAP planning data to improve the planning process and system
                                            outputs</li>
                                        </ul>
                                    </Row>
                                </Col>

                                <Col className="rightResumeTimeframeCol" lg={2} fluid>
                                    <h2 style={{ fontSize: "16px", fontWeight: "400", marginBottom: "0px" }}>Nov 2016 - Nov 2017</h2>
                                </Col>
                                <Col lg={10} fluid>
                                    <Row>
                                        <h1 style={{ fontSize: "24px", fontWeight: "600", marginBottom: "0px" }}>Daugherty Business Solutions &nbsp;</h1>
                                        <h2 style={{ color: "#929399", fontSize: "20px", fontWeight: "600", marginBottom: "0px", paddingTop: "3px" }}>Information Management Consultant</h2>
                                    </Row>
                                    <Row>
                                        <h2 style={{ fontSize: "20px", fontWeight: "600", marginBottom: "0px" }}>Monsanto - Enterprise Data Steward</h2>
                                        <ul className="resumeBullets">
                                            <li>Identified an opportunity to improve data validations and convinced client leadership
                                            to approve the initiative</li>
                                            <li>Architected and directed two developers to build a Python and PostgreSQL based
                                            data validation engine</li>
                                            <li>Trained stewards on the validation platform and worked with stakeholders to collect
                                            and implement feedback</li>
                                            <li>Created custom Python scripts to inspect Apache Kafka topics to improve manual data
                                            validation processes</li>
                                        </ul>
                                    </Row>
                                </Col>

                                <Col className="rightResumeTimeframeCol" lg={2} fluid>
                                    <h2 style={{ fontSize: "16px", fontWeight: "400", marginBottom: "0px" }}>July 2012 - Nov 2016</h2>
                                </Col>
                                <Col lg={10} fluid>
                                    <Row>
                                        <h1 style={{ fontSize: "24px", fontWeight: "600", marginBottom: "0px" }}>Accenture &nbsp;</h1>
                                        <h2 style={{ color: "#929399", fontSize: "20px", fontWeight: "600", marginBottom: "0px", paddingTop: "3px" }}>Technology Consultant</h2>
                                    </Row>
                                    <Row>
                                        <h2 style={{ fontSize: "20px", fontWeight: "600", marginBottom: "0px" }}>MillerCoors - SAP APO Team Manager</h2>
                                        <ul className="resumeBullets">
                                            <li>Managed the SAP APO team and operated as the client’s primary point of contact for guidance</li>
                                            <li>Partnered with leadership to evaluate the feasibility and benefit of proposed SAP APO enhancements</li>
                                            <li>Oversaw the architecture and delivery of the demand and supply planning processes and SAP APO engine</li>
                                        </ul>
                                        <h2 style={{ fontSize: "20px", fontWeight: "600", marginBottom: "0px" }}>Nike - Data Management and Reporting Lead</h2>
                                        <ul className="resumeBullets">
                                            <li>Created the data maintenance strategy, achieved program leadership buy-in, and operationalized it</li>
                                            <li>Managed the data maintenance efforts of 10 client resources over 4 months before transitioning ownership</li>
                                            <li>Created MS Access tools that streamlined data maintenance processes (reduced headcount by 60%)</li>
                                            <li>Provided analysis to determine the financial benefit for funding one year of extended acceptance testing</li>
                                        </ul>
                                        <h2 style={{ fontSize: "20px", fontWeight: "600", marginBottom: "0px" }}>Nike - Data Cleansing Analyst & Data Conversion Lead</h2>
                                        <ul className="resumeBullets">
                                            <li>Defined the data cleansing and conversion (ETL) approach for all planning master data for a $60M IT program</li>
                                            <li>Headed the ETL team's efforts for 7 mock data conversions and 1 go-live data cutover for 1M data records</li>
                                            <li>Resolved data conversions issues and created solutions to prevent conversion failures at go-live</li>
                                        </ul>
                                    </Row>
                                </Col>
                            </Row>
                        </Row>

                        <Jumbotron className="rightResumeJumbotronHeader" fluid>
                            <h2 style={{ marginBottom: "0px" }}>Education</h2>
                        </Jumbotron>
                        <Row className="rightResumeTimeframe">
                            <Col className="rightResumeTimeframeCol" lg={2} fluid>
                                <h2 style={{ fontSize: "16px", fontWeight: "400", marginBottom: "0px" }}>Aug 2008 - May 2012</h2>
                            </Col>
                            <Col lg={10} fluid>
                                <Row>
                                    <h2 style={{ fontSize: "20px", fontWeight: "600", marginBottom: "0px" }}>Missouri University of Science & Technology</h2>
                                </Row>
                                <Row>
                                    <h2 style={{ fontSize: "20px", fontWeight: "600", marginBottom: "6px" }}>B.S. Industrial Engineering & B.A. Economics - 4.0</h2>
                                </Row>
                            </Col>
                        </Row>
                        {/* <Jumbotron className="rightResumeJumbotronHeader" fluid>
                            <h2 style={{ marginBottom: "0px" }}>Independent Learning</h2>
                        </Jumbotron> */}
                    </Col>
                </Row>
            </Container>

        </div >


    );
}

export default ResumePage;