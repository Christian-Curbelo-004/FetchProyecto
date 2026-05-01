import {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'

const api = 'https://restcountries.com/v3.1/all?fields=name,cca2' // problema con api fixeado
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
            {countries.map((country) => (
                <div key={country.cca2}>
                    <h2>{country.name.common}</h2>
                    <p>{country.cca2}</p>
                    <Link to={`/countries/${country.cca2}`}>View Details</Link>
                    
                </div>
            ))}
                        
        </div>
    )
}
