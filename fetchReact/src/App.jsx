import './App.css'
import { CountriesDetails } from './componentes/CountriesDetails.jsx'
import { PonerDatos } from './componentes/PonerDatos.jsx'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <div>
        <h1>Lista de paises</h1>
      </div>
      <Routes>
        <Route path="/" element={<Navigate to="/countries" />} />
        <Route path="/countries" element={<PonerDatos />} />
        <Route path="/countries/:cca2" element={<CountriesDetails />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
