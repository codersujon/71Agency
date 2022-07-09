import React from 'react';
import { StyledQuality } from "./StyledQuality";
import Wrapper from '../Wrapper/Wrapper';
import SectionTitle from './../SectionTitle/SectionTitle';
import Description from '../Description/Description';
import QualityCard from './QualityCard';
import card1 from '../../images/Quality/card-1.png';
import card2 from '../../images/Quality/card-2.png';
import card3 from '../../images/Quality/card-3.png';

function Quality(props) {
    return (
        <StyledQuality>
            <Wrapper>
                <div className="quality__inner">
                    <SectionTitle type="h2" className="h2">
                        We Are Different
                    </SectionTitle>
                    <Description className="content">
                        <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.</p>
                    </Description>
                </div>
                <div className="quality__card">
                      <QualityCard image={card1} children="Quality Assurance & Testing"/>  
                      <QualityCard image={card2} children="Dedicated Support"/>  
                      <QualityCard image={card3} children="We have Experienced"/>  
                </div>
            </Wrapper>
        </StyledQuality>
    );
}

export default Quality;