import React, {Component} from 'react'

class Admin extends Component {
    constructor(){
        super()
        this.state = {

        }
    }
    render(){
        return(
            <div>
                <h1>Welcome to the admin page</h1>

                <div className='Login'>
                    <p>Username</p>
                    <input/>
                    <p>Password</p>
                    <input/>

                </div>

            </div>

        )
    }
}
export default Admin