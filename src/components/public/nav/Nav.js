import React from 'react'
import './Nav.scss'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'

const Nav =(props) => {
    const dropDown = props.books.map((book, i) => {
        return (
            <Link className='books' key={i} to={`/books/${book.book_id}`}>
                <li>{book.title}</li>
            </Link>    
        )
    })

    const drop = () => {
        document.querySelector('.dropdown').classList.toggle('dropped')
    }

    // const dropDown
    return(
        <div className='nav-container'>
            <ul className='nav-list'>
                <li>
                    <div className='link-container'>
                        <Link  to='/'>Home</Link>
                        <div className='line'></div>
                    </div>    
                </li>
                <li onClick={() => drop()} className='dropdown-container'>
                    <div className='link-container' id='non-link'>
                        <span>Books</span>
                        <div className='line'></div>
                    </div>    
                        <div className='dropdown' id='dropdown'>
                            <ul>
                                {dropDown}
                            </ul>
                        </div>
                </li>
                <li>
                    <div className='link-container'>
                        <Link to='/about'>About</Link>
                        <div className='line'></div>
                    </div>    
                </li>
                <li>
                    <div className='link-container'>
                        <Link to='/contact'>Contact</Link>
                        <div className='line'></div>
                    </div>    
                </li>
            </ul>
        </div>
    )
}

const mapToProps = reduxState => {
    const {books} = reduxState
    return {
        books
    }
}
export default connect(mapToProps)(Nav)