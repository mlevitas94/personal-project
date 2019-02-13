import React from 'react'
import './Nav.css'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'

const Nav =(props) => {
    const dropDown = props.books.map((book, i) => {
        return (
            <Link to={`/books/${book.id}`}>
                <li>{book.title}</li>
            </Link>    
        )
    })
    // const dropDown
    return(
        <div className='nav-container'>
            <div className='logo-container'>
                logo will be here
            </div>
            <ul className='nav-list'>
                <li><Link to='/'>Home</Link></li>
                <li className='dropdown-container'>
                    <span>Books</span>
                    <div className='dropdown'>
                         <ul>
                            {dropDown}
                         </ul>
                    </div>
                </li>
                <li><Link to='/about'>About</Link></li>
                <li><Link to='/contact'>Contact</Link></li>
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