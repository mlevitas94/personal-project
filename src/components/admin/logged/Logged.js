import React, {Component} from 'react'
import Bookhandles from './Bookhandles'
import Adminhandles from './Adminhandles'
import './Logged.scss'

class Logged extends Component{
    constructor(){
        super()
        this.state={

        }
    }

    render(){
        return(
            <div className='whole-admin-container'>
              <Bookhandles/>
              <Adminhandles/>
            </div>
        )
    }
}

export default Logged