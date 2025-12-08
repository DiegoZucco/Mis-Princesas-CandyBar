import React,{createContext, useState} from "react";

const UsuariosFake = [
    {
        id: 1,
        nombre: "admin",
        email: "admin@admin.com",
        password: "1234",
        rol: "admin"
    },
    {
        id: 2,
        nombre: "maria",
        email: "maria@maria.com",
        password: "1234",
        rol: "user"
    }
]
    

export const UserContext = createContext();


export const UserProvider = ({children}) => {

    const [usuario, setUsuario] = useState(() => {
        const usuarioGuardado = localStorage.getItem("usuario");
        return usuarioGuardado ? JSON.parse(usuarioGuardado) : null;
    });

    const isAuthenticated = !!usuario;

    const login = (nombre, password) => {
        const usuarioEncontrado = UsuariosFake.find(
            (user) => user.nombre === nombre && user.password === password
        );
        if (usuarioEncontrado) {
            localStorage.setItem("usuario", JSON.stringify(usuarioEncontrado));
            setUsuario(usuarioEncontrado);
            return true;
        }
        return false;
    };

    const logout = () => {
        localStorage.removeItem("usuario");
        localStorage.removeItem("carrito");
        setUsuario(null);
    };

    return (
        <UserContext.Provider value={{ usuario, isAuthenticated, login, logout}}>
            {children}
            </UserContext.Provider>
    );

}
