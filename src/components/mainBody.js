import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import DataContext from "./contexts/dataContext";
import styled from "styled-components";
import { v4 as uuidv4 } from 'uuid';
import { Card } from "./UI/wrapper";
import { DeleteButton, EditButton } from "./UI/button";
import { useLocalStorage } from "./hooks/uselocalStorage";

const MainBody = () => {
    const navigate = useNavigate();
    const [longPressTimeout, setLongPressTimeout] = useState(null);
    const { scribbles } = useContext(DataContext);

    const { removeScribble } = useLocalStorage('scribbles', scribbles);

    const viewScribble = (scribble) => {
        navigate(`/read-scribble/${scribble.scribbleID}`)
    }

    const truncateTitle = (title, maxLength) => {
        if (title.length > maxLength) {
            const truncatedTitle = `${title.slice(0, maxLength)}...`
            return truncatedTitle
        } else {
            return title
        }
    };

    const makeChanges = (scribble) => {
        navigate(`/edit-scribble/${scribble.scribbleID}`)
    }

    const handleClick = (event, scribble) => {
        if(event.detail === 2){
            viewScribble(scribble)
        }
    }

    const handleTouchStart = (scribble) => {
        const timeout = setTimeout(() => viewScribble(scribble), 800)
        setLongPressTimeout(timeout)
    }

    const handleTouchEnd = () => {
        if(longPressTimeout){
            clearTimeout(longPressTimeout);
            setLongPressTimeout(null);
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
            <Scribbles>
                {
                    scribbles.map((scribble) => (
                        <Card
                            key={uuidv4()}
                            onClick={(event) => handleClick(event, scribble)}
                            onTouchStart = {() => handleTouchStart(scribble)}
                            onTouchEnd = {handleTouchEnd}
                        >
                            <h3>{truncateTitle(scribble.title, 30)}</h3>
                            <h6>by {scribble.author}</h6>
                            <p >{scribble.post.slice(0, 90)}...</p>
                            <div className="CTA">
                                <EditButton onClick={() => makeChanges(scribble)}>
                                    Edit
                                </EditButton>
                                <DeleteButton
                                    onClick={() => removeScribble("scribbles", scribble.scribbleID)}
                                >
                                    Remove
                                </DeleteButton>
                            </div>
                        </Card>
                    ))
                }
            </Scribbles>
        </StyledBody>
    )
}


const StyledBody = styled.section`
    background-color: ${({ theme }) => theme.colors.priColor};
    width: 100%;
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
    margin-top: ${props => (props.marginTop ? "1rem" : "0")};
`;

const Scribbles = styled.div`
    width: 100%;
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

    @media only screen and (min-width: ${({ theme }) => theme.breakpoints.mbl} ) and (max-width: ${({ theme }) => theme.breakpoints.tbt}){
        grid-template-columns: repeat(2, 1fr);
    }

    @media (max-width: 424px){
        grid-template-columns: repeat(1, 1fr);
    }
`

export default MainBody;