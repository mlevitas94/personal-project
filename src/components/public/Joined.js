import React from 'react'
import Nav from './nav/Nav'
import Main from './main/Main'
import './Joined.scss'

const Joined = () =>{
    return(
        <div className='whole-container'>
            <div className='header-container'>
                <h1>Thom</h1>
            </div>
            <div className='public-container'>
                <Nav/>
                <Main/>
            </div>
        </div>    
    )
}
export default Joined 