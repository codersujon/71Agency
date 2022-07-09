import React from 'react';
import Hero from '../components/Hero/Hero';
import Portfolio from '../components/Portfolio/Portfolio';


function Home(props) {
    return (
        <div>
           <Hero 
            title="We craft holistic, people- friendly digital experiences." 
            content="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
           /> 
           <Portfolio/>
        </div>
    );
}

export default Home;


