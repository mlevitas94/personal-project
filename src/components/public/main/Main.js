import React, {Component} from 'react'
import './Main.scss'
import routes from './routes'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'

class Main extends Component{
    render(){
        return (
            <div className='main-container' id='scrolltop'>
                {routes}
            </div>
            
        )
    }
}

const mapToProps = reduxState => {
    const {books} = reduxState
    return {
        books
    }
}

export default withRouter(connect(mapToProps)(Main))