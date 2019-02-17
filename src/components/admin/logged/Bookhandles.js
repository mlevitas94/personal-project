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
        console.log(this.state.edit)
        const toBeDeleted = this.props.books.map((book, i) => {
            return (
                <div key={i}>
                    <span>{book.title}</span>
                    <br/>
                    <button>Delete</button>
                </div>
            )
        })

        const toEdit = this.props.books.map((book, i) => {
           return(
            <div key={i}>
                <span>{book.title}</span>
                <br/> 
                <button>Edit Book</button>

                {/* fields pop up when clicked, hidden with overflow and height */}
                <div className='edit-field'>
                    <span>Title:</span>
                        <br/>
                        <input type='text' defaultValue={book.title}/>
                        <br/>

                        <span>Purchase Link:</span>
                        <br/>
                        <input type='url' defaultValue={book.link}/>
                        <br/>

                        <span>Image:</span>
                        <br/>
                        <input defaultValue={book.image}/>
                        <br/>

                        <span>Price:</span>
                        <br/>
                        <input type='text' defaultValue={book.price}/>
                        <br/>

                        <span>Kindle Price:</span>
                        <br/>
                        <input type='text' defaultValue={book.kindle_price}/>
                        <br/>

                        <span>Favorite Snippet:</span>
                        <br/>
                        <input type='text' defaultValue={book.fav_snip}/>
                </div>
            </div>
           )

        })
        return(
            <div className='handle-container'>
                <div className='add-auth'>
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

                </div>
                <div className='delete-auth'>
                    <button>Delete a Book</button>
                    <br/>

                    {/* hidden with overflow and height */}
                    <div className='delete-list'>
                        {toBeDeleted}
                    </div>
                </div>    
                <div className='edit-auth'> 
                    <button>Edit a Book</button>
                    <br/>
                    <div className='edit-inputs'>
                        {toEdit}

                    </div>

                </div>    

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