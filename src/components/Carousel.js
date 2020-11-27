import React from 'react';

import Card from '../components/Card';

import linkedin from '../assets/images/linkedin.png';
import github from '../assets/images/github.png';
import bxboys from '../assets/images/bxboys.PNG';
import { Container, Row } from 'react-bootstrap';

class Carousel extends React.Component{
    constructor(props){
        super(props);
        this.state={
            items: [
                {
                    id:0,
                    title: 'LinkedIn',
                    subTitle: 'LinkeIn Profile',
                    imgSrc: linkedin,
                    link: 'https://www.linkedin.com/in/ryan-foshage-38995386/',
                    selected: false

                },
                {
                    id:1,
                    title: 'Github',
                    subTitle: 'Github Profile',
                    imgSrc: github,
                    link: 'https://github.com/RFOSHA',
                    selected: false

                },
                {
                    id:2,
                    title: 'Fantasy Football Website',
                    subTitle: 'Created a flask website for a fantasy football website',
                    imgSrc: bxboys,
                    link: 'https://bxboysffl.azurewebsites.net/homepage/',
                    selected: false

                },
            ]

        }
    }

    handleCardClick = (id, card) => {
        console.log(id);
        let items = [... this.state.items];
        items[id].selected = items[id].selected ? false : true;
        items.forEach(item => {
            if(item.id !== id){
                item.selected = false;
            }
        });

        this.setState({
            items
        });
    }

    makeItems = (items) => {
        return items.map(item => {
            return <Card item={item} click={(e => this.handleCardClick(item.id, e))} key={item.id} />
        })
    }

    render(){
        return(
            <Container fluid={true}>
                <Row className="justify-content-around">
                    {this.makeItems(this.state.items)}
                </Row>
            </Container>
        );
    }
}

export default Carousel;