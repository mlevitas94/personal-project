import React, {Component} from 'react'

class Adminhandles extends Component{
    constructor(){
        super()
        this.state = {

        }
    }
    render(){
        return(
            <div className='admin-handle-container'>
                <h1>Register a new admin</h1>

                <span>First name:</span>

                <br/>

                <input type='text'/>

                <br/>

                <span>Last name:</span>

                <br/>

                <input type='text'/>

                <br/>

                <span>Username:</span>

                <br/>

                <input type='text'/>

                <br/>

                <span>Privileges:</span>

                <br/>

                <span>Add books:</span>
                <input type='checkbox'/>

                <br/>

                <span>Delete books:</span>
                <input type='checkbox'/>

                <br/>

                <span>Edit books:</span>
                <input type='checkbox'/>

                <br/>

                <span>Password:</span>

                <br/>

                <input type='password'/>

                <br/>

                <span>Repeat Password:</span>

                <br/>

                <input type='password'/>

                <br/>

            </div>
        )
    }
}
export default Adminhandles