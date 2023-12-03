import styled from "styled-components";
import {Link} from "react-router-dom";

function Start() {
  return (
    <Wrapper>
      <TopSection>
        You can use this<br/>for efficient collaboration
      </TopSection>
      <Description>
      Real-time collaborative document editing and video conferencing are possible at the same time.
      <br/>I have worked to reduce the inconvenience caused by using various platforms.
      </Description>
      <Buttons>
        <StyledLink to="/login"><StratBtn>Start Now</StratBtn></StyledLink>
        <StyledLink to="/learnmore"><LearnBtn>Learn More</LearnBtn></StyledLink>
      </Buttons>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  margin: 160px 5vw 0 16vw;
`;

const TopSection = styled.div`
  font-size: 70px;
  font-weight: 600;
  line-height: 90px;
  white-space: nowrap;
`;

const Description = styled.div`
  margin-top: 10px;
  font-size: 24px;
  font-weight: 400;
`;

const Buttons = styled.div`
  margin-top: 40px;
  display: flex;
  gap: 20px;
`;

const StratBtn = styled.button`
  width: 150px;
  height: 60px;
  border: none;
  cursor: pointer;
  background: linear-gradient(160deg, #6A35EE, #9930EF, #5737EE, #795CEB);
  border-radius: 68px;
  color: #FFFFFF;
  font-size: 16px;
  font-weight: 600;
  line-height: 20px;
`;

const LearnBtn = styled.button`
  width: 150px;
  height: 60px;
  cursor: pointer;
  background-color: transparent;
  border: 2px solid #495057;
  border-radius: 68px;
  color: #FFFFFF;
  font-size: 16px;
  font-weight: 600;
  line-height: 20px;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;

export default Start;