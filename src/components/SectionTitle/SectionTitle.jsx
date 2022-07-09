import React from 'react';
import { StyledSectionTitle } from './StyledSectionTitle';

function SectionTitle(props) {
    //Desturcturing
    const {type, className, children} = props;
    return (
        <StyledSectionTitle>
            <>
                {
                    type === "h1" ? (
                    <h1 className='h1'>{children}</h1> 
                    ) : type === "h2" ? ( 
                    <h2 className='h2'>{children}</h2>
                    ) : type === "h3" ? (
                    <h3 className='h3'>{children}</h3> 
                    ) : type === "h4" ? (
                    <h4 className='h4'>{children}</h4> 
                    ) : type === "h5" ? (
                    <h5 className='h5'>{children}</h5> 
                    ) : type === "h6" ? (
                    <h6 className='h6'>{children}</h6> 
                    ): (
                        ""
                    )}
            </>
        </StyledSectionTitle>
    );
}

export default SectionTitle;