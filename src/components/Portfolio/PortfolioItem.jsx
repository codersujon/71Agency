import React from 'react';
import styled from 'styled-components';
import SectionTitle from '../SectionTitle/SectionTitle';
import Description from '../Description/Description';
import { media } from '../../styles/responsive';

const StyledPortoflioItem =  styled.article`
    .h3{
        margin-bottom: 14px;
    }

    .thumb {
        margin-bottom: 60px;
        
        ${media.down('md')}{
            img{
                width: 100%;
            }
            
        }
    }
`;


function PortfolioItem(props) {
    const { image, title, para } = props;
    return (
        <StyledPortoflioItem>
            <div className="thumb">
                <img src={image} alt="portfolio-img" />
            </div>
            <SectionTitle type="h3" className="h3">
                {title}
            </SectionTitle>
            <Description>
                <p>{para}</p>
            </Description>
        </StyledPortoflioItem>

    );
}

export default PortfolioItem;