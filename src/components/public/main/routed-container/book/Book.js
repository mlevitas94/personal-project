import React from 'react'
import { connect } from 'react-redux';

const Book = (props) => {
    const selectedBook = props.books.filter(book => {
        return book.id == props.match.params.id
    }).map(book => {return book})
    console.log(selectedBook)


    return (
        <div>
        {selectedBook[0].id}
        <br/>
        {selectedBook[0].title}
        <br/>
        {selectedBook[0].price}
            
        </div>
    )
}

const mapToProps = reduxState => {
    const {books} = reduxState
    return {
        books
    }
}

export default connect(mapToProps)(Book)