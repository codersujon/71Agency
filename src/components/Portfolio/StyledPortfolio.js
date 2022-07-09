import styled from "styled-components";
import { THEME } from "../../styles/theme";


export const StyledPortfolio = styled.section `
    padding: 160px 12px 90px 12px;
    
    p{
        color: ${THEME.colors.bodyText};
    }

    .h2{
        margin-bottom: 32px;
    }

    .portfolio-inner{
        width: 100%;
        max-width: 660px;
        margin-bottom: 90px;
    }

    .portfolio-item-wrapper{
        display: flex;
        flex-wrap: wrap;
        column-gap: 100px;

        article{
            width: calc(50% - 50px);
            

            &:nth-child(even){
                margin-top: 200px;
            }
        }
    }
`;