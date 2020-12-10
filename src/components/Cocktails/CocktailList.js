import React from 'react'

import { useCocktailContext } from './CocktailContext'
import Loading from './Loading'
import Cocktail from './Cocktail'

const CocktailList = () => {
    const { cocktails, loading } = useCocktailContext();
    if (loading) {
        return (
            <Loading/>
        )
    }
    else if (cocktails === []){
        return (
            <h2>
                nothing found
            </h2>
        )
    }

    return (
        <div>
            <h2 className='text-center'>cocktail list</h2>
            <div className='card-columns'>
                {cocktails.map((item)=> {
                    return <Cocktail key={item.id} {...item}></Cocktail>
                })}
            </div>
        </div>
    )
}

export default CocktailList
