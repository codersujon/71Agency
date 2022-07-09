import React from 'react';
import styled from 'styled-components';


const StyledWrapper = styled.div`
    display: felx;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    text-align: center;

    max-width: 1280px;
    margin: 0 auto;
    padding: 0 30px;

`;

function Wrapper(props) {
    return (
        <StyledWrapper>{props.children}</StyledWrapper>
    );
}

export default Wrapper;
