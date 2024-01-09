import React from "react";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { removeCookie } from '../Cookie';

const Header = (props) => {
  const { isLogIn, onLogout } = props;
  const navigate = useNavigate();

  const handleLogout = () => {
    removeCookie('accessToken');
    onLogout(false);
    navigate('/');
  };

  return (
    <Wrapper>
      <Logo>
        <StyledLink to="/">editUS</StyledLink>
      </Logo>
      <Logout>
        <Button onClick={handleLogout} style={{ display: isLogIn ? 'inline-block' : 'none' }}>LOGOUT</Button>
      </Logout>
    </Wrapper>
  );
};

const Wrapper = styled.header`
  height: 16.5vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Logo = styled.div`
  font-size: 36px;
  font-weight: 600;
  padding: 70px 0 20px 10vw;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: #FFFFFF;
`;

const Logout = styled.div`
  padding: 70px 10vw 20px 0;
`;

const Button = styled.button`
  width: 120px;
  height: 40px;
  cursor: pointer;
  background-color: transparent;
  border: 2px solid #495057;
  border-radius: 68px;
  color: #FFFFFF;
  font-size: 16px;
  font-weight: 600;
  line-height: 20px;
`;

export default Header;