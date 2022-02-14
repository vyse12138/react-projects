import React from 'react'

import { useCocktailContext } from './CocktailContext'
import Loading from './Loading'
import Cocktail from './Cocktail'

const CocktailList = () => {
  const { cocktails, loading } = useCocktailContext()
  if (loading) {
    return <Loading />
  }
  if (cocktails.length === 0) {
    return <h2 className='text-center my-4'>Nothing Found</h2>
  }

  return (
    <div>
      <h2 className='text-center my-4'>Cocktail Matches</h2>
      <div className='card-columns'>
        {cocktails.map(item => {
          return <Cocktail key={item.id} {...item}></Cocktail>
        })}
      </div>
    </div>
  )
}

export default CocktailList
