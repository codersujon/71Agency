import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import styled from 'styled-components';
import Logo from '../images/logo.svg';
import { THEME } from '../styles/theme';
import CustomNavLink from './CustomNavLink';
import ROUTES from "../routes";
import Button from './Button/Button';
import { media } from '../styles/responsive';



const StyleHeader = styled.header`
    
    background-color: ${THEME.colors.black};
    padding: 30px 0;

    ${media.up('lg')} {
        padding: 60px 0;
    }

    .wrapper{
        display: felx;
        justify-content: space-between;
        align-items: center;

        max-width: 1280px;
        margin: 0 auto;
        padding: 0 30px;

        &__left{
        }

        &__right{
            display: felx;
            & ul{
                display: felx;
                flex-wrap: wrap;
                justify-content: center;
                gap: 40px;

                ${media.up('lg')} {
                    justify-content: flex-end;
                }
            
                
               & a{
                font-style: normal;
                font-weight: 400;
                font-size: 20px;
                line-height: 40px;
                color: ${THEME.colors.white};
                text-decoration: none;
                text-transform: capitalize;
                &.active{
                    color: ${THEME.colors.primary}
                }
               }
            }
        }
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

