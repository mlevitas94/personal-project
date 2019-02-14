import React, { Component } from 'react';
import { connect } from 'react-redux';
import './book.css'
import axios from 'axios'
import {getBooks} from '../../../../../ducks/reducer'

class Book extends Component {
   componentDidMount(){
        if(!this.props.books[0]){
            axios.get('/api/books')
                .then(res => {
                    this.props.getBooks(res.data)
                })
        }
        
    }
    render(){
        const selectedBook = this.props.books.filter(book => {
            return book.book_id == this.props.match.params.id
        }).map(book => {return book})

        // const selectedBook = [{id: 1, image:'image', title:'title', price:'price'}]

        return (
            <div className='book-box'>
                <div>{selectedBook[0].id}</div>
                <img src={`${selectedBook[0].image}`}/>
                <div>{selectedBook[0].title}</div>
                <div>{selectedBook[0].price}</div> 
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

export default connect(mapToProps, {getBooks})(Book)