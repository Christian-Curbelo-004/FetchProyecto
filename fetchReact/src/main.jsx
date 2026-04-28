import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { PonerDatos } from './componentes/PonerDatos.jsx' 


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <PonerDatos />
  </StrictMode>,
)
