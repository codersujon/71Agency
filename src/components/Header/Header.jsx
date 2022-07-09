import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import styled from 'styled-components';
import Logo from '../../images/logo.svg';
import CustomNavLink from './CustomNavLink';
import ROUTES from "../../routes";
import Button from '../Button/Button';
import StyleHeader from './StyledHeader';




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
                            {/* looping */}
                            {ROUTES.map(link =>{
                                return(
                                    <CustomNavLink key={link.to} linkTo={link.to} linkName={link.name}/>
                                )
                            })}
                           <li>
                                <Button to="contact" name="Contact"/>
                           </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </StyleHeader>
    );
};

export default Header;

