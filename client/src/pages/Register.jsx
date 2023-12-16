import React, { useState } from "react";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { registerRoute } from "../utils/APIRoutes";  

function Register() {
  const navigate = useNavigate();
  const [values, setValues] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const onChangeHandler = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleValidation = () => {
    const { password, confirmPassword, username, email } = values;
    if (password !== confirmPassword) {
      alert("Password and confirm password should be same.");
      return false;
    } else if (username.length < 3) {
      alert("Username should be greater than 3 characters.");
      return false;
    } else if (password.length < 8) {
      alert("Password should be equal or greater than 8 characters.");
      return false;
    } else if (email === "") {
      alert("Email is required.");
      return false;
    }

    return true;
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    if (handleValidation()) {
      console.log("validation", registerRoute);
      const { email, username, password } = values;
      const { data } = await axios.post(registerRoute, {
        username,
        email,
        password,
      });

      if (data.status === false) {
        alert(data.msg);
      }
      if (data.status === true) {
        localStorage.setItem(
          process.env.REACT_APP_LOCALHOST_KEY,
          JSON.stringify(data.user)
        );
        navigate("/login");
      }
    }
  };

  return (
    <Wrapper>
      <Title>Welcome to editUS</Title>
      <RegisterForm action="" onSubmit={(e) => onSubmitHandler(e)}>
        <Input type="text" name="username" placeholder="Username" onChange={(e) => onChangeHandler(e)} autoComplete="off"/>
        <Input type="email" name="email" placeholder="Email" onChange={(e) => onChangeHandler(e)} autoComplete="off"/>
        <Input type="password" name="password" placeholder="Password" onChange={(e) => onChangeHandler(e)} autoComplete="off"/>
        <Input type="password" name="confirmPassword" placeholder="Confirm Password" onChange={(e) => onChangeHandler(e)} autoComplete="off"/>
        <RegisterBtn type="submit">CREATE USER</RegisterBtn>
      </RegisterForm>
      
      <Login>Already Have An Account?
        <StyledLink to="/login">Login</StyledLink>
      </Login>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 60px;
`;

const Title = styled.div`
  font-size: 36px;
  font-weight: 500;
  margin-bottom: 40px;
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