import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import styled from 'styled-components';
import Logo from '../images/logo.svg';
import { THEME } from '../styles/theme';
import CustomNavLink from './CustomNavLink';
import ROUTES from "../routes";



const StyleHeader = styled.section`

    background-color: ${THEME.colors.black};

    .wrapper{
        max-width: 1280px;
        margin: 0 auto;
        padding: 0 30px;
    }
    .active{

    }

`;


const Header = (props) => {
    return (
        <StyleHeader>
            <div className="wrapper">
                <div className="wrapper__left">
                    <div className="logo">
                        <Link to="/">
                            <img src={Logo} alt="SeventyOne__Logo" />
                        </Link>
                    </div>
                </div>
                <div className="wrapper__right">
                    <nav>
                        <ul>
                            {ROUTES.map(link =>{
                                return(
                                    <CustomNavLink linkTo={link.to} linkName={link.name}/>
                                )
                            })}
                        </ul>
                    </nav>
                </div>
            </div>
        </StyleHeader>
    );
};

export default Header;

