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
    font-size: ${({ theme }) => theme.font.md};
    font-weight: bold;
    margin-right: 1.2rem;
`;
export const PriceAndCheckBox = styled.div`
    display: flex;
    align-self: end;
`;
