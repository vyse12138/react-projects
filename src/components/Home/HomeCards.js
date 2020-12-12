import React, { useEffect } from 'react'
import {Link} from "react-router-dom";

import ShoppingBuddyDemo from '../../demo/ShoppingBuddyDemo.png'
import ClockDemo from '../../demo/ClockDemo.png'
import CocktailDemo from '../../demo/CocktailDemo.png'
import TicTacToeDemo from '../../demo/TicTacToeDemo.png'
import Markdown from '../../demo/MarkdownDemo.png';
const HomeCard = () => {

    const cards = [
        {   
            img: ShoppingBuddyDemo,
            name: 'ShoppingBuddy',
            link: '/ShoppingBuddy'
        },
        {
            img: ClockDemo,
            name: 'Clock',
            link: '/Clock'
        },
        {
            img: CocktailDemo,
            name: 'Cocktails',
            link: '/Cocktails'
        },
        {
            img: TicTacToeDemo,
            name: 'TicTacToe',
            link: '/TicTacToe'
        },
        {   
            img: Markdown,
            name: 'Markdown',
            link: '/Markdown'
        },
        
    ]

    return (
        <div className='card-columns'>
            {cards.map((card)=> {
                return (
                    <div className=' card bg-dark' >
                        <img 
                            className='card-img-top'
                            alt='ShoppingBuddy'
                            src={card.img}
                        ></img>
                        <div className="card-body">
                            <h4 className="card-title text-light">{card.name}</h4>
                            <Link to={card.link} >
                                <button className='btn btn-light'> Details </button>
                            </Link>
                        </div>
                    </div>
                )
            })}
        </div>
        
    );
}

export default HomeCard
