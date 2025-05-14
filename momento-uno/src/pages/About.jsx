import './About.css';

function About() {
  return (
    <div className="about-container">
      <h1>Acerca de AutoExpress</h1>

      <section className="about-section">
        <h2>Nuestra Historia</h2>
        <p>
          AutoExpress nació en 2015 con la misión de brindar soluciones de movilidad accesibles y confiables. Desde nuestros inicios hemos ofrecido vehículos de alta calidad con atención personalizada.
        </p>
      </section>

      <section className="about-section">
        <h2>Nuestra Filosofía</h2>
        <p>
          Creemos en la honestidad, el compromiso con nuestros clientes y la pasión por los vehículos. Cada auto que vendemos representa nuestra dedicación a la excelencia.
        </p>
      </section>

      <section className="about-section">
        <h2>Testimonios</h2>
        <div className="testimonial">
          <p>"Compré mi primer carro en AutoExpress y fue una experiencia increíble. ¡Totalmente recomendado!"</p>
          <span>- Carolina R.</span>
        </div>
        <div className="testimonial">
          <p>"Excelente servicio al cliente, me ayudaron a financiar mi vehículo sin complicaciones."</p>
          <span>- Juan M.</span>
        </div>
      </section>
    </div>
  );
}

export default About;