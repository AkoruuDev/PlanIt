import { BrowserRouter, Route, Routes } from "react-router-dom";
import GlobalStyle from "./styles/globalStyles";

import Main from "./pages/Main";

import Login from "./pages/log/Login";
import Register from "./pages/log/Register";

import Habits from "./pages/content/Habits";
import Historic from "./pages/content/Historic";
import Today from "./pages/content/Today";

export default function App() {
    return(
        <>
            <GlobalStyle />
            <BrowserRouter>
                <Main>
                    <Routes>
                        <Route path="/" element={ <Login /> } />
                        <Route path="/cadastro" element={ <Register /> } />
                        <Route path="/habitos" element={ <Habits /> } />
                        <Route path="/hoje" element={ <Today /> } />
                        <Route path="/historico" element={ <Historic /> } />
                    </Routes>
                </Main>
            </BrowserRouter>
        </>
    )
}