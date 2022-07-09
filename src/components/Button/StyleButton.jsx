import styled, { ThemeConsumer } from 'styled-components';
import { THEME } from './../../styles/theme';

export const StyleButton = styled.div`
display: inline-block;
margin-left: 60px;

&.normal{
    a{
        color:  ${THEME.colors.text} !important; 
        background-color: ${ THEME.colors.primary}; 
        font-style: normal;
        font-weight: 500;
        font-size: 20px;
        line-height: 28px;
        border: 1px solid ${ THEME.colors.primary}; 
        border-radius: 50px;
        padding: 19px 59px;
        text-decoration: none;
        transition: .2s;
        &:hover{
            background-color: transparent;
            border-color: ${THEME.colors.primary};
            color: ${THEME.colors.white} !important; 
        }
    }
}

&.outline{
    a{
        color:  ${THEME.colors.white} !important; 
        background-color: transparent;
        font-style: normal;
        font-weight: 500;
        font-size: 20px;
        line-height: 28px;
        border: 1px solid ${ THEME.colors.primary}; 
        border-radius: 50px;
        padding: 19px 59px;
        text-decoration: none;
        transition: .2s;
        &:hover{
            background-color: ${ THEME.colors.primary}; 
            border-color: ${THEME.colors.primary};
            color:  ${THEME.colors.text} !important; 
        }
    }
}


`;
