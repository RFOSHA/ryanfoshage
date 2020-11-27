import React from 'react';
import Content from '../components/Content';

import Hero from '../components/Hero'

function AboutPage(props){
    return(
        <div>
            <Hero title={props.title} />

            <Content>
               <p>My bio. I'm pretty cool. You should check me out!</p>
            </Content>

        </div>
    );
}

export default AboutPage;