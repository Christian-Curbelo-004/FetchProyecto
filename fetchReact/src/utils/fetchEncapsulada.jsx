  import React from "react";
import { useState, useEffect } from "react";

export function FetchEncapsulada({ resource, options }) {
  const [data, setData] = useState(undefined);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    fetch(resource, options).then((response) => {
      if (response.ok) {
        response.json().then((responseData) => {
          setData(responseData);
        });
      } else {
        setError(`${response.status} ${response.statusText}`);
      }
      setIsLoading(false);
    }).catch((error) => {
      setError(error.message);
      setIsLoading(false);
    });
    
  }, [resource, options]);
  return <div><p>{}</p></div>;
} 
  
  
  
  
  
  /*
  const [data, setData] = useState(undefined);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    fetch(resource, options).then((response) => {
      if (response.ok) {
        response.json().then((responseData) => {
          setData(responseData);
        });
      } else {
        setError(`${response.status} ${response.statusText}`);
      }
    });
    setIsLoading(false);
  }, [resource, options]);

  principales problemas con esta funcion:
  
  1) setLoding(falase) carga inmediatamente
  2) hay un problema con el fetch, no se esta manejando el error
  3) el fetch no se esta limpiando, lo que puede causar problemas de memoria


  Soluciones:
  1) SetLoading debe estar antes del });
  2) se debe agregar un catch para manejar el error 
*/ 
   



