import React, { Component } from 'react';
import { connect } from 'react-redux';
import './book.scss'
import {getBooks} from '../../../../../ducks/reducer'

class Book extends Component {
    render(){
        const selectedBook = this.props.books.filter(book => {
            return book.book_id == this.props.match.params.id
        }).map(book => {return book})

        if(selectedBook[0]){
        return (
            <div className='book-whole-container'>
                <div className='header-container'>
                    <div className='side-line'></div>
                    <h1>{selectedBook[0].title}</h1>
                    <div className='side-line'></div>
                </div>    
                <div className='book-box'>
                    <br/>
                    <div className='split'>
                        <div className='left'>
                            <img src={`${selectedBook[0].image}`} alt='book cover'/>
                        </div>
                        <div className='right'>
                            <span className='price'>Price: {`$${selectedBook[0].price}.00`}</span>
                            <br/>
                            <br/>
                            <span className='kprice'>Kindle Price: {`$${selectedBook[0].kindle_price}.00`}</span>
                            <br/>
                            <br/>
                            <a target='_blank' rel='noopener noreferrer' href={`${selectedBook[0].link}`}>Purchase This Book</a>
                            <br/>
                            <br/>
                            <span>{selectedBook[0].info}</span>
                        </div>
                    </div> 
                    <h1>Thom's Favorite Snippet</h1>   
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