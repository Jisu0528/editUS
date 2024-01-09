import styled from 'styled-components';

const EditorHeader = ({title}) => {
  return (
    <Wrapper>
      <Title>{title}</Title>
    </Wrapper>
  );
};

const Wrapper = styled.div`

`;

const Title = styled.div`
  font-size: 20px;
  font-weight: 600;
`;

export default EditorHeader;