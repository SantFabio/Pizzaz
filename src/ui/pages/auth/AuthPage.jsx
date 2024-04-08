// import SignIn from "../../components/SignIn/SignIn";
import Logo from "../../components/Logo/Logo";
import SignUpForm from "../../components/SignUpForm/SignUpForm";
import SignInForm from "../../components/SignInForm/SignInForm";

import {
  AuthPageDivContainer,
  DivInnerContainer,
  LogoDiv,
} from "./AuthPage.styled";

const AuthPage = (sign) => {
  return (
    <AuthPageDivContainer>
      <LogoDiv>
        <Logo />
      </LogoDiv>

      <DivInnerContainer>
        {sign.login ? <SignInForm /> : <SignUpForm />}
      </DivInnerContainer>
    </AuthPageDivContainer>
  );
};

export default AuthPage;
