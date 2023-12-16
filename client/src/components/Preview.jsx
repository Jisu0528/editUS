import styled from "styled-components";
import showdown from "showdown";

const Preview = ({ inputValue }) => {
  const converter = new showdown.Converter();
  const html = converter.makeHtml(inputValue);

  return(
    <div>
      <PreView dangerouslySetInnerHTML={{ __html: html }}/>
    </div>
  );
};

const PreView = styled.div`
  width: 50%;
  padding-left: 2rem;
  font-size: 1.4rem;
`;

export default Preview;