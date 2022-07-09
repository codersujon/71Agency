import React from 'react';
import styled from 'styled-components';
import SectionTitle from '../SectionTitle/SectionTitle';
import Description from '../Description/Description';
import TextLink from './../Button/TextLink';
import RightArrow from '../../images/right-arrow.svg';
import { THEME } from './../../styles/theme';
import { media } from '../../styles/responsive';

const StyledQualityCard =  styled.div`
    .card{
        padding: 68px 34px;
        border: 1px solid ${ THEME.colors.primary };
        border-radius: 8px;
        

        ${media.up('lg')}{
            margin-right: 10px;
        }
        
        & > img{
            width: 100px;
            height: 100px;
            margin: 0 auto 40px auto;
        }

        & h3{
            font-size: 28px;
            line-height: 38px;
            text-align: center;
            margin-bottom: 14px;
            padding: 0 45px;
        }

        & p{
            font-weight: 300;
            font-size: 14px;
            line-height: 24px;
            color: ${THEME.colors.bodyText};
            letter-spacing: 0.48px;
            text-align: center;
            margin-bottom: 40px;
        }
    }
    

    .card__cta{
        display: flex;
        justify-content: center;

        a{
            font-family: ${THEME.fonts.heading};
            font-style: normal;
            font-weight: 400;
            font-size: 22px;
            line-height: 32px;
            text-decoration: none;
            color: ${THEME.colors.black};
            margin-right: 10px;
        }
    }
`;


function QualityCard(props) {
    const {image, children} = props;
    return (
        <StyledQualityCard>
            <div className="card">
                <img src={image} alt="Card Image" />
                <SectionTitle type="h3" class="h3">{children}</SectionTitle>
                <Description>
                    <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.</p>
                </Description>

                <div className="card__cta">
                    <TextLink to="/work" name="Learn More" />
                    <img src={RightArrow} alt="Right arrow Icon" />
                </div>
            </div>
        </StyledQualityCard>
    );
}

export default QualityCard;