import styled from "styled-components";
import {Link} from "react-router-dom";

function Register() {
  return (
    <Wrapper>
      <Title>Welcome to editUS</Title>
      <RegisterForm autocomplete='off'>
        <Input type="text" name="username" placeholder="Username" />
        <Input type="email" name="email" placeholder="Email" />
        <Input type="password" name="password" placeholder="Password" />
        <Input type="password" name="Confirm Password" placeholder="confirmPassword" />
        <RegisterBtn type="submit">CREATE USER</RegisterBtn>
      </RegisterForm>
      
      <Login>Already Have An Account?
        <StyledLink to="/register">Login</StyledLink>
      </Login>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100vw;  
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 60px;
`;

const Title = styled.div`
  font-size: 36px;
  font-weight: 500;
  margin-bottom: 60px;
`;

const RegisterForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
  margin-bottom: 35px;
`;

const Input = styled.input`
  outline: none;
  padding: 1rem;
  color: #FFFFFF;
  border: 2px solid transparent;
  border-radius: 20px;
  background-image: linear-gradient(#070D17, #070D17), linear-gradient(160deg, #6A35EE, #9930EF, #5737EE, #795CEB);
  background-clip: padding-box, border-box;
  font-size: 24px;
  &::placeholder {
    color: #495057;
  }
`;

const RegisterBtn = styled.button`
  width: 866px;
  height: 60px;
  border: none;
  cursor: pointer;
  background: linear-gradient(160deg, #6A35EE, #9930EF, #5737EE, #795CEB);
  border-radius: 20px;
  color: #FFFFFF;
  font-size: 28px;
  font-weight: 600;
  padding: 1rem 2rem;
`;

const Login = styled.span`
  font-size: 30px;
  font-weight: 500;
  display: flex;
  gap: 3rem;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  border: none;
  cursor: pointer;
  font-weight: 550;
  background: transparent;
  background-image: linear-gradient(160deg, #6A35EE, #9930EF, #5737EE, #795CEB);
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
`;

export default Register;