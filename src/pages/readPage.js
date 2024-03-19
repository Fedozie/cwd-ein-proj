import React, { useContext } from "react";
import {useParams, useLocation, Link} from "react-router-dom";
import DataContext from "../components/contexts/dataContext";
import styled from "styled-components";

const ReadPage = () => {
    const { pathname } = useLocation();
    const urlID = pathname.split("/")[2];
    const { blogs } = useContext(DataContext);
    const blog = blogs.find((blog) => {
        return (blog.blogID === urlID)
    })
    // const { id } = useParams();

    return (
        <StyledBody>
            <StyledContainer>
                <div>
                    <StyledHeading>
                        <h2>{blog.title}</h2>
                        <h5>by {blog.author}</h5>
                    </StyledHeading>
                    <Navigation>
                        <Link to = "/">Go back Home</Link>
                    </Navigation>
                </div>

                <p>{blog.post}</p>
            </StyledContainer>
        </StyledBody>
    )
}

const StyledBody = styled.div`
    width: 100vw;
    height: 100vh;
    overflow: hidden;
    background-color:  ${({ theme }) => theme.colors.tintPriLilac};
`;

const StyledContainer = styled.div`
    width: 70vw;
    height: 85vh;
    background-color: ${({theme}) => theme.colors.priColor};
    border: 1px solid ${({ theme }) => theme.colors.secLilac};
    border-radius: 10px;
    margin: 4rem auto;
    display: block;
    padding: 1rem 1.5rem;
    overflow: scroll;

    & > div{
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 1rem;
    }

    & > p{
        color: ${({ theme }) => theme.colors.secLilac};
    }
`
const StyledHeading = styled.div`

    & > h2{
        color: ${({ theme }) => theme.colors.secLilac};
        margin-bottom: .5rem;
    }

    & > h5{
        color: ${({ theme }) => theme.colors.secLilac};
    }
`

const Navigation = styled.div`

    & > a {
        color: ${({ theme }) => theme.colors.secLilac};
        text-decoration: underline;
        font-size: 1rem;
    }
`

export default ReadPage;