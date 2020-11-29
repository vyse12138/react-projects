import React, { useEffect } from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";


const Navigation = () => {
  return (
    <div className='navbar navbar-expand-sm bg-dark navbar-dark'>
        <ul className='container navbar-nav'>
          <li className='nav-item'>
            <Link className='nav-link' to="/">Home</Link>
          </li>
          <li className='nav-item'> 
            <Link className='nav-link' to="/ShoppingBuddy">ShoppingBuddy</Link>
          </li>

          <li className='nav-item'> 
            <Link className='nav-link' to="/About">About</Link>
          </li>          
        </ul>
    </div>
  );
}

export default Navigation
