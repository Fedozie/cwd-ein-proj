
import styled from 'styled-components';
import Button from './button';

const Wrapper = styled.header`
    background-color: ${({theme}) => theme.colors.priColor};
    width: 100vw;
    height: 10vh;
    padding: 1rem 3.5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid ${({theme}) => theme.colors.secLilac};
    margin: 0 auto;
`;

const Title = styled.h1`
    color: ${({theme}) => theme.colors.secLilac}
`;

const HeadWrapper = () => {

    return(
        <Wrapper>
            <Title>Code with Dverybest Blog</Title>
            <div>
                <Button>Add Post +</Button>
            </div>
        </Wrapper>
    )
}

export default HeadWrapper;