import React from 'react';
import Wrapper from './Wrapper/Wrapper';
import styled from 'styled-components';

const StyledFooter =  styled.footer`
    p{
        margin: 0 auto;
    }
`;


function Footer(props) {
    return (
        <StyledFooter>
            <Wrapper>
                <p>copyright @2022</p>
            </Wrapper>
        </StyledFooter>
    );
}

export default Footer;