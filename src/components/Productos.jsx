import { useEffect, useState, useContext } from "react";
import { Link,} from "react-router-dom";
import productStyle from "../styles/Productos.module.css";
import { CarritoContext} from "../context/CarritoContext.jsx";
import { UserContext } from "../context/UserContext.jsx";
import { useNavigate } from "react-router-dom";


const Productos = ({limite }) => {
    const { manejarAgregarAlCarrito } = useContext(CarritoContext);
    const isAuthenticated = useContext(UserContext)
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
                            {isAuthenticated.isAuthenticated ? null : (<p className={productStyle.loginPrompt}>Inicia sesión para comprar</p>
                            )}
                            <button 
                               
                                className={productStyle.primaryButton}
                                onClick={() => manejarAgregarAlCarrito(data)
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
