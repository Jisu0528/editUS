import React, { useState, useEffect } from "react";
import styled from "styled-components";
import DocItem from "./DocItem";
import PlusDoc from "./PlusDoc";
import { Link } from 'react-router-dom';
import axios from 'axios';
import { getDocumentsRoute } from "../utils/APIRoutes";

const DocList = ({ roomId }) => {
  const [documents, setDocuments] = useState([]);


  const fetchDocuments = async () => {
    try {
      const response = await axios.get(getDocumentsRoute(roomId));
      setDocuments(response.data);
      console.log(response.data);
    } catch (error) {
      console.error('Error fetching documents:', error);
    }
  };

  useEffect(() => {
    fetchDocuments();
  }, [roomId]);


  return (
    <Wrapper>
      <Container>
        {documents.map((doc) => (
          <StyledLink to={`/${roomId}/${doc._id}`} key={doc._id}>
            <DocItem item={doc} />
          </StyledLink>
        ))}      
        <Link to={`/${roomId}/new`} key="new">
          <PlusDoc/>
        </Link>
      </Container>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 83vw;
  min-height: 83vh;
  border: 2px solid transparent;
  background-image: linear-gradient(#070D17, #070D17), linear-gradient(160deg, #6A35EE, #9930EF, #5737EE, #795CEB);
  background-clip: padding-box, border-box;
`;

const Container = styled.div`
  display: grid;
  justify-content:space-between;
  justify-items: center;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-gap: 60px;
  padding: 40px 120px;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
`
export default DocList;