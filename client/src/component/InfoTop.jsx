import styled from "styled-components";
import Map from "./Map";

export default function InfoTop () {
  return (
    <Wrapper>
      <Map />
      <Description>
        <LecName>Advanced Web Programming</LecName>
        <Container>
          <Bar />
          <div>
            <Title>Classroom</Title>
            <Text>Mirae Hall(060) - 320</Text>
          </div>
        </Container>
        <Container>
          <Bar />
          <div>
            <Title>Lecture Time</Title>
            <Text>Tue (1 ~ 4)</Text>
          </div>
        </Container>
        <Container>
          <Bar />
          <div>
            <Title>Prof. Name</Title>
            <Text>KHLee</Text>
          </div>
        </Container>
        <Container>
          <Bar />
          <Text>Based on the Internet environment and basic web programming theories, 
            you will learn various programming techniques for the client side and server side, 
            and learn the technologies necessary to implement the next generation web, 
            such as HTML5, jQuery, and Mobile Web.
          </Text>
        </Container>
      </Description>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  width: 100%;
  height: 405px;
  border: solid 3px #495057;
  border-radius: 20px;
  display: flex;
  gap: 30px;
  padding: 30px;
`;

const Description = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-evenly;
  gap: 15px;
  width: 40vw;
`;

const LecName = styled.div`
  font-size: 40px;
  font-weight: 600;
`;

const Container = styled.div`
  display: flex;
  gap: 10px;
`;

const Bar = styled.div`
  min-width: 4px;
  background: linear-gradient(160deg, #6A35EE, #9930EF, #5737EE, #795CEB);
  border-radius: 5px;
  border: none;
`;

const Title = styled.div`
  font-size: 22px;
  font-weight: 550;
`;

const Text = styled.div`
  font-size: 20px;
  font-weight: 500;
`;