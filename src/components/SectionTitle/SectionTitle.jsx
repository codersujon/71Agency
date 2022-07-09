import React from 'react';
import { StyledSectionTitle } from './StyledSectionTitle';

function SectionTitle(props) {
    //Desturcturing
    const {title, content} = props;
    return (
        <StyledSectionTitle>
            {title ? <h2 className='title'>{title}</h2> : ''}
            {content ? <p className="content">{content}</p> : ''}
        </StyledSectionTitle>
    );
}

export default SectionTitle;