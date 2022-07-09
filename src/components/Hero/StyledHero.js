import styled from "styled-components";
import { THEME } from './../../styles/theme';
import { media } from '../../styles/responsive';

const StyledHero = styled.section`
    background-color: ${THEME.colors.black};
    color: ${THEME.colors.white};
    padding: 140px 12px;
    text-align: center;

    .title{
        font-family: ${THEME.fonts.heading};
        font-style: normal;
        font-weight: 700;
        font-size: 40px;
        line-height: 50px;
        max-width: 1049px;
        margin: 0 auto 40px auto;


        ${media.up('md')} {
            font-size: 60px;
            line-height: 98px;
        }

        ${media.up('lg')} {
            font-size: 80px;
            line-height: 98px;
            margin: 0 auto 60px auto;
        }
    }

    .content{
        font-family: ${THEME.fonts.body};
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 26px;
        max-width: 667px;
        margin: 0 auto 40px auto;

        ${media.up('lg')}{
            font-size: 16px;
            line-height: 26px;
            margin: 0 auto 60px auto;
        }
    }

    .seventy__cta{
        gap: 32px;
        ${media.down('sm')} {
            div{
                margin-left: 0;
            }
            a {
                display: flex;
                margin-bottom: 20px;
                
            }
        }
    }

`;

export default StyledHero;
