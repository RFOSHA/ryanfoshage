import React from 'react';
import Hero from '../components/Hero';
// import Carousel from '../components/Carousel';
import Content from '../components/Content';
import { Jumbotron, Container, Carousel, Button, Card, CardGroup, CardColumns, CardDeck } from 'react-bootstrap';
import './ProjectPage.css'

import ffl_web_img from '../assets/images/ffl_img.PNG'
import portfolio_img from '../assets/images/portfolio.PNG'
import espn_api_img from '../assets/images/espn_api_project.jpg'

function ProjectPage(props) {
    return (
        <div>
            <Jumbotron className="jumbotron-clear" fluid>
                <Container fluid>
                    <h1 className="jumbo_homepage">Project Portfolio</h1>
                    <p className="jumbo_homepage_lead">Check out some of my latest projects</p>
                </Container>
            </Jumbotron>

            <CardDeck className = "project_card_deck">
                <Card border="light" style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={ffl_web_img} />
                    <Card.Body>
                        <Card.Title>Fantasy Football Website</Card.Title>
                        <Card.Subtitle className='card_subtitle_projects'>Python, Flask, Bootstrap</Card.Subtitle>
                        <Card.Text>
                            I built a website for my fantasy football league in order to teach myself Python's Flask.
                            Use guest@gmail.com and the password, 'pwd' to login and explore.
                    </Card.Text>
                        <Card.Link href='/projects/fflwebsite'>Full write up on the project</Card.Link>
                    </Card.Body>
                    <Button variant="primary" href='https://bxbfolio.azurewebsites.net/' target="_blank">Go To the Site</Button>
                </Card>

                <Card border="light" style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={espn_api_img} />
                    <Card.Body>
                        <Card.Title>Fantasy Football Website - ESPN API</Card.Title>
                        <Card.Subtitle className='card_subtitle_projects'>Python, Pandas, APIs</Card.Subtitle>
                        <Card.Text>
                            Built out a set of scripts to pull data from the ESPN Fantasy Football APIs to collect lifetime league metrics.
                    </Card.Text>
                        <Card.Link href='/projects/espnapi'>Full write up on the project</Card.Link>
                    </Card.Body>
                </Card>

                <Card border="light" style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={portfolio_img} />
                    <Card.Body>
                        <Card.Title>Personal Portfolio - This Site!</Card.Title>
                        <Card.Subtitle className='card_subtitle_projects'>JavaScript, React, React Bootstrap</Card.Subtitle>
                        <Card.Text>
                            I wanted to start learning JavaScript and wanted to create a personal portfolio, thus this site.
                    </Card.Text>
                        <Card.Link href='/projects/thissite'>Full write up on the project</Card.Link>
                    </Card.Body>
                </Card>
            </CardDeck>
        </div>


    );
}

export default ProjectPage;