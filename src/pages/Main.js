import styled from "styled-components";

export default function Main({ children }) {
    return (
        <Container>
            { children }
        </Container>
    )
}

const Container = styled.main`
    width: 100vw;
    height: 100vh;
    background-color: #E5E5E5;
`;