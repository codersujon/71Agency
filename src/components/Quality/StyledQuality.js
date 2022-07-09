import styled from "styled-components";
import { THEME } from './../../styles/theme';

export const StyledQuality = styled.section`
    padding: 80px 0;
    
    .quality__inner{
        display: flex;
        flex-flow: column wrap;
        justify-content: center;
        margin: 0 auto;
        text-align: center;
        margin-bottom: 90px;
        
        & h2{
            margin-bottom: 14px;
            text-align: center;
        }
        
        & p{
            font-weight: 300;
            font-size: 14px;
            line-height: 24px;
            color: ${THEME.colors.bodyText}
        }
    }

    .quality__card{
        display: flex;
    }
`;
