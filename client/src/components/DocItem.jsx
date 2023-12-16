import styled from "styled-components";

const DocItem = ({item}) => {
  return(
    <Container>
      <Title>{item.title}</Title>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 200px;
  height: 200px;
  border-radius: 20px;
  background: #dde1e7;
  box-shadow: inset -3px -3px 7px #ffffff73, inset 3px 3px 5px rgba(94, 104, 121, .288);
`;

const Title = styled.div`
  font-size: 30px;
  font-weight: 500;
`;

export default DocItem;