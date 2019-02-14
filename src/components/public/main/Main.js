import React from 'react'
import './Main.css'
import routes from './routes'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'

const Main = (props) =>{

    return (
        <div className='main-container'>
            <div className='header-container'>
                <h1>Header</h1>
            </div>

             {routes}
        </div>
    )
}

const mapToProps = reduxState => {
    const {books} = reduxState
    return {
        books
    }
}

export default withRouter(connect(mapToProps)(Main))