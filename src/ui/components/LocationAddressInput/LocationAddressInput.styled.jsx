import styled from "styled-components";

export const ImgLocationButton = styled.img`
  position: relative;
  height: 3.0rem;
`;
export const DivAdressConteiner = styled.div`
 width: 100%;
 height: auto;
 display: flex;
 justify-content: space-between;
 align-items: center;
  padding: 0 1.0rem 0 1.0rem;
  color: ${({ theme }) => (theme.color.secondary)};
  border-bottom: 1px solid ${({ theme }) => (theme.color.secondary)};
  border-radius: 5px;
  
`;
export const AdressParagraph = styled.p`
  width: 90%;
  max-width: 17.5rem;
  white-space: nowrap; /* Impede a quebra de texto em várias linhas */
  overflow: hidden; /* Esconde o texto que exceder o tamanho da linha */
  text-overflow: ellipsis; /* Exibe "..." quando o texto exceder o tamanho da linha */
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
export const ImgBack = styled.img`
  width: 3.0rem;
  height: 3.0rem;
  position: absolute;
  top: 3.5rem;
  left: calc(100% - 90%);
  z-index: 1;
`;