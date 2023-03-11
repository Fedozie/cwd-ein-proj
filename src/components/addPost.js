
import React, {useState, useContext, useNavigate} from "react";
import styled from "styled-components";
import DataContext from "./contexts/dataContext";
import Button from "./UI/button";

const AddPost = () => {
    // const navigate = useNavigate();
    const formData = useContext(DataContext);

    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [post, setPost] = useState(''); 

    const submitForm = (e) => {
        e.preventDefault();
        const blog = {title, author, post};
        formData.push(blog);
        setTitle('');
        setAuthor('');
        setPost('');
        // navigate("/");
    }

    return (
        <StyledForm onSubmit = {submitForm}>
            <InputWrapper>
                <label htmlFor="title">Title of Blog Post</label>
                <input
                    type="text"
                    value={title}
                    onChange={(e) => { setTitle(e.target.value) }}
                    id="title"
                    required
                />
            </InputWrapper>
            <InputWrapper>
                <label htmlFor="author">Author of Blog Post</label>
                <input
                    type="text"
                    value={author}
                    onChange={(e) => { setAuthor(e.target.value) }}
                    id="author"
                    required
                />
            </InputWrapper>
            <InputWrapper>
                <label htmlFor="">Blog Post</label>
                <textarea
                    value={post}
                    onChange={(e) => { setPost(e.target.value) }}
                    id="post"
                    required
                    rows = "7"
                ></textarea>
            </InputWrapper>
            <BtnWrapper>
                <Button>
                    Submit Blog Post
                </Button>
            </BtnWrapper>

        </StyledForm>
    );
}


const StyledForm = styled.form`
    margin-top: 2rem;
`;

const InputWrapper = styled.div`
    margin: 2.5rem 0;
    width: auto;

    & label{
        display: block;
        color: ${({ theme }) => theme.colors.secLilac};
        font-size: 1.2rem;
        font-weight: 600;
        margin-bottom: .3rem;
    }

    & input, & textarea{
        display: block;
        width: 100%;
        font-size: 1rem;
        font-weight: 600;
        padding: .5rem 1rem;
        border: 1.5px solid ${({ theme }) => theme.colors.secLilac};
        border-radius: 3px;
        color: ${({ theme }) => theme.colors.secLilac};
    }

    & textarea{
        resize: none;
    }
`;

const BtnWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

export default AddPost;