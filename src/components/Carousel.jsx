import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/Carousel.module.css';
import { CarritoContext } from '../context/CarritoContext.jsx';

const Carousel = () => {
    const [productosEnOferta, setProductosEnOferta] = useState([]);
    const { manejarAgregarCarrito } = useContext(CarritoContext);
    const [indiceActual, setIndiceActual] = useState(0);
    const [cargando, setCargando] = useState(true);
    const [error, setError] = useState(null);
    const URL = "https://692f7c1e778bbf9e006d9738.mockapi.io/productos";

    useEffect(() => {
        fetch(URL)
            .then(response => {
                if (!response.ok) {
                    throw new Error('No se pudo obtener la lista de productos.');
                }
                return response.json();
            })
            .then(data => {
                // Tomamos los primeros 4 productos como si estuvieran en oferta.
                const ofertas = data.slice(0, 4);
                setProductosEnOferta(ofertas);
            })
            .catch(error => {
                setError(error.message);
            })
            .finally(() => setCargando(false));
    }, []); // El array vacío asegura que el fetch se ejecute solo una vez

    const irAnterior = () => {
        const esPrimerSlide = indiceActual === 0;
        const nuevoIndice = esPrimerSlide ? productosEnOferta.length - 1 : indiceActual - 1;
        setIndiceActual(nuevoIndice);
    };

    const irSiguiente = () => {
        const esUltimoSlide = indiceActual === productosEnOferta.length - 1;
        const nuevoIndice = esUltimoSlide ? 0 : indiceActual + 1;
        setIndiceActual(nuevoIndice);
    };

    if (cargando) {
        return <p>Cargando ofertas...</p>;
    }

    if (error) {
        return <p>Error: {error}</p>;
    }

    if (productosEnOferta.length === 0) {
        return <p>No hay ofertas disponibles en este momento.</p>;
    }

    const productoActual = productosEnOferta[indiceActual];

    return (
        <section className={styles.carouselContainer}>
            <h2>Productos en Oferta</h2>
            <div className={styles.carousel}>
                <button onClick={irAnterior} className={`${styles.arrow} ${styles.leftArrow}`}>&#10094;</button>
                <div className={styles.slide}>
                    <div className={styles.imageContainer}>
                        <img src={productoActual.imagen} alt={productoActual.nombre} className={styles.slideImage} />
                    </div>
                    <div className={styles.slideContent}>
                        <h3>{productoActual.nombre}</h3>
                        <p className={styles.description}>{productoActual.descripcion}</p>
                        <p className={styles.price}>${productoActual.precio}</p>
                    </div>
                    <div className={styles.cardActions}>
                        <button onClick={() => manejarAgregarCarrito(productoActual)} className={styles.primaryButton}>
                            Agregar al carrito
                        </button>
                        <Link to={`/productos/${productoActual.id}`} className={styles.secondaryButton}>
                            Ver Detalles
                        </Link>
                    </div>
                </div>
                <button onClick={irSiguiente} className={`${styles.arrow} ${styles.rightArrow}`}>&#10095;</button>
            </div>
        </section>
    );
};

export default Carousel;