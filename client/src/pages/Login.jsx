import React, { useState } from "react";
import styled from "styled-components";
import {Link, useNavigate} from "react-router-dom";
import axios from "axios";
import { loginRoute } from "../utils/APIRoutes"; 
import { setCookie } from "../Cookie";

function Login(props) {
  const {onLogin} = props;
  const navigate = useNavigate();
  const [values, setValues] = useState({
    username: "",
    password: ""
  });

  const onChangeHandler = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleValidation = () => {
    const { password, username } = values;
    if (username === "") {
      alert("Username should be greater than 3 characters.");
      return false;
    } else if (password === "") {
      alert("Password should be equal or greater than 8 characters.");
      return false;
    }

    return true;
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    if (handleValidation()) {
      console.log("validation", loginRoute);
      const { username, password } = values;
      const response = await axios.post(loginRoute, {
        username,
        password,
      }, {withCredentials: true});

      if (response.data.status === false) {
        alert(response.data.msg);
      }
      if (response.data.status === true) {
        const accessToken = response.data.token;
        localStorage.setItem("accessToken", accessToken);
        axios.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;
        setCookie("accessToken", accessToken, {path: '/editUS' });
        localStorage.setItem(
          process.env.REACT_APP_LOCALHOST_KEY,
          JSON.stringify(response.data.user)
        );
        console.log(response.headers);
        console.log(response.data.data);
        onLogin();
        navigate("/joinroom");
      }
    }
  };

  return (
    <Wrapper>
      <Title>Sign into editUs</Title>
      <LoginForm autoComplete='off' action="" onSubmit={(e) => onSubmitHandler(e)}>
        <Input type="text" name="username" placeholder="Username" onChange={(e) => onChangeHandler(e)}/>
        <Input type="password" name="password" placeholder="Password" onChange={(e) => onChangeHandler(e)}/>
        <LoginBtn type="submit">LOGIN IN</LoginBtn>
      </LoginForm>
      
      <Register>Don't Have An Account?
        <StyledLink to="/register">Register</StyledLink>
      </Register>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 100px;
`;

const Title = styled.div`
  font-size: 36px;
  font-weight: 500;
  margin-bottom: 60px;
`;

const LoginForm = styled.form`
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

const LoginBtn = styled.button`
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

const Register = styled.span`
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

export default Login;