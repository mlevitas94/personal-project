import React from 'react';
import {Switch, Route} from 'react-router-dom'
import Login from './components/admin/login/Login'
import Joined from './components/public/Joined'
import Logged from './components/admin/logged/Logged'




export default (
    <Switch>
        <Route path='/admin/config' component={Logged}/>
        <Route  path='/admin' component={Login}/>
        <Route path='/' component={Joined}/>
    </Switch>
)