import React, { useState } from "react";
import styled from "styled-components";
import uuid from "react-uuid";
import { Card } from "./UI/wrapper";


const StyledBody = styled.section`
    background-color: ${({ theme }) => theme.colors.priColor};
    min-height: 50vw;
    width: inherit;
    padding: 1.5rem 3.5rem 1rem 3.5rem;
`;

const WelcomeDiv = styled.div`
    width: 40%;
    margin-bottom: 2.5rem; 
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
    grid-template-rows: repeat(3, 1fr);
    grid-gap: 1rem;
    color: ${({ theme }) => theme.colors.secLilac};

    & h3, & h6{
        margin-bottom: 1rem;
    }

    & h3{
       font-size: 1.2rem;
    }

    & h5{
        
    }

    & p{
        
    }
`

const MainBody = () => {
    const [blogs, setBlogs]= useState([
        {
            title: "How to use Typescript with React",
            author: "Edozie Onyeanusi",
            post: "Werem ipsumn nngm and nfmn. Demmr gnotmmgm hgnmmtmf mmdnfnf..."
        },
        {
            title: "Technical Writing for Developers",
            author: "Jedidiah Anadi",
            post: "Rarem ipsumn ernie, bvnf ngmmr. Viki nfmf hgnmmtmf mmdnfnf..."
        },
        {
            title: "Navigating Docker",
            author: "Charles Best",
            post: "Anam ipsumn nngmmrg. Mad asiki nfmf hgnmmtmf mmdnfnf..."
        },
        {
            title: "How to unlock your Mangekyō Sharingan",
            author: "Sasuke Uchiha",
            post: "Lorem ipm gbjjj sumn nngmmr. Viki nfmf hgnmmtmf mmdnfnf..."
        }
    ]);

    return (
        <StyledBody>
            <WelcomeDiv>
                <Heading>
                    Welcome to our blog!
                </Heading>
                <Paragraph>
                    At CwD Blog, we aim to provide you with the best articles and tutorials that would answer your questions and help you grow in your career.
                </Paragraph>
            </WelcomeDiv>
            <Heading>
                Blog Posts
            </Heading>
            <Blogs>
                {
                    blogs.map((blog) => (
                        <Card
                            key = {uuid()}
                        >
                            <h3>{blog.title}</h3>
                            <h6>by {blog.author}</h6>
                            <p>{blog.post}</p>
                        </Card>
                    ))
                }
            </Blogs>
        </StyledBody>
    )
}

export default MainBody;