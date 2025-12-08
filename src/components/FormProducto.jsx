import { useState, useEffect } from "react";
import formStyle from "../styles/FormProducto.module.css";

const FormProducto =({ modo, productoAEditar, onFormSubmit })=>{
    const [nombre, setNombre] = useState("");
    const [descripcion, setDescripcion] = useState("");
    const [precio, setPrecio] = useState("");
    const [categoria, setCategoria] = useState("");
    const [imagen, setImagen] = useState("");

    // useEffect para pre-rellenar el formulario si estamos en modo "editar"
    useEffect(() => {
        if (modo === 'editar' && productoAEditar) {
            setNombre(productoAEditar.nombre);
            setDescripcion(productoAEditar.descripcion);
            setPrecio(productoAEditar.precio);
            setCategoria(productoAEditar.categoria);
            setImagen(productoAEditar.imagen);
        }
    }, [modo, productoAEditar]);

    const handleSubmit = async (e)=>{
    e.preventDefault();
    const nuevoProducto = {
        nombre,
        descripcion,
        precio,
        categoria,
        imagen
    };

    const esModoCrear = modo === 'crear';
    const url = esModoCrear 
        ? "https://692f7c1e778bbf9e006d9738.mockapi.io/datos/productos"
        : `https://692f7c1e778bbf9e006d9738.mockapi.io/datos/productos/${productoAEditar.id}`;
    
    const method = esModoCrear ? 'POST' : 'PUT';

    try{
        const response = await fetch(url, {
            method: method,
            headers:{
                "Content-Type": "application/json"
            },
            body: JSON.stringify(nuevoProducto)
        });
        if(response.ok){
            alert(`¡Producto ${esModoCrear ? 'agregado' : 'actualizado'} exitosamente!`);
            // Limpiamos el formulario solo si es modo crear
            if (esModoCrear) {
                setNombre("");
                setDescripcion("");
                setPrecio("");
                setCategoria("");
                setImagen("");
            }
            // Si se proporcionó una función de callback, la llamamos
            if (onFormSubmit) {
                onFormSubmit();
            }
        } else{
            alert(`Error al ${esModoCrear ? 'agregar' : 'actualizar'} el producto.`);
        }   
    } catch(error){
        console.error(`Error al ${esModoCrear ? 'agregar' : 'actualizar'} el producto:`, error);
        alert(`Error al ${esModoCrear ? 'agregar' : 'actualizar'} el producto.`);
    }
    };
    return(
        <form className={formStyle.formProducto} onSubmit={handleSubmit}>
            <h2 className={formStyle.tituloForm}>{modo === 'crear' ? 'Agregar Nuevo Producto' : 'Editar Producto'}</h2>
            <label className={formStyle.formLabel} htmlFor="nombre">Nombre:</label>
            <input  className={formStyle.formInput} type="text" placeholder="Nombre" value={nombre} onChange={(e)=> setNombre (e.target.value)} required/>
            <label className={formStyle.formLabel} htmlFor="descripcion">Descripcion:</label>
            <input className={formStyle.formInput} type="text" placeholder="Descripcion" value={descripcion} onChange={(e)=> setDescripcion (e.target.value)} required/>
            <label className={formStyle.formLabel} htmlFor="precio">Precio:</label>
            <input className={formStyle.formInput} type="number" placeholder="Precio" value={precio} onChange={(e)=> setPrecio (e.target.value)} required/>
            <label className={formStyle.formLabel} htmlFor="categoria">Categoria:</label>
            <input className={formStyle.formInput} type="text" placeholder="Categoria" value={categoria} onChange={(e)=> setCategoria (e.target.value)} required/>
            <label className={formStyle.formLabel} htmlFor="imagen">Imagen:</label>
            <input className={formStyle.formInput} type="text" placeholder="Imagen URL" value={imagen} onChange={(e)=> setImagen (e.target.value)} required/>
            <button type="submit">{modo === 'crear' ? 'Agregar Producto' : 'Guardar Cambios'}</button>

        </form>);
}

export default FormProducto;