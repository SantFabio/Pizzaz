import styled from "styled-components";

export const ImgLocationButton = styled.img`
  position: relative;
  height: 3.0rem;
  margin-right: 1.0rem;
`;
export const LoadMap = styled.div`
    width: 50%;
    height: 100%;
`;
export const DivContainer = styled.div`
  position: relative;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    `;
export const MapContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  transition: opacity 2s ease;
    z-index: ${({ index }) => (index ? "1" : "2")};
    opacity: ${({ index }) => (index ? "0" : "1")};
    `;

export const Form = styled.form`
  position: absolute;
height: 100%;
display: flex;
flex-direction: column;
justify-content: center;
gap: 2.0rem;
transition: opacity 2s ease;
z-index: ${({ index }) => (index ? "2" : "1")};
  opacity: ${({ index }) => (index ? "1" : "0")};
`;
export const TitleH1 = styled.h1`
  font-weight: bold;
  font-size: ${({ theme }) => (theme.font.xl)};
  color: ${({ theme }) => theme.color.black};
  text-align: center;
`;
export const ContainerMap = styled.div`
  height: 100%;
  width: 100%;
`;
export const FormGrid = styled.div`
height: 70%;
  display: grid;
  column-gap: 10px;
  grid-template-areas:
    "street number"
    "neighborhood city"
    "state country"
    "zip .";
`;

export const GridItem = styled.div`
  grid-area: ${({ area }) => area};
  display: flex;
  flex-direction: column;
  gap: 1.0rem;
`;
export const ButtonContainer = styled.div`
  position: absolute;
  top: 80%;
  height: auto;
  width: 80%;
`;