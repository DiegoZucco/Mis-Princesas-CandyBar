import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { UserProvider } from './context/UserContext.jsx'
import { CarritoProvider } from './context/CarritoContext.jsx'
import App from './App.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <UserProvider>
        <CarritoProvider>
          <App />
        </CarritoProvider>
      </UserProvider>
    </BrowserRouter>
  </StrictMode>
)
