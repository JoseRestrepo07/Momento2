import './Contact.css';

function Contact() {
  return (
    <div className="contact-container">
      <h1>Contáctanos</h1>

      <div className="contact-content">
        <form className="contact-form">
          <input type="text" placeholder="Nombre completo" required />
          <input type="email" placeholder="Correo electrónico" required />
          <textarea placeholder="Mensaje" rows="5" required></textarea>
          <button type="submit">Enviar</button>
        </form>

        <div className="contact-info">
          <h3>Información de contacto</h3>
          <p><strong>Teléfono:</strong> +57 310 123 4567</p>
          <p><strong>WhatsApp:</strong> +57 310 765 4321</p>
          <p><strong>Dirección:</strong> Cra. 45 #12-34, Medellín, Colombia</p>
        </div>
      </div>
    </div>
  );
}

export default Contact;