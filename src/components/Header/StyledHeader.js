import styled from "styled-components";
import { THEME } from '../../styles/theme';
import { media } from '../../styles/responsive';

export const StyleHeader = styled.header`
    
background-color: ${THEME.colors.black};
padding: 30px 0;

${media.up('lg')} {
    padding: 60px 0;
}

.wrapper{
    &__left{
    }

    &__right{
        display: felx;
        & ul{
            display: felx;
            flex-wrap: wrap;
            justify-content: center;
            gap: 40px;

            ${media.up('lg')} {
                justify-content: flex-end;
            }
        
            
           & a{
            font-style: normal;
            font-weight: 400;
            font-size: 20px;
            line-height: 40px;
            color: ${THEME.colors.white};
            text-decoration: none;
            text-transform: capitalize;
            &.active{
                color: ${THEME.colors.primary}
            }
           }
        }
    }
}

`;


