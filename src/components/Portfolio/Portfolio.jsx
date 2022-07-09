import React from 'react';
import { StyledPortfolio } from './StyledPortfolio';
import SectionTitle from "../SectionTitle//SectionTitle";
import Description from '../Description/Description';
import Wrapper from "../Wrapper/Wrapper";
import PortfolioItem from './PortfolioItem';
import Portfolio1 from '../../images/portfolio/port1.jpg';
import Portfolio2 from '../../images/portfolio/port2.jpg';
import Portfolio3 from '../../images/portfolio/port3.jpg';
import Portfolio4 from '../../images/portfolio/port4.jpg';

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
                    <PortfolioItem 
                        image={Portfolio1} 
                        title="Sandbox" 
                        para="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit."
                    />
                    <PortfolioItem 
                        image={Portfolio2} 
                        title="Sandbox" 
                        para="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit."
                    />
                    <PortfolioItem 
                        image={Portfolio3} 
                        title="Sandbox" 
                        para="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit."
                    />
                    <PortfolioItem 
                        image={Portfolio4} 
                        title="Sandbox" 
                        para="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit."
                    />  
                </div>
            </Wrapper>
        </StyledPortfolio>
    );
}

export default Portfolio;
