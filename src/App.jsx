import React from 'react';
import Header from './components/Header.jsx';
import styles from "./styles/index.module.css";
import Carrito from './components/Carrito.jsx';
import FormContacto from './components/FormContacto.jsx';
import { Routes, Route } from 'react-router-dom';
import Inicio from './Pages/Inicio.jsx';
import ProductosPag from './Pages/ProductosPag.jsx';
import Footer from './components/Footer.jsx';
import RutaProtegida from './components/RutaProtegida.jsx';
import CrearCuentaPage from './Pages/CrearCuentaPage.jsx';
import IniciarSesionPage from './Pages/IniciarSesionPage.jsx';
import ProductoIndividual from './Pages/ProductoIndividual.jsx';

function App() {

  return (
    <div className={styles.App}>
      <Header />
      <Routes>
        <Route path='/productos/:productosId' element={<ProductoIndividual/> }/>
        <Route path="/" element={<Inicio/>} />
        <Route path="/productos" element={<ProductosPag />} />
        <Route path="/contacto" element={<FormContacto />} />
        <Route path="/IniciarSesionPage" element={<IniciarSesionPage />} />
        <Route path="/CrearCuentaPage" element={<CrearCuentaPage />} />
        <Route path="/carrito" element={<RutaProtegida> <Carrito/></RutaProtegida>}>
        </Route>

      </Routes>
      <Footer />
    </div>
    
 );
}

export default App;