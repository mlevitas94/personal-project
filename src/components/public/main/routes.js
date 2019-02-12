import React from 'react';
import {Switch, Route} from 'react-router-dom'
import About from './routed-container/about/About'
import Contact from './routed-container/contact/Contact'



export default (
    <Switch>
        <Route path='/public/about' component={About}/>
        <Route path='/public/contact' component={Contact}/>
    </Switch>
)