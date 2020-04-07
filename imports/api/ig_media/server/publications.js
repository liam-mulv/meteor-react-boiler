import {Meteor} from 'meteor/meteor'
import {Mongo} from 'meteor/mongo'

// Import collection
import {IG_Media} from '../ig_media'

// Meteor Publisher

if(Meteor.isServer) {
	Meteor.publish('ig_media_pub', function (username) {
		return IG_Media.find({username:username}, {sort: {timestamp: -1}})
	})	
}




