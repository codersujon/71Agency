import styled from "styled-components";
import { THEME } from "../../styles/theme";
import { media } from "../../styles/responsive";

export const StyledSectionTitle = styled.div `
     .h1{
          font-family: ${THEME.fonts.heading};
          font-style: normal;
          font-weight: 700;
          font-size: 40px;
          line-height: 50px;
          padding: 0px;
  
          ${media.up('md')} {
              font-size: 60px;
              line-height: 98px;
          }
  
          ${media.up('lg')} {
              font-size: 80px;
              line-height: 98px;
              margin: 0 auto 60px auto;
              padding: 0 100px;
          }
     }

     .h2{
          font-family: ${THEME.fonts.heading};
          font-style: normal;
          font-weight: 700;
          font-size: 30px;
          line-height: 46px;
          text-align: center;

          ${media.up('md')}{
               font-size: 38px;
               line-height: 56px;
          }

          ${media.up('lg')}{
               font-size: 56px;
               line-height: 66px;
               text-align: left;
          }
     } 

     .h3{
          font-family: ${THEME.fonts.heading};
          font-style: normal;
          font-weight: 700;
          font-size: 48px;
          line-height: 58px;
          letter-spacing: 0.68px;
     }
`;

