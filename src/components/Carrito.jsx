import styles from '../styles/Carrito.module.css'; // Usamos el CSS que ya creamos

// El componente solo recibe las props originales: carrito y vaciarCarrito
const Carrito = ({ carrito, vaciarCarrito }) => {

    // Mantenemos la lógica original para el carrito vacío
    if (carrito.length === 0) {
        return (
            <div className={styles.cartPageContainer}>
                <h2 className={styles.cartTitle}>Tu Carrito</h2>
                <p className={styles.emptyCartMessage}>No hay productos en el carrito.</p>
            </div>
        );
    }

    // Aplicamos los nuevos estilos a la estructura original
    return (
        <div className={styles.cartPageContainer}>
            <h2 className={styles.cartTitle}>Tu Carrito</h2>
            
            <ul className={styles.cartItemsList}>
                {carrito.map((data) => (
                    // Cada `li` ahora tiene la clase para el estilo de fila
                    <li key={data.id} className={styles.cartItem}>
                        
                        {/* Contenedor para la imagen */}
                        <div className={styles.itemImage}>
                            <img src={data.image} alt={data.title} />
                        </div>

                        {/* Contenedor para los detalles */}
                        <div className={styles.itemDetails}>
                            <h3 className={styles.itemTitle}>{data.title}</h3>
                            <p className={styles.itemPrice}>${data.price.toFixed(2)}</p>
                        </div>

                        {/* Contenedor para los botones originales */}
                        <div className={styles.itemActions}>
                            <button className={styles.checkoutButton} style={{fontSize: '0.9rem', padding: '8px 12px'}}>Comprar</button>
                            {/* Este botón llama a la función `vaciarCarrito` original */}
                            <button 
                                onClick={vaciarCarrito} 
                                className={styles.removeButton}
                            >
                                Eliminiar Item
                            </button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Carrito;





