import { Link, useNavigate } from "react-router-dom"
import styled from 'styled-components';
import Button from './button';

export const Header = () => {
    const navigate = useNavigate();

    return (
        <Wrapper>
            <Title>Code with Dverybest Blog</Title>
            <Navigation>
                <Link to="/">Home</Link>
                <Button
                    onClick={() => {
                        navigate("/new-post")
                    }}
                >
                    Add Post
                </Button>
            </Navigation>
        </Wrapper>
    )
};

export const Container = ({children}) => {

    return (
        <ContainerWrapper>
            <div>
                <Title>Add New Blog Post</Title>
                <Link to = "/"> Go back to Home</Link>
            </div>
            {children}
        </ContainerWrapper>
    )
}

export const Card = ({ children }) => {

    return (
        <CardWrapper>
            {children}
        </CardWrapper>
    )
};

const Wrapper = styled.div`
    background-color: ${({ theme }) => theme.colors.priColor};
    width: 100vw;
    height: 10vh;
    padding: 1rem 3.5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid ${({ theme }) => theme.colors.secLilac};
    margin: 0 auto;

    @media (max-width: ${({ theme }) => theme.breakpoints.smMd}){
        padding: 1rem;
    }
`;

const ContainerWrapper = styled(Wrapper)`
    width: 50vw;
    height: 85vh;
    border: 1px solid ${({ theme }) => theme.colors.secLilac};
    border-radius: 10px;
    margin: 4rem auto;
    display: block;
    padding: 1rem 1.5rem;
    overflow: scroll;

    & > div{
        display: flex;
        align-items: center;
        justify-content: space-between;

        & > a{
            color: ${({ theme }) => theme.colors.secLilac};
            font-size: .8rem;
            text-decoration: underline;
            cursor: pointer;
        }
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.md}){
        width: 70vw;
     }

    @media (max-width: ${({ theme }) => theme.breakpoints.midMd}){
       width: 80vw;
    }
`;

const CardWrapper = styled(Wrapper)`
    width: auto;
    height: auto;
    border: 1px solid ${({ theme }) => theme.colors.secLilac};
    margin: 0;
    display: block;
    padding: 1rem;
    box-shadow: 5px 5px 0px ${({ theme }) => theme.colors.secLilac};
    cursor: pointer;
    transition: all .1s ease-in-out;

    &:hover {
        box-shadow: 5px 5px 0px ${({ theme }) => theme.colors.priLilac};
        color: ${({ theme }) => theme.colors.priLilac};
    }
`;

const Title = styled.h1`
    color: ${({ theme }) => theme.colors.secLilac};

    @media (max-width: ${({ theme }) => theme.breakpoints.midMd}){
        font-size: 1.5rem;
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.smMd}){
        font-size: 1rem
    }
`;

const Navigation = styled.nav`
    width: 17%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    & > a {
        color: ${({ theme }) => theme.colors.secLilac};
        text-decoration: none;
        font-size: 1.3rem;
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.lg}){
        width: 23%;
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.midMd}){
        width: 35%;
    }
`;