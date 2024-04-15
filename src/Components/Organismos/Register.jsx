import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import './styles/Register.css';

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [usuario, setUsuario] = useState(false);
  const [administrador, setAdministrador] = useState(false);
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();

    if (!email || !password || !username) {
      alert("Por favor, complete todos los campos.");
      return;
    }

    fetch('http://34.232.253.16:3000/Usuarios/usuarios', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ Email: email, Password: password, Username: username, Usuario: usuario, administrador: administrador }),
    })
      .then(response => response.json())
      .then(data => {
        console.log('Registro exitoso:', data);
        navigate("/"); // Redirigir a la página principal después del registro exitoso
      })
      .catch(error => {
        console.error('Error al registrar:', error);
        alert('Error al registrar.');
      });
  };      
  
  return (
    <div className="register-wrapper">
      <div className="register-box">
        <h2>Register</h2>
        <form onSubmit={handleRegister}>
          <label>Username</label>
          <div className="input-box">
            <input
              type="text"
              required
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>

          <label>Email</label>
          <div className="input-box">
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <label>Password</label>
          <div className="input-box">
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <label>Usuario</label>
          <div className="input-box">
            <input
              type="checkbox"
              checked={usuario}
              onChange={(e) => setUsuario(e.target.checked)}
            />
          </div>

          <label>Administrador</label>
          <div className="input-box">
            <input
              type="checkbox"
              checked={administrador}
              onChange={(e) => setAdministrador(e.target.checked)}
            />
          </div>

          <button type="submit" className="btn">
            Register
          </button>
          <div className="login-register">
            <p>
              Already have an account?{" "}
              <a href="#" className="register-link" onClick={() => navigate("/login")}>
                Login
              </a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
