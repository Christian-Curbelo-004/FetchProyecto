import React from "react";
import {useState, useEffect} from 'react'
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import './CountriesDetails.css';
import {Context} from './Context.jsx'

 // problema con api fixeado
function countryCodeToFlag(countryCode) {
    const codePoints = countryCode
        .toUpperCase()
        .split('')
        .map(char => 127397 + char.charCodeAt(0));
    return String.fromCodePoint(...codePoints);
}

function CountryTheme() {
    const { theme, toggleTheme } = React.useContext(Context);
    return (
        <div className="ButtonTheme">
            <button onClick={theme === 'light' ? toggleTheme : null}>
                {theme === 'light' ? 'Cambiar a tema oscuro' : 'Cambiar a tema claro'}
            </button>
        </div>
    );
}

export function CountriesDetails() {
    const [countries, setCountries] = useState(null);
    const { cca2 } = useParams();
    const api = `https://restcountries.com/v3.1/alpha/${cca2}`;
    useEffect(() => {
        fetch(api)
            .then(res => res.json())
            .then(data => setCountries(data))
            .catch(error => console.error('Error fetching data:', error));
    }, [cca2]);
    if (!countries) {
        return <div>Loading...</div>;
    }
    return(
        <div className="country-detail">
            <h1>{countryCodeToFlag(countries[0]?.cca2)} {countries[0]?.name?.common}</h1>
            
            <p className="cca2">Codigo : {countries[0]?.cca2}</p>
            <p className="capital">Capital: {countries[0]?.capital}</p>
            <p className="population">Poblacion: {countries[0]?.population}</p>

            <div className="country-information">
                
                <h1>Informacion adicional</h1>
                <p className="information-box">
                    
                    Es un pais ubicado en {countries[0]?.region} y su subregion es {countries[0]?.subregion}. 
                    El idioma oficial es {Object.values(countries[0]?.languages || {}).join(', ')}. 
                    La moneda utilizada es {Object.values(countries[0]?.currencies || {}).map(currency => currency.name).join(', ')}. 
                    El pais tiene una superficie de {countries[0]?.area} km² y su zona horaria es {countries[0]?.timezones?.[0]}. 
                    El pais se encuentra en el continente  {countries[0]?.continents?.[0]}.
                    Las costumbres y tradiciones de {countries[0]?.name?.common} son muy ricas y variadas, reflejando la diversidad cultural del pais.
                </p>
                
                <div className="buttons-container">
                    <Link to="/countries">Volver a la lista de paises</Link>
                    <Link className="country-link" href to={countries[0]?.maps?.googleMaps} target="_blank" rel="noopener noreferrer">Ver en Google Maps</Link>
                </div>
                
            </div>
        </div>

    )
}

