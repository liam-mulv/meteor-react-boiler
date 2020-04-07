import { Meteor } from 'meteor/meteor'
import React from 'react'
import { Router, Route, Switch, withRouter } from 'react-router-dom'
import { LastLocationProvider } from 'react-router-last-location'
import {createBrowserHistory} from 'history'
const browserHistory = createBrowserHistory()

// NPM
import moment from 'moment'

// Manage Scroll
import ScrollToTop from './ScrollToTop'

// Components
import Navbar from '../ui/components/navbar/Navbar'

// New Pages
import Login from '../ui/pages/authenticate/Login'
import Signup from '../ui/pages/authenticate/Signup'

import Profile from '../ui/pages/profile/Profile'
import FacebookLogin from '../ui/pages/facebook_login/FacebookLogin'
import SpiderDashboard from '../ui/pages/spider_dashboard/Spider'
import FacebookApiTest from '../ui/pages/facebook_api_test/FacebookApiTest'
import Lists from '../ui/pages/lists/Lists'
import List from '../ui/pages/list/List'
import Collabs from '../ui/pages/collabs/Collabs'
import Collab from '../ui/pages/collab/Collab'

// Common components
import NotFound from '../ui/components/common_old/NotFound'


// Page paths
const unauthenticatedPages = ['/', 'signup', '/facebook-login']
const authenticatedPages = ['/home']

export const onAuthChange = (isAuthenticated) => {
	const pathname = browserHistory.location.pathname
	const isUnauthenticatedPage = unauthenticatedPages.includes(pathname)
	const isAuthenticatedPage = authenticatedPages.includes(pathname)

	const now = + new Date()
	let fbTokenExpiry = null
	if(Meteor.user()) {
		fbTokenExpiry = Meteor.user().profile.fbAuth.expires_at
		console.log('Pathname', pathname)
		console.log('Fb Token Expiry Found', fbTokenExpiry)
		console.log('IS UnauthenticatedPage', isUnauthenticatedPage)
		console.log('Is Authenticated', isAuthenticated)
		console.log('Fb token is in the future', fbTokenExpiry > now)
	}


	/////*******************
	/// NEEDS NEW FACEBOOK TOKEN
	// If already logged in
	// If on an Unauthenticated page
	// If Fb Token has expired
	if(isUnauthenticatedPage && isAuthenticated && fbTokenExpiry < now) {
		console.log('USER NEEDS NEW FB TOKEN' )
		browserHistory.replace('/facebook-login')
	}
	// If on an Authenticated page
	// If logged in
	// If FB token expired
	if(isAuthenticatedPage && isAuthenticated && fbTokenExpiry < now) {
		console.log('USER NEEDS NEW FB TOKEN' )
		browserHistory.replace('/facebook-login')
	}	
	
	/////*******************
	/// NEEDS TO LOGIN
	// If on an Authenticated page
	// If NOT logged in
	if(isAuthenticatedPage && !isAuthenticated) {
		console.log('USER NEEDS TO LOGIN' )
		browserHistory.replace('/')
	}

	/////*******************
	/// SHOULD BE IN APP
	// If already logged in
	// If on an Unauthenticated page
	// If Fb Token is valid
	if(isUnauthenticatedPage && isAuthenticated && fbTokenExpiry > now) {
		console.log('USER SHOULD BE IN APP' )
		browserHistory.replace('/lists')
	}


}

// Routes
export const routes = (
  <Router history={browserHistory}>
      <LastLocationProvider>
        <>
          	<ScrollToTop/>
	  		<Route component={Navbar}/>
		    <Switch>
				<Route exact path='/'>
					<Login/>
				</Route>
				<Route path='/facebook-login'>
					<FacebookLogin/>
				</Route>
				<Route path='/signup'>
					<Signup/>
				</Route>
				<Route path='/profile/:username'>
					<Profile/>
				</Route>
				<Route path='/test-fb-api'>
					<FacebookApiTest/>
				</Route>
				<Route exact path='/lists'>
					<Lists/>
				</Route>
				<Route path='/lists/:listId'>
					<List/>
				</Route>
				<Route exact path='/collabs'>
					<Collabs/>
				</Route>
				<Route path='/collabs/:collabId'>
					<Collab/>
				</Route>
				<Route path="/spider-dashboard">
					<SpiderDashboard/>
				</Route>
				<Route>
					<NotFound/>
				</Route>
		    </Switch>
		</>
    </LastLocationProvider>
  </Router>
)
