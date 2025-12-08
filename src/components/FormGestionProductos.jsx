import React, { useState, useEffect } from 'react';
import FormProducto from './FormProducto'; // Nuestro formulario reutilizable
import styles from '../styles/GestionProductos.module.css';

const GestionProductos = ({ modo }) => {
    const [productos, setProductos] = useState([]);
    const [productoSeleccionado, setProductoSeleccionado] = useState(null);
    const [cargando, setCargando] = useState(true);

    const fetchProductos = async () => {
        setCargando(true);
        try {
            const response = await fetch("https://692f7c1e778bbf9e006d9738.mockapi.io/datos/productos");
            const data = await response.json();
            setProductos(data);
        } catch (error) {
            console.error("Error al obtener los productos:", error);
        } finally {
            setCargando(false);
        }
    };

    useEffect(() => {
        fetchProductos();
    }, []);

    const handleBorrar = async (id) => {
        if (window.confirm("¿Estás seguro de que quieres borrar este producto?")) {
            try {
                const response = await fetch(`https://692f7c1e778bbf9e006d9738.mockapi.io/datos/productos/${id}`, {
                    method: 'DELETE',
                });
                if (response.ok) {
                    alert("Producto borrado exitosamente.");
                    // Actualizamos la lista de productos sin hacer otro fetch
                    setProductos(productos.filter(p => p.id !== id));
                } else {
                    alert("Error al borrar el producto.");
                }
            } catch (error) {
                console.error("Error al borrar el producto:", error);
            }
        }
    };

    // Cuando el formulario de edición se envía con éxito, volvemos a la lista
    const handleEdicionExitosa = () => {
        setProductoSeleccionado(null); // Oculta el formulario
        fetchProductos(); // Recarga la lista para ver los cambios
    };

    if (cargando) return <p>Cargando productos...</p>;

    // Si estamos en modo "editar" y hay un producto seleccionado, mostramos el formulario
    if (modo === 'editar' && productoSeleccionado) {
        return (
            <div>
                <button onClick={() => setProductoSeleccionado(null)} className={styles.volverBtn}>
                    &larr; Volver a la lista
                </button>
                <FormProducto 
                    modo="editar" 
                    productoAEditar={productoSeleccionado}
                    onFormSubmit={handleEdicionExitosa}
                />
            </div>
        );
    }

    // Si no, mostramos la lista de productos
    return (
        <div>
            <h3 className={styles.subtitulo}>
                {modo === 'editar' ? 'Selecciona un producto para editar' : 'Selecciona un producto para borrar'}
            </h3>
            <ul className={styles.listaProductos}>
                {productos.map(producto => (
                    <li key={producto.id} className={styles.itemProducto}>
                        <img src={producto.imagen} alt={producto.nombre} />
                        <span>{producto.nombre}</span>
                        <div className={styles.acciones}>
                            {modo === 'editar' && (
                                <button onClick={() => setProductoSeleccionado(producto)} className={styles.editarBtn}>
                                    Editar
                                </button>
                            )}
                            {modo === 'borrar' && (
                                <button onClick={() => handleBorrar(producto.id)} className={styles.borrarBtn}>
                                    Borrar
                                </button>
                            )}
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default GestionProductos;
