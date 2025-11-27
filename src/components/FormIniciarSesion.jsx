import React, { useState, useContext } from 'react';
import { UserContext } from '../context/UserContext.jsx';
import{ useNavigate } from 'react-router-dom';

const FormIniciarSesion = () => {
  const {login} = useContext(UserContext);
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Login attempt with:', { email, password });
    // Aquí puedes añadir la lógica de autenticación
    alert(`Intentando iniciar sesión con ${email}`);
    login();
    navigate("/");
  };

  return (
    <div className="login-container">
      
      <form onSubmit={handleSubmit} className="login-form">
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Contraseña:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Entrar</button>
      </form>
    </div>
  );
};

export default FormIniciarSesion;
