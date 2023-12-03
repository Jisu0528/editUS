import styled from "styled-components";
import Developer from "./Developer";
import AddressBox from "./AddressBox";
import {Link} from "react-router-dom";

export default function InfoBottom () {
  const addressData = [
    {title: "Email Address", address: "0528jisu@gmail.com" },
    {title: "GitHub Address", address: "https://github.com/Jisu0528"},
    {title: "Figma Address", address: "https://www.figma.com/file/RPUTNqaMxFNE15YTkVwCNP/editUS"}
  ];
  
  return (
    <Wrapper>
      <Left>
        <Developer />
        <Address>
          {addressData.map((item, index)=> (
            <AddressBox key={index} item={item} />
          ))}
        </Address>
      </Left>
  
      <Container>
        <Buttons>
          <StyledLink to="/login">Sign In</StyledLink>
          <StyledLink to="/register">Sign Up</StyledLink>
        </Buttons>
        <div>editUS  Copyrights ⓒ all rights reserved Jisu</div>
      </Container>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  width: 100%;
  height: 340px;
  display: flex;
  justify-content: space-between;
`;

const Left = styled.div`
  display: flex;
  gap: 50px;
`

const Address = styled.div`
  display: flex;
  flex-direction: column;
  gap: 47px;
  justify-content: space-evenly;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  gap: 10px;
`;

const Buttons = styled.div`
  display: flex;
  justify-content: space-between;
`;

const StyledLink = styled(Link)`
  width: 150px;
  height: 55px;
  cursor: pointer;
  background-color: transparent;
  border: 2px solid #495057;
  border-radius: 68px;
  color: #FFFFFF;
  font-size: 18px;
  font-weight: 600;
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
`;