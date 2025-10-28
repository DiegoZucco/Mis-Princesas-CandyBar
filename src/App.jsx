import React from 'react';
import Header from './components/Header.jsx';
import styles from "./styles/index.module.css";
import Carrito from './components/Carrito.jsx';
import { useState } from 'react';
import FormContacto from './components/FormContacto.jsx';
import {Routes, Route } from 'react-router-dom';
import Inicio from './Pages/Inicio.jsx';
import ProductosPag from './Pages/ProductosPag.jsx';
import ProductoIndividual from './Pages/ProductoIndividual.jsx';



function App() {
  const [carrito, setCarrito] = useState([]);
  const agregarAlCarrito = (data) => {
    setCarrito([...carrito, data]);
  };
  const vaciarCarrito = () => {
    setCarrito(carrito.slice(0, carrito.length - 1));   
  };



  return (
    <div className={styles.App}>
      <Header carrito={carrito} />
      <Routes>
        <Route path='/productos/:productosId'element={<ProductoIndividual agregarAlCarrito={agregarAlCarrito}/>}/>
        <Route path="/carrito" element={<Carrito carrito={carrito} vaciarCarrito={vaciarCarrito} />} />
        <Route path="/" element={<Inicio agregarAlCarrito={agregarAlCarrito} carrito={carrito} vaciarCarrito={vaciarCarrito} />} />
        <Route path="/productos" element={<ProductosPag agregarAlCarrito={agregarAlCarrito} 
        carrito={carrito}
        vaciarCarrito={vaciarCarrito} />} />
        <Route path="/contacto" element={<FormContacto />} />
      </Routes>
    </div>
  );
}

export default App;