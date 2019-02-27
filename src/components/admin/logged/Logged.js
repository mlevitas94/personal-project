import React, {Component} from 'react'
import Bookhandles from './Bookhandles'
import Adminhandles from './Adminhandles'
import {connect} from 'react-redux'
import './Logged.scss'

class Logged extends Component{
    constructor(){
        super()
        this.state={

        }
    }

    render(){
        console.log(this.props)
        return(
            <div className='whole-admin-container'>
            <h1>Welcome back {`${this.props.loggedUser.first_name}`}! </h1>
            <button className='logout'>Logout</button>
              <Bookhandles/>
              <Adminhandles/>
            </div>
        )
    }
}

const mapToProps = reduxState =>{
    const {loggedUser} = reduxState
    return {
        loggedUser
    }
}

export default connect(mapToProps)(Logged)