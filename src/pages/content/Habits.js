import styled from "styled-components";

import Header from "../Header";
import Footer from "../Footer";
import Template from "../../components/boxCreateHabit";
import { useContext, useEffect, useState } from "react";
import { getHabits } from "../../services/API";
import { AuthContext } from "../../provider/auth";

const habts = [];

export default function Habits() {
    const [habs, setHabs] = useState([]);
    const [add, setAdd] = useState(false);
    const { user } = useContext(AuthContext);

    useEffect(() => {
        getHabits(user.token)
            .then(res => {
                console.log(res.data)
            })
            .catch()
    }, []);
    
    return (
        <Container>
            <Header />
            <Content>
                <TextBox>
                    <Title>Meus Habitos</Title>
                    <Button onClick={() => setAdd(!add)}>+</Button>
                </TextBox>
                {add ? <Template habs={habs} setHabs={setHabs} habts={habts} setAdd={setAdd} /> : ""}
                {habts.length === 0
                 ? <Text>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</Text>
                 : habts.map((hab, i) =>
                    <p key={i}>{hab.name}</p>
                 )
                }
            </Content>
            <Footer />
        </Container>
    )
}

const Container = styled.div`
    height: 100vh;
    display: flex;
    justify-content: space-around;
    align-items: center;
`;

const Content = styled.div`
    width: 80vw;
    height: 100vh;
    padding-top: 150px;
`;

const TextBox = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const Title = styled.h1`
    padding-bottom: 20px;
    font-size: 23px;
    color: #126BA5;
`;

const Button = styled.div`
    width: 50px;
    height: 50px;
    box-sizing: border-box;
    border-radius: 5px;
    background-color: #52B6FF;
    font-family: 'Lexend Deca', sans-serif;
    font-size: 33px;
    color: #FFFFFF;
    display: flex;
    align-items: center;
    justify-content: center;

    &&:hover {
        cursor: pointer;
        background-color: #52C6FF;
        box-shadow: 0 1px 4px 1px gray;
        color: black;
    }
`;

const Text = styled.p`
    margin-top: 25px;
    color: #666666;
    font-size: 18px;
`;