import React from "react";
import productoStyles from "../styles/Productos.module.css"

const Carrito = ({ carrito, vaciarCarrito }) => {
    return (
        <div >
            <h2>Carrito de Compras</h2>
            {carrito.length === 0 ? (
                <p>El carrito está vacío</p>
            ) : (
                <div >
                    <ul className={productoStyles.productoCard}>
                        {carrito.map((data) => (
                            <li className={productoStyles.producto} key={data.id}>
                                <h3>{data.title}</h3>
                                <p> Precio: ${data.price}</p>
                                <img src={data.image} alt={data.title} width={"50px"} />
                                <button onClick={() => { vaciarCarrito(data) }} >Eliminar del carrito</button>
                                
                            </li>

                        ))}

                    </ul>
                </div>
            )}
        </div>
    );
}





export default Carrito;