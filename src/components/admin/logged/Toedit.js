import React, {Component} from 'react'
// import {getBooks} from '../../../ducks/reducer'
import './Logged.css'

class Toedit extends Component{
    constructor(){
        super()
        this.state = {
            title:'', purchaselink:'',imageurl:'',price:'', info:'', kprice:'', favsnip:''
        }
    }

    render(){

        return(
        <div>
            <span>{this.props.title}</span>
            <br/> 
            <button>Edit this book</button>

            {/* fields pop up when clicked, hidden with overflow and height */}
            <div className='edit-field'>
                <span>Title:</span>
                    <br/>
                    <input type='text' defaultValue={this.props.title}/>
                    <br/>

                    <span>Purchase Link:</span>
                    <br/>
                    <input type='url' defaultValue={this.props.link}/>
                    <br/>

                    <span>Image:</span>
                    <br/>
                    <input defaultValue={this.props.image}/>
                    <br/>

                    <span>Price:</span>
                    <br/>
                    <input type='text' defaultValue={this.props.price}/>
                    <br/>

                    <span>Info:</span>
                    <br/>
                    <input type='text' defaultValue={this.props.info}/>
                    <br/>

                    <span>Kindle Price:</span>
                    <br/>
                    <input type='text' defaultValue={this.props.kprice}/>
                    <br/>

                    <span>Favorite Snippet:</span>
                    <br/>
                    <input type='text' defaultValue={this.props.favsnip}/>
                    <br/>
                    <button>Edit</button>
                    
            </div>
        </div>

        )
    }
}

// const mapToProps = reduxState => {
//     const {books} = reduxState
//     return {
//         books
//     }
// }
export default  Toedit
// connect(mapToProps, {getBooks})(Toedit)

