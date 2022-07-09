import React from 'react';
import styled from 'styled-components';
import { THEME } from "../../styles/theme"


const StyledDescription = styled.div`
        font-family: ${THEME.fonts.body};
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 26px;
        max-width: 629px;

        p{
            font-family: ${THEME.fonts.body};
            font-style: normal;
            font-weight: 400;
            font-size: 16px;
            line-height: 26px;
            max-width: 580px;
        }
`;

function Description(props) {
    const {children} = props;
    return (
        <StyledDescription>
            {children}
        </StyledDescription>
    );
}

export default Description;