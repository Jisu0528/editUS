import styled from "styled-components";
import Avata from "../assets/Avata.png";

export default function Developer() {
  return (
    <Wrapper>
      <Img src={Avata} alt="avata" />
      <Name>Jisu Han</Name>
      <Roles>
        <Role>FrontEnd</Role>
        <Role>BackEnd</Role>
        <Role>Design</Role>
      </Roles>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  width: 15vw;
  height: 340px;
  border-radius: 20px;
  background: linear-gradient(160deg, #6A35EE, #9930EF, #5737EE, #795CEB);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

const Img = styled.img`
  width: 100px;
  height: 100px;
`;

const Name = styled.div`
  font-size: 24px;
  font-wieght: 600;
`;

const Roles = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5px;
`;

const Role = styled.div`
  font-size: 16px;
`;