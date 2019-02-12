import React, { Component } from 'react';
import Nav from './components/public/nav/Nav'
import Main from './components/public/main/Main'

import './App.css';

class App extends Component {
  render() {
    return (
      <div className='public-container'>
       <Nav/>
       <Main/>
      </div>
    );
  }
}

export default App;
