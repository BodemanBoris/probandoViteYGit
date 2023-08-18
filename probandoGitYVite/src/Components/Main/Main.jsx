import "./Main.css";

const Main = () => {
  return (
    <main>
      <section className="main__section">
        <h2 className="main__title">Maestra REIKI</h2>
        <div>
          <img className="fabi__foto" src="./fabirose.png" alt="" />
          <p className="fabi__texto-inicial">
            <span className="">
              ¡Bienvenidas a nuestro espacio dedicado a la{" "}
              <span className="fabi__texto-resaltar">
                sanación y el crecimiento interior
              </span>
              !
            </span>
          </p>
          <p className="fabi__texto">
            Como maestra de Reiki comprometida, mi objetivo es acompañarte en un
            viaje de autoexploración, equilibrio energético y transformación
            personal a través de la ancestral práctica de Reiki.
            <br />
            <br />
            Aquí, encontrarás una variedad de cursos y talleres especialmente
            diseñados para ayudarte a despertar tu conexión con la energía
            universal, aprender las técnicas curativas de Reiki y descubrir el
            sanador que llevas dentro. Te invito a formar parte de nuestra
            comunidad, donde juntos exploraremos las profundidades de esta
            hermosa disciplina y creceremos en sabiduría y bienestar.
            <br />
            <br />
            ¡Comencemos juntos este camino hacia el autodescubrimiento y la
            sanación interior!
          </p>
        </div>
      </section>
    </main>
  );
};

export default Main;
