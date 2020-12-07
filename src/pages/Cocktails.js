import React from 'react'
import CocktailList from '../components/Cocktails/CocktailList'
import SearchBar from '../components/Cocktails/SearchBar'
import { CocktailContextProvider } from '../components/Cocktails/CocktailContext'
const Cocktails = () => {
    return (
        <div className='container bg-light border-top-0 shadow py-2'>
            <h2 className='text-center'>Cocktails</h2>
            <CocktailContextProvider>
                <SearchBar />
                <CocktailList />
            </CocktailContextProvider>
        </div>
    )
}

export default Cocktails
