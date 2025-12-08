import { createContext, useState, useEffect } from "react";
import { UserContext } from "./UserContext";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

export const CarritoContext = createContext();

export const CarritoProvider =({children})=>{
  const {usuario} = useContext(UserContext);

const [carrito, setCarrito] = useState(()=>{
  try{
    const carritoGuardado = localStorage.getItem("carrito");
    if(carritoGuardado){
      return JSON.parse(carritoGuardado);
    }else{
      return [];
    }
  }catch(error){
    console.error("Error al cargar el carrito desde localStorage:", error)
    return [];
  }
});

const navigate = useNavigate();

const manejarAgregarCarrito = (data) => {
  if (usuario) {
    agregarAlCarrito(data);
    alert("Producto agregado al carrito");
  } else {
    alert("Debes iniciar sesión para agregar productos al carrito");
    navigate("/IniciarSesionPage");
  }
}

useEffect(() => {
  if (!usuario) {
    setCarrito([]);
  }
}, [usuario]);

useEffect(() => {
localStorage.setItem("carrito", JSON.stringify(carrito));
}, [carrito]);

const agregarAlCarrito = (data) => {
  setCarrito([...carrito, data]);
};

const eliminarArticulo = () => {
  setCarrito(carrito.slice(0, carrito.length - 1));
};
const vaciarCarrito = () => {
  setCarrito(carrito([]));
};

return(
    <CarritoContext.Provider value={{carrito, manejarAgregarCarrito, agregarAlCarrito, vaciarCarrito, eliminarArticulo}}>
{children}
    </CarritoContext.Provider>


);
};

export default CarritoProvider;