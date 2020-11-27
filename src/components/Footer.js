import React from 'react';
import { Container, ModalFooter, Row, Col } from 'react-bootstrap';
// import Container from 'react-bootstrap/Container'; 


function Footer(){
    return(
        <footer className="mt-5">
            <Container fluid={true}>
                <Row className="border-top justify-content-between p-3">
                    {/* <Col className="p-0" md={3} sm={12}>
                        Ryan Foshage
                    </Col> */}
                    <Col className="p-0 d-flex justify-content-begin" md={3}>
                        This site created and maintained by Ryan Foshage
                    </Col>
                </Row>
            </Container>
        </footer>
    );
}

export default Footer;