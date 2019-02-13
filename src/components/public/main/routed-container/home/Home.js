import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'


const Home = (props) =>{
    const bookList = props.books.map((book,i) =>{
        return(
            <div className='book'
                key={i}>
                <br/>
                <Link to={`/books/${book.book_id}`}>Link to inidividual book</Link>
                <br/>
                {book.title}
                <br/>
                {book.price}
                <br/>
                

            </div>
        )
    })
    return(
        <div>
            this is the home page
            <br/>
            <div className='books-container'>
                {bookList}
            </div>
        </div>
    )
}
const mapToProps = reduxState =>{
    const {books} = reduxState
    return{
        books
    }
}
export default connect(mapToProps)(Home)