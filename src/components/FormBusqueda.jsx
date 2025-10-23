import React from "react"
import stylesBtn from "../styles/Boton.module.css"
const FormBusqueda= ()=>{

    return(
        <div>
          <form action="" method="get">
            <input type="search" name="buscador" id="buscador" placeholder="Buscar..." />
            <button className={stylesBtn.boton} type="submit">Buscar</button>
          </form>
        </div>);
}

export default FormBusqueda;