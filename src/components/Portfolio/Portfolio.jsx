import React from 'react';
import { StyledPortfolio } from './StyledPortfolio';
import Wrapper from '../Wrapper/Wrapper';
import SectionTitle from "../SectionTitle//SectionTitle";

function Portfolio(props) {
    return (
        <StyledPortfolio>
                <SectionTitle 
                    title="The work we do, and the people we help."
                    content="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
                />
        </StyledPortfolio>
    );
}

export default Portfolio;