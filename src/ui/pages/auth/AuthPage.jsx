// import SignIn from "../../components/SignIn/SignIn";
import Logo from "../../components/Logo/Logo";
// import SignUpForm from "../../components/SignUpForm/SignUpForm";
import SignInForm from "../../components/SignInForm/SignInForm";


import {
  AuthPageDivContainer,
  DivInnerContainer,
  LogoDiv,
} from "./AuthPage.styled";

const AuthPage = () => {
  return (
    <AuthPageDivContainer>
      <LogoDiv>
        <Logo />
      </LogoDiv>
      <DivInnerContainer>
        <SignInForm />
        {/* <SignUpForm></SignUpForm> */}
      </DivInnerContainer>
    </AuthPageDivContainer>
  );
};

export default AuthPage;
