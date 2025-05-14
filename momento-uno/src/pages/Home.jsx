import './Home.css';

function Home() {
  return (
    <div className="home-container">
      <div className="banner">
        <h1>¡Bienvenido a AutoExpress!</h1>
      </div>

      <div className="description">
        <p>AutoExpress es tu concesionario de confianza. Ofrecemos los mejores vehículos nuevos y usados, con garantía, financiación y atención personalizada.</p>
      </div>

      <div className="services-section">
        <h2>Vehículos Destacados</h2>
        <div className="services-grid">
          <div className="service-card">
            <h3>Toyota Corolla 2022</h3>
            <p>Automático, gasolina, 25.000 km.</p>
            <button>Solicitar</button>
          </div>
          <div className="service-card">
            <h3>Kia Sportage 2021</h3>
            <p>4x4, diésel, 18.000 km.</p>
            <button>Solicitar</button>
          </div>
          <div className="service-card">
            <h3>Chevrolet Onix 2023</h3>
            <p>Manual, gasolina, nuevo.</p>
            <button>Solicitar</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;