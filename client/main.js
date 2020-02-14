import { Meteor } from 'meteor/meteor'
import ReactDOM from 'react-dom'
import { Tracker } from 'meteor/tracker'
import { Session } from 'meteor/session'

import {routes, onAuthChange } from '../imports/routes/routes'
import '../imports/startup/simple-schema-configuration.js'

// force polyfill smooth sccrolll
// window.__forceSmoothScrollPolyfill__ = true
import smoothscroll from 'smoothscroll-polyfill'

Tracker.autorun(() => {
	const isAuthenticated = !!Meteor.userId()
	onAuthChange(isAuthenticated)
})

Meteor.startup(() => {
	console.log('Opened new session')
	smoothscroll.polyfill()
	ReactDOM.render(routes, document.getElementById('app'))
})

