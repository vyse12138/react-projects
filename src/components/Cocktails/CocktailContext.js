import React, { useState, useContext, useEffect } from 'react'

const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s='
const CocktailContext = React.createContext()

const CocktailContextProvider = ({ children }) => {
    const [loading, setLoading] = useState(true);
    const [seachValue, setSearchValue] = useState('a');
    const [cocktails, setCocktails] = useState([]);

    

    useEffect(() => {
        const fetchCocktail = async () => {
            setLoading(true);
            try {
                const response = await fetch(`${url}${seachValue}`);
                const data = await response.json();
                const { drinks } = data;
                //console.log(drinks);
                if (drinks) {
                    const newCocktails = drinks.map((item) => {
                        const { 
                            idDrink,
                            strAlcoholic,
                            strDrink,
                            strDrinkThumb,
                            strGlass } = item;
                        return (
                            {
                                id: idDrink,
                                name: strDrink,
                                info: strAlcoholic,
                                image: strDrinkThumb,
                                glass: strGlass
                            }
                        )
                    })
                    // console.log(newCocktails);
                    setCocktails(newCocktails);
                }
                else {
                    setCocktails([]);
                }
                setLoading(false);
            }
            catch (error) {
                console.log(error);
                setLoading(false);
            }
        }

        fetchCocktail();

        return () => {
            setCocktails([]);
        }
    }, [seachValue])

    return (
        <CocktailContext.Provider value={{ loading, cocktails, setSearchValue }}>
            {children}
        </CocktailContext.Provider>

    )
}

export const useCocktailContext = () => {
    return useContext(CocktailContext)
}

export { CocktailContext, CocktailContextProvider }
