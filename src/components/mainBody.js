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
    const { scribbles } = useContext(DataContext);

    const { removeScribble, editScribble } = useLocalStorage('scribbles');

    const viewScribble = (event, scribble) => {
        
        if(event.detail === 2){
            navigate(`/read-post/${scribble.scribbleID}`)
        }
    }

    const truncateTitle = (title, maxLength) => {
        if(title.length > maxLength){
            const truncatedTitle = `${title.slice(0, maxLength)}...`
            return truncatedTitle
        }else{
            return title
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
                <Paragraph marginTop>P.S. Double click on the scribble to read it in full.</Paragraph>
            </WelcomeDiv>
            <Heading>
                Scribbles
            </Heading>
            <Scribbles>
                {
                    scribbles.map((scribble) => (
                        <Card
                            key={uuidv4()}
                            onClick={(event) => viewScribble(event, scribble)}
                        >
                            <h3>{truncateTitle(scribble.title, 40)}</h3>
                            <h6>by {scribble.author}</h6>
                            <p >{scribble.post.slice(0, 90)}...</p>
                            <div className="CTA">
                                <EditButton onClick={() => editScribble()}>
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
    margin-top: ${props => (props.marginTop ? "1rem" : "0")};
`;

const Scribbles = styled.div`
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