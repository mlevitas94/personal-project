import React, {Component} from 'react'
import axios from 'axios';
import {connect} from 'react-redux'
import {updateUser} from '../../../ducks/reducer'


import './Login.scss'


class Login extends Component {
    constructor(){
        super()
        this.state = {
            username: '',
            password:''
        }
    }

    componentDidMount(){
        const {admin_id} = this.props.loggedUser

        if(admin_id){
            this.props.history.push('/admin/config')
            console.log('sesssion got from ducks')
        }else{
            axios.get('/admin/getuser')
            .then(res => {
                this.props.updateUser(res.data)
                console.log('session got from back')
                console.log(this.props.loggedUser)
                this.props.history.push('/admin/config')
            })
            .catch(err => {
                console.log('no session existing')
            })
        }
    }

    handleInputChange(input, val){
        this.setState({
            [input]: val
        })
    }

    login(){
        const username = this.state.username;
        const password = this.state.password;
        axios.post('/admin/login', {username, password})
        .then( res => {
            this.props.updateUser(res.data)
            this.props.history.push('/admin/config')

        })
        .catch(err => {
            console.log(err)
        })
    }
    render(){
        return(
            <div className='admin-container'>
            <h1>Admin Login</h1>
            
            <div className='login'>
                <p>Username</p>
                <input type='text' value={this.state.username} onChange={(e) => this.handleInputChange('username', e.target.value)}/>
                <p>Password</p>
                <input type='password' value={this.state.password} onChange={(e) => this.handleInputChange('password', e.target.value)}/>
                <br/>
                <br/>
                <button onClick={() => this.login()}>Login</button>
            
            </div>
            </div>

        )
    }
} 
const mapToProps = reduxState => {
    const {loggedUser} = reduxState

    return {
        loggedUser
    }
}

export default connect(mapToProps , {updateUser})(Login)