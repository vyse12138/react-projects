import React from 'react'

import { useCocktailContext } from './CocktailContext'
const SearchBar = () => {
    const { setSearchValue } = useCocktailContext();
    return (
        <div>
            <h2>search form component</h2>
        </div>
    )
}

export default SearchBar
