
import React from "react";
import styled from 'styled-components';
import AddPost from "../components/addPost";
import { Container } from "../components/UI/wrapper";



const PostPage = () => {
    
    
    return (
        <StyledBody>
            <Container>
                <AddPost />
            </Container>
        </StyledBody>
    );
}

export default PostPage;

const StyledBody = styled.div`
    width: 100vw;
    height: 100vh;
    overflow: hidden;
    background-color:  ${({ theme }) => theme.colors.tintPriLilac};
`;