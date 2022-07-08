import React from 'react';
import StyledHero from './StyledHero';
import Button from '../Button/Button';

function Hero(props) {
    return (
        <StyledHero>
            <h1 className="title">We craft holistic, people- <br/>friendly digital experiences.</h1>
            <p className="content">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
            <div className="seventy__cta">
                <Button to="contact" name="Get a Free Quota"/>
                <Button to="contact" name="Estiamte Project"/>
            </div>
        </StyledHero>
    );
}

export default Hero;