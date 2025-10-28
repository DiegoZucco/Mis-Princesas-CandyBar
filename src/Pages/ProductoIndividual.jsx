import React from 'react'
import ProductoDetalle from '../components/ProductoDetalle.jsx'

const ProductoIndividual = ({agregarAlCarrito}) => {
  return (
    <div>
      <ProductoDetalle agregarAlCarrito={agregarAlCarrito}/>
    </div>
  )
}

export default ProductoIndividual;
