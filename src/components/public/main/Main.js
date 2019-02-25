import React from 'react'
import './Main.scss'
import routes from './routes'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'

const Main = (props) =>{

    return (
        <div className='main-container'>
        
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