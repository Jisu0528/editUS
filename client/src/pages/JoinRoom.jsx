import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

function JoinRoom() {
  const [roomId, setRoomId] = useState('');

  const navigate = useNavigate();

  const handleCreateRoom = async () => {
    const newRoomId = uuidv4();
    console.log("New Room ID:", newRoomId);

    navigator.clipboard.writeText(newRoomId)
    .then(() => {
      alert(`Copied: ${newRoomId}`);
    })
    .catch((err) => {
      console.error('Unable to copy to clipboard', err);
    });
  };

  const handleJoinRoom = (e) => {
    e.preventDefault();
    // roomId를 이용하여 해당 방으로 이동
    navigate(`/${roomId}`);
  };

  return (
    <Wrapper>
      <Title>Welcome to editUS</Title>
      <RoomForm autoComplete='off'>
        <Input 
          type="text" 
          name="roomId"
          placeholder="Room ID"
          value={roomId}
          onChange={(e) => setRoomId(e.target.value)}
        />
        <JoinBtn type="submit" onClick={handleJoinRoom}>JOIN</JoinBtn>
      </RoomForm>
      
      <CreateRoom>If you don't have an Invite then Create
        <CreateButton type="button" onClick={handleCreateRoom}>CREATE ROOM</CreateButton>
      </CreateRoom>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 180px;
`;

const Title = styled.div`
  font-size: 36px;
  font-weight: 500;
  margin-bottom: 90px;
`;

const RoomForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 2rem;
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

const JoinBtn = styled.button`
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

const CreateRoom= styled.span`
  font-size: 30px;
  font-weight: 500;
  display: flex;
  gap: 3rem;
`;

const CreateButton = styled.button`
  border: none;
  cursor: pointer;
  font-size: 30px;
  font-weight: 550;
  background: transparent;
  background-image: linear-gradient(160deg, #6A35EE, #9930EF, #5737EE, #795CEB);
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
`;

export default JoinRoom;