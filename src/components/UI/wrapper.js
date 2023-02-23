import { Link, useNavigate } from "react-router-dom"
import styled from 'styled-components';
import Button from './button';

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
`;

const ContainerWrapper = styled(Wrapper)`
    width: 50vw;
    height: 85vh;
    border: 1px solid ${({ theme }) => theme.colors.secLilac};
    border-radius: 10px;
    margin: 4rem auto;
    display: block;
    padding: 1rem 1.5rem;

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

    &:hover {
        box-shadow: 5px 5px 0px ${({ theme }) => theme.colors.priLilac};
    }
`;

const Title = styled.h1`
    color: ${({ theme }) => theme.colors.secLilac};
`;

const Navigation = styled.nav`
    width: 15%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    & > a {
        color: ${({ theme }) => theme.colors.secLilac};
        text-decoration: none;
        font-size: 1.3rem;
    }
`;

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
                    Add Post +
                </Button>
            </Navigation>
        </Wrapper>
    )
};

export const Container = () => {

    return (
        <ContainerWrapper>
            <div>
                <Title>Add New Blog Post</Title>
                <Link to = "/">Go back to Home</Link>
            </div>


        </ContainerWrapper>
    )
}

export const Card = ({ children }) => {

    return (
        <CardWrapper>
            {children}
        </CardWrapper>
    )
}