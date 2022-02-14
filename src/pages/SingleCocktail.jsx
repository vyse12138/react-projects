import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import Loading from '../components/Cocktails/Loading'

const url = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i='

const SingleCocktail = () => {
  const { id } = useParams()
  const [loading, setLoading] = useState(false)
  const [cocktail, setCocktail] = useState(null)

  useEffect(() => {
    async function getCocktail() {
      setLoading(true)
      try {
        const response = await fetch(`${url}${id}`)
        const data = await response.json()
        //console.log(data);

        if (data.drinks) {
          const {
            strDrink: name,
            strDrinkThumb: image,
            strCategory: category,
            strAlcoholic: info,
            strGlass: glass,
            strInstructions: instruction,
            strIngredient1,
            strIngredient2,
            strIngredient3,
            strIngredient4,
            strIngredient5,
            strIngredient6,
            strIngredient7,
            strIngredient8
          } = data.drinks[0]
          const ingredients = [
            strIngredient1,
            strIngredient2,
            strIngredient3,
            strIngredient4,
            strIngredient5,
            strIngredient6,
            strIngredient7,
            strIngredient8
          ]
          const newCocktail = {
            name,
            image,
            info,
            category,
            glass,
            instruction,
            ingredients
          }
          setCocktail(newCocktail)
        }
      } catch (error) {
        console.log(error)
      }
      setLoading(false)
    }
    getCocktail()

    return () => {
      setCocktail(null)
    }
  }, [id])

  if (loading) {
    return <Loading />
  }
  if (!cocktail) {
    return <h2 className='section-title'>no cocktail to display</h2>
  }
  const { name, image, category, info, glass, instruction, ingredients } =
    cocktail
  return (
    <div className='container bg-light border-top-0 shadow pt-4 pb-2'>
      <img src={image} alt={name} width='50%' height='50%' />
      <h1>{name}</h1>
      <p>
        <span className='font-weight-bold'>Type: </span>
        {category}/{info}
      </p>

      <p>
        <span className='font-weight-bold'>Glass: </span>
        {glass}
      </p>
      <p>
        <span className='font-weight-bold'>Instruction: </span>
        {instruction}
      </p>
      <span className='font-weight-bold'>Ingredients: </span>
      <ul>
        {ingredients.map(item => {
          return item ? <li key={item}>{item}</li> : ''
        })}
      </ul>
      <Link className='btn btn-primary' to='/Cocktails'>
        Back
      </Link>
    </div>
  )
}

export default SingleCocktail
