import React from 'react';
import Wrapper from './Wrapper/Wrapper';
import styled from 'styled-components';
import { THEME } from './../styles/theme';

const StyledFooter =  styled.footer`
    background-color: ${THEME.colors.black};
    padding-bottom: 110px;

    p{
        font-family: ${THEME.fonts.body};
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 28px;
        color: ${THEME.colors.bodyText};
    }
`;


function Footer(props) {
    return (
        <StyledFooter>
            <Wrapper>
                <p>&copy; 71 Studio 2022. All rights reserved.</p>
            </Wrapper>
        </StyledFooter>
    );
}

export default Footer;