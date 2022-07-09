import React from 'react';
import { StyledPortfolio } from './StyledPortfolio';
import SectionTitle from "../SectionTitle//SectionTitle";
import Description from '../Description/Description';
import Wrapper from "../Wrapper/Wrapper";
import PortfolioItem from './PortfolioItem';
import { PortfolioInfo } from '../../portfolioInfo';


function Portfolio(props) {
    return (
        <StyledPortfolio>
            <Wrapper>
                <div className="portfolio-inner">
                    <SectionTitle type="h2" className="h2">
                        The work we do, <br/> and the people we help.
                    </SectionTitle>
                    <Description className="content">
                        <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
                    </Description>
                </div>
                <div className="portfolio-item-wrapper">

                    {PortfolioInfo.map(portfo =>{
                        return(
                            <PortfolioItem key={portfo.key} image={portfo.image} title={portfo.title} para={portfo.para}/>
                        )
                    })}

                </div>
            </Wrapper>
        </StyledPortfolio>
    );
}

export default Portfolio;
