import styled, { ThemeConsumer } from 'styled-components';
import { THEME } from './../../styles/theme';

const StyleButton = styled.span`
display: inline-block;
margin-left: 60px;
a{
    color: ${THEME.colors.text} !important;
    background: ${THEME.colors.primary};  
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 28px;
    border-radius: 50px;
    padding: 20px 60px;
    text-decoration: none;
    &:hover{
        background-color: ${THEME.colors.primaryHover};
    }
}
`;


export default StyleButton;