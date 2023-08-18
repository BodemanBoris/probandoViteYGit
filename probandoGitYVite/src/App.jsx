import { useState } from "react";
import Header from "./Components/Header/Header";
import NavBar from "./Components/Nav/NavBar";
import Main from "./Components/Main/Main";
import Cursos from "./Components/Cursos/Cursos";
import BtnMenu from "./Components/BtnMenu/BtnMenu";
import Footer from "./Components/Footer/Footer";
import Acerca from "./Components/Acerca/Acerca";
import Contacto from "./Components/Contacto/Contacto";
import "./App.css";

function App() {
  const [interiorMenu, setInteriorMenu] = useState(false);

  const links = ["Inicio", "Faby Rose", "Cursos", "Contacto"];

  const menuHandler = () => {
    setInteriorMenu(!interiorMenu);
  };

  return (
    <>
      <Header></Header>
      {interiorMenu ? <NavBar menuHandler={menuHandler}></NavBar> : <></>}
      <BtnMenu menuHandler={menuHandler}>{interiorMenu ? "𝘅" : "⌂"}</BtnMenu>
      <Main></Main>
      <Acerca></Acerca>
      <Cursos></Cursos>
      <Contacto></Contacto>
      <Footer links={links}></Footer>
    </>
  );
}

export default App;
