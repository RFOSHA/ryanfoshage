import React from 'react';
import { Jumbotron, Container, Row, Image, Col, Nav, Tab, Tabs, TabList, Card, Button, Carousel } from 'react-bootstrap';
// import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import './BathRemodel.css'

import bath_before_img from '../assets/images/bath_before.jpg'
import bath_end_day1_img from '../assets/images/bath_remodel_end_day1.jpg'
import bath_finish_img from '../assets/images/bath_remodel_finish.jpg'


function BathRemodel(props) {
    return (
        <div>
            <Jumbotron className="jumbotron-clear" fluid>
                <Container fluid>
                    <h1 className="jumbo_fflwebsite">Bathroom Remodel</h1>
                    <h2 className="h2_fflwebsite">DIY, Weekend Projects</h2>
                    <Row>
                        <Col lg={8}>

                            <p>My buddy and his wife just bought an older house that is in need of some updating. While they decided to leave
                            the major projects to the professionals, my friend wanted to take a stab at remodeling a small half bath.
                            </p>

                            <p>I showed up Friday night and luckily the wallpaper was already removed. Without having previously removed
                            wallpaper, the YouTube videos made it look tedious, so I was happy to avoid that. Also, the existing vanity and
                            toilet were already removed and he had already primed the walls. I started earnest on Saturday and we started
                            by tearing out the tile, easy. Demo, I like demo. The next part was what I had feared, laying the tile. Neither
                            one of us had previously laid tile. I watched my Dad do it, but never actually did it myself. After 10 minutes of
                            YouTube training we jumped in. He already had purchased some small, hexagon tiles to my disappointment. After initially
                            laying out the hexagon tiles we quickly realized he did not purchase enough. While at the hardware store, some larger
                            tiles caught my eye and I was fortunately able to talk him into pivoting. Why would we want to lay a 100 small tiles,
                            when we could lay 12 large tiles?
                            </p>

                            <p>For the rest of the afternoon we did our best to measure and cut tiles. I had a small wet saw from my Dad that
                            proved to be more trustworthy than the cheap score and break types of tile cutters. If I had to do it again,
                            I would invest in a much higher end tile cutter in order to have the benefit of a more robust guide, but I digress.
                            By the end of day one, we have the tile laid and it will dry over night.
                            </p>

                            <p>On day two we get another early start and knock out the first coat of paint. It was a nice win followed by hours of
                            losing the battle against the toilet. Ultimately, our first attempt to install the toilet failed because the flange
                            was recessed and the toilet was not able to make a good seal with the wax ring. Before this day, I had no idea
                            that a wax ring was all that separated the contents of your toilet from spilling out the bottom. Luckily, we found
                            a more robust solution, but not before by friend busted a tile by over tightening the toilet to the flange. Finally,
                            we got the vanity installed without too many issues and the grouting went quickly. When it was all said and done,
                            the bathroom turned out great and better than I expected when we started.
                            </p>
                        </Col>

                        <Col lg={4}>
                            <Carousel>
                                <Carousel.Item>
                                    <img
                                        className="d-block w-100"
                                        src={bath_before_img}
                                        alt="First slide"
                                    />
                                    <Carousel.Caption>
                                        <h3>Before</h3>
                                        <p>How the weekend started</p>
                                    </Carousel.Caption>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                        className="d-block w-100"
                                        src={bath_end_day1_img}
                                        alt="Third slide"
                                    />

                                    <Carousel.Caption>
                                        <h3>At the end of Saturday</h3>
                                        <p>Tile laid and drying</p>
                                    </Carousel.Caption>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                        className="d-block w-100"
                                        src={bath_finish_img}
                                        alt="Third slide"
                                    />

                                    <Carousel.Caption>
                                        <h3>End of day Sunday</h3>
                                        <p>Finished project</p>
                                    </Carousel.Caption>
                                </Carousel.Item>
                            </Carousel>
                        </Col>
                    </Row>
                </Container>
            </Jumbotron>
        </div>


    );
}

export default BathRemodel;