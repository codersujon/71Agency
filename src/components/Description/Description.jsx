import React from 'react';
import styled from 'styled-components';
import { THEME } from "../../styles/theme"
import { media } from '../../styles/responsive';


const StyledDescription = styled.div`
        font-family: ${THEME.fonts.body};
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 26px;

        p{
            font-family: ${THEME.fonts.body};
            font-style: normal;
            font-weight: 400;
            font-size: 16px;
            line-height: 26px;

            ${media.down('md')}{
                width: 100%;
                text-align: center;
                
                & br{
                    display: none;
                }
           }
    
            ${media.up('lg')}{
                width: 100%;
                max-width: 629px;
           }
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