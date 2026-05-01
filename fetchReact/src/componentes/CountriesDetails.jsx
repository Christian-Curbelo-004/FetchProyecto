import React from "react";
import {useState, useEffect} from 'react'
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

 // problema con api fixeado
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
        <div>
            <h1>{countries[0]?.name?.common}</h1>
            <p>{countries[0]?.cca2}</p>
            <p>{countries[0]?.capital}</p>
            <p>{countries[0]?.population}</p>
            <Link to="/countries">Back to list</Link>
        </div>
    )
}
