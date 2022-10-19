import { useContext } from "react";
import styled from "styled-components";
import { AuthContext } from "../provider/auth";

export default function Header() {
    const {user} = useContext(AuthContext);
    console.log(user);

    return (
        <Container>
            <Content>
                <Title>PlanIt</Title>
                <Profile src={user.image} alt="profile" />
            </Content>
        </Container>
    )
}

const Container = styled.header`
    width: 100vw;
    padding: 20px;
    background-color: blue;
    box-shadow: 0 4px 40px 4px gray;
    display: flex;
    justify-content: center;
    position: fixed;
    z-index: 0;
    top: 0;
`;

const Content = styled.div`
    width: 80vw;
    padding: 8px 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const Title = styled.h1`
    font-family: 'Playball', cursive;
    color: #FFFFFF;
    font-size: 38px;
`;

const Profile = styled.img`
    width: 51px;
    height: 51px;
    background-color: #FFFFFF;
    border-radius: 50%;
`;