
import stylesNav from "../styles/Nav.module.css"
import React from "react";
import { Link } from "react-router-dom";

function Nav() {
    return (
        <nav className={stylesNav.navbar}>
            <img className={stylesNav.logo} src="src/assets/imagenes/logo_Mis_Princesas.png" alt="logo" />
            <ul className={stylesNav.navbarUl} >
                <Link to= "/" >Inicio</Link>
                <Link to= "/Productos">Productos</Link>
                <Link to= "/contacto" >Contacto</Link>
                <Link to= "/sobre-nosotros">Sobre Nosotros</Link>

            </ul>

        </nav>
    );
}
export default Nav;