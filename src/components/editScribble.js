import React, { useState, useContext } from "react";
import DataContext from "./contexts/dataContext";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Button } from "./UI/button";


const EditScribble = ({ pathID, scribbles }) => {
  const { setScribbles } = useContext(DataContext);
  const navigate = useNavigate();


  const scribble = scribbles.find((scribble) => scribble.scribbleID === pathID);
  const scribbleIndex = scribbles.findIndex((scribble) => scribble.scribbleID === pathID)

  const [title, setTitle] = useState(scribble.title);
  const [author, setAuthor] = useState(scribble.author);
  const [post, setPost] = useState(scribble.post);

  const submitForm = () => {
    const editedScribble = {title, author, post, scribbleID: scribble.scribbleID};
    scribbles.splice(scribbleIndex, 1, editedScribble);
    setScribbles([...scribbles]);

    navigate("/");
  }

  return (
    <StyledForm onSubmit={submitForm}>
      <InputWrapper>
        <label htmlFor="title">Scribble Title</label>
        <input
          value={title}
          onChange={(e) => { setTitle(e.target.value) }}
          type="text"
          id="title"
          required
        />
      </InputWrapper>
      <InputWrapper>
        <label htmlFor="author">Scribble Author</label>
        <input
          value={author}
          onChange={(e) => { setAuthor(e.target.value) }}
          type="text"
          id="author"
          required
        />
      </InputWrapper>
      <InputWrapper>
        <label htmlFor="post">Scribble</label>
        <textarea
          value={post}
          onChange={(e) => { setPost(e.target.value) }}
          id="post"
          required
          rows="7"
        ></textarea>
      </InputWrapper>
      <BtnWrapper>
        <Button>
          Done Scribbling?
        </Button>
      </BtnWrapper>
    </StyledForm>
  )
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

export default EditScribble;