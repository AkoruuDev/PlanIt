import Header from "../Header";
import Footer from "../Footer";
import styled from "styled-components";
import { week, dd, mm } from "../../constants/date";

export default function Today() {
    return(
        <>
            <Header />
            <Content>
                <Date>{`${week()}, ${dd()}/${mm()}`}</Date>
                <>Nenhum habito concluido ainda</>
                <>habitos</>
            </Content>
            <Footer />
        </>
    )
}

const Content = styled.main`
    padding: 150px 5vw;
    height: 100vh;
`

const Date = styled.h1`
    color: blue;
    font-size: 36px;
`