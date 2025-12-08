import React, { useState, useContext } from 'react';
import { UserContext } from '../context/UserContext.jsx';
import{ useNavigate } from 'react-router-dom';
import formStyle from '../styles/FormProducto.module.css';
import productStyle from '../styles/Productos.module.css';


const FormIniciarSesion = () => {
  const {login} = useContext(UserContext);
  const navigate = useNavigate();
  const [nombre, setNombre] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Login attempt with:', { nombre, password });
    // Aquí puedes añadir la lógica de autenticación
    alert(`Intentando iniciar sesión con ${nombre}`);
    login(nombre, password);
    navigate("/");
  };

  return (
    <div className={formStyle.loginContainer}>
      
      <form onSubmit={handleSubmit} className={formStyle.formContainer}>
        <div >
          <label className={formStyle.formLabel} htmlFor="nombre">Nombre:</label>
          <input className={formStyle.formInput}
            type="nombre"
            id="nombre"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            required
          />
        </div>
        <div>
          <label className={formStyle.formLabel} htmlFor="password">Contraseña:</label>
          <input className={formStyle.formInput}
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button className={productStyle.primaryButton} type="submit">Entrar</button>
      </form>
    </div>
  );
};

export default FormIniciarSesion;
