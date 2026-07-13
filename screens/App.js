import { useState } from "react";
import Login from "./Login";
import Cadastro from "./Cadastro";
import RecuperarAcesso from "./RecuperarAcesso";

export default function App() {
  const [screen, setScreen] = useState("Login");

  if (screen === "Cadastro") {
    return <Cadastro setScreen={setScreen} />;
  }

  if (screen === "RecuperarAcesso") {
    return <RecuperarAcesso setScreen={setScreen} />;
  }

  return <Login setScreen={setScreen} />;
}