import styled from "styled-components";
import { THEME } from './../../styles/theme';

const StyledHero = styled.section`
    background-color: ${THEME.colors.black};
    color: ${THEME.colors.white};
    text-align: center;
    padding: 140px 0;

    .title{
        font-family: ${THEME.fonts.heading};
        font-style: normal;
        font-weight: 700;
        font-size: 80px;
        line-height: 98px;
        margin-bottom: 60px;
    }

    .content{
        font-family: ${THEME.fonts.body};
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 26px;
        margin-bottom: 60px;
    }

`;


export default StyledHero;