import "./Header.css";

const Header = () => {
  return (
    <header id="inicio">
      <div className="logo__container">
        <h1 className="header__title">Faby Rose</h1>
        <video
          autoPlay
          loop
          muted
          className="video__energia"
          src="./videoenergia.mov"
        ></video>
      </div>
    </header>
  );
};

export default Header;
