import React from 'react';
import { Navigate } from 'react-router-dom';



const RutaProtegida = ({ children })  => {
  const usuario = JSON.parse(localStorage.getItem("usuario"));
  
  if (!usuario.rol==="admin") {
    alert("Debes iniciar sesión para acceder al carrito");
    // Usamos el componente <Navigate> con mayúscula.
    return <Navigate to="/admin" />;
  } else {
    // Si está autenticado, renderiza los componentes hijos.
    return children;
  }
};

export default RutaProtegida;