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

    const dropNav = () => {
        document.querySelector('.drop-one').classList.toggle('nav-drop-dropped')
    }


    // const dropDown
    return(
        <div className='nav-container'>
            <h1>
                Thom
            </h1>
            <div className='burger' onClick={() => dropNav()}>
                <i class="fas fa-bars"></i>
            </div>
            <div className='nav-drop'>
                <div className='drop-one'>
                    <div className='drop-link' onClick={() => dropNav()}>
                        <Link  to='/'>Home</Link>
                    </div>
                    <div className='drop-link' onClick={() => dropNav()}>
                        Books
                    </div>
                    <div className='drop-link' onClick={() => dropNav()}>
                        <Link to='/about'>About</Link>
                    </div>
                    <div className='drop-link' onClick={() => dropNav()}>
                    <Link to='/contact'>Contact</Link>
                    </div>
                </div>  
                <div className='drop-two'>
                    <ul>
                        {dropDown}
                    </ul>
                </div>  
            </div>

            <ul className='nav-list'>
                <li>
                    <div className='link-container' >
                        <span className='home'><Link  to='/'><i class="fas fa-home"></i>Home</Link></span>
                        <div className='line' id='line-one'></div>
                    </div>    
                </li>
                <li onClick={() => drop()} className='dropdown-container'>
                    <div className='link-container' id='non-link'>
                    <span><i class="fas fa-book"></i> Books</span>
                        <div className='line' id='line-two'></div>
                    </div>    
                        <div className='dropdown' id='dropdown'>
                            <ul>
                                {dropDown}
                            </ul>
                        </div>
                </li>
                <li>
                    <div className='link-container' >
                        <Link to='/about'><i class="fas fa-user"></i> About</Link>
                        <div className='line' id='line-three'></div>
                    </div>    
                </li>
                <li>
                    <div className='link-container' id='line-three'>
                        <Link to='/contact'><i class="fas fa-address-book"></i> Contact</Link>
                        <div className='line' id='line-four'></div>
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