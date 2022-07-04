import React from 'react';
import styled from 'styled-components';
import Logo from '../images/logo.svg';
import { THEME } from '../styles/theme';


const StyleHeader = styled.header`
    background-color: ${THEME.colors.black}
`



const Header = (props) => {
    return (
        <StyleHeader>
            <header>
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
            </header>
        </StyleHeader>
    );
};

export default Header;

