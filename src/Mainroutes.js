import React from 'react';
import {Switch, Route} from 'react-router-dom'
import Admin from './components/admin/Admin'
import Joined from './components/public/Joined'




export default (
    <Switch>
        <Route  path='/admin' component={Admin}/>
        <Route path='/' component={Joined}/>
    </Switch>
)