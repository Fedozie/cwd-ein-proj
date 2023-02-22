import styled from "styled-components";


const StyledBody = styled.section`
    background-color: ${({ theme }) => theme.colors.priColor};
    min-height: 50vw;
`;

const WelcomeDiv = styled.div`
    padding: 1.5rem 0 1rem 3.5rem;
    width: 40%;
`;

const WelcomeHeading = styled.h3`
    color: ${({ theme }) => theme.colors.secLilac};
    margin-bottom: 1rem;
`;

const WelcomeParagraph = styled.p`
    color: ${({ theme }) => theme.colors.secLilac};
`;

const MainBody = () => {

    return (
        <StyledBody>
            <WelcomeDiv>
                <WelcomeHeading>Welcome to our blog!</WelcomeHeading>
                <WelcomeParagraph>At CwD Blog, we aim to provide you with the best articles and tutorials that would answer your questions and help you grow in your career.</WelcomeParagraph>
            </WelcomeDiv>

        </StyledBody>

    )
}

export default MainBody;