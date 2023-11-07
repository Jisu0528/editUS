import React, { useState } from "react";
import styled from "styled-components";
import {Link, useNavigate} from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import { loginRoute } from "../utils/AIPRoutes";

function Login() {
  const navigate = useNavigate();
  const toastOptions = {
    position: "bottom-right",
    autoClose: 8000,
    pauseOnHover: true,
    draggable: true,
    theme: "dark",
  };
  const [values, setValues] = useState({
    username: "",
    password: ""
  });

  // useEffect(() => {
  //   if (localStorage.getItem(process.env.REACT_APP_LOCALHOST_KEY)) {
  //     navigate("/");
  //   }
  // }, []);

  const onChangeHandler = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleValidation = () => {
    const { password, username } = values;
    if (username === "") {
      toast.error(
        "Username should be greater than 3 characters.",
        toastOptions
      );
      return false;
    } else if (password === "") {
      toast.error(
        "Password should be equal or greater than 8 characters.",
        toastOptions
      );
      return false;
    }

    return true;
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    if (handleValidation()) {
      console.log("validation", loginRoute);
      const { username, password } = values;
      const { data } = await axios.post(loginRoute, {
        username,
        password,
      });

      if (data.status === false) {
        toast.error(data.msg, toastOptions);
      }
      if (data.status === true) {
        localStorage.setItem(
          process.env.REACT_APP_LOCALHOST_KEY,
          JSON.stringify(data.user)
        );
        navigate("/editUS");
      }
    }
  };
  return (
    <Wrapper>
      <Title>Sign into editUs</Title>
      <LoginForm autocomplete='off' action="" onSubmit={(e) => onSubmitHandler(e)}>
        <Input type="text" name="username" placeholder="Username" onChange={(e) => onChangeHandler(e)}/>
        <Input type="password" name="password" placeholder="Password" onChange={(e) => onChangeHandler(e)}/>
        <LoginBtn type="submit">LOGIN IN</LoginBtn>
      </LoginForm>
      
      <Register>Don't Have An Account?
        <StyledLink to="/register">Register</StyledLink>
      </Register>
      <ToastContainer />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100vw;  
  height: 100vh;
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