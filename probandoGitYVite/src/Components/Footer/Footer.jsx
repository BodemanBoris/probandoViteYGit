import {
  AiFillLinkedin,
  AiFillInstagram,
  AiFillFacebook,
} from "react-icons/ai";
import "./footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="social__icons">
        <a href="">
          <AiFillLinkedin className="icon__item"></AiFillLinkedin>
        </a>
        <a href="">
          <AiFillInstagram className="icon__item"></AiFillInstagram>
        </a>
        <a href="https://ar.linkedin.com/in/faby-rose-232074280">
          <AiFillFacebook className="icon__item"></AiFillFacebook>
        </a>
      </div>
      <div className="links__container"></div>
    </footer>
  );
};

export default Footer;
