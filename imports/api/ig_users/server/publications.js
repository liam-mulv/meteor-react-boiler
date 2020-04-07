import {Meteor} from 'meteor/meteor'
import {Mongo} from 'meteor/mongo'

// Import collection
import {IG_Users} from '../ig_users'

// Meteor Publisher
Meteor.publish('ig_users', function (username) {
	return IG_Users.find({username})
})
