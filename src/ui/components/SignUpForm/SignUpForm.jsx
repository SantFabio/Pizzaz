
import styled from 'styled-components';

const FormContainer = styled.form`
  /* border: 1px solid #ccc; */
`;

const Container = styled.div`
  padding: 16px;
`;

const Title = styled.h1`
  text-align: center;
`;

const Input = styled.input`
  width: 100%;
  padding: 15px;
  margin: 5px 0 22px 0;
  display: inline-block;
  border: none;
  background: #f1f1f1;

  &:focus {
    background-color: #ddd;
    outline: none;
  }
`;

const StyledLink = styled.a`
  color: dodgerblue;
`;

const SignUpButton = styled.button`
  background-color: #04AA6D;
`;

const SignUpForm = () => {
  return (
    <FormContainer action="/action_page.php">
      <Container>
        <Title>Sign Up</Title>
        <p>Please fill in this form to create an account.</p>
        <hr />

        <label htmlFor="email"><b>Email</b></label>
        <Input type="text" placeholder="Enter Email" name="email" required />

        <label htmlFor="psw"><b>Password</b></label>
        <Input type="password" placeholder="Enter Password" name="psw" required />

        <label htmlFor="psw-repeat"><b>Repeat Password</b></label>
        <Input type="password" placeholder="Repeat Password" name="psw-repeat" required />
      
        
        <p>By creating an account you agree to our <StyledLink href="#">Terms & Privacy</StyledLink>.</p>

        <div className="clearfix">
          <SignUpButton type="submit">Sign Up</SignUpButton>
        </div>
      </Container>
    </FormContainer>
  );
};

export default SignUpForm;
