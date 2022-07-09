import styled from "styled-components";
import { THEME } from "../../styles/theme";
import { media } from "../../styles/responsive";


export const StyledPortfolio = styled.section `
    padding: 160px 0px 0px 0px;
    
    p{
        color: ${THEME.colors.bodyText};
    }

    .h2{
        margin-bottom: 32px;
    }

    .portfolio-inner{
        width: 100%;
        margin-bottom: 90px;

        ${media.up('sm')}{
            width: 100%;
            & br{
                display: none;
            }
       }

        ${media.up('lg')}{
            width: 100%;
            max-width: 660px;
       }
    }

    .portfolio-item-wrapper{
        article{
            width: 100%;
            text-align: center;
            margin-top: 40px;
        }

        ${media.up('md')}{
            width: 100%;
            text-align: center;
        }

        ${media.up('lg')}{
            display: flex;
            flex-wrap: wrap;
            column-gap: 100px;

            article{
                width: calc(50% - 50px);
                text-align: left;
    
                &:nth-child(even){
                    margin-top: 200px;
                }
            }
       }

       .portfolio__cta {

        text-align: center;
        margin: 80px;

        & a{
            font-family: ${THEME.fonts.body}
            font-size: 18px;
            font-weight: 400;
            line-height: 38px;
            color: #5D6C74;
        }
        ${media.up('lg')}{
            width: 100%;
        }
      }

    }

`;


