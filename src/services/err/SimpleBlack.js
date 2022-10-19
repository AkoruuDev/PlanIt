import styled from "styled-components";

export default function SimpleBlack({show, setShow, message, time}) {
    setTimeout(() => setShow(false), time);

    return(
        <>
            {show ? <Container>{message}</Container> : ""}
        </>
    )
}

const Container = styled.div`
    width: 80vw;
    padding: 8px 13px;
    border-radius: 8px;
    background-color: #21212198;
    color: #fafafa;

    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;

    position: fixed;
    left: 10vw;
    z-index: 2;
`;