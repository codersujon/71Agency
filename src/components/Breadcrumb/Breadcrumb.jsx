import React from 'react';
import styled from 'styled-components';
import Wrapper from '../Wrapper/Wrapper';
import { THEME } from './../../styles/theme';


const StyledBreadCrumb = styled.div`
    background-color: ${THEME.colors.black};
    color: ${THEME.colors.white};
    font-family: ${THEME.fonts.heading};
    font-weight: 700;
    font-size: 40px;
    line-height: 60px;
    padding: 187px 0;
    text-align: center;
    text-transform: capitalize;

    h1{
        margin: 0 auto;
    }
`;



function Breadcrumb(props) {
    const { title } =  props;
    return (
        <StyledBreadCrumb>
            <Wrapper>
                <h1>{title}</h1>
            </Wrapper>
        </StyledBreadCrumb>
    );
}

export default Breadcrumb;