import React from 'react'
import './Main.css'
import routes from './routes'

export default function Main(){
    return (
        <div className='main-container'>
            <div className='header-container'>
                <h1>Header</h1>
            </div>

             {routes}
        </div>
    )
}