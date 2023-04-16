import React, { useContext } from "react";
import { useParams, useLocation } from "react-router-dom";
import DataContext from "../components/contexts/dataContext";
import styled from "styled-components";
import { Container } from "../components/UI/wrapper";

const ReadPage = () => {
    const { pathname } = useLocation();
    const urlID = pathname.split("/")[2];
    const { blogs } = useContext(DataContext);
    const blog = blogs.find((blog) => {
        return (blog.blogID == urlID)
    })
    const { id } = useParams();

    return (
        <StyledBody>
            <h3>{blog.title}</h3>
            <p>{blog.post}</p>
        </StyledBody>

    )
}

const StyledBody = styled.div`
    width: 100vw;
    height: 100vh;
    overflow: hidden;
    background-color:  ${({ theme }) => theme.colors.tintPriLilac};
`;

export default ReadPage;