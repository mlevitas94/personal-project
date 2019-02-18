import React, {Component} from 'react'
import axios from 'axios'
import {connect} from 'react-redux'
import {getBooks} from '../../../ducks/reducer'
import Toedit from './Toedit'
import './Logged.css'

class Bookhandles extends Component{
    constructor(){
        super()
        this.state={
            add:{
                title:'', purchaselink:'',imageurl:'',price:'', info:'', kprice:'', favsnip:''
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

    addBook(){
        const {title, purchaselink, imageurl, price, info, kprice, favsnip} = this.state.add
        const toAdd = {title, purchaselink, imageurl, price, info, kprice, favsnip}

        axios.post('/api/books', toAdd)
        .then(res => {
                this.setState({
                    add: { title: '',purchaselink: '',imageurl:'',price: '',info:'', kprice: '',favsnip:''}
                }) 
                this.props.getBooks(res.data)  
        })
    }
    deleteBook(id){
        axios.delete(`/api/books/${id}`)
        .then(res => {
            this.props.getBooks(res.data)
        }).catch(err => {
            console.log(err)
        })
    }

    editBook(id, title, purchaselink, imageurl, price, info, kprice, favsnip){
        const toEdit = {title, purchaselink, imageurl, price, info, kprice, favsnip}
        axios.put(`/api/books/${id}`, toEdit)
        .then(res => {
            this.props.getBooks(res.data)
        })
        .catch(err => {
            console.log(err)
        })
    }


    render(){
        const toBeDeleted = this.props.books.map((book, i) => {
            return (
                <div key={i}>
                    <span>{book.title}</span>
                    <br/>
                    <button onClick={() => this.deleteBook(book.book_id)}>Delete</button>
                </div>
            )
        })

        const toEdit = this.props.books.map((book, i) => {
            const {title, link, image, price, info, kindle_price, fav_snip} = book
           return(
                <Toedit key ={i}
                title={title}
                link={link}
                image={image}
                price={price}
                info={info}
                kprice={kindle_price}
                favsnip={fav_snip}
                />
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

                        <span>Info:</span>
                        <br/>
                        <input type='text' value={this.state.add.info} onChange={(e) => this.updateAddInput( 'info',e.target.value)}/>
                        <br/>

                        <span>Kindle Price:</span>
                        <br/>
                        <input type='text' value={this.state.add.kprice} onChange={(e) => this.updateAddInput( 'kprice',e.target.value)}/>
                        <br/>

                        <span>Favorite Snippet:</span>
                        <br/>
                        <input type='text' value={this.state.add.favsnip} onChange={(e) => this.updateAddInput('favsnip',e.target.value)}/>
                        <br/>

                        <button onClick={() => this.addBook()}>Add Book</button>

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