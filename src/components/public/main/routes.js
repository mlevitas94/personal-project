import React from 'react';
import {Switch, Route} from 'react-router-dom'
import About from './routed-container/about/About'
import Contact from './routed-container/contact/Contact'
import Home from './routed-container/home/Home'



export default (
    <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/about' component={About}/>
        <Route path='/contact' component={Contact}/>
    </Switch>
)