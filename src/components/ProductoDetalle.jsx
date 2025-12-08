import React from "react";
import {useEffect, useState, useContext} from "react";
import { useParams } from "react-router-dom";
import styles from "../styles/ProductoDetalle.module.css";
import { CarritoContext } from "../context/CarritoContext.jsx";

const ProductoDetalle=() => {
  const {manejarAgregarCarrito}= useContext(CarritoContext);
    const {id} = useParams();
  // 3. Definimos los estados para el producto, carga y error
 const [Productos, setProductos] = useState([null]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);

  // 4. Usamos useEffect para buscar los datos cuando el componente se monta o el ID cambia
    useEffect(() => {
        // Reiniciamos el estado en cada carga
        setCargando(true);
        setProductos(null);
        setError(null);


        const URL = `https://692f7c1e778bbf9e006d9738.mockapi.io/productos/${id}`;
      
        fetch(URL)
            .then(response => {
                if (!response.ok) {
                    throw new Error('No se pudo encontrar el producto.');
                }
                return response.json();
            })
            .then(data => {
                setProductos(data); // Guardamos el producto en el estado
            })
            .catch(err => {
                setError(err.message); // Guardamos el mensaje de error
            })
            .finally(() => {
                setCargando(false); // Dejamos de cargar, sea cual sea el resultado
            });

    }, [id]); // El efecto se volverá a ejecutar si el `id` cambia

    // 6. Mostramos mensajes de carga o error
    if (cargando) {
        return <p>"Cargando detalle del producto..."</p>;
    }

    if (error) {
        return <p>"Error al cargar el detalle del producto."</p>;
    }

    if (!Productos) {
        return <p>Producto no encontrado.</p>;
    }

    // 7. Renderizamos los detalles del producto
  return (
    <div className={styles.detalleContainer}>
      <div className={styles.imagenContainer}>
        <img className={styles.imagenProducto} src={Productos.imagen} alt={Productos.nombre} />
      </div>
      <div className={styles.infoContainer}>
        <span className={styles.categoriaProducto}>{Productos.categoria}</span>
        <h1 className={styles.nombreProducto}>{Productos.nombre}</h1>
        <p className={styles.descripcionProducto}>{Productos.descripcion}</p>
        <p className={styles.precioProducto}>${Productos.precio}</p>
        <button 
          className={styles.agregarBtn} 
          onClick={() => manejarAgregarCarrito(Productos)}
        >
          Agregar al carrito
        </button>
      </div>
    </div>
  );
}

export default ProductoDetalle;