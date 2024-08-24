
import styled, { keyframes } from "styled-components";

const colorChange = keyframes`
  0% {
    background-color: #b7b7b7;
}

  100% {
    background-color: #e5e5e5;
}
`;
const CardSkeletonStyled = styled.li`
    width: 33.3rem;
    height: 40.0rem;
    border-radius: 10px;
    transition: all 100ms;
    border: 1px solid ${({ theme }) => theme.color.normal};
    & :nth-child(1){
        border-radius: 10px 10px 0px 0px;
        height: 50%;
        width: 100%;
        animation: ${colorChange} 2s ease infinite alternate;
    }
    &:hover{
        transform: scale(1.01);
        border: 1px solid ${({ theme }) => theme.color.hover};
        box-shadow: 0px 10px 15px -3px ${({ theme }) => theme.color.shadowColor};
    }
    .pizza-data {
        margin: 1.5rem;
        & > * {
            margin-bottom: 1.5rem;
        }
        .h1{
            font-size: ${({ theme }) => theme.font.lg};
            height: 3.0rem;
            border-radius: 5px;
        } 
        .description{
            height: 5.0rem;
            border-radius: 5px;
            animation: ${colorChange} 2s ease infinite alternate;
        }
        hr{
            border-color: ${({ theme }) => theme.color.normal};
        }
        .priceItem{
            height: 5.0rem;
            border-radius: 5px;
            animation: ${colorChange} 2s ease infinite alternate;
        }
    }
`;

export default CardSkeletonStyled;
