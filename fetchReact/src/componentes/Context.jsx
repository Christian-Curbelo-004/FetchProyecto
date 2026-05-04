import {createContext} from 'react';

export const CountryContext = createContext();

export function CountryProvider({ children }) {
    const theme = 'light'; 

    const toggleTheme = () => {
        setTheme (prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
    };

    return (
        <CountryContext.Provider value = {{theme, toggleTheme}}>
            {children}
        </CountryContext.Provider>
    )
}