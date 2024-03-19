
import styled from "styled-components";

const CardStyled = styled.li`
    width: 100%;
    height: 40.0rem;
    border-radius: 10px;
    overflow: hidden;
    transition: all 100ms;
    border: 1px solid ${({theme}) => theme.color.normal};
    & :nth-child(1){
        height: 50%;
        width: 100%;
    }
    &:hover{
        transform: scale(1.01);
        border: 1px solid ${({theme}) => theme.color.hover};
        box-shadow: 0px 10px 15px -3px ${({theme}) => theme.color.shadowColor};
    }
    .pizza-data {
        margin: 1.5rem;
        color: ${({theme}) => theme.color.black};
        & > * {
            margin-bottom: 1.5rem;
        }
        h1{
            font-size: ${({theme}) => theme.font.lg};
        } 
        .description{
            font-size: ${({theme}) => theme.font.sm};
        }
        hr{
            border-color: ${({theme}) => theme.color.normal};
        }
        .priceItem{
            font-size: ${({ theme }) =>  theme.font.lg};
            font-weight: 400;
        }
    }
`;

export default CardStyled;
