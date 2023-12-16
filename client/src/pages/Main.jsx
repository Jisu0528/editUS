import styled from "styled-components";
import RoomInfo from "../components/RoomInfo";
import DocList from "../components/DocList";
import { useParams } from 'react-router-dom';

function Main() {
  const { roomId } = useParams();
  return (
      <Wrapper>
        <RoomInfo roomId={roomId} />
        <DocList roomId={roomId} />
      </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
`;

export default Main;