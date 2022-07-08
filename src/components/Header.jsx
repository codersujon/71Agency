import React from 'react';
import styled from 'styled-components';
import Logo from '../images/logo.svg';
import { THEME } from '../styles/theme';


const StyleHeader = styled.section`

    background-color: ${THEME.colors.black};

    .wrapper{
        max-width: 1280px;
        margin: 0 auto;
        padding: 0 30px;
    }

`;


const Header = (props) => {
    return (
        <StyleHeader>
            <div className="wrapper">
                <div className="wrapper__left">
                    <div className="logo">
                        <a href="">
                            <img src={Logo} alt="SeventyOne__Logo" />
                        </a>
                    </div>
                </div>
                <div className="wrapper__right">
                    
                </div>
            </div>
        </StyleHeader>
    );
};

export default Header;

