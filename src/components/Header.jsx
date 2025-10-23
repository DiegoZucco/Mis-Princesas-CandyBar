import React from "react";
import headerStyles from "../styles/Header.module.css"
import carritoCompras from "../assets/imagenes/carrito-de-compras.png"
import FormBusqueda from "./FormBusqueda.jsx";
import Nav from "./Nav.jsx";
import { Link } from "react-router-dom";



function Header({carrito}) {

  return (
    <header >
      <div className={headerStyles.headerH4}><h4>Realiza tus pedidos y coordina la entrega, con 48hs de anticipacion</h4></div>
      <div className={headerStyles.header}>
        <FormBusqueda />

        <h1>Mis Princesas CandyBar</h1>
        <div className={headerStyles.loginSingInCarrito}>
          <Link>Crear cuenta</Link>
          <Link href="#">Iniciar sesion</Link>
        </div>
        <div>
          <Link to="/carrito"><img className={headerStyles.carritoCompras} src={carritoCompras} alt="carritoCompras" /><span>{carrito.length}</span></Link>
        </div>

      </div>
      <Nav />
      
    </header>
  );
}

export default Header;