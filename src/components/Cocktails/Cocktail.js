import React from 'react'
import { Link } from 'react-router-dom'

const Cocktail = ({ image, name, id, info, glass }) => {
    return (
        <div className=' card' >

            <img className='card-img-top' src={image} alt='img'></img>
            <div className="card-body">
                <h4 className="card-title">{name}</h4>
                <p className="card-subtitle text-muted">{info}</p>
                <p className="card-text">{glass}</p>
                <Link to={`/Cocktails/${id}`} >
                    <button className='btn btn-primary'> Details </button>
                </Link>
            </div>


        </div>
    )
}

export default Cocktail
