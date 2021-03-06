import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import './Home.scss'


const Home = (props) =>{
    const bookList = props.books.map((book,i) =>{
        return(
            <div className='book' key={i}>
                <h3>{book.title}</h3>
                <div className='halfed'>
                    <div className='left'>
                        <br/>
                        <img src={`${book.image}`} alt='Book images'/>
                        <br/>
                    </div>
                    <div className='right'>
                        <span>Price: ${book.price}.00</span>
                        <br/>
                        <br/>
                        <br/>
                        <span>Kindle Price: ${book.kindle_price}.00</span>
                        <br/>
                        <br/>
                        <br/>
                        <a target='_blank' rel="noopener noreferrer" href={book.link}> Purchase Book</a>
                    </div>
                </div>
                <br/>
                <Link to={`/books/${book.book_id}`}>More Information</Link>
                <br/>
                <br/>
            </div>
        )
    })
    if(bookList[0]){
        return(
                <div className='whole-book-container' style={{fontFamily : 'Open Sans'}}>
                    <div className='header-container'>
                        <div className='side-line'></div>
                        <h1>Thom's Collection</h1>
                        <div className='side-line'></div>
                    </div>    
                    <div className='books-container'>
                        {bookList}
                    </div>
                </div>    
        )
    }else{
        return(
            <div class="lds-spinner"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
        )
    }
}
const mapToProps = reduxState =>{
    const {books} = reduxState
    return{
        books
    }
}
export default connect(mapToProps)(Home)