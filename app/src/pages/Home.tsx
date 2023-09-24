import React from 'react'
import { Link } from 'react-router-dom'
import Login from './Login'

const Home = () => {
    return (
        <div>
            Home
            <Link to={'pokedex'}>pokedex</Link>
            <Login />
        </div>
    )
}

export default Home