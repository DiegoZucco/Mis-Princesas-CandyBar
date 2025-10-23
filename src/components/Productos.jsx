import React from "react";
import { useEffect, useState } from "react";
import productoStyles from "../styles/Productos.module.css"

const Productos = ({agregarAlCarrito, limite}) => {
  const [Productos, setProductos] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/")
      .then(response => response.json())
      .then(data => {
        setProductos(data);
        setCargando(false);
      })
      .catch(error => {
        setError(error);

      })
      .finally(() => setCargando(false));
  }, []);

  if (cargando)
    return <p>Estamos cargando sus productos.</p>

  if (error)
    return <p>{error}</p>

  const mostrarProductos = limite ? Productos.slice(0, limite) : Productos;

  return (
    <div>
      
      <div className={productoStyles.productoCard}>
        {mostrarProductos.map(data => (
          <div key={data.id} className={productoStyles.producto}>
            <h3>{data.title}</h3>
            <p> Precio: ${data.price}</p>
            <img src={data.image} alt={data.title} width={"50px"} />
          <button onClick={()=>{agregarAlCarrito(data)}} >Agregar al carrito</button>
          </div>
        ))}
      </div>

    </div>
  );
}

export default Productos;
