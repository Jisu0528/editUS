import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Wrapper>
      <Logo>
        <StyledLink to="/">editUS</StyledLink>
      </Logo>
    </Wrapper>
  );
};

const Wrapper = styled.header`
  margin-bottom: 20px;
`;

const Logo = styled.div`
  font-size: 36px;
  font-weight: 600;
  padding: 90px 0 0 10vw;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: #FFFFFF;
`;

export default Header;