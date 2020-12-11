import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";


import HomeCards from '../components/Home/HomeCards'
function Home() {

    return (
        <div className='container'>
            <h1 className='my-3  text-center'>React Projects</h1>
            <HomeCards / >
            
        </div>
    );
}

export default Home
