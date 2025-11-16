import React from 'react';
import Header from './components/Header.jsx';
import styles from "./styles/index.module.css";
import Carrito from './components/Carrito.jsx';
import { useState } from 'react';
import FormContacto from './components/FormContacto.jsx';
import { Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext.jsx'; // 1. Importar el Provider
import Inicio from './Pages/Inicio.jsx';
import ProductosPag from './Pages/ProductosPag.jsx';
import Footer from './components/Footer.jsx';
import RutaProtegida from './components/RutaProtegida.jsx';
import CrearCuentaPage from './Pages/CrearCuentaPage.jsx';
import IniciarSesionPage from './Pages/IniciarSesionPage.jsx';
import ProductoIndividual from './Pages/ProductoIndividual.jsx';
import Carrito from './components/Carrito.jsx';

function App() {

const carritoInicial=() => {
    const carritoGuardado = localStorage.getItem('carrito');
    return carritoGuardado ? JSON.parse(carritoGuardado) : [];
  };
  const [carrito, setCarrito] = useState(carritoInicial);

  const agregarAlCarrito = (data) => {
    setCarrito([...carrito, data]);
  };
  const vaciarCarrito = () => {
    setCarrito(carrito.slice(0, carrito.length - 1));
  };
  // 2. La lógica del carrito ya no vive aquí
  const [isAuthenticated, setIsAuthenticated] = useState(false);


  return (
    <div className={styles.App}>
      <Header carrito={carrito} />
      <Routes>
        <Route path='/productos/:productosId' element={<ProductoIndividual agregarAlCarrito={agregarAlCarrito} /> }/>
        <Route path="/" element={<Inicio agregarAlCarrito={agregarAlCarrito} carrito={carrito} vaciarCarrito={vaciarCarrito} />} />
        <Route path="/productos" element={<ProductosPag agregarAlCarrito={agregarAlCarrito}
          carrito={carrito}
          vaciarCarrito={vaciarCarrito} />} />
        <Route path="/contacto" element={<FormContacto />} />
        <Route path="/IniciarSesionPage" element={<IniciarSesionPage />} />
        <Route path="/CrearCuentaPage" element={<CrearCuentaPage />} />
        <Route path="/carrito" element={<RutaProtegida isAuthenticated={isAuthenticated}><Carrito carrito={carrito} vaciarCarrito={vaciarCarrito}/></RutaProtegida>}>
        </Route>

      </Routes>
      <Footer />
    </div>
    
 );
}

export default App;