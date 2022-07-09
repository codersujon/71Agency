import styled from "styled-components";
import { THEME } from "../../styles/theme";

export const StyledSectionTitle = styled.div`
   .title{
        font-family: ${THEME.fonts.heading};
        font-style: normal;
        font-weight: 700;
        font-size: 56px;
        line-height: 66px;
        max-width: 660px;
        color: ${THEME.colors.text};
        margin-bottom: 32px
   }
   .content{
        font-family: ${THEME.fonts.body};
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 26px;
        margin-bottom: 90px;
        max-width: 629px;
        color: #5D6C74;
   }

`;