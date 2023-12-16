import React from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { createDocumentRoute } from '../utils/APIRoutes';
import DocumentForm from '../components/DocForm';

const NewDoc = () => {
  const navigate = useNavigate();
  const { roomId } = useParams();

  const saveDocument = async (newDocument) => {
    const {data} = await axios.post(createDocumentRoute, {
      title: newDocument.title,
      content: newDocument.content,
      room: roomId
    });
    if (data.status === false) {
      alert(data.msg);
    }else if (data.status === true) {
      localStorage.setItem(
        process.env.REACT_APP_LOCALHOST_KEY,
        JSON.stringify(data.doc)
      );
      console.log("Document added successfully");
    }navigate(`/${roomId}`);
  };

  return (
    <div>
      <DocumentForm document={{ title: '', content: '' }} onSave={saveDocument} />
    </div>
  );
}

export default NewDoc;