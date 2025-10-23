import React from "react";
import stylesForm from "../styles/FormContacto.module.css"
import stylesBtn from "../styles/Boton.module.css"

const FormContacto = () => {
    return (
        <div className={stylesForm.container}>
            <h2>Contacto</h2>
            <form className={stylesForm.form}>
                <div className={stylesForm.formGroup}>
                    <label htmlFor="nombre">Nombre:</label>
                    <input type="text" id="nombre" name="nombre" required />
                </div>
                <div className={stylesForm.formGroup}>
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" required />
                </div>
                <div className={stylesForm.formGroup}>
                    <label htmlFor="mensaje">Mensaje:</label>
                    <textarea id="mensaje" name="mensaje" rows="5" required></textarea>
                </div>
                <button className={stylesBtn.boton} type="submit">Enviar</button>
            </form>
        </div>
    );
}

export default FormContacto;
