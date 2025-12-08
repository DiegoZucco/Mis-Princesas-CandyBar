import React from 'react';
import FormIniciarSesion from '../components/FormIniciarSesion';
import formStyle from '../styles/FormProducto.module.css';

const IniciarSesionPage = () => {
    return (
        <div>
            <h1 className={formStyle.loginContainerH1}>Iniciar Sesion</h1>
           <FormIniciarSesion />
        </div>
    );
};

export default IniciarSesionPage;