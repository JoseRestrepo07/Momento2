import { Link } from 'react-router-dom';
import './Login.css';

function Login() {
  return (
    <div className="container">
      <div className="login-box">
        <input type="text" placeholder="Correo o Usuario" />
        <input type="password" placeholder="Contraseña" />
        <button>Iniciar sesión</button>
        <Link to="/Register" className="link">Crear cuenta</Link>
      </div>
    </div>
  );
}

export default Login;