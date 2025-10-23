import React from 'react'
import Carrito from '../components/Carrito.jsx';
import stylesProductoCar from "../styles/Productos.module.css"

const CarritoPag = ({carrito, vaciarCarrito}) => {
  return (
    <div>
        <Carrito carrito={carrito} vaciarCarrito={vaciarCarrito} />
    </div>
  )
}

export default CarritoPag
