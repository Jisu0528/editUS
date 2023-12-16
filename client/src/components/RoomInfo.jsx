import styled from "styled-components";
import {Link} from "react-router-dom";

function RoomInfo({roomId}) {
  const handleCopy = () => {
    navigator.clipboard.writeText(roomId);
    alert(`Copied: ${roomId}`);
  }
  return (
    <Container>
      <Title>List Page</Title>
      <Buttons>
        <Copy onClick={handleCopy}>COPY ROOMID</Copy>
        <StyledLink to="/joinroom"><Leave>LEAVE ROOM</Leave></StyledLink>  
      </Buttons>

    </Container>
  );
}

const Container = styled.div`
  width: 17vw;
  min-height: 83vh;
  border: 2px solid transparent;
  background-image: linear-gradient(#070D17, #070D17), linear-gradient(160deg, #6A35EE, #9930EF, #5737EE, #795CEB);
  background-clip: padding-box, border-box;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Title = styled.div`
  font-size: 24px;
  font-weight: 600;
  margin: 35px;
`;

const Buttons = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
  margin-bottom: 10px;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;

const Copy = styled.button`
  width: 16vw;
  height: 60px;
  border: none;
  cursor: pointer;
  background: linear-gradient(160deg, #6A35EE, #9930EF, #5737EE, #795CEB);
  border-radius: 68px;
  color: #FFFFFF;
  font-size: 20px;
  font-weight: 600;
  line-height: 20px;
`;

const Leave = styled.button`
  width: 16vw;
  height: 60px;
  cursor: pointer;
  background-color: transparent;
  border: 2px solid #495057;
  border-radius: 68px;
  color: #FFFFFF;
  font-size: 20px;
  font-weight: 600;
  line-height: 20px;
`;

export default RoomInfo;