import React, { Component } from 'react';
import { connect } from 'react-redux';
import './book.scss'
import axios from 'axios'
import {getBooks} from '../../../../../ducks/reducer'

class Book extends Component {
    render(){
        const selectedBook = this.props.books.filter(book => {
            return book.book_id == this.props.match.params.id
        }).map(book => {return book})

        // const selectedBook = [{id: 1, image:'image', title:'title', price:'price'}]
        if(selectedBook[0]){
        return (
            <div className='whole-container'>
                <h3>{selectedBook[0].title}</h3>
                <div className='book-box'>
                    <br/>
                    <div className='split'>
                        <div className='left'>
                            <img src={`${selectedBook[0].image}`}/>
                        </div>
                        <div className='right'>
                            <span>{selectedBook[0].price}</span>
                            <br/>
                            <span>{selectedBook[0].kindle_price}</span>
                            <br/>
                            <span>{selectedBook[0].info}</span>
                        </div>
                    </div>    
                    <p className='snip'>{selectedBook[0].fav_snip}</p>
                    <br/>
                </div>
            </div>
        )
    }else{
        return(
            <h1>
                Loading...
            </h1>
        )
    }
    }    
}

const mapToProps = reduxState => {
    const {books} = reduxState
    return {
        books
    }
}

export default connect(mapToProps, {getBooks})(Book)