import React, { Component } from 'react';
import {connect} from 'react-redux'
import axios from 'axios'
import {getBooks} from './ducks/reducer'
import {withRouter} from 'react-router-dom'


import mainroutes from './Mainroutes'

import './App.css';

class App extends Component {
async componentDidMount(){
  axios.get('/api/books')
    .then((res) => { 
      this.props.getBooks(res.data)
    })
    .catch(err => {
      console.log('didnt get books fam', err)
    })
}
  render() {
    return (
        <div className='app-container'>
        {mainroutes}
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
