import React from 'react'
import './Nav.css'
import {Link} from 'react-router-dom'

export default function Nav(){
    return(
        <div className='nav-container'>
        <div className='logo-container'>
            logo will be here
        </div>
            <Link to='/'>Home</Link>
            <p>books</p>
            <Link to='/about'>About</Link>
            <Link to='/contact'>Contact</Link>
        </div>
    )
}