import React, {Component} from 'react'
import './Admin.css'

class Admin extends Component {
    constructor(){
        super()
        this.state = {
            username: '',
            password:''
        }
    }

    handleInputChange(input, val){
        this.setState({
            [input]: val
        })
    }
    render(){
        return(
            <div className='admin-container'>
                <h1>Welcome to the admin page</h1>

                <div className='login'>
                    <p>Username</p>
                    <input type='text' value={this.state.username} onChange={(e) => this.handleInputChange('username', e.target.value)}/>
                    <p>Password</p>
                    <input type='password' value={this.state.password} onChange={(e) => this.handleInputChange('password', e.target.value)}/>
                    <br/>
                    <button>Login</button>

                </div>

            </div>

        )
    }
}
export default Admin