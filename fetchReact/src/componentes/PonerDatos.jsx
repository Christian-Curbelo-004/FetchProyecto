import { createRoot } from 'react-dom/client'

import {useState, useEffect} from 'react'

const api = 'https://restcountries.com/v3.1/all?fields=name,cca3' // problema con api fixeado
export  function PonerDatos() {
    const [countries, setCountries] = useState([]);
    
    useEffect(() => {
        fetch(api)
            .then(res => res.json())
            .then(data => setCountries(data))
            .catch(error => console.error('Error fetching data:', error));
    }, []) 

    return (
        <div>
            <h1>Los paises son:</h1>
            {countries.map((country) => (
                <div key={country.cca3}>
                    <h2>{country.name.common}</h2>
                    </div>
            ))}
                        
        </div>
    )
}
