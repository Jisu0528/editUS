import styled from "styled-components";
import InfoBottom from "../component/InfoBottom";
import InfoTop from "../component/InfoTop";

function Info() {
  return (
    <Wrapper>
      <InfoTop />
      <InfoBottom />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 79vw;
  margin: 70px auto;
  display: flex;
  flex-direction: column;
  gap: 40px;
`;

export default Info;