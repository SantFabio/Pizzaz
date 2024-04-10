import Button from "../Button/Button";
import back from "../../../assets/img/back.svg";
import { Link, useNavigate } from "react-router-dom";
import { registerWithEmailAndPassword } from "../../../data/service/authService";
// import { useDispatch, useSelector } from "react-redux";
// import { loginUser } from "../../../data/actions/authenticationActions";
import { useEffect, useState } from "react";
import {
  FormContainer1,
  FormContainer2,
  Title,
  Input,
  InputForm,
  Label,
  Span,
  Container,
  FormOut,
  ImgBack,
  Pquestion,
} from "./SignUpForm.styled";

const SignUpForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [registered, setRegistered] = useState("");
  const [index, setIndex] = useState(true);
  const navigate = useNavigate();
  // const dispatch = useDispatch();
  // const store = useSelector((state) => state);
  // useEffect(() => {
  //   console.log(store);
  // }, [store]);

  useEffect(() => {
    if (registered) {
      navigate(registered);
    }
  }, [registered, navigate]);

  const handleNameChange = (e) => {
    setName(e.target.value);
  };
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (password === confirmPassword && email && name) {
        const user = await registerWithEmailAndPassword(name, email, password);
        console.log(user);
        setRegistered("/auth/");
        setEmail("");
        setPassword("");
        setConfirmPassword("");
        setName("");
      }
    } catch (error) {
      setRegistered("/auth/");
      setEmail("");
      setPassword("");
      setConfirmPassword("");
      setName("");
      alert(error)
    }
  };
  const handleIndex = (e) => {
    e.preventDefault();
    if (name && email) {
      setIndex(!index);
    }
  };

  return (
    <>
      <Title>Cadastro</Title>

      <Container>
        <FormOut onSubmit={handleSubmit} >
          <FormContainer1 index={index}>
            <Label htmlFor="name">Nome</Label>
            <InputForm>
              <Input
                typeof="text"
                placeholder="Digite seu nome"
                name="name"
                value={name}
                onChange={handleNameChange}
                required
              />
            </InputForm>

            <Label htmlFor="email">E-mail</Label>
            <InputForm>
              <Input
                type="email"
                placeholder="Digite seu e-mail"
                name="email"
                value={email}
                onChange={handleEmailChange}
                required
              />
            </InputForm>
            <span onClick={handleIndex}>
              <Button type="button" width="100%" height="5.0rem">
                Continuar
              </Button>
            </span>
          </FormContainer1>

          <FormContainer2 index={index} >
            <ImgBack src={back} alt="retornar" onClick={handleIndex} />
            <Label htmlFor="psw">Senha</Label>
            <InputForm>
              <Input
                type="password"
                placeholder="Digite sua senha"
                name="psw"
                pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).*$"
                onChange={handlePasswordChange}
                autoComplete="off"
                value={password}
                required
              />
            </InputForm>

            <Label htmlFor="psw-repeat">Repita a senha</Label>
            <InputForm>
              <Input
                type="password"
                placeholder="Repita sua senha"
                name="psw-repeat"
                pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).*$"
                onChange={handleConfirmPasswordChange}
                value={confirmPassword}
                autoComplete="off"
                required
              />
            </InputForm>
  
            <Button type="submit" width="100%" height="5.0rem">
              Cadastrar
            </Button>

          </FormContainer2>
        </FormOut>
      </Container>
      <Pquestion>
        Já tem uma conta?
        <Link to={"/auth/"}>
          <Span>Login</Span>
        </Link>
      </Pquestion>
    </>
  );
};

export default SignUpForm;

