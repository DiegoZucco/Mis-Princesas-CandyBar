
import { useState } from "react";
import stylesBtn from "../styles/Boton.module.css"

const Boton = () => {
    const [contador, setContador] = useState(0);
 return (
    <div>
    <button className={stylesBtn.boton} onClick={() => setContador(contador + 1)}>
      ClickMe
    </button>
    Contador: {contador}

    <button className={stylesBtn.boton}
     onClick={() => setContador(contador - contador)}>
     Resetear </button>

     </div>
 );
};

  export default Boton;
    