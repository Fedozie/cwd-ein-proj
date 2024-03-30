
import React from "react";
import styled from 'styled-components';
import AddScribble from "../components/addScribble";
import { Container } from "../components/UI/wrapper";



const PostPage = () => {
    
    
    return (
        <StyledBody>
            <Container title = "Add New Scribble">
                <AddScribble />
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

export default PostPage;