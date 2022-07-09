import React from 'react';
import StyledHero from './StyledHero';
import Button from '../Button/Button';
import SectionTitle from '../SectionTitle/SectionTitle';
import Wrapper from '../Wrapper/Wrapper';

function Hero(props) {
    //Destructuring
    const {title, content} = props;
    return (
        <StyledHero>
           <Wrapper>
                {title ? <SectionTitle type="h1" className="h1">{title}</SectionTitle> : ''}
                {content ? <p className="content">{content}</p> : ''}
                <div className="seventy__cta">
                    <Button to="contact" name="Get a Free Quota" variant="normal"/>
                    <Button to="contact" name="Estiamte Project" variant="outline"/>
                </div>
           </Wrapper>
        </StyledHero>
    );
}

export default Hero;