import { Link } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import styled from 'styled-components';

export const Header = () => {

    return (
        <Wrapper>
            <Title>Scribbles</Title>
            <Navigation>
                <StyledLink to = "/" >Home</StyledLink>
                <StyledLink to = "/new-scribble" >Create Scribble +</StyledLink>
            </Navigation>
        </Wrapper>
    )
};

export const Container = ({ children, title }) => {

    return (
        <ContainerWrapper>
            <div>
                <Title>{title}</Title>
                <Link to="/"> Go back to Home</Link>
            </div>
            {children}
        </ContainerWrapper>
    )
}

export const Card = ({ children, onClick }) => {
    const forMobileScreens = useMediaQuery({
        query: '(max-width: 1024px)'
    })

    return (
        <CardWrapper onClick={onClick}>
            {!forMobileScreens ? <span>Double click on the scribble to read it in full.</span> : null}      
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
    width: 100%;
    height: auto;
    border: 1px solid ${({ theme }) => theme.colors.secLilac};
    margin: 0;
    display: block;
    padding: 1rem;
    box-shadow: 5px 5px 0px ${({ theme }) => theme.colors.secLilac};
    cursor: pointer;
    transition: all .1s ease-in-out;
    position: relative;

    &:hover {
        box-shadow: 5px 5px 0px ${({ theme }) => theme.colors.priLilac};
        color: ${({ theme }) => theme.colors.priLilac};
    }

    & > span{
        display: none;
        background: none repeat scroll 0 0 ${({theme}) => theme.colors.white};
        border: 3px solid ${({theme}) => theme.colors.secLilac};
        color: ${({theme}) => theme.colors.secLilac};;
        height: 60px;
        width: 80%;
        margin: 0 auto;
        position: absolute;
        top: 10px;
        left: 50%;
        transform: translate(-50%, -50%);
        padding: .5rem;
        cursor: default;
        font-weight: 600;
        text-align: center;
        z-index: 50;
    }

    & > span::after{
        content: '';
        width: 10px;
        height: 10px;
        background: ${({theme}) => theme.colors.white};
        border-bottom: 3px solid ${({theme}) => theme.colors.secLilac};
        border-right: 3px solid ${({theme}) => theme.colors.secLilac};
        position: absolute;
        bottom: -7px;
        left: 50%;
        margin-left: -5px;
        transform: rotate(45deg);
        -moz-transform: rotate(45deg);
        -webkit-transform: rotate(45deg);
        z-index: 50;
    }

    &:hover > span{
        display: block;
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
    gap: .5rem;

    @media only screen and (min-width: ${({ theme }) => theme.breakpoints.mbl}) and (max-width: ${({ theme }) => theme.breakpoints.tbt}){
        & > a{
            font-size: 1rem;
        }
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.mbl}){
        justify-content: space-around;
    }
`;

const StyledLink = styled(Link)`
    cursor: pointer;
    color: ${({theme}) => theme.colors.secLilac};
    font-size: .9rem;
    font-weight: 600;

    &:hover{
        color: ${({theme}) => theme.colors.priLilac};
    }
`;