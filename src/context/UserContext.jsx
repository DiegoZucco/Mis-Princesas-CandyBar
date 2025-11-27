import React,{createContext, useState} from "react";


export const UserContext = createContext();


export const UserProvider = ({children}) => {
    
    const [isAuthenticated, setIsAuthenticated] = useState(() => {
        const usuarioAuth = localStorage.getItem("isAuthenticated");
        return usuarioAuth ? JSON.parse(usuarioAuth) : false;
    });

const login = () => {
    localStorage.setItem("isAuthenticated", true);
    setIsAuthenticated(true);
};

const logout = () => {
    localStorage.removeItem("isAuthenticated");
    setIsAuthenticated(false);
};

    return (
        <UserContext.Provider value={{ isAuthenticated, login, logout }}>
            {children}
            </UserContext.Provider>
    )
}

