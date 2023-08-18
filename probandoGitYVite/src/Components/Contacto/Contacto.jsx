import "./Contacto.css";

const Contacto = () => {
  return (
    <section id="contacto">
      <h3 className="contacto__title">Contactame</h3>
      <small className="form__coment">
        Los campos marcados con (*) son obligatorios
      </small>
      <form action="" className="contact__form">
        <label className="inputlabel" htmlFor="nombre">
          Nombre completo*
        </label>
        <input
          className="input__style"
          id="nombre"
          type="text"
          placeholder="Ingrese su nombre completo"
          required
        />

        <label className="inputlabel" htmlFor="email">
          Email *
        </label>
        <input
          className="input__style"
          id="email"
          type="text"
          placeholder="Ingrese su nombre"
          required
        />

        <label className="inputlabel" htmlFor="telefono">
          Telefono
        </label>
        <input
          className="input__style"
          id="telefono"
          type="text"
          placeholder="Ingrese su numero telefonico"
        />

        <label className="inputlabel" htmlFor="textarea">
          Ingrese su comentario/pregunta *
        </label>
        <textarea
          className="text__area"
          name="mensaje"
          id="textarea"
          cols="30"
          rows="5"
          required
          placeholder="Contactenos"
        ></textarea>
        <button className="form__btn">Enviar</button>
      </form>
    </section>
  );
};

export default Contacto;
