import React from 'react'
import Productos from '../components/Productos.jsx';
import Carrito from '../components/Carrito.jsx';

const Inicio = ({carrito, agregarAlCarrito, vaciarCarrito}) => {
  return (
    <div>
      <Carrito carrito={carrito} vaciarCarrito={vaciarCarrito}/>
      <h2>Productos en oferta</h2>
        <Productos agregarAlCarrito={agregarAlCarrito} limite={4} />

    </div>
  )
}

export default Inicio
