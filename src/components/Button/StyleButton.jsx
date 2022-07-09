import styled, { ThemeConsumer } from 'styled-components';
import { THEME } from './../../styles/theme';
import { media } from '../../styles/responsive';

export const StyleButton = styled.div`
    display: inline-block;
    margin-left: 60px;
    a{
        font-style: normal;
        font-weight: 500;
        font-size: 20px;
        line-height: 28px;
        border-radius: 50px;
        padding: 12px 40px;
        text-decoration: none;
        transition: .2s;

        ${media.up('md')} {
            font-size: 18px;
        }

        ${media.up('lg')} {
            font-size: 20px;
            line-height: 28px;
            padding: 19px 59px;
        }
    }

    &.normal{
        a{
            color:  ${THEME.colors.text} !important; 
            background-color: ${THEME.colors.primary}; 
            border: 1px solid ${THEME.colors.primary}; 
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
            border: 1px solid ${THEME.colors.primary}; 
            &:hover{
                background-color: ${THEME.colors.primary}; 
                border-color: ${THEME.colors.primary};
                color:  ${THEME.colors.text} !important; 
            }
        }
    }

`;
