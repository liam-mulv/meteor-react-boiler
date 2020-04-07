import {Meteor} from 'meteor/meteor'
import {Mongo} from 'meteor/mongo'

// Import collection
import {Collabs} from '../collabs'

// Meteor Publisher
Meteor.publish('collabs', function () {
	return Collabs.find({userId:Meteor.userId(), setup_complete: true}, {sort: {timestamp: -1}})
})

Meteor.publish('collab', function (_id) {
	console.log('_ID: ', _id)
	return Collabs.find({userId:Meteor.userId(), _id})
})
