import { Meteor } from 'meteor/meteor'
import React from 'react'
import { Router, Route, Switch, withRouter } from 'react-router-dom'
import {createBrowserHistory} from 'history';
const browserHistory = createBrowserHistory();

// Manage Scroll
import ScrollToTop from './ScrollToTop'
// Auth components
import Signup from '../ui/authenticate/Signup'
import Login from '../ui/authenticate/Login'
// Components
import Navbar from '../ui/components/navbar/Navbar'
import Footer from '../ui/components/footer/Footer'

// Pages
import Home from '../ui/pages/home/Home'
import Discover from '../ui/pages/discover/Discover'
import Collab from '../ui/pages/collab/Collab'
import MyCollabs from '../ui/pages/my_collabs/MyCollabs'



// New Pages
import Profile from '../ui/pages/profile/Profile'
import FacebookLogin from '../ui/pages/facebook_login/FacebookLogin'
import SpiderDashboard from '../ui/pages/spider_dashboard/Spider'


// Common components
import NotFound from '../ui/common/NotFound'


// Page paths
const unauthenticatedPages = ['/', 'signup']
const authenticatedPages = ['/home']

export const onAuthChange = (isAuthenticated) => {
	const pathname = browserHistory.location.pathname
	const isUnauthenticatedPage = unauthenticatedPages.includes(pathname)
	const isAuthenticatedPage = authenticatedPages.includes(pathname)

	if(isUnauthenticatedPage && isAuthenticated) {
		browserHistory.replace('/home')
	}
	
	if(isAuthenticatedPage && !isAuthenticated) {
		browserHistory.replace('/')
	}
}

// Routes
export const routes = (
  <Router history={browserHistory}>
        <React.Fragment>
          		<ScrollToTop/>

	  		<Route component={Navbar}/>
		    <Switch>
				<Route exact path='/' component={Login}/>
				<Route path='/facebook-login' component={FacebookLogin}/>
				<Route path='/signup' component={Signup}/>
				<Route path='/home' component={Profile}/>
{/*				<Route path="/discover" component={Discover}/>*/}
				<Route path="/profile/:id" component={Profile}/>
{/*				<Route path="/collab/:id" component={Collab}/>
				<Route path="/my-collabs" component={MyCollabs}/>*/}
				<Route path="/spider-dashboard" component={SpiderDashboard}/>
				<Route component={NotFound}/>
		    </Switch>
		</React.Fragment>
  </Router>
)
