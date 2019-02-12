import React from 'react'
import {connect} from 'react-redux'


const Home = (props) =>{
    const bookList = props.books.map((book,i) =>{
        return(
            <div>
                {book.id}
                {book.title}
                {book.price}
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