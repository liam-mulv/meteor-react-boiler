import { Meteor } from 'meteor/meteor'
import { WebApp } from 'meteor/webapp'
import '../imports/api/users/users'
import '../imports/startup/simple-schema-configuration.js'

// COLLECTIONS
// ig
require("../imports/api/ig_users/ig_users.js")
require("../imports/api/ig_media/ig_media.js")
// lists
require("../imports/api/lists/lists.js")
// collabs
require("../imports/api/collabs/collabs.js")
require("../imports/api/collab_creators/collab_creators.js")
require("../imports/api/collab_media/collab_media.js")
require("../imports/api/collab_timeseries/collab_timeseries.js")


///============
// METHODS
// ig
require("../imports/api/ig_media/methods.js")
require("../imports/api/ig_users/methods.js")
// lists
require("../imports/api/lists/methods.js")
// users
require("../imports/api/users/methods.js")
// collabs
require("../imports/api/collabs/methods.js")
require("../imports/api/collab_creators/methods.js")
require("../imports/api/collab_media/methods.js")
require("../imports/api/collab_timeseries/methods.js")


///============
// PUBLICATIONS
// ig
require("../imports/api/ig_users/server/publications.js")
require("../imports/api/ig_media/server/publications.js")
// lists
require("../imports/api/lists/server/publications.js")
// collabs
require("../imports/api/collabs/server/publications.js")
require("../imports/api/collab_creators/server/publications.js")
require("../imports/api/collab_media/server/publications.js")
require("../imports/api/collab_timeseries/server/publications.js")

///============
// REST API
require("../imports/api/fb_api/RestService.js")

///============
// WEBHOOKS
require('../imports/api/fb_api/WebhookService.js')

// code to run on server at startup
Meteor.startup(() => {
	console.log('Server started!')
})
