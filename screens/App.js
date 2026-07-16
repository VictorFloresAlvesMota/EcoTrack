import { useState } from "react";
import Login from "./Login";
import Cadastro from "./Cadastro";
import RecuperarAcesso from "./RecuperarAcesso";
import RedefinirSenha from './RedefinirSenha';

export default function App() {
  const [screen, setScreen] = useState("Login");

  if (screen === "Cadastro") {
    return <Cadastro setScreen={setScreen} />;
  }

  if (screen === "RecuperarAcesso") {
    return <RecuperarAcesso setScreen={setScreen} />;
  }

  if (screen === "RedefinirSenha") {
    return <RedefinirSenha setScreen={setScreen} />;
  }

  return <Login setScreen={setScreen} />;
}