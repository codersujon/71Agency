import styled from "styled-components";
import { THEME } from './../../styles/theme';

const StyledHero = styled.section`
    background-color: ${THEME.colors.black};

    .title{
        font-style: normal;
        font-weight: 700;
        font-size: 80px;
        line-height: 98px;
        color: ${THEME.colors.white};
        text-align: center;
    }

`;


export default StyledHero;