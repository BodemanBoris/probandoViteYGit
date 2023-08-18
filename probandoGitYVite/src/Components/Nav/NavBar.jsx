/* eslint-disable react/prop-types */
import { AiOutlineWhatsApp } from "react-icons/ai";
import "./NavBar.css";
const NavBar = (props) => {
  const { menuHandler } = props;
  return (
    <nav className="nav__container">
      <div className="nav__title-container">
        <h2 className="nav__title">Faby Rose</h2>
      </div>
      <ul className="ul__container">
        <li className="li__item">
          <a onClick={menuHandler} className="link__item" href="#inicio">
            <p>Inicio</p>
            <img className="img__fabicon" src="./faviconfrontal.png" alt="" />
          </a>
        </li>
        <li className="li__item">
          <a onClick={menuHandler} className="link__item" href="#acerca">
            <p>Faby Rose</p>
            <img className="img__fabicon" src="./faviconfrontal.png" alt="" />
          </a>
        </li>
        <li className="li__item">
          <a onClick={menuHandler} className="link__item" href="#cursos">
            <p>Cursos</p>
            <img className="img__fabicon" src="./faviconfrontal.png" alt="" />
          </a>
        </li>
        <li className="li__item">
          <a onClick={menuHandler} className="link__item" href="#contacto">
            <p>Contacto</p>
            <img className="img__fabicon" src="./faviconfrontal.png" alt="" />
          </a>
        </li>
        <li className="li__item">
          <a
            onClick={menuHandler}
            className="link__item"
            target="blank"
            href="https://api.whatsapp.com/send?phone=5493487517719"
          >
            WhatsApp<AiOutlineWhatsApp className="wsp__btn"></AiOutlineWhatsApp>
          </a>
        </li>
      </ul>
      <div className="pantalla__negra"></div>
    </nav>
  );
};

export default NavBar;
