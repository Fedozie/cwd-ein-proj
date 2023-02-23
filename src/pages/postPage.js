
import React, {useState} from "react";
import styled from 'styled-components'
import AddPost from "../components/addPost";
import { Container } from "../components/UI/wrapper";

const StyledBody = styled.div`
    width: 100vw;
    height: 100vh;
    overflow: hidden;
    background-color:  ${({ theme }) => theme.colors.tintPriLilac};
`;

const PostPage = () => {
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [post, setPost] = useState(''); 

    const submitForm = (e) => {
        e.preventDefault();
        const blog = {title, author, post};
        console.log(blog);
        setTitle('')
        setAuthor('')
        setPost('')
    }

    return (
        <StyledBody>
            <Container>
                <AddPost 
                    onSubmit={submitForm}
                    title = {title}
                    setTitle = {setTitle}
                    author = {author}
                    setAuthor = {setAuthor}
                    post = {post}
                    setPost = {setPost}
                />
            </Container>
        </StyledBody>
    );
}

export default PostPage;