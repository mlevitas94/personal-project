import React, { Component } from 'react';
import {connect} from 'react-redux'
import axios from 'axios'
import {getBooks} from './ducks/reducer'
import {withRouter} from 'react-router-dom'


import Nav from './components/public/nav/Nav'
import Main from './components/public/main/Main'

import './App.css';

class App extends Component {
  componentDidMount(){
    axios.get('/api/books')
    .then(res => {
      this.props.getBooks(res.data)
    })
  }
  render() {
    return (
      <div className='public-container'>
       <Nav/>
       <Main/>
      </div>
    );
  }
}

const mapToProps = reduxState =>{
  const {books} = reduxState
  return {
    books
  }
}

export default withRouter(connect(mapToProps, {getBooks})(App))
