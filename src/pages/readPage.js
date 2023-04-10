import styled from "styled-components";
import { Container } from "../components/UI/wrapper";

const ReadPage = () => {

    return(
        <StyledBody>
            
        </StyledBody>

    )
}

const StyledBody = styled.div`
    width: 100vw;
    height: 100vh;
    overflow: hidden;
    background-color:  ${({ theme }) => theme.colors.tintPriLilac};
`;

export default ReadPage;