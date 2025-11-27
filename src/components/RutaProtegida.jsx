import React from 'react';
import { Navigate } from 'react-router-dom';


const RutaProtegida = ({ children })  => {
  const isAuthenticated = localStorage.getItem("isAuthenticated") === "true";
  
  if (!isAuthenticated) {
    // Si no está autenticado, redirige a la página de inicio de sesión.
    // Usamos el componente <Navigate> con mayúscula.
    return <Navigate to="/IniciarSesionPage" />;
  } else {
    // Si está autenticado, renderiza los componentes hijos.
    return children;
  }
};

export default RutaProtegida;