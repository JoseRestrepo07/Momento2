import './Services.css';

function Services() {
  const autos = [
    {
      nombre: 'Mazda CX-5 2022',
      descripcion: 'SUV automática, motor 2.5L, 15.000 km',
    },
    {
      nombre: 'Renault Duster 2021',
      descripcion: 'SUV 4x4, motor 1.6L, excelente estado',
    },
    {
      nombre: 'Nissan Versa 2020',
      descripcion: 'Sedán económico, motor 1.6L, 30.000 km',
    },
    {
      nombre: 'Ford Ranger 2023',
      descripcion: 'Pickup 4x4, motor 3.2L, diésel, nuevo',
    },
    {
      nombre: 'Hyundai Tucson 2022',
      descripcion: 'SUV automática, diésel, 10.000 km',
    },
  ];

  return (
    <div className="services-page">
      <h1>Vehículos Disponibles</h1>
      <div className="vehicle-list">
        {autos.map((auto, index) => (
          <div className="vehicle-card" key={index}>
            <h3>{auto.nombre}</h3>
            <p>{auto.descripcion}</p>
            <button>Solicitar</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Services;