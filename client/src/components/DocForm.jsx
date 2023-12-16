import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import ReactMarkdown from 'react-markdown';

const DocumentForm = ({ doc, onSave }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  useEffect(() => {
    // document가 정의되었을 때만 state를 해당 prop의 값으로 설정합니다
    if (doc) {
      setTitle(doc.title || '');
      setContent(doc.content || '');
    }
  }, [doc]);

  const handleSave = () => {
    onSave({ ...doc, title, content });
  };

  return (
    <div>
      <TopContainer> 
        <InputTitle>
          <Title>Title:</Title>
          <Input
            type="text"
            name='title'
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />           
        </InputTitle>     
        <Button onClick={handleSave}>SAVE</Button>        
      </TopContainer>
      <EditorContainer>
          <Textarea
            placeholder="Enter Markdown here..."
            name='content'
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
          <Preview>
            <ReactMarkdown>{content}</ReactMarkdown>
          </Preview>
      </EditorContainer>

    </div>
  );
}

const TopContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const InputTitle = styled.div`
  display: flex;
  gap: 10px;
  border: 2px solid transparent;
  background-image: linear-gradient(#070D17, #070D17), linear-gradient(160deg, #6A35EE, #9930EF, #5737EE, #795CEB);
  background-clip: padding-box, border-box;
  resize: none;
  outline: none;
  flex: 1;
`

const Title = styled.div`
  font-size: 24px;
  font-weight: 500;
`;

const Input = styled.input`
  font-size: 20px;
  background-color: transparent;
  border: none;
  outline: none;
  color: white;
  flex: 1;
  font-weight: 500;
`;

const Button = styled.div`
  border: 2px solid transparent;
  background-image: linear-gradient(#070D17, #070D17), linear-gradient(160deg, #6A35EE, #9930EF, #5737EE, #795CEB);
  background-clip: padding-box, border-box;
  resize: none;
  outline: none;
  padding: 5px 15px;
  font-size: 18px;
  font-weight: 600;
  cursor: pointer;
`;

const EditorContainer = styled.div`
  display: flex;
  height: 83vh;
`;

const Textarea = styled.textarea`
  flex: 1;
  padding: 16px;
  font-size: 16px;
  color: #FFF;
  border: 2px solid transparent;
  background-image: linear-gradient(#070D17, #070D17), linear-gradient(160deg, #6A35EE, #9930EF, #5737EE, #795CEB);
  background-clip: padding-box, border-box;
  resize: none;
  outline: none;

  &::active {
    border: 2px solid transparent;
    background-image: linear-gradient(#070D17, #070D17), linear-gradient(160deg, #6A35EE, #9930EF, #5737EE, #795CEB);
    background-clip: padding-box, border-box;
  }
`;

const Preview = styled.div`
  flex: 1;
  padding: 16px;
  overflow-y: auto;
  border: 2px solid transparent;
  background-image: linear-gradient(#070D17, #070D17), linear-gradient(160deg, #6A35EE, #9930EF, #5737EE, #795CEB);
  background-clip: padding-box, border-box;
  resize: none;
  outline: none;

  &::active {
    border: 2px solid transparent;
    background-image: linear-gradient(#070D17, #070D17), linear-gradient(160deg, #6A35EE, #9930EF, #5737EE, #795CEB);
    background-clip: padding-box, border-box;
  }
`;

export default DocumentForm;