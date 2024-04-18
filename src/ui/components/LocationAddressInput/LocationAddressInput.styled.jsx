import styled from "styled-components";

export const ImgLocationButton = styled.img`
  position: relative;
  height: 3.0rem;
  margin-right: 1.0rem;
`;
export const LoadMap = styled.div`
    width: 50%;
    height: 100%;
    background-color: aquamarine;
`;
export const DivConteiner = styled.div`
    width: 100%;
    height: 100%;
    padding: 3.0rem;
    background-color: aquamarine;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const FormGrid = styled.div`
background-color: azure;
  display: grid;
  gap: 10px;
  /* grid-template-columns: ; */
  grid-template-areas:
    "street number"
    "neighborhood neighborhood"
    "city state"
    "country zip";
`;

export const GridItem = styled.div`
  grid-area: ${({ area }) => area};
`;