import React from 'react';
import Hero from '../components/Hero';
// import Carousel from '../components/Carousel';
import Content from '../components/Content';
import { Jumbotron, Container, Carousel, Button, Card, CardGroup, CardColumns, CardDeck } from 'react-bootstrap';
import './ProjectPage.css'

import bath_img from '../assets/images/bath_before_card.jpg'

function ProjectPage(props) {
    return (
        <div>
            <Jumbotron className="jumbotron-clear" fluid>
                <Container fluid>
                    <h1 className="jumbo_homepage">Blog - Codeless Projects</h1>
                    <p className="jumbo_homepage_lead">Here is what I've been up to when I need a break from the laptop</p>
                </Container>
            </Jumbotron>

<CardDeck className = "project_card_deck">
                <Card border="light" style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={bath_img} fluid />
                    <Card.Body>
                        <Card.Title>Bathroom Remodel</Card.Title>
                        <Card.Subtitle className='card_subtitle_projects'>DIY, Weekend Project</Card.Subtitle>
                        <Card.Text>
                            My buddy roped me into helping him remodel his bathroom over a weekend.
                    </Card.Text>
                        <Card.Link href='/blog/bathremodel'>Full write up on the project</Card.Link>
                    </Card.Body>
                </Card>

                <Card border="light" style={{ width: '18rem' }}>
                    <Card.Img variant="top"  />
                    <Card.Body>
                        <Card.Title></Card.Title>
                        <Card.Subtitle className='card_subtitle_projects'></Card.Subtitle>
                        <Card.Text>
        
                    </Card.Text>
                        <Card.Link href='/projects/thissite'></Card.Link>
                    </Card.Body>
                </Card>

                <Card border="light" style={{ width: '18rem' }}>
                    <Card.Img variant="top" />
                    <Card.Body>
                        <Card.Title></Card.Title>
                        <Card.Subtitle className='card_subtitle_projects'></Card.Subtitle>
                        <Card.Text>
        
                    </Card.Text>
                        <Card.Link href='/projects/thissite'></Card.Link>
                    </Card.Body>
                </Card>
            </CardDeck>

        </div>


    );
}

export default ProjectPage;