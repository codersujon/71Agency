import styled from 'styled-components';
import { THEME } from '../../styles/theme';
import { media } from './../../styles/responsive';


export const StyledFooter = styled.footer `
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
                display: flex;
            }
        }
    }

    .footer__contact{
        margin-bottom: 50px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        color: ${THEME.colors.white};
        width: 100%;

        
        ${media.up('lg')} {
            display: flex;
            flex-direction: row;
        }

        & img{
            margin-bottom: 24px;
            width: 48px;
            height: 56px;
        }

        & p{
            font-size: 20px;
            line-height: 30px;
            letter-spacing: 0.48px;
            color: ${THEME.colors.white};
            margin-bottom: 22px;

            & a{
                color: ${THEME.colors.white};
                text-decoration: none;
            }
        }

        & .footer__title{
            font-weight: 500;
            font-size: 24px;
            line-height: 34px;
            margin-bottom: 24px;
        }

        & .footer__widget{
            display: flex;
            flex-direction: column;
            margin-bottom: 30px;

            & br{
                display: none;
            }

            ${media.down('sm')} {
                align-items: center;
            }

            ${media.up('md')} {
                margin: 0;
                
                & br{
                    display: block;
                }
            }
        }

        & .footer__links{
            display: flex;
            flex-direction: column;
            & a{
                font-family: ${THEME.fonts.body};
                font-weight: 400;
                font-size: 18px;
                line-height: 28px;
                color: ${THEME.colors.white};
                text-transform: capitalize;
                text-decoration: none;
                margin-bottom: 14px;
                &:hover{
                    color: ${THEME.colors.primary};
                }
            }
        }
    }

    
    .footer__copyright{
        p{
            font-family: ${THEME.fonts.body};
            font-size: 18px;
            line-height: 28px;
            color: ${THEME.colors.bodyText};

        }
        
        ${media.down('md')} {
            display: flex;
            justify-content: center;
            width: 100%;
        }
    }

`;