import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import styled from 'styled-components';
import Logo from '../../images/logo.svg';
import CustomNavLink from './CustomNavLink';
import ROUTES from "../../routes";
import Button from '../Button/Button';
import { StyleHeader } from './StyledHeader';
import Wrapper from '../Wrapper/Wrapper';





const Header = (props) => {
    return (
        <StyleHeader>
            <Wrapper>
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
                            {/* looping */}
                            {ROUTES.map(link =>{
                                return(
                                    <CustomNavLink key={link.to} linkTo={link.to} linkName={link.name}/>
                                )
                            })}
                        <li>
                                <Button to="contact" name="Contact" variant="normal"/>
                        </li>
                        </ul>
                    </nav>
                </div>
            </Wrapper>  
        </StyleHeader>
    );
};

export default Header;

