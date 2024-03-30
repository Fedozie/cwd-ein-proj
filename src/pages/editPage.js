import React, { useContext } from "react";
import DataContext from "../components/contexts/dataContext";
import styled from "styled-components";
import { Container } from "../components/UI/wrapper";
import EditScribble from "../components/editScribble";

const EditPage = () => {
  const { scribbles } = useContext(DataContext);

  const path = window.location.pathname;
  const pathID =  path.split('/')[2];

  return (  
    <StyledBody>
      <Container title = "Edit Scribble">
        <EditScribble pathID = {pathID} scribbles={scribbles}/>
      </Container>
    </StyledBody>
  );
}

const StyledBody = styled.div`
    width: 100vw;
    height: 100vh;
    overflow: hidden;
    background-color:  ${({ theme }) => theme.colors.tintPriLilac};
`;
 
export default EditPage;