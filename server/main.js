import { Meteor } from 'meteor/meteor'
import { WebApp } from 'meteor/webapp'

import '../imports/api/users'
import '../imports/startup/simple-schema-configuration.js'

// Model
require("../imports/api/models/IG.js");


// import {IG_Collection} from '../imports/api/models/IG'


// code to run on server at startup
Meteor.startup(() => {
	console.log('Server started!')
})
