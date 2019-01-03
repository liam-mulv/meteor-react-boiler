import { Meteor } from 'meteor/meteor'
import React from 'react'
import { Router, Route, Switch, withRouter } from 'react-router-dom'
import {createBrowserHistory} from 'history';
const browserHistory = createBrowserHistory();


// Auth components
import Signup from '../ui/authenticate/Signup'
import Login from '../ui/authenticate/Login'
// Dasboard components
import Dashboard from '../ui/dashboard/Dashboard'
// Common components
import NotFound from '../ui/common/NotFound'


// Page paths
const unauthenticatedPages = ['/', 'signup']
const authenticatedPages = ['/dashboard']

export const onAuthChange = (isAuthenticated) => {
	const pathname = browserHistory.location.pathname
	const isUnauthenticatedPage = unauthenticatedPages.includes(pathname)
	const isAuthenticatedPage = authenticatedPages.includes(pathname)

	if(isUnauthenticatedPage && isAuthenticated) {
		browserHistory.replace('/dashboard')
	}
	if(isAuthenticatedPage && !isAuthenticated) {
		browserHistory.replace('/')
	}
}

// Routes
export const routes = (
  <Router history={browserHistory}>
      <Switch>
		<Route exact path='/' component={Login}/>
		<Route path='/signup' component={Signup}/>
		<Route path='/dashboard' component={Dashboard}/>
		<Route component={NotFound}/>
      </Switch>
  </Router>
)
