import React, {Component} from 'react'
import axios from 'axios'
import {connect} from 'react-redux'
import {getBooks} from '../../../ducks/reducer'
import './Logged.css'

class Bookhandles extends Component{
    constructor(){
        super()
        this.state={
            add:{
                title:'', purchaselink:'',imageurl:'',price:'', kprice:'', favsnip:''
            }
        }
    }


    updateAddInput(input, val){
        this.setState({
            add: {
                ...this.state.add,
                [input]:val
            }
        })
    }
    render(){
        const toBeDeleted = this.props.books.map((book, i) => {
            return (
                <div key={i}>
                    <span>{book.title}</span>
                    <br/>
                    <button>Delete</button>
                </div>
            )
        })
        return(
            <div className='handle-container'>
                <button>Add a Book</button>
                <br/>

                {/* hidden with overflow and height */}
                <div className='add-inputs'> 
                    <span>Title:</span>
                    <br/>
                    <input type='text' value={this.state.add.title} onChange={(e) => this.updateAddInput( 'title',e.target.value)}/>
                    <br/>

                    <span>Purchase Link:</span>
                    <br/>
                    <input type='url' value={this.state.add.purchaselink} onChange={(e) => this.updateAddInput( 'purchaselink',e.target.value)}/>
                    <br/>

                    <span>Image:</span>
                    <br/>
                    <input value={this.state.add.imageurl} onChange={(e) => this.updateAddInput( 'imageurl',e.target.value)}/>
                    <br/>

                    <span>Price:</span>
                    <br/>
                    <input type='text' value={this.state.add.price} onChange={(e) => this.updateAddInput( 'price',e.target.value)}/>
                    <br/>

                    <span>Kindle Price:</span>
                    <br/>
                    <input type='text' value={this.state.add.kprice} onChange={(e) => this.updateAddInput( 'kprice',e.target.value)}/>
                    <br/>

                    <span>Favorite Snippet:</span>
                    <br/>
                    <input type='text' value={this.state.add.favsnip} onChange={(e) => this.updateAddInput( 'favsnip',e.target.value)}/>
                    <br/>

                </div>


                <button>Delete a Book</button>
                <br/>

                {/* hidden with overflow and height */}
                <div className='delete-list'>
                    {toBeDeleted}
                </div>
                
                <button>Edit a Book</button>
            </div>
        )
    }
}

const mapToProps = reduxState => {
    const {books} = reduxState
    return {
        books
    }
}
export default connect(mapToProps, {getBooks})(Bookhandles)