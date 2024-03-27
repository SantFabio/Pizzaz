import styled from "styled-components";

export const LiStyled = styled.li`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    `;
export const ImgItem = styled.img`
    width: 8.5rem;
    height: 8.5rem;
    object-fit: contain;
    margin-left: 0;
`;
export const PriceItem = styled.span`
    font-size: ${({ theme }) => theme.font.sm};
    margin-right: 1.2rem;
`;
export const PriceAndCheckBox = styled.div`
    display: flex;
    align-items: center;
`;

// export const ButtonContainer = styled.div`
//     width: 11.5rem;
//     height: 4.8rem;
//     display: flex;
//     flex-direction: row;
//     border: 0.1rem solid ${({ theme }) => theme.color.hover};
//     border-radius: 5px;
//     & > div {
//         display: flex;
//         width: 20%;
//         justify-content: center;
//         align-items: center;
//     }
//     & > * {
//         font-size: ${({ theme }) => theme.font.md};
//         font-weight: bold;
//     }
//     `;
// export const CounterButton = styled.button`
//     color: ${({ theme }) => theme.color.primary};
//     width: 40%;
//     border: none;
//     background-color: transparent;
//     &:active{
//         background: linear-gradient(145deg, #E5E5E5, #FFFFFF);
//     }
// `;