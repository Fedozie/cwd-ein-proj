import { Link, useNavigate } from "react-router-dom"
import styled from 'styled-components';
import { AddButton } from './button';

export const Header = () => {
    const navigate = useNavigate();

    return (
        <Wrapper>
            <Title>Scribbles</Title>
            <Navigation>
                <Link to="/">Home</Link>
                <AddButton
                    onClick={() => {
                        navigate("/new-post")
                    }}
                >
                    Scribble
                </AddButton>
            </Navigation>
        </Wrapper>
    )
};

export const Container = ({ children }) => {

    return (
        <ContainerWrapper>
            <div>
                <Title>Add New Scribble</Title>
                <Link to="/"> Go back to Home</Link>
            </div>
            {children}
        </ContainerWrapper>
    )
}

export const Card = ({ children, onClick }) => {

    return (
        <CardWrapper onClick={onClick}>
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

    @media only screen and (min-width: ${({ theme }) => theme.breakpoints.mbl}) and (max-width: ${({ theme }) => theme.breakpoints.tbt}){
       padding: 1rem 2rem;
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.mbl}){
        padding: .5rem;
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

    @media only screen and (max-width: ${({ theme }) => theme.breakpoints.tbt}){
        width: 75vw;
    }

    @media only screen and (max-width: ${({ theme }) => theme.breakpoints.mbl}){
        width: 85vw;
        height: auto;
    }

    @media only screen and (max-width: 320px){
        width: 90vw;
        height: auto;
        margin: 2rem auto;
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

    @media only screen and (min-width: ${({ theme }) => theme.breakpoints.mbl}) and (max-width: ${({ theme }) => theme.breakpoints.tbt}){
       font-size: 1.3rem;
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.mbl}){
        font-size: 1.3rem;
    }
`;

const Navigation = styled.nav`
    width: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media only screen and (min-width: ${({ theme }) => theme.breakpoints.mbl}) and (max-width: ${({ theme }) => theme.breakpoints.tbt}){
        & > a{
            font-size: 1rem;
        }
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.mbl}){
        justify-content: space-around;
    }
`;

