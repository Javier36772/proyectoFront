import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import './styles/Login.css';

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      alert("Por favor, complete todos los campos.");
      return;
    }

    const adminEmail = "pp@gmail.com";
    const adminPassword = "1234";



    try {
      const response = await fetch('http://34.232.253.16:3000/Usuarios/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ Email: email, Password: password })
      });

      if (!response.ok) {
        const errorMessage = await response.text();
        throw new Error(errorMessage);
      }

      const data = await response.json();
      if (data.Usuario) {
        console.log(data);
        alert("Inicio de sesión exitoso!");
        navigate("/checkout");
      }
      if (email === adminEmail && password === adminPassword)  {
        console.log(data);
        alert("Inicio de sesión exitoso!");
        navigate("/administrador");
      }
    } catch (error) {
      alert("Error al iniciar sesión: " + error.message);
    }
  };

  const handleRegisterClick = () => {
    navigate("/register");
  };

  return (
    <div className="login-wrapper">
      <div className="login-box">
        <h2>Login</h2>
        <form onSubmit={handleLogin}>
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
          <div className="remember-forgot">
            <label>
              <input type="checkbox" /> Remember me
            </label>
            <a href="#">Forgot Password?</a>
          </div>
          <button type="submit" className="btn">
            Login
          </button>
          <div className="login-register">
            <p>
              Don't have an account?{" "}
              <a href="#" className="register-link" onClick={handleRegisterClick}>
                Register
              </a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
