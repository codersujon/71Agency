import styled from "styled-components";
import { THEME } from './../../styles/theme';
import { media } from '../../styles/responsive';

const StyledHero = styled.section`
    background-color: ${THEME.colors.black};
    color: ${THEME.colors.white};
    padding: 140px 0px;
    text-align: center;

    .h1{
        margin: 0 auto 40px auto;
        color: ${THEME.colors.white};
        width: 100%;
        
    }

    .content{
        font-family: ${THEME.fonts.body};
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 26px;
        margin: 0 auto 40px auto;

        ${media.up('lg')}{
            font-size: 16px;
            line-height: 26px;
            margin: 0 auto 60px auto;
            max-width: 667px;
        }
    }

    .seventy__cta{
        gap: 32px;
        width: 100%;
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
