import React from 'react'
import './Nav.scss'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'

const Nav =(props) => {
    const dropDown = props.books.map((book, i) => {
        return (
            <Link  className='books' key={i} to={`/books/${book.book_id}`}>
                <li>{book.title}</li>
            </Link>    
        )
    })

    const dropFunc = (sel, trans) => {
        document.querySelector(`${sel}`).classList.toggle(`${trans}`)
    }
    const removeDrop = (sel, trans) => {
        document.querySelector(`${sel}`).classList.remove(`${trans}`)
    }


    // const dropDown
    return(
        <div className='nav-container'>
            <h1>
                Thom
            </h1>
            <div className='burger' onClick={() => {
                dropFunc('.drop-one', 'nav-drop-dropped')
                removeDrop('.drop-two','drop-two-dropped')
            }}>
                <i className="fas fa-bars"></i>
            </div>
            <div className='nav-drop'>
                <div className='drop-one'>
                    <div className='drop-link' onClick={() => {
                        dropFunc('.drop-one', 'nav-drop-dropped')
                        removeDrop('.drop-two','drop-two-dropped')
                    
                    }}>
                        <Link  to='/'>Home</Link>
                    </div>
                    <div className='drop-link' onClick={() => dropFunc('.drop-two', 'drop-two-dropped')}>
                        Books
                    </div>
                    <div className='drop-link' onClick={() => {
                        dropFunc('.drop-one', 'nav-drop-dropped')
                        removeDrop('.drop-two','drop-two-dropped')
                    }}>
                        <Link to='/about'>About</Link>
                    </div>
                    <div className='drop-link' onClick={() => {
                        dropFunc('.drop-one', 'nav-drop-dropped')
                        removeDrop('.drop-two','drop-two-dropped')
                    }}>
                    <Link to='/contact'>Contact</Link>
                    </div>
                </div>  
                <div className='drop-two'>
                        {dropDown}
                </div>  
            </div>

            <ul className='nav-list'>
                <li>
                    <div className='link-container' >
                        <span className='home'><Link  to='/'><i className="fas fa-home"></i>Home</Link></span>
                        <div className='line' id='line-one'></div>
                    </div>    
                </li>
                <li onClick={() => dropFunc('.dropdown', 'dropped')} className='dropdown-container'>
                    <div className='link-container' id='non-link'>
                    <span><i className="fas fa-book"></i> Books</span>
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
                        <Link to='/about'><i className="fas fa-user"></i> About</Link>
                        <div className='line' id='line-three'></div>
                    </div>    
                </li>
                <li>
                    <div className='link-container' id='line-three'>
                        <Link to='/contact'><i className="fas fa-address-book"></i> Contact</Link>
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