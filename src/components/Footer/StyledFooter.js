import styled from 'styled-components';
import { THEME } from '../../styles/theme';
import { media } from './../../styles/responsive';


export const StyledFooter =  styled.footer`
    background-color: ${THEME.colors.black};
    padding: 110px 0;

    .footer__together{
        display: flex;
        flex-flow: column wrap;
        justify-content: center;
        margin: 0 auto;
        margin-bottom: 160px;
        text-align: center;

        & span{
            font-family: ${THEME.fonts.heading};
            font-weight: 400;
            font-size: 20px;
            line-height: 30px;
            letter-spacing: 0.48px;
            color: ${THEME.colors.primary};
            margin-bottom: 40px;
        }

        h2{
            font-weight: 500;
            font-size: 42px;
            line-height: 52px;
            letter-spacing: 0.48px;
            color: ${THEME.colors.white};
            margin-bottom: 80px;
            padding: 0px 40px;
            text-align: center;

            ${media.up('md')}{
                font-size: 62px;
                line-height: 72px;
                padding: 0px 100px;
                margin-bottom: 90px;
            } 

            ${media.up('lg')}{
                font-size: 72px;
                line-height: 82px;
                padding: 0px 152px;
                margin-bottom: 110px;
            }   
        }

        .footer__cta {

            ${media.down('lg')} {
                bdisplay: flex;
            }
        }
        

    }


    p{
        font-family: ${THEME.fonts.body};
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 28px;
        color: ${THEME.colors.bodyText};
    }

`;