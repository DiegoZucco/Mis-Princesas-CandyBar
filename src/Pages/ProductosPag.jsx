import React from 'react'
import Productos from '../components/Productos.jsx';
import Carrito from '../components/Carrito.jsx';
import { useContext } from 'react';
import { CarritoContext } from '../context/CarritoContext.jsx';




const ProductosPag = () => {
  const {manejarAgregarAlCarrito, vaciarCarrito,carrito} = useContext(CarritoContext);
  return (
    <div>
        <Carrito carrito={carrito} vaciarCarrito={vaciarCarrito} /> 
        <h2>Todos los Productos</h2>
        <Productos manejarAgregarAlCarrito={manejarAgregarAlCarrito} />
    </div>
  )
}

export default ProductosPag;
