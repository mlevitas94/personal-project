import React, {Component} from 'react'
import Bookhandles from './Bookhandles'
import Adminhandles from './Adminhandles'
import './Logged.css'

class Logged extends Component{
    constructor(){
        super()
        this.state={

        }
    }

    render(){
        return(
            <div>
              <Bookhandles/>
              <Adminhandles/>
            </div>
        )
    }
}

export default Logged