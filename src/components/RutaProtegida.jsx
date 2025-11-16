import React from 'react';
import { Navigate } from 'react-router-dom';

const RutaProtegida = ({ children, isAuthenticated })  => {
    if (!isAuthenticated) {
    return <Navigate to="/IniciarSesionPage" />;
  }
  return children;
};

export default RutaProtegida;