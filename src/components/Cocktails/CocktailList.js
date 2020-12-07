import React from 'react'

import { useCocktailContext } from './CocktailContext'


const CocktailList = () => {
    const { cocktails, loading } = useCocktailContext();
    if (loading) {
        return (
            <div>
                loading...
            </div>
        )
    }

    return (
        <div>
            <h2>cocktail list component</h2>
        </div>
    )
}

export default CocktailList
