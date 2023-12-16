import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { updateDocumentRoute } from '../utils/APIRoutes';
import DocumentForm from '../components/DocForm';

const EditDoc = () => {
  const navigate = useNavigate();
  const { roomId, docId } = useParams();
  const [document, setDocument] = useState({});

  useEffect(() => {
    const fetchDocument = async () => {
      try {
        const { data } = await axios.get(updateDocumentRoute(docId));
        setDocument(data.updatedDoc);
      } catch (error) {
        console.error('Error fetching document:', error);
      }
    };

    fetchDocument();
  }, [docId]);

  const saveDocument = async (updatedDocument) => {
    const {data} = await axios.put(updateDocumentRoute(docId), {
      title: updatedDocument.title,
      content: updatedDocument.content
    });
    if (data.status === false) {
      alert(data.msg);
    }
    if (data.status === true) {
      localStorage.setItem(
        process.env.REACT_APP_LOCALHOST_KEY,
        JSON.stringify(data.doc)
      );
      console.log("Document added successfully");
    }navigate(`/${roomId}`);
  };

  return (
    <div>
      <DocumentForm document={document} onSave={saveDocument} />
    </div>
  );
}

export default EditDoc;