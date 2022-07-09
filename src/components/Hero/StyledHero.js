import styled from "styled-components";
import { THEME } from './../../styles/theme';

const StyledHero = styled.section`
    background-color: ${THEME.colors.black};
    color: ${THEME.colors.white};
    padding: 140px 0;
    text-align: center;

    .title{
        font-family: ${THEME.fonts.heading};
        font-style: normal;
        font-weight: 700;
        font-size: 80px;
        line-height: 98px;
        max-width: 1049px;
        margin: 0 auto 60px auto;
    }

    .content{
        font-family: ${THEME.fonts.body};
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 26px;
        max-width: 667px;
        margin: 0 auto 60px auto;
    }

    .seventy__cta{
        gap: 32px;
    }

`;

export default StyledHero;
