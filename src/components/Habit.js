import styled from "styled-components";
import iconCheck from "../assets/iconCheck.png";

export default function Habit({ title }) {
    return(
        <Container>
            <Info>
                <Title>{title}</Title>
                <div>
                    <Text>Sequência atual:</Text>
                    <Text>Seu recorde:</Text>
                </div>
            </Info>
            <Check><Image src={iconCheck} alt="check"/></Check>
        </Container>
    )
}

const Container = styled.div`
    width: 100%;
    height: 150px;
    padding: 8px 15px;
    margin: 15px 0;
    border-radius: 12px;
    background-color: white;

    display: flex;
    justify-content: space-between;
    align-items: center;
`

const Info = styled.div`
    height: 125px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

const Title = styled.h1`
    font-size: 32px;
    color: #666666;
`

const Text = styled.p`
    font-size: 20px;
    margin: 8px 0;
    color: #666666;
`

const Check = styled.div`
    width: 125px;
    height: 125px;
    border-radius: 12px;
    background-color: gray;

    display: flex;
    justify-content: center;
    align-items: center;
`

const Image = styled.img`
    height: 60%;
`