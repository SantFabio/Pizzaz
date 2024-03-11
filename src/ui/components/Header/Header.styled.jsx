import styled from "styled-components";

const HeaderStyled = styled.header`
    background-color: ${({ theme }) => theme.color.primary};
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    height: 7.0rem;
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
    & .inputPlace{
        all: unset;
        background-color: ${({ theme }) => theme.color.third};
        height: 4.5rem;
        width: 44.4rem;
        border-radius: 1.0rem;
        display: flex;
        flex-direction: row;
         div{
                height: 100%;
                width: 10%;
                justify-content: center;
                align-items: center;
            img{
                height: 3.0rem;
            }
        }
        input {
            all: unset;
            height: 100%;
            width: 90%;
            letter-spacing: 0.1rem;
            font-size: ${({ theme }) => theme.font.md};
            color: ${({ theme }) => theme.color.secondary};
        }
    }

`;
export default HeaderStyled;