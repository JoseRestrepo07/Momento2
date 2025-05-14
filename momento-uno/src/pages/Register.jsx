import { Link } from 'react-router-dom';
import './Register.css';

function Register() {
  return (
    <div className="container">
      <div className="register-box">
        <input type="text" placeholder="Nombre completo" />
        <input type="text" placeholder="Usuario" />
        <input type="email" placeholder="Correo electrónico" />
        <input type="password" placeholder="Contraseña" />
        <button>Registrarse</button>
        <Link to="/Login" className="link">¿Ya tienes cuenta? Inicia sesión</Link>
      </div>
    </div>
  );
}

export default Register;