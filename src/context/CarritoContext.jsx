import React from "react";
import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "./UserContext.jsx";
import { useContext } from "react";




export const CarritoContext = createContext();

export const CarritoProvider = ({ children }) => {
   const { isAuthenticated } = useContext(UserContext);
    const navigate = useNavigate();

const manejarAgregarAlCarrito = (data) => {
    if (!isAuthenticated) {
                alert("Por favor, inicie sesión para agregar productos al carrito.");
return navigate("/IniciarSesionPage");
    }
    agregarAlCarrito(data);
 
};

    const [carrito, setCarrito] = useState([]);

  const agregarAlCarrito = (data) => {
    setCarrito([...carrito, data]);
  };

  const vaciarCarrito = () => {
    setCarrito(carrito.slice(0, carrito.length - 1));
  };
    return (
        <CarritoContext.Provider value={{carrito,manejarAgregarAlCarrito , vaciarCarrito,}}>
            {children}
        </CarritoContext.Provider>
    )
}