import React from "react";
import headerStyles from "../styles/Header.module.css"
import carritoCompras from "../assets/imagenes/carrito-de-compras.png"
import FormBusqueda from "./FormBusqueda.jsx";
import Nav from "./Nav.jsx";
import { Link } from "react-router-dom";
import { CarritoContext } from "../context/CarritoContext.jsx";
import { useContext } from "react";
import { UserContext } from "../context/UserContext.jsx";



function Header() {
  const { carrito } = useContext(CarritoContext);
  const { isAuthenticated, logout } = useContext(UserContext);

  return (
    <header >
      <div className={headerStyles.headerH4}><h4>Realiza tus pedidos y coordina la entrega, con 48hs de anticipacion</h4></div>
      <div className={headerStyles.header}>
        <FormBusqueda />

        <h1>Mis Princesas CandyBar</h1>
        <div className={headerStyles.loginSingInCarrito}>
          {isAuthenticated ? (
            <div className={headerStyles.bienvenidoLogout}>

              <span>Bienvenido!</span>

              <button onClick={logout}>Cerrar Sesión</button>
            </div>
          ) : (
            <div>
              <Link to={"/IniciarSesionPage"}>Iniciar Sesion</Link>

              <Link to={"/CrearCuentaPage"}>Crear Cuenta</Link>
            </div>
          )}
        </div>
        <div className={headerStyles.carrito}>
          <Link to="/carrito"><img className={headerStyles.carritoCompras} src={carritoCompras} alt="carritoCompras" /><span>{carrito.length}</span></Link>
          </div>

      </div>
      <Nav />

    </header>
  );
}

export default Header;