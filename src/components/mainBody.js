import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import DataContext from "./contexts/dataContext";
import styled from "styled-components";
import { v4 as uuidv4 } from 'uuid'
import { Card } from "./UI/wrapper";
import { DeleteButton, EditButton } from "./UI/button";
import { useLocalStorage } from "./hooks/uselocalStorage"

const MainBody = () => {
    const navigate = useNavigate();
    const { blogs } = useContext(DataContext);

    const { removeItem } = useLocalStorage('blogs');

    const viewNote = (event, blog) => {
        
        if(event.detail === 2){
            navigate(`/read-post/${blog.blogID}`)
        }
    }

    return (
        <StyledBody>
            <WelcomeDiv>
                <Heading>
                    Welcome to Scribbles!
                </Heading>
                <Paragraph>
                    Scribbles is a simple web app which makes it easy for you to scribble your thoughts and take notes in your web browser, whilst keeping the notes even when you close the tabs or the browser window.
                </Paragraph>
            </WelcomeDiv>
            <Heading>
                Scribbles
            </Heading>
            <Blogs>
                {
                    blogs.map((blog) => (
                        <Card
                            key={uuidv4()}
                            onClick={(event) => viewNote(event, blog)}
                        >
                            <h3>{blog.title}</h3>
                            <h6>by {blog.author}</h6>
                            <p >{blog.post.slice(0, 90)}...</p>
                            <div className="CTA">
                                <EditButton onClick={() => removeItem}>
                                    Edit
                                </EditButton>
                                <DeleteButton
                                    onClick={() => removeItem()}
                                >
                                    Remove
                                </DeleteButton>
                            </div>
                        </Card>
                    ))
                }
            </Blogs>
        </StyledBody>
    )
}


const StyledBody = styled.section`
    background-color: ${({ theme }) => theme.colors.priColor};
    min-height: 90vh;
    width: inherit;
    padding: 1.5rem 3.5rem 1rem 3.5rem;

    @media only screen and (min-width: ${({ theme }) => theme.breakpoints.mbl}) and (max-width: ${({ theme }) => theme.breakpoints.tbt}){
     
    }
`;

const WelcomeDiv = styled.div`
    width: 45%;
    margin-bottom: 2.5rem;

    @media (max-width: ${({ theme }) => theme.breakpoints.tbt}){
        width: 70%;
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.mbl}){
        width: 100%;
    }
`;

const Heading = styled.h3`
    color: ${({ theme }) => theme.colors.secLilac};
    margin-bottom: 1rem;
`;

const Paragraph = styled.p`
    color: ${({ theme }) => theme.colors.secLilac};
`;

const Blogs = styled.div`
    max-width: 100%;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: auto;
    grid-gap: 1rem;
    color: ${({ theme }) => theme.colors.secLilac};

    & h3, & h6{
        margin-bottom: 1rem;
    }

    & h3{
        font-size: 1.2rem;
    }

    .CTA{
        margin-top: 1rem;
        display: flex;
        justify-content: flex-end;
    }

    @media only screen and (max-width: 620px){
        grid-template-columns: repeat(2, 1fr);
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.mbl}){
        grid-template-columns: repeat(1, 1fr);
    }
`

export default MainBody;