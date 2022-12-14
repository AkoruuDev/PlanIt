import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import logo from "../../assets/logo.png";
import { SimpleBlack } from "../../services/error";
import { signUp } from "../../services/API";

export default function Registration() {
    const [register, setRegister] = useState([]);
    const [save, setSave] = useState(false);
    const navigate = useNavigate()
    const [show, setShow] = useState(false);
    const [messageError, setMessageError] = useState("");

    function addRegisterValue({ value, name }) {
        setRegister({
          ...register,
          [name]: value,
        });
    }

    useEffect(() => {
        if (save) {
            signUp(register)
                .then(() => {
                    navigate('/');
                })
                .catch(() => {
                    setMessageError("Impossivel fazer cadastro");
                    setShow(true);
                    setTimeout(() => {
                        window.location.reload();
                        navigate('/cadastro');
                    }, 2000);
                });
        }
    }, [save]);

    return (
        <MainRegister>
            <Content>
                <Image src={logo} alt="logotipo" />
                <Title>PlanIt</Title>
                <Form>
                    <Input type="email" name="email" onChange=
                        {(e) => addRegisterValue({
                                name: e.target.name,
                                value: e.target.value,
                            })
                        } 
                    placeholder="e-mail" />
                    <Input type="password" name="password" onChange=
                        {(e) => addRegisterValue({
                                name: e.target.name,
                                value: e.target.value,
                            })
                        } 
                    placeholder="senha" />
                    <Input type="name" name="name" onChange=
                        {(e) => addRegisterValue({
                                name: e.target.name,
                                value: e.target.value,
                            })
                        } 
                    placeholder="nome" />
                    <Input type="picture" name="image" onChange=
                        {(e) => addRegisterValue({
                                name: e.target.name,
                                value: e.target.value,
                            })
                        } 
                    placeholder="foto" />
                    <Button onClick={() => setSave(true)}>Cadastrar</Button>
                </Form>

                <Link to="/">
                    <Login>J?? tem uma conta? Fa??a login!</Login>
                </Link>
            </Content>
            <SimpleBlack show={show} setShow={setShow} message={messageError} time={3000}/>
        </MainRegister>
    )
}

const MainRegister = styled.div`
    height: 100vh;
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color: #FFFFFF;
`;

const Content = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const Image = styled.img`
    width: 170px;
`;

const Title = styled.h1`
    padding-bottom: 20px;
    font-family: 'Playball', cursive;
    font-size: 70px;
    color: #126BA5;
`;

const Form = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const Input = styled.input`
    width: 80vw;
    height: 45px;
    margin: 6px;
    padding: 10px;
    box-sizing: border-box;
    border: #D4D4D4 solid 1px;
    border-radius: 5px;
    font-family: 'Lexend Deca', sans-serif;
    font-size: 20px;
    color: #D4D4D4;

    &&:hover {
        background-color: #F1F1F1;
    }
`;

const Button = styled.div`
    width: 80vw;
    height: 45px;
    margin: 6px;
    padding: 10px;
    box-sizing: border-box;
    border-radius: 5px;
    background-color: #52B6FF;
    font-family: 'Lexend Deca', sans-serif;
    font-size: 20px;
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

const Login = styled.p`
    margin-top: 25px;
    color: #52B6FF;
    font-size: 18px;
    text-decoration: underline;
    font-style: oblique;

    &&:hover {
        cursor: pointer;
        color: #52C6FF;
    }
`;