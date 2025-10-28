import React, {useEffect, useState} from "react";
import productoStyles from "../styles/Productos.module.css";
import { useParams } from "react-router-dom";

const ProductoDetalle=({agregarAlCarrito}) => {
    const {productosId}=useParams();

 const [Productos, setProductos] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${productosId}`)
      .then(response => response.json())
      .then(data => {
        setProductos(data);
        setCargando(false);
      })
      .catch(error => {
        setError(error);

      })
      .finally(() => setCargando(false));
  }, [productosId]);

  if (cargando)
    return <p>Estamos cargando sus productos.</p>

  if (error)
    return <p>{error}</p>

if (!Productos){
    return <p>Producto no encontrado</p>

    
}
  return (
    <div>

      <div className={productoStyles.productoCard}>
          <div className={productoStyles.producto}>
            <h3>{Productos.title}</h3>
            <p> Precio: ${Productos.price}</p>
            <img src={Productos.image} alt={Productos.title} width={"50px"} />
          <button onClick={()=>{agregarAlCarrito(Productos)}} >Agregar al carrito</button>
          </div>
      </div>

    </div>
  );
}

export default ProductoDetalle;