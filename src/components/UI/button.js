
import styled from 'styled-components';

export const Button = ({ children, onClick }) => {
    return (
        <StyledButton
            onClick={onClick}
        >
            {children}
        </StyledButton>
    )
}

export const AddButton = ({ children, onClick }) => {
    return (
        <StyledAddButton
            onClick={onClick}
        >
            {children}
        </StyledAddButton>
    )
}

export const DeleteButton = ({ children, onClick }) => {
    return (
        <StyledDltButton
            onClick={onClick}
        >
            {children}
        </StyledDltButton>
    )
}

export const EditButton = ({ children, onClick }) => {
    return (
        <StyledEditButton
            onClick={onClick}
        >
            {children}
        </StyledEditButton>
    )
}


const StyledButton = styled.button`
    width: max-content;
    height: inherit;
    background-color: ${({ theme }) => theme.colors.priLilac};
    border: 2px solid ${({ theme }) => theme.colors.secLilac};
    padding: 0.75rem 1rem;
    cursor: pointer;
    border-radius: 5px;
    box-shadow: 0px 5px 0px ${({ theme }) => theme.colors.secLilac};
    color:${({ theme }) => theme.colors.white};
    font-weight: 600;
    transition: box-shadow .7s ease-in-out;
    font-size: .9rem;

    &:hover, &:active{
        box-shadow: none;
    }

    @media only screen and (min-width: ${({ theme }) => theme.breakpoints.mbl}) and (max-width: ${({ theme }) => theme.breakpoints.tbt}){
        
    }

    @media only screen and (max-width: ${({ theme }) => theme.breakpoints.mbl}){
        
    }
`;

const StyledAddButton = styled(StyledButton)`
    margin: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: .75rem .75rem;
    background: transparent;
    border: none;
    color: ${({theme}) => theme.colors.secLilac};
    box-shadow: none;
    transition: border .2s ease-in-out;

    &:hover{
        border: 2px solid ${({theme}) => theme.colors.secLilac};
    }

    &:active{
        border: none;
    }
`;

const StyledDltButton = styled(StyledButton)`
    background-color: ${({ theme }) => theme.colors.dltColor};
    padding: .5rem;
    width: 5rem;
`;

const StyledEditButton = styled(StyledButton)`
    background-color: ${({theme}) => theme.colors.editColor};
    padding: .5rem;
    margin-right: 1rem;
    width: 5rem;
`;