import React, {Component} from 'react'
import Bookhandles from './Bookhandles'
import Adminhandles from './Adminhandles'
import {connect} from 'react-redux'
import './Logged.scss'
import axios from 'axios';
import {updateUser} from '../../../ducks/reducer'

class Logged extends Component{
    constructor(){
        super()
        this.state={

        }
    }

    componentDidMount(){
        if(!this.props.loggedUser.user_id){
            this.props.history.push('/admin')
        }else{
            return
        }
    }

    logout(){
        document.querySelector('.logout-check').innerHTML='Logging you out...'
        axios.post('/admin/deleteadmin')
        .then(res => {
            this.props.updateUser({})
            document.querySelector('.logout-check').innerHTML=''
            this.props.history.push('/admin')
        })
        .catch(err => {
            console.log('logout failed')
        })
    }

    render(){
        return(
            <div className='whole-admin-container'>
            <h1>Welcome back {`${this.props.loggedUser.first_name}`}! </h1>
            <button onClick={() => this.logout()} className='logout'>Logout</button>
            <br/>
            <span className='logout-check'></span>
              <Bookhandles/>
              {this.props.loggedUser.user_id === 80? <Adminhandles/> : null}
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

export default connect(mapToProps, {updateUser})(Logged)