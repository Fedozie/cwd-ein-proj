
import styled from 'styled-components';

const StyledButton = styled.button`
    width: auto;
    height: auto;
    background-color: ${({ theme }) => theme.colors.priLilac};
    border: 2px solid ${({ theme }) => theme.colors.secLilac};
    padding: 0.75rem 1rem;
    cursor: pointer;
    border-radius: 5px;
    box-shadow: 0px 5px 0px ${({ theme }) => theme.colors.secLilac};
    color:${({ theme }) => theme.colors.white};
    font-weight: 600;
    transition: box-shadow .7s ease-in-out;

    &:hover, &:active{
        box-shadow: none;
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.md}){
        padding: 0.5rem;
    }

    
`;

const Button = ({ children, onClick }) => {
    return (
        <StyledButton
            onClick={onClick}
        >
            {children}
        </StyledButton>
    )
}

export default Button;