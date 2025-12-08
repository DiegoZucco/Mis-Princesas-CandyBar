import formStyle from "../styles/FormProducto.module.css"
import React, { useState } from 'react';

const FormCrearCuenta = () => {
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert('Las contraseñas no coinciden.');
      return;
    }
    // Aquí iría la lógica para enviar los datos al servidor
    console.log('Cuenta a crear:', { nombre, email, password });
    alert('¡Cuenta creada con éxito (simulado)!');
    // Resetear formulario
    setNombre('');
    setEmail('');
    setPassword('');
    setConfirmPassword('');
  };

  return (
    <div className={formStyle.cuentasContainer}>
      
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="nombre">Nombre:</label>
          <input
            type="text"
            id="nombre"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            required
          />
        </div>
        <div >
          <label className={formStyle.formLabel} htmlFor="email">Email:</label>
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
        <div className="form-group">
          <label htmlFor="confirmPassword">Confirmar Contraseña:</label>
          <input
            type="password"
            id="confirmPassword"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Crear Cuenta</button>
      </form>
    </div>
  );
};

export default FormCrearCuenta;
