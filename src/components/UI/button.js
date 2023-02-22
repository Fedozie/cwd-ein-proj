
import styled from 'styled-components';

const StyledButton = styled.button`
    background-color: ${({theme}) => theme.colors.priLilac};
    border: 2px solid ${({theme}) => theme.colors.secLilac};
    padding: 0.75rem 1rem;
    cursor: pointer;
    border-radius: 5px;
    box-shadow: 0px 5px 0px ${({theme}) => theme.colors.secLilac};
    color:${({theme}) => theme.colors.white};
    font-weight: 600;

    &:hover, &:active{
        box-shadow: none;
    }
`;

const Button = ({children}) => {
    return(
        <StyledButton>
            {children}
        </StyledButton>
    )
}

export default Button;