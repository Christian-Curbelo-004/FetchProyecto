import './App.css'
import { CountriesDetails } from './componentes/CountriesDetails.jsx'
import { PonerDatos } from './componentes/PonerDatos.jsx'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import {CountryProvider} from './componentes/Context.jsx'


function App() {
  return (
    <BrowserRouter>
    <CountryProvider>
      <div>
        <h1>Lista de paises</h1>
      </div>
      <Routes>
        <Route path="/" element={<Navigate to="/countries" />} />
        <Route path="/countries" element={<PonerDatos />} />
        <Route path="/countries/:cca2" element={<CountriesDetails />} />

      </Routes>
    </CountryProvider>
    </BrowserRouter>
  )
}

export default App
