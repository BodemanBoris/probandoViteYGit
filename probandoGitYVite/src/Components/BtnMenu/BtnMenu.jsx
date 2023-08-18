/* eslint-disable react/prop-types */
import "./BtnMenu.css";
const BtnMenu = (props) => {
  const { menuHandler } = props;

  return (
    <div onClick={menuHandler} className="btn__menu">
      <span className="icon__position">{props.children}</span>
    </div>
  );
};

export default BtnMenu;
