import React from 'react'
import Productos from '../components/Productos.jsx';
import Carrito from '../components/Carrito.jsx';

const ProductosPag = ({agregarAlCarrito, carrito, vaciarCarrito}) => {
  return (
    <div>
        <Carrito carrito={carrito} vaciarCarrito={vaciarCarrito} /> 
        <h2>Todos los Productos</h2>
        <Productos agregarAlCarrito={agregarAlCarrito} />
    </div>
  )
}

export default ProductosPag
