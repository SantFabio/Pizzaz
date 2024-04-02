import styled from "styled-components";

export const EmptyBegDivImgContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  /* background-color: aqua; */
`;
export const EmptyBegImg = styled.img`
  width: 40rem;
  height: 40rem;
`;
export const H1Styled = styled.h1`
  font-size: ${({theme}) => theme.font.xl};
  color: ${({theme}) => theme.color.black};
  white-space: nowrap;
  `;
export const PStyled = styled.p`
  font-size: ${({theme}) => theme.font.md};
  color: ${({theme}) => theme.color.black};
  white-space: nowrap;
`;
