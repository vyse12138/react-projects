import React, { useState, useContext, useEffect } from 'react'
import { useCallback } from 'react'

const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s='
const CocktailContext = React.createContext()

const CocktailContextProvider = ({ children }) => {
    const [loading, setLoading] = useState(true);
    const [seachValue, setSearchValue] = useState('a');
    const [cocktails, setCocktails] = useState([]);
    return (
        <CocktailContext.Provider value={{ loading, seachValue, cocktails, setSearchValue }}>
            {children}
        </CocktailContext.Provider>

    )
}

export const useCocktailContext = () => {
    return useContext(CocktailContext)
}

export { CocktailContext, CocktailContextProvider }
