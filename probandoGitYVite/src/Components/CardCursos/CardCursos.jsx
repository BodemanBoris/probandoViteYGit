import "./CardCursos.css";

const CardCursos = () => {
  return (
    <div className="card__container">
      <div className="first__container">
        <img
          className="imagen__curso"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxWYc_O1T5XiPmtEB7u-sqRrQm-RtfBHT07cCWQ2QCphtSy3cPv5RoZz3iMUOtw5FiASA&usqp=CAU"
          alt="Midudev"
        />
      </div>
      <div className="second__container">
        <h3 className="course__title">Curso de reiki a distancia</h3>
        <p className="curso__description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, eum
          tempore! Reiciendis amet ipsa quod natus! Non asperiores repudiandae,
          error mollitia pariatur reiciendis cumque perferendis aliquam
          voluptatem, sequi, temporibus repellat?
        </p>
      </div>
      <div className="third__container">
        <a className="btn__carrito" href="#">
          <span className="span__cart">🛒</span>
        </a>
        <a className="btn__carrito" href="#">
          Detalle
        </a>
      </div>
    </div>
  );
};

export default CardCursos;
