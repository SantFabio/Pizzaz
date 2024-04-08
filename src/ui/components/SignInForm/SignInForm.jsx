// LoginForm.js
import { useState } from "react";
import emailIcon from "../../../assets/img/emailIcon.svg";
import passwordIcon from "../../../assets/img/password.svg";
import googleIcon from "../../../assets/img/googleIcon.svg";
import apple from "../../../assets/img/appleIcon.svg";
import Button from "../../components/Button/Button";
import {
  Form,
  InputForm,
  Input,
  FlexRow,
  Span,
  ButtonSubmit,
  Label,
  HorizonLine,
  Orp,
  Title,
} from "./SignIn.styled";
import { Link } from "react-router-dom";

const SignInForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Email:", email);
    console.log("Senha:", password);
    setEmail("");
    setPassword("");
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Title>Login</Title>
      <div>
        <Label htmlFor="e-mail">E-mail</Label>
      </div>
      <InputForm>
        <img src={emailIcon} alt="icone de e-mail" />
        <Input
          name="e-mail"
          placeholder="Entre com seu e-mail"
          type="text"
          value={email}
          onChange={handleEmailChange}
          required
        />
      </InputForm>

      <div>
        <Label htmlFor="password">Senha</Label>
      </div>
      <InputForm>
        <img src={passwordIcon} alt="icone arroba" />
        <Input
          name="password"
          placeholder="Entre com sua senha"
          type="password"
          value={password}
          onChange={handlePasswordChange}
          required
        />
      </InputForm>

      <FlexRow>
        {/* <div>
          <input type="checkbox" />
          <label>Lembre de mim</label>
        </div> */}
        <Span>Esqueceu sua senha?</Span>
      </FlexRow>

      <Button type="submit" width="100%" height="5.0rem">
        Entrar
      </Button>
      <p>
        Não tem uma conta?
        <Link to={"/auth/signup/"}>
          <Span>Cadastrar</Span>
        </Link>
      </p>
      <Orp>
        <HorizonLine></HorizonLine>Ou<HorizonLine></HorizonLine>
      </Orp>

      <FlexRow>
        <ButtonSubmit>
          <img src={googleIcon} alt="icone do google" />
          Google
        </ButtonSubmit>
        <ButtonSubmit>
          <img src={apple} alt="icone da apple" />
          Apple
        </ButtonSubmit>
      </FlexRow>
    </Form>
  );
};

export default SignInForm;
