import React, { useState } from 'react';
import FormProducto from '../components/FormProducto';
// Crearemos este componente en el siguiente paso
import GestionProductos from '../components/FormGestionProductos'; 
import styles from '../styles/AdminPage.module.css';

const AdminPage = () => {
    const [solapaActiva, setSolapaActiva] = useState('crear');

    const renderizarContenido = () => {
        switch (solapaActiva) {
            case 'crear':
                // Pasamos el modo 'crear' al formulario
                return <FormProducto modo="crear" />;
            case 'editar':
                // El componente GestionProductos se encargará de la lógica de edición
                return <GestionProductos modo="editar" />;
            case 'borrar':
                 // Y también de la lógica de borrado
                return <GestionProductos modo="borrar" />;
            default:
                return <FormProducto modo="crear" />;
        }
    };

    return (
        <div className={styles.adminContainer}>
            <h1>Panel de Administración</h1>
            <nav className={styles.navSolapas}>
                <button
                    className={solapaActiva === 'crear' ? styles.active : ''}
                    onClick={() => setSolapaActiva('crear')}
                >
                    Crear Producto
                </button>
                <button
                    className={solapaActiva === 'editar' ? styles.active : ''}
                    onClick={() => setSolapaActiva('editar')}
                >
                    Editar Producto
                </button>
                <button
                    className={solapaActiva === 'borrar' ? styles.active : ''}
                    onClick={() => setSolapaActiva('borrar')}
                >
                    Borrar Producto
                </button>
            </nav>
            <div className={styles.contenidoSolapa}>
                {renderizarContenido()}
            </div>
        </div>
    );
};

export default AdminPage;
