import styled from "styled-components";

const HeaderStyled = styled.header`
    background-color: ${({ theme }) => theme.color.primary};
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    height: 7.0rem;
    border-bottom: 1px solid ${({ theme }) => theme.color.normal};
    * {
        display: flex;
     }
    & .logo{
        height: 8.5rem;
    }
    & .enter{
        flex-direction: row;
        align-items: center;
        .login{
            height: 3.0rem;
            margin-left: 3.0rem;
        }
        .bag{
            height: 3.3rem;
            margin-left: 3.0rem;
            div {
                flex-direction: column;
                margin-right: 0.5rem;
                font-size: ${({theme}) => theme.font.sm};
                color: ${({theme}) => theme.color.secondary};
            }

        }
    }
`;
export default HeaderStyled;