import CardCursos from "../CardCursos/CardCursos";
import "./Cursos.css";

const Cursos = () => {
  return (
    <section id="cursos" className="seccion__cursos">
      <h3 className="courses__title">Cursos</h3>
      <CardCursos></CardCursos>
      <CardCursos></CardCursos>
      <CardCursos></CardCursos>
    </section>
  );
};

export default Cursos;
