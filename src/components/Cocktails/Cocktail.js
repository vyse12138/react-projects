import React from 'react'
import { Link } from 'react-router-dom'

const Cocktail = ({ image, name, id, info, glass }) => {
    return (
        <div className='col-5 bg-light border-top-0 shadow mx-3 my-3 pb-3 text-center'>
            <h2>{name}</h2>
            <img className='img' width="300" height="300" src={image}></img>
            <h3>{info}</h3>
            <h3>{glass}</h3>
            <Link to={`/Cocktails/${id}`} >
                <button className='btn btn-info'> Details </button>
            </Link>

        </div>
    )
}

export default Cocktail
