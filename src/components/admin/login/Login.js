import React, {Component} from 'react'
import axios from 'axios';
import {connect} from 'react-redux'
import {updateUser} from '../../../ducks/reducer'
import {Link} from 'react-router-dom'
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
        }else{
            axios.get('/admin/getuser')
            .then(res => {
                this.props.updateUser(res.data)
                this.props.history.push('/admin/config')
            })
            .catch(err => {
        
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
        if(username==='' || password===''){
            document.querySelector('.login-success').innerHTML=''
            document.querySelector('.login-check').innerHTML='Please make sure of fields are filled'
        }else{
            document.querySelector('.login-check').innerHTML=''
            document.querySelector('.login-success').innerHTML='Logging you in...'
            axios.post('/admin/login', {username, password})
            .then( res => {
                this.props.updateUser(res.data)
                this.props.history.push('/admin/config')
    
            })
            .catch(err => {
                document.querySelector('.login-success').innerHTML=''
                document.querySelector('.login-check').innerHTML='Invalid Username or Password'
            })

        }
    }
    render(){
        return(
            <div className='admin-container'>
                <h1>Admin Login</h1>
                
                <div className='login'>
                    <p>Username</p>

                    <input type='text' value={this.state.username} 
                    onKeyPress={(e) => {
                        if(e.key === 'Enter'){
                            this.login()
                        }
                    }}
                    onChange={(e) => this.handleInputChange('username', e.target.value)}/>

                    <p>Password</p>

                    <input type='password' value={this.state.password}
                    onKeyPress={(e) => {
                        if(e.key === 'Enter'){
                            this.login()
                        }
                    }}
                    onChange={(e) => this.handleInputChange('password', e.target.value)}/>
                    
                    <br/>
                    <br/>
                    <button onClick={() => this.login()}>Login</button>
                    <br/>
                    <span className='login-success'></span>
                    <span className='login-check'></span>
                    <br/>
                    <br/>
                    <Link to='/'>Return to public page </Link>
                    <br/>
                    <br/>
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