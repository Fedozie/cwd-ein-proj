
import React from "react";
import styled from 'styled-components'
import { Container } from "../components/UI/wrapper";

const StyledBody = styled.div`
    width: 100vw;
    height: 100vh;
    overflow: hidden;
`;

const PostPage = () => {
    return (
        <StyledBody>
            <Container />
        </StyledBody>
    );
}

export default PostPage;