import {
  FormContainer,
  Container,
  Title,
  Input,
  InputForm,
  Label,
 } from "./SignUpForm.styled"
const SignUpForm = () => {
  return (
    <FormContainer>
      <Container>
        <Title>Cadastro</Title>
        <hr />
        <Label htmlFor="email">
          E-mail
        </Label>
        <InputForm>
        <Input type="email" placeholder="Digite seu e-mail" name="email" required />
        </InputForm>

        <Label htmlFor="psw">
          Senha
        </Label>
        <InputForm>
        <Input
          type="password"
          placeholder="Digite sua senha"
          name="psw"
          required
        />
        </InputForm>

        <Label htmlFor="psw-repeat">
          Repita a senha
        </Label>
        <InputForm>
        <Input
          type="password"
          placeholder="Repita sua senha"
          name="psw-repeat"
          required
        />
        </InputForm>
      </Container>
    </FormContainer>
  );
};

export default SignUpForm;

{/* <label htmlFor="nome">
  <b>Nome</b>
</label>
<Input type="text" placeholder="Digite seu nome" name="nome" required />

<label htmlFor="telefone">
  <b>Número de Telefone</b>
</label>
<Input type="text" placeholder="Digite seu número de telefone" name="telefone" required /> */}
{/* <label htmlFor="endereco">
  <b>Endereço</b>
</label>
<Input type="text" placeholder="Digite seu endereço" name="endereco" required />

<label htmlFor="terms">
  <input type="checkbox" name="termsPrivacy" id="terms" />
  Eu li e concordo com os{" "}
  <StyledLink href="#">Termos & Privacidade</StyledLink>.
</label> */}