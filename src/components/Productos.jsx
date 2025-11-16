import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import productStyle from "../styles/Productos.module.css";

const Productos = ({ agregarAlCarrito, limite }) => {
    const [productos, setProductos] = useState([]);
    const [cargando, setCargando] = useState(true);
    const [error, setError] = useState(null);
    const URL = "https://fakestoreapi.com/products/";

    useEffect(() => {
        fetch(URL)
            .then(response => response.json())
            .then(data => {
                setProductos(data);
            })
            .catch(error => {
                setError(error);
            })
            .finally(() => setCargando(false));
    }, []);

    if (cargando) {
        return <p>Estamos cargando sus productos...</p>;
    }

    if (error) {
        return <p>Error al cargar productos: {error.message}</p>;
    }

    const mostrarProductos = limite ? productos.slice(0, limite) : productos;

    return (
        <section className={productStyle.productSection}>
            <ul className={productStyle.productList}>
                {mostrarProductos.map(data => (
                    <li className={productStyle.productCard} key={data.id}>
                        
                        {/* Contenedor de la Imagen */}
                        <div className={productStyle.imageContainer}>
                            <img src={data.image} alt={data.title} />
                        </div>

                        {/* Contenido de la Tarjeta */}
                        <div className={productStyle.cardContent}>
                            <h3 className={productStyle.productTitle}>{data.title}</h3>
                            <p className={productStyle.productPrice}>${data.price}</p>
                        </div>

                        {/* Acciones de la Tarjeta */}
                        <div className={productStyle.cardActions}>
                            <button 
                                className={productStyle.primaryButton}
                                onClick={() => agregarAlCarrito(data)}
                            >
                                Agregar al carrito
                            </button>
                            <Link 
                                to={`/productos/${data.id}`}
                                className={productStyle.secondaryButton}
                            >
                                Ver detalles
                            </Link>
                        </div>
                    </li>
                ))}
            </ul>
        </section>
    );
}

export default Productos;
