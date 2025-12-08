import { useEffect, useState, useContext } from "react";
import { Link,} from "react-router-dom";
import productStyle from "../styles/Productos.module.css";
import { CarritoContext} from "../context/CarritoContext.jsx";
 

const Productos = ({limite }) => {
    const { manejarAgregarCarrito } = useContext(CarritoContext);
    const [productos, setProductos] = useState([]);
    const [cargando, setCargando] = useState(true);
    const [error, setError] = useState(null);
    const URL = "https://692f7c1e778bbf9e006d9738.mockapi.io/productos";

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
                            <img src={data.imagen} alt={data.nombre} />
                        </div>

                        {/* Contenido de la Tarjeta */}
                        <div className={productStyle.cardContent}>
                            <h3 className={productStyle.productTitle}>{data.nombre}</h3>
                            <p className={productStyle.descripcion}>{data.descripcion}</p>
                            <p className={productStyle.productPrice}> precio ${data.precio}</p>
                            <p className={productStyle.productCategory}>{data.categoria}</p>
                        </div>

                        {/* Acciones de la Tarjeta */}
                        <div className={productStyle.cardActions}>
        
                            <button 
                               
                                className={productStyle.primaryButton}
                                onClick={() => manejarAgregarCarrito(data)
                                    
                                }
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
